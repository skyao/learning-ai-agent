---
title: "A2A 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  把「Agent 之间怎么说话」重新做成开放协议。发布 ≠ 生态长成。对照 FIPA。
---

## 当时解决了什么问题

MCP 在 2025 年春天已经开始被当成接工具的方言。企业里下一个问题是：我的客服 agent 怎么把工单交给你的 ERP agent，而不绑死在同一家编排库。A2A 用 Agent Card、任务、通知回答这件事，并主动把自己放在 MCP 旁边，避免「又一个要取代 MCP 的协议」战争。

按 AI Agent 定义，A2A **不是** Agent，是 Agent 之间的协议。没有它，多 Agent 系统仍能用私有 RPC；有了它，也不等于生产里已经在跨厂商调度。

## 对后续 LLM 与 Agent 的影响

落地慢于 MCP。2026 年 Claude Tag 的「频道里多人转向同一个 session」是产品层多驾驶员，还不是 A2A 互操作。对照 [前传 FIPA ACL](../../../before2022/early-concepts/fipa-acl/)：标准可以先写十年，生态另算。不要把 4 月的发布会读成企业通信已经统一。
