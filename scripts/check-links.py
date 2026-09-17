#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""校验站点的内部链接与页内锚点。

用法：
    python3 scripts/check-links.py            # 校验已有的构建产物（默认 public/）
    python3 scripts/check-links.py --build    # 先跑 hugo 构建到临时目录再校验
    python3 scripts/check-links.py --help

退出码：0 = 全部通过；1 = 发现问题。可直接用在 CI 或 pre-push 钩子里。

设计要点与已知限制见 scripts/README.md。
"""

from __future__ import annotations

import argparse
import os
import posixpath
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.parse

# 匹配 markdown 的链接与图片： [文本](目标) / ![alt](目标)
LINK_RE = re.compile(r"!?\[([^\]]*)\]\(([^)\s]+)\)")
EXTERNAL = ("http://", "https://", "mailto:", "tel:", "ftp://")
BUNDLE_NAMES = ("index.md", "_index.md")  # 叶子包 / 分支包


def detect_content_dir(repo_root: str, override: str | None) -> str:
    """内容目录：优先命令行参数，其次从 hugo.toml 的 contentDir 读，最后退回 content/。"""
    if override:
        return os.path.join(repo_root, override)
    cfg = os.path.join(repo_root, "hugo.toml")
    if os.path.exists(cfg):
        with open(cfg, encoding="utf-8") as fh:
            m = re.search(r'^\s*contentDir\s*=\s*"([^"]+)"', fh.read(), re.M)
        if m:
            return os.path.join(repo_root, m.group(1))
    return os.path.join(repo_root, "content")


def page_url(md_path: str, content_dir: str) -> str:
    """内容文件 → 站点上的 URL 目录。

    Hugo 默认把 URL 转小写，所以这里也转小写——这正是大小写写错的链接会在
    服务器上 404、却在本地产出里"看着没问题"的原因。
    """
    rel = os.path.relpath(md_path, content_dir)
    parent, base = os.path.split(rel)
    if base in BUNDLE_NAMES:
        url_dir = parent
    else:
        url_dir = os.path.join(parent, os.path.splitext(base)[0])
    url_dir = url_dir.replace(os.sep, "/").strip("/")
    return "/" + url_dir.lower() + "/"


def resolve_target(page: str, link_path: str) -> str:
    """按浏览器的方式解析链接：相对链接基于页面 URL，绝对链接基于站点根。"""
    if link_path.startswith("/"):
        return posixpath.normpath(link_path)
    return posixpath.normpath(posixpath.join(page, link_path))


def check(repo_root: str, content_dir: str, build_dir: str) -> int:
    problems: list[tuple[str, str, str]] = []
    total = 0

    for dirpath, _, files in os.walk(content_dir):
        for fn in files:
            if not fn.endswith(".md"):
                continue
            src = os.path.join(dirpath, fn)
            with open(src, encoding="utf-8") as fh:
                text = fh.read()

            page = page_url(src, content_dir)

            for m in LINK_RE.finditer(text):
                url = m.group(2)
                if url.startswith(EXTERNAL) or url.startswith("#"):
                    continue
                # 图片 alt 里带 URL 时会解析出畸形目标，跳过
                if "[" in url or "]" in url:
                    continue

                total += 1
                link_path, _, frag = url.partition("#")
                frag = urllib.parse.unquote(frag)

                if link_path == "":
                    target = posixpath.normpath(page)
                else:
                    target = resolve_target(page, link_path)

                # 目标可能是页面目录，也可能是静态文件
                cand = os.path.join(build_dir, target.lstrip("/"))
                if os.path.isdir(cand):
                    html = os.path.join(cand, "index.html")
                else:
                    html = cand

                if not os.path.exists(html):
                    problems.append((src, url, "目标在构建产物里不存在：" + target))
                    continue
                if frag and html.endswith(".html"):
                    with open(html, encoding="utf-8") as fh:
                        content = fh.read()
                    if f'id="{frag}"' not in content:
                        problems.append((src, url, "锚点不存在：" + frag))

    print(f"检查内部链接 {total} 条，问题 {len(problems)} 处")
    for src, url, why in sorted(set(problems)):
        print(f"  ✗ {os.path.relpath(src, repo_root)}  ->  {url}\n      {why}")
    return 1 if problems else 0


def build_site(repo_root: str, build_dir: str) -> None:
    print(f"构建中：hugo --destination {build_dir}", flush=True)
    proc = subprocess.run(
        ["hugo", "--destination", build_dir],
        cwd=repo_root,
        capture_output=True,
        text=True,
    )
    if proc.returncode != 0:
        sys.stderr.write(proc.stdout + proc.stderr)
        sys.stderr.write(
            "\n构建失败。若报错是找不到 npx / postcss，先在本仓库跑一次 npm install。\n"
        )
        raise SystemExit(2)


def main() -> int:
    ap = argparse.ArgumentParser(description="校验站点的内部链接与页内锚点")
    ap.add_argument("--repo-root", default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    help="仓库根目录（默认：脚本所在目录的上一级）")
    ap.add_argument("--content-dir", default=None, help="内容目录（默认从 hugo.toml 的 contentDir 读取）")
    ap.add_argument("--build-dir", default=None, help="构建产物目录（默认 public/）")
    ap.add_argument("--build", action="store_true", help="先跑 hugo 构建到临时目录再校验")
    args = ap.parse_args()

    repo_root = os.path.abspath(args.repo_root)
    content_dir = detect_content_dir(repo_root, args.content_dir)

    tmp = None
    if args.build:
        tmp = tempfile.mkdtemp(prefix="check-links-")
        build_dir = tmp
        build_site(repo_root, build_dir)
    else:
        build_dir = os.path.abspath(args.build_dir or os.path.join(repo_root, "public"))

    if not os.path.isdir(build_dir):
        print(f"构建产物目录不存在：{build_dir}\n先跑 hugo，或加 --build 让脚本自己构建。", file=sys.stderr)
        return 2

    try:
        return check(repo_root, content_dir, build_dir)
    finally:
        if tmp:
            shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    sys.exit(main())
