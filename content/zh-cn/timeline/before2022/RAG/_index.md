---
title: "RAG"
linkTitle: "[论文]RAG"
分类: "论文"
标签:
  - "工程化"
weight: 120
date: 2026-09-14
description: >
  Retrieval-Augmented Generation（2020）。生成之前先检索：参数记忆加上非参数记忆。
---

Lewis 等，2020，*Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks*（NeurIPS 2020）。把预训练 seq2seq 与可检索的维基百科稠密索引接到一起，端到端微调。

1. [论文](./paper/) — 按原文结构转述：两种边际化、DPR + BART、开域问答与生成实验。不加入后来的 LLM / Agent 解释。
2. [讲解](./explanation/) — 这篇论文解决了什么问题，这些问题如何传到后来的大语言模型，以及如何成为有外部知识的 AI Agent 几乎都会先经过的那一刀。

原文：[arXiv:2005.11401](https://arxiv.org/abs/2005.11401)（[HTML](https://ar5iv.labs.arxiv.org/html/2005.11401)、[PDF](https://arxiv.org/pdf/2005.11401)）。代码后来收入 Hugging Face Transformers。
