---
title: "SpecBox"
linkTitle: "[论文]SpecBox"
分类: "论文"
标签:
  - "工程化"
weight: 40
date: 2026-09-15
description: >
  2026-08。推测式沙盒调度。沙箱冷启动在环的关键路径上；环境未就绪，Action 只能阻塞。
---

*SpecBox: Speculative Sandbox Scheduling for Efficient LLM Agent Serving*。把沙盒准备与 LLM 生成重叠，降低 P99 延迟与常驻内存。

1. [论文](./paper/) — 按原文转述：冷启动张力、三项技术、文中数字。
2. [讲解](./explanation/) — 沙箱在关键路径；推测预热是执行层，不是再训一遍模型。

原文与本站译本：[SpecBox 资料栏](/data/2026/specbox-speculative-sandbox-scheduling/)。
