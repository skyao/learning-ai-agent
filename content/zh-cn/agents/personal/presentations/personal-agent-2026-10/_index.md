---
title: "分享ppt内容"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "Personal Agent 演示文稿、逐页讲述提示、资料来源与生成文件"
---

# Personal Agent：从个人上下文到长期委托

约 40 分钟的中文技术分享，基于项目中 16 个产品的学习笔记，面向 Agent 开发与运行平台相关同事。以作者的架构师视角，先建立产品路线，再讨论状态、记忆、调度、执行与权限，最后给出待验证场景和平台建设判断。

## 使用文件

| 文件 | 用途 |
| --- | --- |
| [PowerPoint 演示文稿](personal-agent-40min.pptx) | 正式演示与编辑，包含逐页讲者备注 |
| [PDF 预览](personal-agent-40min.pdf) | 快速阅读或转发；不包含 PowerPoint 讲者备注 |
| [逐页讲述提示](speaker-notes/) | 时间区间、展开要点、转场与相关来源 |
| [完整资料来源](sources/) | 本地调研索引与原始来源入口 |

共 **36 页**：**30 页主流程（含讨论）+ 6 页备查附录**。逐页建议时间合计 **40 分钟**，其中讲解 **36 分钟**，讨论 **4 分钟**；附录不计时。讲者备注是可按个人习惯展开的讲述提示。

## 内容安排

1. 研究范围、持续委托场景与证据标准。
2. 16 个产品的代表路线与值得学习的问题。
3. 目标、计划、运行、上下文、产物及控制的参考模型。
4. 记忆更新、执行位置、多代理交接、方法与工具接入。
5. 身份、审批、撤权、可观测性、成本与共同验证场景。
6. 平台建设顺序、阶段性认识与讨论。

## 格式与兼容性

- 使用标准 `.pptx`（Office Open XML）和 16:9 宽屏尺寸。
- 正文、卡片、架构图、时间线与表格均为原生文本与形状，可在 Microsoft PowerPoint 中继续编辑，无宏、无外部媒体依赖。
- 中文字体使用 **Microsoft YaHei（微软雅黑）**；没有该字体的系统可能发生字体替换。PDF 已保留渲染字形，便于跨设备阅读。
- 已检查 PPTX 包内 XML、36 个页面与 36 份备注，并使用 LibreOffice Impress 打开导出 36 页 PDF；逐页检查了渲染和文本完整性。本环境未进行 Windows 版 PowerPoint 实机验证。
- 放映时可在 PowerPoint 开启“演讲者视图”阅读备注。右键页面或使用“视图 → 备注页”可查看完整备注。

## 资料与结论的范围

依据 [第一批比较](../../first-batch-summary/)、[第二批比较](../../second-batch-summary/)及各产品的分类笔记。当前第一批与第二批各 **8 个**；WorkBuddy 调入第一批，Personal Computer 调入第二批作为参考，Cowork 也保留在第二批。第一批前六个对象资料为 **2026-10-21**，WorkBuddy 为 **2026-10-22**，Duet 为 **2026-10-23**；第二批除 Personal Computer、Cowork 外的六个对象为 **2026-10-22**，Personal Computer 为 **2026-10-21**，Cowork 保留 **2026-10-21** 资料及 **10-23** 关系补记。批次调整保留原有资料日期、专题内容和 40 分钟讲述安排。

保留官方说明、外部观察、Muse 既有个人探索和作者分析的区别，没有新增产品账号、设备或部署实测。参考架构、对象模型和建设顺序属于学习比较后的个人判断，不是厂商内部架构，也不构成产品能力或可靠性排名。

## 修改与重新生成

直接编辑 PPTX 即可用于下一次演示。若需要按源数据重新生成：

- [source/slides.json](source/slides.json) 保存逐页内容、时间、备注和来源。
- [source/generate.cjs](source/generate.cjs) 保存布局与原生 PowerPoint 图形生成逻辑。
- [source/validation.json](source/validation.json) 保存本轮检查结果。

在 `source` 目录安装 **PptxGenJS 4.0.1**，再运行生成脚本：

```sh
npm install --no-save pptxgenjs@4.0.1
node generate.cjs
```

脚本在上一级目录更新 PPTX，并同步重建讲述提示和资料来源页面，保留页面的 Hugo 元数据。PDF 是独立导出的快照，修改 PPTX 后需重新通过 PowerPoint 或 LibreOffice 导出。

若只需更新讲稿与资料链接，可运行 `node generate.cjs --companions-only`。脚本会从自身位置定位仓库，按 Hugo 页面地址生成链接，不依赖命令运行时的目录。
