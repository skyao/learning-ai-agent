---
title: "Transformer"
linkTitle: "[论文]Transformer"
分类: "论文"
标签:
  - "范式更替"
weight: 100
date: 2026-09-14
description: >
  2017。自注意力序列转换器。后来 LLM 的骨架；是表示结构，不是策略循环。
---

Vaswani 等，2017，*Attention Is All You Need*（NIPS 2017）。完全基于注意力的序列转换模型，去掉了循环与卷积。

1. [论文](./paper/)：按原文结构转述问题、架构、公式、实验与结论，不加入后来的 LLM 与 Agent 解释。
2. [讲解](./explanation/)：它改的是表示与可并行训练；说明为什么它是 LLM 核心的物理前提，而不是策略循环。

原文：[arXiv:1706.03762](https://arxiv.org/abs/1706.03762)（[HTML](https://arxiv.org/html/1706.03762)、[PDF](https://arxiv.org/pdf/1706.03762)）。代码：<https://github.com/tensorflow/tensor2tensor>。
