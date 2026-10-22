---
title: "Gemini Spark 资料索引与学习路线"
linkTitle: "资料索引"
weight: 70
date: 2026-10-21
description: >
  汇集中英文原始资料、产品演进、技术背景和本轮尚未解决的问题
materialType: "资料索引"
---

这是我这轮 Gemini Spark 调研的来源入口，**检索与阅读截至 2026-10-21**。先看英文官方发布与帮助，再用中文官方页面对照术语，并补充中英文媒体及用户观察。本轮没有账号实测，帮助页的功能声明也不等同于我的账号已经可用。

## 1. 我的阅读路线

我从 [发布定位](../product/introducing-spark/)和 [开放演进](../product/access-and-task-mode/)入手，再读 [任务与计划](../architecture/tasks-and-schedules/)、[个人上下文](../architecture/personal-context/)和 [运行边界](../architecture/runtime-boundaries/)。

工具部分分别整理 [Google 应用动作](../integrations/workspace-actions/)、[Skills](../integrations/skills/)、[自定义 MCP](../integrations/custom-apps/)与 [Chrome / Mac](../integrations/browsers-and-mac/)。[模型配置](../models/models-and-compute/)、[浏览器安全](../security/browser-security/)和 [控制与数据](../security/controls-and-data-lifecycle/)补充各自的条件。

最后用 [外部观察](../practice/external-observations/)提出实际问题，形成 [实验方案](../practice/validation-plan/)，阶段性认识放在 [调研总结](../summary/)。

## 2. 发布与演进资料

