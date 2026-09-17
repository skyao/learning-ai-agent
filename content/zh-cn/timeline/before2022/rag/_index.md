---
title: "RAG"
linkTitle: "[论文]RAG"
分类: "论文"
标签:
  - "工程化"
weight: 120
date: 2026-09-14
description: >
  2020。生成之前先检索。单次流水线，不是根据回执再决定是否再搜。
---

Lewis 等，2020，*Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*（NeurIPS 2020）。预训练 seq2seq 接可检索的维基百科稠密索引，端到端微调。

1. [论文](./paper/) — 按原文结构转述：两种边际化、DPR + BART、开域问答与生成实验。不加入后来的 LLM / Agent 解释。
2. [讲解](./explanation/) — 单次检索—生成如何成为有外部知识的系统几乎都会先经过的那一刀；为何它不是迭代循环。

原文：[arXiv:2005.11401](https://arxiv.org/abs/2005.11401)（[HTML](https://ar5iv.labs.arxiv.org/html/2005.11401)、[PDF](https://arxiv.org/pdf/2005.11401)）。代码后来收入 Hugging Face Transformers。
