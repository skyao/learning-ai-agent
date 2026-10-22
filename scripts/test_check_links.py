#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""check-links.py 的回归用例。跑法：python3 scripts/test_check_links.py

覆盖锚点匹配与页面资源识别：既要抓出真实断链，也不能把叶子包的原始素材
当成独立页面，误报其中的链接样例。
"""

import contextlib
import importlib.util
import io
import os
from pathlib import Path
import tempfile
import unittest

_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "check-links.py")
_spec = importlib.util.spec_from_file_location("check_links", _PATH)
check_links = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(check_links)


class TestContentPages(unittest.TestCase):
    def test_bundle_resources_do_not_hide_real_broken_links(self):
        with tempfile.TemporaryDirectory() as root:
            content = Path(root, "content")
            build = Path(root, "public")
            build.mkdir()
            pages = {
                "_index.md": "",
                "article/index.md": "[附件](files/tree.txt)",
                "article/files/prompt.md": "[样例](url)",
                "article/files/nested/index.md": "[嵌套素材](missing)",
                "section/_index.md": "",
                "section/page.md": "[真实断链](missing)",
            }
            for rel, text in pages.items():
                path = content / rel
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(text, encoding="utf-8")
            attachment = build / "article/files/tree.txt"
            attachment.parent.mkdir(parents=True)
            attachment.write_text("tree", encoding="utf-8")

            for rel in ("_index.md", "article/index.md", "section/_index.md", "section/page.md"):
                with self.subTest(page=rel):
                    self.assertTrue(check_links.is_content_page(str(content / rel), str(content)))
            for rel in ("article/files/prompt.md", "article/files/nested/index.md"):
                with self.subTest(resource=rel):
                    self.assertFalse(check_links.is_content_page(str(content / rel), str(content)))

            output = io.StringIO()
            with contextlib.redirect_stdout(output):
                result = check_links.check(root, str(content), str(build))
            self.assertEqual(result, 1)
            self.assertIn("检查内部链接 2 条，问题 1 处", output.getvalue())
            self.assertIn("section/page.md", output.getvalue())
            self.assertNotIn("prompt.md", output.getvalue())


class TestHasAnchor(unittest.TestCase):
    def test_double_quoted(self):
        self.assertTrue(check_links.has_anchor('<h2 id="里程碑类型">', "里程碑类型"))

    def test_single_quoted(self):
        self.assertTrue(check_links.has_anchor("<h2 id='里程碑类型'>", "里程碑类型"))

    def test_unquoted(self):
        # Hugo 压缩输出省略不必要引号，这是实际发布出来的形式
        self.assertTrue(check_links.has_anchor("<h2 id=里程碑类型>", "里程碑类型"))

    def test_unquoted_before_self_closing(self):
        self.assertTrue(check_links.has_anchor("<hr id=里程碑类型/>", "里程碑类型"))

    def test_other_attribute_name(self):
        self.assertFalse(check_links.has_anchor("<div data-id=里程碑类型>", "里程碑类型"))

    def test_unquoted_prefix_is_not_a_match(self):
        self.assertFalse(check_links.has_anchor("<h2 id=能力分层>", "能力"))

    def test_quoted_prefix_is_not_a_match(self):
        self.assertFalse(check_links.has_anchor('<h2 id="能力分层">', "能力"))

    def test_regex_metacharacters_are_literal(self):
        self.assertFalse(check_links.has_anchor("<h2 id=axb>", "a.b"))

    def test_missing(self):
        self.assertFalse(check_links.has_anchor("<p>无关内容</p>", "里程碑类型"))


if __name__ == "__main__":
    unittest.main(verbosity=2)
