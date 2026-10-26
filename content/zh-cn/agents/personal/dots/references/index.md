---
title: "Dots 资料索引与学习路线"
linkTitle: "资料索引"
weight: 70
date: 2026-10-21
description: >
  汇集中英文来源、动态资料差异、证据边界与后续问题，支持长期学习与回查
materialType: "资料索引"
---

这是我这轮 Dots 学习的来源入口，**检索与阅读截至 2026-10-21**。我优先核对官方英文文档，再结合中文官方页面、媒体观察与用户记录。译文与原文来自同一来源，不算独立验证。

本轮新增的是资料阅读、个人分析和实践方案，没有账号实测。文章中的“我”指我的理解与研究过程；外部使用体验仍归原作者。

## 1. 我的学习脉络

我从 [产品发布](../product/introducing-dots/)与 [开放状态](../product/access-and-updates/)建立产品认识，接着梳理 [任务委派](../architecture/tasks-and-delegation/)、[记忆](../architecture/context-and-memory/)和 [执行环境](../integrations/computers-and-sessions/)。

之后用 [安全设计](../security/safety-design/)、[控制语义](../security/controls-and-cancellation/)、[数据生命周期](../security/data-lifecycle/)与 [企业治理](../security/enterprise-governance/)检查行动边界，再读 [系统卡](../models/astra-system-card/)理解评估条件。最后在 [总结](../summary/)中联系自己的平台与开发工作。

## 2. 原始来源索引

动态文档未提供明确发布日期时，我保留为动态资料，不用抓取日补成发布日。帮助中心的相对更新时间，也不足以重建完整的修订历史。

