---
title: "Stripe Agent 支付（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 Stripe 官方来源转述：Metronome 收购、按 token 实时结算、一次性虚拟卡、以及需要更正的说法。
---

主要出处：Stripe 新闻室，2026-01-14 [Stripe completes Metronome acquisition](https://stripe.com/newsroom/news/stripe-completes-metronome-acquisition)、2026-04-29 [Sessions 2026](https://stripe.com/newsroom/news/sessions-2026)、2026-08-19 [Stripe agrees to acquire OpenRouter](https://stripe.com/newsroom/news/stripe-agrees-to-acquire-openrouter)；文档 [Token billing](https://docs.stripe.com/billing/token-billing)。本页不复制原文。

---

## 三件事，按时间

**2026-01-14：完成对 Metronome 的收购。** 官方称其计量引擎「已经在为一些最有雄心的 AI 公司提供支持，包括 OpenAI、Anthropic 与 NVIDIA」；公告把「向按用量计费的转变」称为下一个十年的决定性特征。

**2026-04-29：Sessions 2026（288 项发布）。** 与 Agent 直接相关的两条：

- **面向 AI 商业模式的流式支付**。原文的描述是：Agent 以机器速度消耗 token，在企业收到付款之前就产生了真实成本。方案是把精确计量与实时支付接起来，**让企业按每一个 token 收款，就在它被使用的那一刻**。
- **Link wallets for agents**。原文：「**你的真实支付信息从不暴露给 Agent**——每个任务签发一张一次性卡，每一笔支付由你批准。」

**2026-08-19：协议收购 OpenRouter**（token 路由与优化）。原文提到 Stripe 自去年起已在做 token 成本优化，并推出了 Token Billing 一类产品。

## 计量能力本身

`docs.stripe.com/billing/token-billing`（当时为公开预览）按**模型与 token 类型**（输入、输出、缓存读、缓存写）计量并支持配置加价，会同步 OpenAI / Anthropic / Google 的价格。文档末尾提到可计量的对象包括 token 用量、API 调用、计算时间。

## 需要更正的一条

流传的「Stripe 于 2026-08-10 推出跟踪 token、**tool call** 与 **agent session 分钟数**的计费表」**没有一手来源**——它只出现在一个已知的 AI 生成 SEO 站点上。Stripe 官方文档里是**通用的用量计量**，没有「按工具调用」「按 agent 会话分钟」这类专项计量。时间线不采用该说法。
