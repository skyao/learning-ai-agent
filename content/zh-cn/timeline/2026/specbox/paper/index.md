---
title: "SpecBox（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  论文主张与它证明了什么：沙箱准备时间落在 Agent 关键路径上，且可被调度拿掉。机制细节见资料栏。
---

*SpecBox: Speculative Sandbox Scheduling for Efficient LLM Agent Serving*。约 2026-08 公开（资料栏介绍写 8 月 5 日）。本站中文译本：[中文](/data/2026/specbox-speculative-sandbox-scheduling/chinese/)。HTML/PDF 以 [资料介绍](/data/2026/specbox-speculative-sandbox-scheduling/introduction/) 为准。

---

## 论文的主张

LLM agent 越来越多经 MCP 调用隔离沙盒。长生命周期预留内存太贵，按需实例化又带来冷启动——在多租户、多轮场景下，这段准备时间落在尾延迟上。论文的主张是：**这段等待属于调度问题，可以不等模型变得更聪明就能缓解。**

沙盒内部的隔离与调度机制不在本页展开，见[资料栏](/data/2026/specbox-speculative-sandbox-scheduling/)。

## 它证明了什么

**沙箱准备时间是可测量的 Agent 服务成本，不是实现细节。** 作者给出原型与相对基线的对比，把「环境还没就绪」从工程抱怨变成可以放进容量与延迟模型的一项。

对 Agent 史的意义在这一条：2026 年，执行供给第一次被当作系统问题来量。

## 当时不是什么

这是一条系统路线与原型数字，不是业界默认调度器。预热猜错会浪费 CPU/内存——论文把阈值当成设计张力，没有宣布已经免费。
