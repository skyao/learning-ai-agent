---
title: "HumanEval"
linkTitle: "[评测]HumanEval"
分类: "评测"
标签:
  - "首证"
  - "标准"
weight: 155
date: 2026-09-15
description: >
  2021-07。164 道手写函数题，单测当完成谓词。函数级尺子，不是 Agent。
---

Chen 等，2021，随 *Evaluating Large Language Models Trained on Code* 发布。衡量「根据文档字符串合成 Python 函数」是否能过单测，而不是与参考解像不像。

1. [论文](./paper/) — 按原文转述：功能正确、pass@k、164 题、为何必须手写。
2. [讲解](./explanation/) — 完成谓词停在函数级；为何这张考卷既不是 Agent，也远窄于后来的仓库级基准。

数据与评测框架：[openai/human-eval](https://github.com/openai/human-eval)。同篇论文里的模型见 [Codex](../codex/)。原文：[arXiv:2107.03374](https://arxiv.org/abs/2107.03374)。
