---
title: "MCP（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-11-25 公告转述：规范、Desktop 本地 server、预置连接器。
---

本页转述 **2024-11-25 公告当时公开说了什么**，不把 2025 年 OpenAI / Google 追认、远程生产 server 生态写成当天事实。

主要出处：Anthropic，2024-11-25，[Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)。本页不复制公告全文。

---

## 主张

MCP 被写成连接 AI 助手与「数据所在之处」的开放标准：内容仓库、业务工具、开发环境。目标是让前沿模型给出更相关的回答。开发者侧当天给出三件：

- **规范与 SDK**
- **Claude Desktop 应用里的本地 MCP server 支持**
- **开源 MCP server 仓库**

预置例子包括 Google Drive、Slack、GitHub、Git、Postgres、Puppeteer。公告称 Claude 3.5 Sonnet 擅长快速写出 MCP server。所有 Claude.ai 套餐可在 Desktop 上连 MCP server；Claude for Work 客户可在本地测内部系统。远程、组织级生产 server 的工具包写成「即将提供」。

架构一句话：数据源做成 **MCP server**，应用做成 **MCP client**，双向连接。演示包括 Desktop 连 GitHub 建仓并开 PR。

## 当时不是什么

这是规范 + Claude Desktop 本地生态 + 少量预置 server。不是跨厂商已经默认的插槽，也不是云端托管的企业总线。热度在 2024 年远低于同期的模型发布或 Devin。协议本身不执行多步循环。