| 原始日期 / 状态 | 原始资料 | 语言与类型 | 本地笔记 |
| --- | --- | --- | --- |
| 2026-09-29 | [Introducing dots](https://openai.com/index/introducing-dots/) / [dot 正式登场](https://openai.com/zh-Hans-CN/index/introducing-dots/) | 英文 / 中文，官方发布 | [发布与定位](../product/introducing-dots/) |
| 动态文档 | [Meet dots](https://learn.chatgpt.com/docs/dots) | 英文，官方产品文档 | [开放与更新](../product/access-and-updates/) |
| 动态文档 | [Get started with your dot](https://learn.chatgpt.com/docs/dots/getting-started) | 英文，官方设置与职责说明 | [开放与更新](../product/access-and-updates/) |
| 动态帮助页 | [Getting started](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot) / [中文入门指南](https://help.openai.com/zh-hans-cn/articles/20001530-getting-started-with-your-dot) | 英文 / 中文机器翻译，官方帮助 | [开放与更新](../product/access-and-updates/) |
| 2026-10-13 | [Dots received another round of updates](https://community.openai.com/t/dots-received-another-round-of-updates/1405896) | 英文，VeitB 社区更新帖 | [更新线索](../product/access-and-updates/) |
| 动态文档 | [Tasks and memory](https://learn.chatgpt.com/docs/dots/tasks-and-memory) | 英文，官方任务与上下文文档 | [任务委派](../architecture/tasks-and-delegation/) / [记忆](../architecture/context-and-memory/) |
| 动态文档 | [Computers and apps](https://learn.chatgpt.com/docs/dots/computers-and-apps) | 英文，官方接入文档 | [电脑与会话](../integrations/computers-and-sessions/) |
| 动态文档 | [Message your dot](https://learn.chatgpt.com/docs/dots/channels) | 英文，官方渠道文档 | [渠道与插件](../integrations/channels-and-plugins/) |
| 2026-09-29 | [Safety, security, and privacy into dots](https://openai.com/index/how-we-build-safety-security-and-privacy-into-dots/) | 英文，官方安全说明 | [安全设计](../security/safety-design/) |
| 动态文档 | [Control your dot](https://learn.chatgpt.com/docs/dots/controls) | 英文，官方规则与停止语义 | [控制与取消](../security/controls-and-cancellation/) |
| 动态帮助页 | [Privacy FAQ](https://help.openai.com/en/articles/20001529-dots-privacy-security-and-safety-faqs) / [中文隐私与安全 FAQ](https://help.openai.com/zh-hans-cn/articles/20001529-dots-privacy-security-and-safety-faqs) | 英文 / 中文机器翻译，官方帮助 | [数据生命周期](../security/data-lifecycle/) |
| 持续修订；本轮读第 12 章 | [GPT-6 Astra System Card](https://deploymentsafety.openai.com/gpt-6-astra/change-log) | 英文，官方系统卡 | [长期任务评估](../models/astra-system-card/) |
| 动态文档 | [Manage dots permissions and capabilities](https://learn.chatgpt.com/docs/enterprise/dots-admin-guide) | 英文，官方企业管理 | [企业治理](../security/enterprise-governance/) |
| 动态文档 | [Local computer access for Work Cloud and dots](https://learn.chatgpt.com/docs/enterprise/cloud-local-access) | 英文，官方本地访问与策略 | [运行边界](../architecture/runtime-boundaries/) / [企业治理](../security/enterprise-governance/) |
| 2026-09-30 | [发布演示报道](https://www.thepaper.cn/newsDetail_forward_34177258) | 中文，澎湃新闻，胡逸璠 | [外部观察](../practice/external-observations/) |
| 2026-10-21；涉及 10-20 更新 | [Windows 入口缺失 Issue #55795](https://github.com/openai/codex/issues/55795) | 英文，用户 wanbo-ai 的报告及评论 | [外部观察](../practice/external-observations/) |
| 2026-10-20 | [I tested Dots and Muse](https://www.axios.com/2026/10/20/battle-of-bots-openai-meta-ai-agents-test) | 英文，Axios，Ina Fried；保留阅读入口 | [已有验收笔记](../../muse/practice/muse-dots-review/) |

## 3. 当前保留的资料差异

| 问题 | 本轮处理方式 |
| --- | --- |
| 发布时的设置路径与当前文档不同 | 分别保留发布时点和当前移动端文档 |
| 短信“即将推出”与“有限测试”并存 | 保留来源差异，账号可用性待核验 |
| 企业预览与个人功能容易混淆 | 专家型 dot、个人 dot 和委派任务分别记录 |
| Delete 与 Reset 用词不同 | 结合对象范围阅读，不统一成所有客户端的按钮名 |
| 客户端入口缺失 | 作为个别观察，不推定代理被删除或能力被回收 |

## 4. 尚未解决的问题 {#待实测问题}

- 我的账号、地区与工作空间具体可用哪些能力，额度怎样跨任务计量？
- 主对话中的新约束何时进入已经运行的委派任务？
- 云端环境回收、设备离线和工具超时之后，状态如何恢复？
- 批准内容改变后怎样重新校验，取消如何传播到派生任务？
- 来源撤销后，笔记、任务副本与外部产物的清理如何验证？
- 跨数日职责实际需要多少人工介入，恢复和重复工作有多少成本？

实验输入与记录口径集中在 [待实测方案](../practice/validation-plan/)。实现细节不足的部分继续保留为问题，不根据通用 API 或开源 Codex 的结构反推 Dots 服务内部设计。

## 5. 继续跟踪

我会继续查看官方 Dots 文档、帮助中心和 [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)，社区报告用于发现具体问题，再回到相应版本核查。检索没有发现某项公告，不代表该功能没有变化。

后续学习继续沿两条线索展开：持续职责如何拆成可执行的任务，以及权限和状态如何跨这些任务保持一致。更完整的跨产品结论留待后续资料与实践补充。

## 6. 2026-10-26 跟踪基线补充

建跟踪资料库（`~/work/data/agents/openai-dots/`）时补充的来源，整理见 [外部观察补充小节](../practice/external-observations/)。Axios 全文（注册墙后）与 WIRED 成人对话测试原文仍待核实，不列为已确认事实。

| 原始日期 | 原始资料 | 语言与类型 | 本地笔记 |
| --- | --- | --- | --- |
| 2026-10-02 | [OpenAI Dots Review: How It Works and Our First Day](https://www.theslidefactory.com/post/openai-dots-review)，The Slide Factory | 英文，独立实测 | [外部观察补充](../practice/external-observations/) |
| 2026-10-09 | Dots 更新：移动端创建、Codex 跟进、Work 自动化（@ChatGPT X 与 Learn 更新说明；社区 10-13 转贴） | 英文，官方更新经二手转述 | [开放状态与近期更新](../product/access-and-updates/)（已有 10-13 线索，本轮补官方更新口径） |
| 2026-10-19 | [Dots: A Double-Edged Sword in the Workplace](https://www.cyera.com/research/dots-a-double-edged-sword-in-the-workplace)，Cyera | 英文，安全实测 | [外部观察补充](../practice/external-observations/) |
| 2026-10-20 | [I tested Dots and Muse](https://www.axios.com/2026/10/20/battle-of-bots-openai-meta-ai-agents-test)，Axios，Ina Fried（部分读取） | 英文，主流媒体评测 | [外部观察补充](../practice/external-observations/) |
| 2026-10-22 | Business Insider 三方实测（Muse / Dots / Instinct），Katie Notopoulos（经 DNYUZ 转载页） | 英文，主流媒体实测 | [外部观察补充](../practice/external-observations/) |
| 2026-10-22 | 1Password for Agents 发布（Dots 列为 coming soon） | 英文，生态发布经多家交叉 | [外部观察补充](../practice/external-observations/) |
| 2026-09-28 | GPT-6.1 Astra 暂缓报道（多家；与 Dots 所用 GPT-6 Astra 区分） | 英文，媒体口径 | [外部观察补充](../practice/external-observations/) |
