---
title: "SWE-bench Pro 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  Verified 上的七成，换硬考卷掉到两成。谓词不同，完成率不可横比。2025 编码主线的警示尺。
---

## 论文解决了什么问题

2024 年 [Verified](../../../2024/swe-bench-verified/) 清洗了坏题，分数应声上涨。到 2025-08，[GPT-5](../../gpt-5/) 在 Verified 上自报约 75%。若只看这一张表，叙事会变成「软件工程师已经大半能交给模型」。Pro 换更长、更多文件、更不像训练语料的仓库，同一只 GPT-5 掉到约 23%。这与 2023 年原版 SWE-bench 的「个位数」不是同一句话，功能类似：把宣传从考卷上拉开。

按定义 Pro 是评测，不是 Agent。它量的是统一脚手架下的仓库完成谓词。与 Verified 不可横比：分母、题长、污染控制都换了。与 [Terminal-Bench](../../terminal-bench/) 也不可横比：一个看补丁与测试，一个看环境状态。

## 对后续 LLM 与 Agent 的影响

2026 年 [Aries](../../../2026/aries/) 用 SWE-Bench Pro 当受控负载之一，不是偶然：基础设施论文需要任务够难、轨迹够长。产品侧 Claude Code / Codex 继续报 Verified；读 2025 年编码 Agent，两张表要一起看。人在环路没有过时——论文自己也写，多数非平凡任务仍过不去。
