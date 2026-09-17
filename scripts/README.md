# scripts/

给这个站点用的小工具。目前只有一个：`check-links.py`。

## check-links.py — 内部链接与锚点校验

### 它解决什么问题

这个站点是手写 markdown 的内容库，链接全靠人工维护。实测下来，两类错误几乎必然出现，而且**在源码里看不出来**：

1. **相对路径写错层级。** 比如 `timeline/2025/foo/_index.md` 里写 `../bar/`，但 `bar` 其实在 `timeline/bar`——少写一层，页面就是 404。子页（`explanation/`、`source/`）比条目页多一层，最容易写错。
2. **页内锚点失效。** 标题被改写后，`#某个小节` 指向的 id 就不存在了；如果有自定义锚点（标题后写 `{#自定义id}`），改写标题文案本身不会断链，但换掉 `{#...}` 会。

这两类都是「构建成功、页面正常、点进去 404」，所以只能靠工具查。

### 怎么跑

```bash
# 方式一：先构建再校验（最省事，用一个临时目录，不碰 public/）
python3 scripts/check-links.py --build

# 方式二：校验已有的构建产物（默认读 public/）
hugo && python3 scripts/check-links.py

# 方式三：走 npm（先 npm run build，再校验 public/）
npm run check:links
```

退出码 `0` = 全部通过，`1` = 有断链，`2` = 构建失败或找不到构建产物。可以直接用在 CI 或 pre-push 钩子里。

参数：`--build`（先构建）、`--build-dir`、`--content-dir`、`--repo-root`。内容目录默认从 `hugo.toml` 的 `contentDir` 读取，所以改语言目录不用改脚本。

> **npm 路径的坑：** `npm run` 会把 `node_modules/.bin` 放在 PATH 最前面，那里有一个 `hugo` 符号链接指向 `hugo-extended` 的**下载器**（不是 hugo 本身）。如果它下载不到二进制（离线或网络受限），`npm run build` / `npm run check:links` 都会失败，报 `Hugo installation failed` 或 `read ETIMEDOUT`。
> 本机装了系统 hugo 时，直接跑方式一或方式二即可；要让 npm 那条路也通，从 `devDependencies` 里去掉 `hugo-extended`。

### 它怎么判断

**对照构建产物，而不是对照源码。** 这一点是关键，因为：

- 相对链接是**浏览器按页面 URL** 解析的，不是按源文件路径解析的；
- Hugo 会把 URL 转小写，所以 `RAG/` 目录实际发布成 `/rag/`；
- 锚点 id 由 Hugo 生成，源码里看不出来（自定义锚点除外）。

所以脚本做的事和浏览器一样：算出每个页面的 URL，把链接解析成一个绝对路径，再去构建产物里找这个文件；带 `#片段` 的，再打开目标 HTML 检查有没有对应的 `id="..."`。

### 已知边界

- **不检查外部链接**（`http://`、`https://`、`mailto:`）。那需要联网、慢且不稳定，另外用工具做。
- **不检查 Hugo shortcode 生成的链接**（如 `{{< ref >}}`），只认 markdown 的 `[文本](目标)` 与 `![alt](目标)`。
- 图片链接会被检查（目标是文件时不看锚点）。
- 图片 alt 文本里恰好含 URL 时会解析出畸形目标，脚本按这个特征跳过。

### 抓出来过的真实问题（供参考）

- `scripts/` 加入仓库时就抓出 **13 处真 404**：`timeline/before2022/RAG/`、`webGPT/` 两个目录名含大写，Hugo 发布成 `rag/`、`webgpt/`，而内容里的链接写的是大写。修法是目录与链接一起改成小写——**站点对外 URL 本来就是小写，改这个不改变任何已发布地址**。
- 同一轮还抓出 10 处失效锚点：`#里程碑类型`、`#agent-边界清单` 指向的标题在改版中被重命名。修法不是改那 10 条链接，而是在目标标题上加显式 id（`### 标签 {#里程碑类型}`），这样以后再改标题文案也不会断。

### 给维护者与 AI 的提示

改完时间线内容后跑一次 `python3 scripts/check-links.py --build`。新增条目时，以下三种写法最容易出错：

1. 子页（`<条目>/explanation/index.md`）里引用同级条目：要用 `../../<条目>/`，不是 `../<条目>/`；
2. 跨年份引用：先想清楚当前文件在第几层，再数 `../` 的个数；
3. 目录名不要用大写——Hugo 的 URL 是小写的，两边不一致迟早断链。
