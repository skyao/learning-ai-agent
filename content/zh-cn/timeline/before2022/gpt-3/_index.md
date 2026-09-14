---
title: "GPT-3"
linkTitle: "GPT-3"
weight: 110
date: 2026-09-14
description: >
  Language Models are Few-Shot Learners（2020）。规模放大后，不更新权重也能靠上下文里的示例做新任务。
---

Brown 等，2020，*Language Models are Few-Shot Learners*（NeurIPS 2020）。训练 1750 亿参数的自回归语言模型 GPT-3，并系统测量 **in-context learning**（上下文学习）：推理时把任务说明和少量示例写进上下文，不做梯度更新。

目录曾起草为 `context`。这一节记的是这篇论文，不是后来的「上下文工程」或记忆基础设施，所以栏目名与路径都用 GPT-3。要记住它的原因仍是上下文学习：不改权重也能做新任务。

分两页读，互不混写：

1. [论文](./paper/) — 按原文结构转述：四种设定、模型与数据、实验结果、限度与社会影响。不加入后来的 LLM / Agent 解释。
2. [讲解](./explanation/) — 这篇论文解决了什么问题，这些问题如何传到后来的大语言模型，以及如何成为 AI Agent 把「当前观察塞进窗口」当成工作记忆的物理前提。

原文：[arXiv:2005.14165](https://arxiv.org/abs/2005.14165)（[PDF](https://arxiv.org/pdf/2005.14165)）。代码与数据说明：<https://github.com/openai/gpt-3>。
