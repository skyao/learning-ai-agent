---
title: "Agents SDK 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  厂商自己发轻量编排库。框架层仍在；进程是调用方的。不要和 Claude Code / Codex 混成一类。
---

## 当时解决了什么问题

2023 年 LangChain 把环做成库；2024 年 Swarm 证明多 Agent 交接有人要用。2025-03 OpenAI 把编排、内置工具、tracing 收成官方积木，降低「从 Completions 自写 while」的成本。Responses API 是接口：一次响应里可以带工具循环，状态与进程仍在调用方。

按定义 SDK **不是** Agent。用它写出来的系统可以是。handoffs 是库内拓扑，不是 [A2A](../../a2a/) 协议。同一周前后 [MCP 被追认](../../mcp-adoption/)：插槽和编排同时出现，层不同。

## 对后续 LLM 与 Agent 的影响

真正改日常的是 [Claude Code](../../claude-code/) / [Codex](../../openai-codex/)：运行时吞掉 AgentExecutor，大多数人不再从 SDK 起步。SDK 的位置接近 2023 年的 LangChain——降低自建成本，不定义品类口号。三者对照见 [调研方法](../../../overview/research/)：Framework / Runtime / Protocol。可读的厂商对照还有 [构建 Agent 实践指南](/definition/reference/openai-a-practical-guide-to-building-agents/)。
