---
title: "Open Responses（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按仓库、变更日志与治理文件转述：发起方、治理条款、规范内容，以及发布性质的区分。
---

主要出处：[openresponses/openresponses](https://github.com/openresponses/openresponses)（Apache-2.0，仓库创建于 2026-01-15）、其 CHANGELOG 与 CONTRIBUTING、以及 openresponses.org 的治理页。

---

## 发起方：要区分「谁维护」与「谁发布」

- 变更日志写明：**2026-01-15 作为开放的多供应商规范发布**。
- 首席核心维护者是 **OpenAI 的员工**，核心维护者名单覆盖 Databricks、Amazon、Hugging Face、Ollama、OpenAI、OpenRouter。
- 规范 schema 的说明写明：`schema/` 下的 OpenAPI 源文件**复制自 OpenAI 的一方 API**。

**但要分清**：**找不到 OpenAI 的官方公告页**。OpenAI 官方新闻源里没有这条，站内也只有 Responses API 的功能页。所以正确表述是——**由 OpenAI 员工主导维护、schema 源自 OpenAI 一方 API 的开源规范**，不是「OpenAI 官方发布的标准」。

## 治理条款

原文两条值得记：

- 「**任何单一厂商不得控制多数核心维护者席位。**」
- 「所有治理角色由**个人**而非组织担任。」

## 规范内容

- 一个 **agentic loop**：让模型发出工具调用、接收结果、继续。
- **items** 作为上下文的原子单位。
- **语义化的流式事件**，而不是原始文本增量。
- 默认无状态，可扩展。

后续 2026-04-24 的版本加入 WebSocket 传输、`/v1/responses/compact` 与 `phase` 字段。

## 当时不是什么

它不是 Agent 通信协议。它管的是**客户端与模型提供方之间**的接口形状，与 [MCP](../../../2024/mcp/)（模型↔工具与资源）、[A2A](../../../2025/a2a/)（Agent↔Agent）不在同一层。放进时间线时按「模型接口层的标准化尝试」记，不要与工具总线并列。
