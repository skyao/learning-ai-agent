---
title: "Snowflake Cortex Agents"
linkTitle: "[产品]Snowflake Cortex Agents"
分类: "产品"
标签:
  - "工程化"
weight: 160
date: 2026-09-17
description: >
  2026-08 三次 GA。跨应用的 agent→agent 编排、服务端托管的 agent loop、断连后继续的异步长任务——数据平台开始把 Agent 当平台能力提供。
---

Snowflake，2026 年 8 月连续三次一般可用：**08-07** 原生应用中的 Cortex Agents 与 MCP server 可用（跨应用 agent→agent 编排，各应用数据与逻辑保持私有，只能通过提供方暴露、消费方批准的工具互相调用）；**08-26** 编码 Agent 可用（**工具执行由 Snowflake 承担**，使用方不再自己搭 agent loop）；**08-30** 异步 API 可用（后台长任务在客户端断开后继续，上限 6 小时）。

1. [材料](./source/) — 按官方发布说明转述：三次 GA 各自改了什么、权限模型、异步语义。
2. [讲解](./explanation/) — 数据平台把「可以自己跑、自己调、自己停」的循环收进服务端；与同期 [Managed Agents](../managed-agents/) 是同一种收法。

发布说明：[2026-08-07](https://docs.snowflake.com/en/release-notes/2026/other/2026-08-07-native-apps-agents-mcp-ga)、[2026-08-26](https://docs.snowflake.com/en/release-notes/2026/other/2026-08-26-cortex-agents-coding-agent-ga)、[2026-08-30](https://docs.snowflake.com/en/release-notes/2026/other/2026-08-30-cortex-agents-async-api-ga)。
