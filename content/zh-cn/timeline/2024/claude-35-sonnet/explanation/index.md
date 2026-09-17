---
title: "Claude 3.5 Sonnet 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  默认决策核心换档。Artifacts 是工作流画布；模型仍不是循环。
---

## 当时解决了什么问题

3 月的 Opus 贵。GPT-4o 在 5 月把免费档智力拉高。3.5 Sonnet 用中档价做出当时许多团队愿意当成「默认核心」的编码与工具使用。内部 64% 的 agentic coding 数字告诉应用方：循环值得接在这个核心上。它没有公开 SWE-bench 全量对照，64% 是厂商内部卷。

Artifacts 把「模型写的东西」从气泡里拿出来，变成可迭代的工件。这是工作流：路径仍在产品 UI 里，人盯着画布改。还不是自主 Agent。

## 对后续 LLM 与 Agent 的影响

2024 年下半年大量开源脚手架和 IDE 助手默认调用 Sonnet。10 月升级后的 3.5 Sonnet 才带 Computer Use，并在 SWE-bench Verified 上自报从 33.4% 到 49.0%。6 月这一天的意义是换核心，不是换品类，更不是把看屏幕写进当天。

按 AI Agent 定义，**3.5 Sonnet 本身不是 Agent**。它是循环里那颗更合适的决策核心。没有它，2024 年的编码分数和后来的 Claude Code 都会换一条更贵或更弱的底。循环、停机、沙箱仍在宿主。
