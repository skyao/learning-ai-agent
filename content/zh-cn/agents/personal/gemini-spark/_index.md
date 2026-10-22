---
title: "Google Gemini Spark"
linkTitle: "Gemini Spark"
weight: 130
date: 2026-10-21
description: >
  我对 Gemini Spark（现 Task 模式）、个人上下文、持续任务和 Google 应用生态的学习笔记
---

继 Muse、Dots 和 Cue 之后，我继续研究 Gemini Spark。我想理解 Google 怎样把已有的个人数据、应用和浏览器连接成能够持续执行工作的个人代理，以及这些能力给 Agent 运行平台带来了哪些状态与权限问题。

本轮检索与阅读截至 **2026-10-21**，覆盖英文官方资料、中文官方帮助及中英文外部观察，尚未进行账号实测。官方帮助已说明 Spark 更名为输入框旁的 **Task** 模式，原有任务和计划保留；具体来源与时间关系见 [产品演进笔记](product/access-and-task-mode/)。这里继续使用 Gemini Spark 归档，便于连接发布时的资料。

## 学习主题

| 栏目 | 内容 |
| --- | --- |
| [产品与设计](product/) | 发布定位、开放条件，以及从 Spark 到 Task 的入口变化 |
| [架构与运行机制](architecture/) | 任务、计划、个人上下文及云端和本地执行边界 |
| [模型与评估](models/) | 历史模型配置、当前模型菜单与计算用量的评估口径 |
| [工具与生态](integrations/) | Google 应用、Skills、自定义 MCP、Chrome 与 Mac |
| [安全与权限](security/) | 浏览器防护、取消语义与数据生命周期 |
| [实践与评测](practice/) | 外部观察、故障恢复记录与我的待实测方案 |

## 我的阅读路线

我先看 [发布资料](product/introducing-spark/)，再把 [任务与计划](architecture/tasks-and-schedules/)、[个人上下文](architecture/personal-context/)和 [执行边界](architecture/runtime-boundaries/)联系起来。工具能力按接入方式分别整理，避免用一个“支持 Google 生态”概括全部授权关系。

[资料索引](references/)保存原始来源、日期和文档中的未决问题；最后的 [调研总结](summary/)记录这一轮对我做 Agent 平台与开发的启发。官方声明、外部使用记录与我的架构推断分别标明，后续实验结果另行补充。
