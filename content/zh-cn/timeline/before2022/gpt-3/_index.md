---
title: "GPT-3"
linkTitle: "[模型]GPT-3"
分类: "模型"
标签:
  - "首证"
weight: 110
date: 2026-09-14
description: >
  2020。上下文学习：不更新权重也能做新任务。Agent 后来把 Observation 当作工作集，前提就在这里。
---

Brown 等，2020，*Language Models are Few-Shot Learners*（NeurIPS 2020）。1750 亿参数自回归语言模型，系统测量 **in-context learning**：推理时把任务说明和少量示例写进上下文，不做梯度更新。

目录曾起草为 `context`。这一节记的是这篇论文，不是后来的「上下文工程」或记忆基础设施，所以栏目名与路径都用 GPT-3。要记住它的原因仍是上下文学习：不改权重也能做新任务。

1. [论文](./paper/)：按原文结构转述四种设定、模型与数据、实验结果、限度与社会影响，不加入后来的 LLM 与 Agent 解释。
2. [讲解](./explanation/)：上下文学习如何成为把当前观察放入窗口、当作工作集的前提。

原文：[arXiv:2005.14165](https://arxiv.org/abs/2005.14165)（[PDF](https://arxiv.org/pdf/2005.14165)）。代码与数据说明：<https://github.com/openai/gpt-3>。
