---
title: "Chain-of-Thought"
linkTitle: "[论文]Chain-of-Thought"
分类: "论文"
标签:
  - "首证"
weight: 20
date: 2026-09-15
description: >
  中间计算写入 token 序列。不是作用在环境上的循环；ReAct 的 Thought 从这里接出。
---

Wei 等，2022-01，*Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*（Google Research）。把 ⟨输入, 思维链, 输出⟩ 示范写进提示，不微调。

1. [论文](./paper/) — 方法、GSM8K 等实验、涌现与限度。
2. [讲解](./explanation/) — 为何这是解码过程里的串行计算，不是 Action / Observation。

原文：[arXiv:2201.11903](https://arxiv.org/abs/2201.11903)。
