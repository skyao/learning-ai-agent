深入 Personal Agent 系列之总览篇：从对话问答到持续委托
生成与校验说明（2026-11-02）

正文：../index.md；作者修订稿：../../01-introduction-final/index.md
输出目录：../images/
数据与讲者备注：introduction-slides.json、introduction-manifest.json
PPT 原生文字与图形由 PptxGenJS 4.0.1 生成，字体 Microsoft YaHei，16:9。
产品图取自官方页面，按比例嵌入，来源见 product-overview-assets.json。
Windows PowerPoint 未实机验证；使用 LibreOffice 导出与检查 PDF。

依赖可安装在仓库外的临时目录，不修改项目 package.json：
npm install --prefix /tmp/personal-agent-introduction-ppt-public --no-save --package-lock=false pptxgenjs@4.0.1

从本目录统一生成七个分节文件与完整稿：
NODE_PATH=/tmp/personal-agent-introduction-ppt-public/node_modules node generate-introduction.cjs

前两部分的 generate-part-01.cjs / generate-part-02.cjs 提供正文渲染函数。
直接运行这两个旧入口时转交统一生成脚本，避免覆盖含导航的当前导出。

正文共 68 页，完整内容约 63 分钟。七部分用时为 4、14、2、5、28、5、5 分钟。
本轮只扩展内容，不按现场时间删页；63 分钟是逐页讲者提示的估算。
前四部分合计 25 分钟；第五部分产品概览与重点产品 28 分钟；演示 5 分钟；总结与交流 5 分钟（含交流 3 分钟）。
导航在第 2、9、24、28、35、63、66 页，各列出全部七部分并高亮当前部分。
七个分节文件页数为 8、15、4、7、28、3、3 页，第一部分含封面。

第五部分改为“主流 Personal Agent 产品概览”。
完整稿第 35–62 页：导航 + 原有八款概览 + 四款各四页扩展 + 一页比较 + 第二批每四款一页。
原有八款概览依次位于第 36、41、46、47、48、53、54、55 页：Muse、Dots、Cue、Gemini Spark / Task、Grok Bot、OpenClaw、WorkBuddy、Claude Duet。
新增产品页：Muse 37–40，Dots 42–45，Grok Bot 49–52，Claude Duet 56–59；四款比较位于第 60 页。
第二批参考位于第 61–62 页，原有八个图标和卡片保留。
每款保留厂商、推出口径、产品定位、使用入口、生态连接和业务侧重；不以通用场景制造排他性能力结论。
05-products-and-scenarios.pptx/.pdf 保留旧文件名，内容已更新为产品概览，既有下载 URL 不变。
产品概览内容：product-overview-2026-10-27.json。
新来源：product-overview-references-2026-10-27.md，同步导出 images/05-product-overview-references.txt。
图片：images/product-overview/，获取记录：product-overview-assets.json。

原有产品介绍与场景完整归档，独立于当前正文及时间：
Hugo 页面：/agents/personal/presentations/01-introduction-scenario-appendix/
原稿 PPT/PDF：images/05-product-scenarios-appendix.pptx/.pdf，原有 13 页与备注完整保留。
原稿预览：images/05-product-scenarios-appendix-preview.png。
原稿讲者提示：images/05-product-scenarios-appendix-notes.txt。
归档源数据：05-product-scenarios-appendix-slides.json、05-product-scenarios-appendix-manifest.json。
原有产品来源 product-scenarios-references-2026-10-25.md 和对应 TXT 继续保留。
归档 deck 为历史快照，不随当前七节导航标题重新生成。

第一部分：封面 30 秒、导航 10 秒、四页概念 30/20/50/40 秒，两页名单各 30 秒，共 4 分钟。
第二部分：原有四页完整保留；part02Extra 追加十页用途与功能对照，共 14 分钟。
第二部分新增内容在完整稿第 14–23 页，分节稿第 6–15 页。
2026-10-26 的用途回查数据：capability-review-2026-10-26.json。
对应来源：capabilities-research-2026-10-26.md，同步导出 images/02-capabilities-research.txt。
功能笔记沉淀在各产品 product/capabilities-and-availability-20261026/，横向比较见 /agents/personal/capability-review/。

2026-10-25 的演进来源：evolution-research-2026-10-25.md，导出 images/04-evolution-research.txt。
2026-10-26 的名单来源：agent-roster-2026-10-26.md，导出 images/01-agent-roster-references.txt。
历史阅读日期不随排版更新改写；本轮主产品页面与图片获取另标 2026-10-27。
images/00-introduction-speaker-notes.txt 为完整稿逐页讲者提示。
images/00-navigation-preview.png 与 00-navigation-01.png 至 07.png 为导航预览。

修改 PPT 后使用 LibreOffice 导出同名 PDF，放回 images/，再执行：
python3 render-and-validate.py
需要 PyMuPDF、Pillow、lxml。检查包关系、页数、备注、渲染文本、八款产品的独立页面与图片、两页参考对象，生成预览及 validation 记录；也检查附录原稿。
内容与链接调整后，从仓库根运行：
python3 scripts/check-links.py --build

demo/ 保存模拟输入、委托、修订要求与人工验收样例，打包到 images/06-muse-demo-materials.zip。
仅将 materials/ 三份文件作为 Muse 输入，人工验收样例不得作为实际输出。
演示脚本按 5 分钟安排：目标 1 分钟、执行 2 分钟、修订 1 分 15 秒、保存 45 秒。
现场运行证据需另行记录。

原第 44、45 页（现第 61、62 页）的第二批八款产品卡片各加官方产品或品牌图标，名称左侧统一对齐。
图标文件：images/product-icons/；来源记录：reference-product-icon-assets.json。
Poke 使用官方所属公司公告中的标识，保留原图，通过 PPT 原生裁剪显示标识区域。

2026-11-02 的功能扩展：
产品数据 product-details-2026-11-02.json；原生图形 render-product-details.cjs。
新增 16 页产品功能 + 1 页比较；原有 51 页相对顺序与内容保留。
product-detail-preservation-baseline.json 保存原 51 页的可见文字，用于回归校验。
新增来源 product-features-references-2026-11-02.md，导出 images/05-product-feature-references.txt。
官方图片 images/product-details/，记录 product-detail-assets-2026-11-02.json。
Muse 使用官方界面；其余产品使用可编辑功能关系图，明确标为示意，不是真实界面或内部架构。
images/05-product-details-preview.png 单独预览 17 张新增页面。
旧概览保留 10-26 / 10-27 口径；新增页补记 Muse 新加坡开放和 Duet 美国 Pro / Max / Ultra 条件。
校验会检查 4 × 4 页扩展、比较页、原有页面文字保留、图片、备注与 PDF 渲染文字。
