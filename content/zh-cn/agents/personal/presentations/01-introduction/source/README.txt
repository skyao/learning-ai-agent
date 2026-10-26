Personal Agent 总览篇生成说明

正文：../index.md
输出目录：../images/
数据与讲者备注：introduction-slides.json、introduction-manifest.json
PPT 原生文字与图形由 PptxGenJS 4.0.1 生成，字体 Microsoft YaHei，16:9。
Windows PowerPoint 未实机验证；使用 LibreOffice 导出与检查 PDF。

依赖可安装在仓库外的临时目录，不修改项目 package.json：
npm install --prefix /tmp/personal-agent-introduction-ppt --no-save --package-lock=false pptxgenjs@4.0.1

从本目录生成后五部分与完整稿：
NODE_PATH=/tmp/personal-agent-introduction-ppt/node_modules node generate-introduction.cjs

前两部分也可独立生成：
NODE_PATH=/tmp/personal-agent-introduction-ppt/node_modules node generate-part-01.cjs
NODE_PATH=/tmp/personal-agent-introduction-ppt/node_modules node generate-part-02.cjs

完整稿复用前两部分的构建函数。封面计入第一部分：封面 30 秒，原四页调整为 50、30、75、55 秒，第一部分仍为 4 分钟。
其余部分分别为 4、2、5、25、5、5 分钟；前四部分合计 15 分钟，只作引导。
第五部分 25 分钟为重点；最后一部分含总结 2 分钟、交流 3 分钟，全稿 50 分钟。
完整稿共 34 页；第四部分仍为第 13–18 页，现场按关键变化串讲。
第五部分为第 19–30 页，共 12 页；Muse、Dots、Claude Duet、WorkBuddy 各两页。
四款分别配产品页与完整场景页，场景图为原生可编辑图形，明确标为构造示例。
2026-10-25 修订发展脉络，补充 Manus、Harness、OpenClaw 的技术与产品联系。
本次补查的来源单独标注阅读日期，其他部分保留 2026-10-24 的资料日期。
研究过程与来源索引：evolution-research-2026-10-25.md。
生成时同步导出 images/04-evolution-research.txt，供正文下载；Markdown 原稿继续保存在 source/。
产品来源记录：product-scenarios-references-2026-10-25.md，同步导出 images/05-product-scenarios-references.txt。
第二部分独立文件同步调整为 4 分钟，生成命令与前两部分入口相同。
本目录的 manifest 保存完整逐页时间和备注，images/00-introduction-speaker-notes.txt 供阅读。

修改 PPT 后通过 PowerPoint 或 LibreOffice 导出同名 PDF，放回 images/，再执行：
python3 render-and-validate.py
需要 Python 的 PyMuPDF、Pillow、lxml；将检查包关系、页数与渲染文本，生成逐页图片、总览图和 validation 记录。

demo/ 保存模拟输入、委托、修订要求与人工验收样例。
打包到 images/06-muse-demo-materials.zip；仅将 materials/ 三份文件作为 Muse 输入。
演示脚本按 5 分钟安排：目标 1 分钟、执行 2 分钟、修订 1 分 15 秒、保存 45 秒。
人工验收样例不得作为实际输出，现场运行证据需另行记录。
