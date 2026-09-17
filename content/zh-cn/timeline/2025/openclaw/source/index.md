---
title: "OpenClaw（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-11 仓库出现时的产品形态转述：自托管 Gateway，不是 2026 年的星标数字。
---

本页转述 **2025 年 11 月仓库公开时能核对的产品主张**。改名 OpenClaw、星标暴涨、安全事件与「养龙虾」舆论在 **2026 年 1 月**，见 [2026 OpenClaw](../../../2026/openclaw/source/)，不写进本页「当时」。

主要出处：GitHub `openclaw/openclaw`，`created_at` **2025-11-24**；早期常用名 **Clawdbot / Clawd**（龙虾梗来自标志与 Claude 谐音）。项目 lore：[docs.openclaw.ai](https://docs.openclaw.ai/start/lore)。本页不复制文档全文。

---

## 当时能看见的产品主张

在你自己的机器（或你租的服务器）上跑一个 **Gateway**：会话、工具、事件、频道连接的控制面。人通过已经在用的聊天软件发指令——WhatsApp、Telegram、Discord、iMessage 等——而不是打开又一个 ChatGPT 网页。Gateway 再去调你配置的模型 API，并用工具碰文件、浏览器、命令行。文档后来把架构写成：受信任的网关、不受信任的执行、确定性策略；2025 年 11 月能确定的是：**自托管 + 多频道 + 本机/服务器上的 agent 循环**。

它依赖你接入的模型质量与密钥，不是自带基模。需要 Node 一类运行时和供应商 API key。一个 Gateway 可以给单人用，也可以配成互相信任的小团队——配置不同，进程同类。

## 当时不是什么

不是 Anthropic / OpenAI 的官方运行时。不是 2025 年 11 月已经家喻户晓的现象级产品——仓库那一周远未到后来的数十万星。也还不是名叫 OpenClaw 的商标故事：2026 年 1 月因商标从 Clawdbot 改 Moltbot，再改 OpenClaw。
