---
title: "Stripe 面向 Agent 的计量与支付"
linkTitle: "[产品]Stripe Agent 支付"
分类: "产品"
标签:
  - "工程化"
weight: 55
date: 2026-09-17
description: >
  2026-04-29（Sessions 2026）。按 token 实时结算，给 Agent 发一次性虚拟卡、每笔支付由人批准。Agent 第一次成为独立的经济参与者。
---

Stripe，2026-04-29（Sessions 2026，一次发布 288 项）。与 Agent 相关的三件：**按 token 实时结算**的流式支付（用计量引擎精确到每次 token 使用）、**Link wallets for agents**（每个任务发一张一次性虚拟卡，真实支付信息不暴露给 Agent，每笔支付由人批准）、以及针对 token 盗用的风控。此前 2026-01-14 Stripe 完成对计量引擎 Metronome 的收购。

1. [材料](./source/) — 按 Stripe 官方新闻室与文档转述：计量、实时结算、一次性虚拟卡、以及被夸大的那条说法。
2. [讲解](./explanation/) — 改的是经济语义，不是执行语义：Agent 有了自己的支付面，但授权仍握在人手里。

来源：[Sessions 2026](https://stripe.com/newsroom/news/sessions-2026)、[Token billing 文档](https://docs.stripe.com/billing/token-billing)。