| 原始日期 / 状态 | 原始资料 | 作者与性质 | 本地笔记 |
| --- | --- | --- | --- |
| 2026-05-19 | [The Gemini app becomes more agentic, delivering proactive, 24/7 help](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/) | Josh Woodward，英文官方发布 | [发布定位](../product/introducing-spark/)、[模型背景](../models/models-and-compute/) |
| 2026-06-30 | [Gemini Spark updates: macOS launch, connected apps and more](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/) | Adam Coimbra、Srinivasan (Cheenu) Venkatachary，英文官方更新 | [演进时间线](../product/access-and-task-mode/) |
| 2026-07-30 | [Gemini Spark now integrates with Chrome](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/) | Adam Coimbra、Charmaine Dsilva，英文官方更新 | [开放演进](../product/access-and-task-mode/)、[浏览器安全背景](../security/browser-security/) |
| 动态日志；本轮可见条目截至 2026-07-17 | [What's new for Gemini Spark](https://support.google.com/gemini/answer/17171264?hl=en) | 英文官方更新日志 | [演进时间线](../product/access-and-task-mode/) |

公告中的计划、分批开放与已经上线分别保留。日志最后一条日期不代表当前产品最后变化时间，也不直接决定模型配置和客户端入口。

## 3. 当前官方帮助与技术背景

以下帮助页本轮未取得可靠的绝对更新日期，统一以 **2026-10-21 读取快照**理解；不能把阅读日期写成发布日。

| 原始资料 | 语言与适用范围 | 本地笔记 |
| --- | --- | --- |
| [Manage your tasks & workflows in Gemini Apps](https://support.google.com/gemini/answer/17094507?hl=en) / [中文对照](https://support.google.com/gemini/answer/17094507?hl=zh-Hans) | 英文 / 中文官方帮助；个人 Task 产品的主要入口与 FAQ | [Task 更名与准入](../product/access-and-task-mode/)、[应用动作](../integrations/workspace-actions/)、[数据控制](../security/controls-and-data-lifecycle/) |
| [Create & manage schedules for tasks in Gemini](https://support.google.com/gemini/answer/17094710?hl=en) | 英文官方帮助；Task 的计划，区分普通聊天的 Scheduled actions | [任务与计划](../architecture/tasks-and-schedules/) |
| [Connect your Google apps to personalize your Gemini experience](https://support.google.com/gemini/answer/16598406?hl=en) | 英文官方帮助；个人信息来源、断开和更新 | [个人上下文](../architecture/personal-context/) |
| [Get personalization with memory of your past Gemini chats](https://support.google.com/gemini/answer/16598469?hl=en) | 英文官方帮助；过去聊天的 Memory 与适用范围 | [个人上下文](../architecture/personal-context/) |
| [About Gemini models](https://support.google.com/gemini/answer/18648722?hl=en) | 英文官方帮助；个人账号模型、Chat / Task 与思考级别 | [模型与计算用量](../models/models-and-compute/) |
| [Create & manage skills for Gemini Apps](https://support.google.com/gemini/answer/17094296?hl=en) | 英文官方帮助；技能导入、使用与脚本限制 | [Skills](../integrations/skills/) |
| [Connect & manage custom apps for Gemini Apps](https://support.google.com/gemini/answer/17209137) | 英文官方帮助；自定义 MCP，另有美国与英语条件 | [自定义 MCP](../integrations/custom-apps/) |
| [Ask Gemini in Chrome to complete tasks for you with auto browse](https://support.google.com/chrome/answer/16821166?hl=en) | 英文 Chrome 帮助；有独立地区、设备和语言条件 | [Chrome 与 Mac](../integrations/browsers-and-mac/)、[运行边界](../architecture/runtime-boundaries/)、[取消语义](../security/controls-and-data-lifecycle/) |
| [Assign tasks in the Gemini app on Mac](https://support.google.com/gemini/answer/17208717?hl=en) | 英文官方帮助；本地文件、临时备份与远程控制条件 | [Chrome 与 Mac](../integrations/browsers-and-mac/) |
| [Find & manage your tasks in Gemini Apps](https://support.google.com/gemini/answer/17094196?hl=en) | 英文官方帮助；线程与删除的具体范围 | [控制与数据生命周期](../security/controls-and-data-lifecycle/) |
| [Architecting Security for Agentic Capabilities in Chrome](https://blog.google/security/architecting-security-for-agentic/) | 2025-12-08，Nathan Parker，英文官方历史技术文章 | [浏览器安全设计](../security/browser-security/) |

中文帮助用于对照产品术语，不作为一项独立的效果验证。安全旧文保留其历史时点与 Chrome 范围；资料中的分阶段实现也不合并为已经全部上线。

## 4. 中英文外部阅读

| 原始日期 | 原始资料 | 性质与限制 |
| --- | --- | --- |
| 2026-05-20 | [谷歌 Gemini Spark 个人智能体发布](https://www.ithome.com/0/952/525.htm)，IT之家，汪淼 | 中文大会报道，帮助回看发布语境，非独立安全实验 |
| 2026-10-02；表格时点 10-01 | [五大科技巨頭主動型 Agent 大比較](https://www.ithome.com.tw/news/179380)，iThome，王宏仁 | 中文媒体比较，适合寻找维度，技术细节仍回查官方 |
| 2026-10-12，太平洋时间 | [Gemini ‘Task’ redesign integrates Spark into the main chat app](https://9to5google.com/2026/10/12/gemini-spark-task-redesign/)，9to5Google，Abner Li | 英文 Android 界面观察，不代表所有端同步开放 |
| 发帖 2026-10-13；恢复回报 10-16 | [Sheets 写入被策略检查拦截的讨论](https://discuss.google.dev/t/gemini-spark-cannot-write-to-any-google-sheets-sheets-agent-call-blocked-by-policy-check/404155)，vailon 等 | 英文用户报告；论坛由 Google 托管不等于官方技术结论，恢复亦为用户回报 |

上述资料的学习记录集中在 [外部观察](../practice/external-observations/)。我保留故障和恢复两端，不用单个样本给产品可靠性排名。

## 5. 本轮明确保留的问题

| 问题 | 当前证据与后续处理 |
| --- | --- |
| 设备关闭后计划是否运行 | 计划专门文档与 Task 总览关闭小节有表述差异，见 [运行边界](../architecture/runtime-boundaries/)；分别验证云端与本地路径 |
| 本地转远程能保留什么状态 | 文档提到可能回退，尚未证明会迁移本地会话与未完成动作 |
| 错过触发后如何恢复 | 并发、用量和延迟有明确限制，补跑、合并与重试规则尚待观察 |
| 来源更正怎样影响执行中任务 | 官方提示更新可能延迟，具体任务的数据快照与执行前核验仍需实测 |
| 当前模型与运行结构 | 帮助菜单可变；内部路由、VM 生命周期、存储布局尚无充分公开证据 |
| 审批与撤销怎样传播 | 需要结合实际工具请求与业务回执，而不只观察开关状态 |

产品更名、地区开放和工具接入都在持续变化。后续我会把新资料追加到相应主题，并根据 [实践方案](../practice/validation-plan/)补充真实观察，再更新最后的总结。
