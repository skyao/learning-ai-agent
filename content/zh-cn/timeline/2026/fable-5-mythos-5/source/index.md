---
title: "Fable 5 / Mythos 5（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 2026-06-09 官方公告转述：Mythos 级定义、同模型不同护栏、定价与 30 天数据保留。
---

主要出处：Anthropic，2026-06-09，[Claude Fable 5 and Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)。本页不复制公告全文。

---

## 「Mythos 级」是什么

公告的脚注给出定义：**Mythos 级是能力位于 Opus 级之上的一档 Claude 模型**。第一个是 4 月通过 Project Glasswing 发布的 Claude Mythos Preview，接着是本次的 Fable 5 与 Mythos 5。名字取自拉丁语 *fabula*（被讲述者），与希腊语 *mythos* 同源。**公告明说：区分这两个模型的是安全护栏。**

## 两个模型的关系

同一底层模型，两条分发路径：

- **Fable 5**：公开发布，部分查询在护栏触发时回退到 Opus 4.8；
- **Mythos 5**：解除部分护栏，只提供给网络安全防御方与关键基础设施方（Project Glasswing，与美国政府合作）。

定价 $10/$50 per Mtok。**要求 30 天数据保留**，公告登出后引发客户反弹——这一点在三个月后的 [Enterprise Frontier Safeguards](../../export-control-2026/) 里被正面回应。

## 厂商自报的能力与安全口径

公告称这两个模型「能比此前任何 Claude 自主工作更久」。护栏触发率厂商自报平均低于 5% 的会话，超过 95% 的会话不触发回退。这些是**厂商自报**。

## 当时不是什么

不是新架构，也不是新的 Agent 能力类别。它第一次把**安全护栏等级**而不是权重规模当作产品分层的维度——同一个模型，公开版与受限版的差别不在能力，在允许做什么。
