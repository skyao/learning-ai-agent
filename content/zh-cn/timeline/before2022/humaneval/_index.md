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
  2021-07。164 道手写函数题，单测当完成谓词。完成谓词第一次可以不靠人判。
---

Chen 等，2021，随 *Evaluating Large Language Models Trained on Code* 发布。衡量「根据文档字符串合成 Python 函数」能否通过单元测试，而不是与参考解是否相似。

1. [论文](./paper/)：按原文转述功能正确、pass@k、164 道题，以及必须手写的原因。
2. [讲解](./explanation/)：完成谓词停在函数级，以及它如何成为仓库级基准的起点。

数据与评测框架：[openai/human-eval](https://github.com/openai/human-eval)。同篇论文里的模型见 [Codex](../codex/)。原文：[arXiv:2107.03374](https://arxiv.org/abs/2107.03374)。
