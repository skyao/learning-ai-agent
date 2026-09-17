---
title: "MCP 被追认 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  工具总线成为默认插槽。2024-11 是规范；热度与跨厂商接线发生在 2025 春。协议不是 Agent。
---

## 当时解决了什么问题

[MCP](../../../2024/mcp/) 在 2024-11 给出模型↔资源的开放协议，当时能用的 client 主要是 Claude Desktop。只有一家认的插槽，对应用方仍是赌 Anthropic。OpenAI、Google 表态之后，写一次 server 开始有机会插进多家运行时。这才是那篇规范的后世重要性：**总线成为默认槽位发生在 2025 年春天**，不是发布当天。

按定义 MCP **仍然不是** Agent。被追认的是接线，不是自主性。环仍由 Desktop、Claude Code、Codex、自建 SDK 来跑。对照前传 [FIPA ACL](../../../before2022/early-concepts/fipa-acl/)：先写标准再等生态可以空转；MCP 是产品已存在、再收成事实协议。

## 对后续 LLM 与 Agent 的影响

Claude Code、Codex、IDE Agent、后来的 Tag connections，都开始用「MCP server / connections」说话。[A2A](../../a2a/) 必须把自己定义成互补，说明工具层位置已被占住。[Skills](../../agent-skills/) 是晚绑定专长包，不是又一条 RPC。恶意 server 与提示注入随生态放大，不是 2024 年文本已经写完的故事。
