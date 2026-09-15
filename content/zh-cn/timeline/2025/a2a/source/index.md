---
title: "A2A（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-04-09 公告转述：开放协议、互补 MCP、合作伙伴名单。
---

本页转述 **2025-04-09 发布当时公开说了什么**，不把后来的 Linux Foundation 移交或生产落地写成当天已完成。

主要出处：Google，2025-04-09，[Announcing the Agent2Agent Protocol (A2A)](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)。本页不复制公告全文。

---

## 主张

A2A 让不同厂商、不同框架上的 AI agent **互相通信、安全交换信息、协调行动**，跑在企业平台与应用之上。发布时称有 50 多家技术伙伴与咨询公司支持（Atlassian、LangChain、MongoDB、Salesforce、SAP、ServiceNow 等被点名）。

与 MCP 的关系，公告写明是**互补**不是取代：MCP 给 agent 工具与上下文；A2A 让 agent 与 agent 互操作。基于 HTTP、SSE、JSON-RPC 等既有标准；认证对齐 OpenAPI 一类方案。支持长任务、实时反馈与状态通知。角色写成 client agent 与 remote agent；用 Agent Card（JSON）发现能力。

生产就绪版本写成与伙伴一起在 **2025 年晚些时候**推出——4 月 9 日不是「已经统一企业里所有 agent 通信」。

## 当时不是什么

这是协议规范与合作伙伴名单，不是已经铺开的生产总线。日常开发仍主要是单运行时 + 工具。多 Agent 分工成为默认工作方式，不是这篇博文交付的。
