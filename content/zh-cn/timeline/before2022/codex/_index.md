---
title: "Codex"
linkTitle: "[模型]Codex"
分类: "模型"
标签:
  - "首证"
weight: 150
date: 2026-09-14
description: >
  2021-07。公开代码上微调的 GPT。可运行函数级合成，编码 Agent 的模型侧前提。
---

Chen 等，2021，*Evaluating Large Language Models Trained on Code*。在公开 GitHub 代码上微调 GPT，得到 **Codex**。独立的生产版本驱动 GitHub Copilot 与 API。同篇论文交出的考卷见 [HumanEval](../humaneval/)。

1. [论文](./paper/)：按原文转述代码微调、pass@k 数字、限度与风险。考卷细节以 HumanEval 页为准。
2. [讲解](./explanation/)：可执行代码如何成为编码 Agent 的模型侧前提，以及为什么核心不是运行时。

原文：[arXiv:2107.03374](https://arxiv.org/abs/2107.03374)（[HTML](https://ar5iv.labs.arxiv.org/html/2107.03374)、[PDF](https://arxiv.org/pdf/2107.03374)）。
