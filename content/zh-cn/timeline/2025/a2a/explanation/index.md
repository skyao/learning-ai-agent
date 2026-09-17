---
title: "A2A 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  Agent↔Agent 接线，明确写成 MCP 的互补。协议发布 ≠ 企业通信已统一。对照 FIPA。
---

## 当时解决了什么问题

[MCP 被追认](../../mcp-adoption/) 之后，工具层方言开始收束。企业里下一个问题是：我的客服 agent 如何把工单交给你的 ERP agent，而不绑死在同一家编排库。A2A 用 Agent Card、任务、通知回答这件事，并主动放在 MCP 旁边：MCP 接工具，A2A 接其他 Agent。扩展的是环的边界，不是再发明一套工具 JSON。

按定义 A2A **不是** Agent，是 Agent 之间的协议。没有它，多 Agent 仍能用私有 RPC；有了它，也不等于生产里已经在跨厂商调度。SDK 里的 handoffs 仍是库内拓扑，不要写成 A2A 落地。

## 对后续 LLM 与 Agent 的影响

落地慢于 MCP。2026 年 Claude Tag 的「频道里多人转向同一个 session」是产品层多驾驶员，还不是 A2A 互操作。对照 [前传 FIPA ACL](../../../before2022/early-concepts/fipa-acl/)：标准可以先写十年，生态另算。4 月发布会不能读成企业通信已经统一。
