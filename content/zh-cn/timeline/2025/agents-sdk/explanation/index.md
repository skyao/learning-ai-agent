---
title: "Agents SDK 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  厂商自己发轻量编排库。框架层没消失；主战场仍是可直接用的运行时。
---

## 当时解决了什么问题

2023 年 LangChain 把循环做成库；2024 年 Swarm 一类实验又证明「多 Agent 交接」有人要用。2025 年 3 月 OpenAI 把编排、内置工具、tracing 收成官方积木，降低「从 Completions 自己拼 while」的成本。Responses API 是接口层：一次响应里带工具循环，而不是只吐一句文本。

按 AI Agent 定义，SDK **本身不是** Agent。用它写出来的系统可以是。handoffs 是多 Agent 架构，不是 A2A 协议。

## 对后续 LLM 与 Agent 的影响

同一周前后 MCP 开始被 OpenAI 追认，插槽和编排同时出现。真正改日常的仍是 [Claude Code](../../claude-code/) / [Codex](../../openai-codex/) 这种托管运行时：大多数人不再从 SDK 起步。SDK 的位置接近 2023 年的 LangChain——降低自建成本，不定义品类口号。可读的对照还有本站 [OpenAI 构建 Agent 实践指南](/definition/reference/openai-a-practical-guide-to-building-agents/)。
