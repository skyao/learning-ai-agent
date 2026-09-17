---
title: "MCP 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  把「接工具」从各家私有 JSON 收成开放总线。总线不是编排器；2024 年热度低。
---

## 当时解决了什么问题

Function Calling 解决了「模型怎么吐出一次调用」。接什么系统，每家仍是私有 schema、私有插件、私有 OAuth。N 个模型和 M 个数据源要 N×M 套连接器。MCP 想做成 USB 式插槽：server 写一次，不同 client 都能插。它是模型↔资源的接线协议，不管谁选下一步、何时停机、副作用跑在哪台机器上。编排仍在 Desktop、后来的 Claude Code / Codex 等运行时。

2024 年真正能用的 client 主要是 Claude Desktop 本地 server。远程、组织级生产工具包写成「即将提供」。热度远低于同期的模型发布或 Devin。

按 AI Agent 定义，**MCP 本身不是 Agent**。它是工具总线，不是循环。

## 对后续 LLM 与 Agent 的影响

2025 年 3–4 月 OpenAI、Google 等宣布支持之后，这篇 11 月的规范才被追认为拐点。把 2024-11 写成「生态已经统一」，是用后来的热度回填。对照 2025 年的 [MCP 被追认](../../../2025/mcp-adoption/)：当时热度 ≠ 后世重要性。A2A 后来把自己写成 MCP 的互补（接 Agent 而不是接工具），也说明 MCP 先占住了工具层这个位置。协议发布日不等于 Agent 成立日。
