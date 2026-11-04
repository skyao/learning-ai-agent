---
title: "Today：连接器、设备权限与业务动作"
weight: 10
date: "2026-11-02T00:00:00+08:00"
description: "不把集成数量等同于开放数量，保留国内外与云端本地的条件差异"
materialType: "官方资料快照与个人分析"
---

## 国际版集成目录的当日快照

2026-11-02 读取[官方 Integrations 目录](https://today.ai/articles/integrations)时，页面显示 **55 项集成**。其中有已展示能力的条目，也有标为 **Soon** 的条目；这不是 55 项已对所有账号开放的承诺。

| 例子 | 页面状态 / 范围 | 我怎样保留 |
| --- | --- | --- |
| Gmail、Google Calendar、Drive、Notion | 有读写或操作描述 | 官方目录声明；实际权限与账号可用性仍需核验 |
| Feishu、Lark、DingTalk、Tencent Docs | 标记 Soon | 不写成已全面开放，也不外推中国版状态 |
| Stripe | 标记 Soon | 不据此证明当前已能处理商户支付，更不推为消费钱包 |
| 设备能力 | 按系统与权限列出 | 相同产品在不同设备上不一定具有相同操作范围 |

目录也说明 Soon 可能涉及测试或伙伴审核。我保留这个状态，不替厂商推定到达日期。

## 本地权限需要对应到具体动作

该目录将本地 Shell / Scripts 列为逐次批准的设备能力。中国版[浏览器扩展说明](https://chromewebstore.google.com/detail/today-ai-%E4%B8%AD%E5%9B%BD%E7%89%88/edkhmdfegifiidpkfifcoiafjgbopggj?hl=zh-CN)则描述在已连接 Chrome 中操作、查找相关历史和书签，并要求相应账号会话与连接。

我会逐项记录是云连接、系统权限，还是用户已登录浏览器。能访问其中一条路径，不能证明另外两条已经授权。

## 业务能力不能从连接器名称直接推导

财务信息读取、创建发票、商户收款与代个人购买，是不同业务。即使集成目录出现财务工具，也不能直接写成 Today 已支持购物付款、自动续费或取消任意订阅。

本轮对统一消费钱包和完整支付流程均未取得足够证据。后续需要固定商家、地区、账号与批准方式，观察最终回执；暂时不据“未确认”断言产品一定不支持。

国内站具体连接器逐项开放范围仍待账号核验。版本与套餐见[产品快照](../../product/capabilities-and-availability-20261102/)，执行路径见[运行边界](../../architecture/cloud-and-device-boundaries/)。
