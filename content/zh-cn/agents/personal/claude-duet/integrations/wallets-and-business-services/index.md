---
title: "Link、Shop Pay 与商户系统分别负责什么"
weight: 20
date: "2026-10-23T00:00:00+08:00"
description: "Link、Shop Pay 与商户系统分别负责什么"
materialType: "资料阅读与个人分析"
---

## 先区分付款与管理商户业务

Stripe 合作公告区分 Link 钱包与 Stripe MCP：前者承担用户批准的采购，后者连接商户业务系统。Shop Pay 也与 Shopify 店铺连接分开。它们在界面中都涉及支付品牌，但授权对象不同。

Link 帮助说明购买需批准最大金额，并使用针对商户和金额的一次性卡；暂时授权、商户完成交易与最终扣款不是同一个状态。Shop Pay 帮助也说明逐次审核购买，而非给代理一张无限使用的长期卡。

对我做运行平台，这里值得借鉴的是把购买意图、批准条件、支付授权、订单回执分开追踪。批准成功以后仍可能被商户拒绝，任务不能只凭批准就宣布交付完成。

本轮没有绑定钱包或发起真实交易。后续先用模拟数据研究订单与回执，真实金额行为保持独立审批。合作方地区页面存在不同文案时，按已读主站与具体产品帮助限定结论，不扩张到所有预告服务。

原始资料：[Stripe 与 Anthropic 的 Duet 合作公告](https://stripe.com/newsroom/news/anthropic-and-stripe)；[How to use Link by Stripe with Claude Duet](https://support.claude.com/en/articles/17666484-how-to-use-link-by-stripe-with-claude-duet)；[How to use Shop Pay with Claude Duet](https://support.claude.com/en/articles/17666489-how-to-use-shop-pay-with-claude-duet)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
