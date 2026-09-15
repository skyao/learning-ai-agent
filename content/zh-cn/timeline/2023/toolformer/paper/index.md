---
title: "Toolformer（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Schick 等 2023：自监督插入 API 调用。
---

Timo Schick, Jane Dwivedi-Yu, Roberto Dessì, Roberta Raileanu, Maria Lomeli, Luke Zettlemoyer, Nicola Cancedda, Thomas Scialom. *Toolformer: Language Models Can Teach Themselves to Use Tools*。Meta AI。2022-12 工作，arXiv 2023-02。[arXiv:2302.04761](https://arxiv.org/abs/2302.04761)。

---

## 摘要

语言模型在需要最新信息、或做精确计算一类任务上仍会失败。本文表明：语言模型可以**自己教会自己**使用外部工具，只需少量工具使用示范。方法称 **Toolformer**：以自监督方式决定调用哪些 API、传什么参数、以及如何把结果写回后续 token 预测。

在不牺牲通用语言模型能力的前提下，Toolformer 学会使用多种工具：计算器、问答系统、搜索引擎、翻译系统、日历。作者用 GPT-J（66 亿参数）实现；在若干任务上超过大得多的、不会用工具的模型。

## 方法

出发点：人写文本时，遇到算不准或不知道的地方会去查工具。作者把这种行为做成生成过程里的**内联 API 调用**。

流程大意：

1. 给模型少量如何调用某工具的示范。
2. 在无标注语料上，让模型**采样**可能的 API 调用（插在文本中间）。
3. 真正执行这些调用，得到结果。
4. **过滤**：只保留那些能降低后续 token 损失的调用——也就是「这次调用对接着写下去有帮助」。
5. 用过滤后的文本（含调用与结果）继续微调模型。

调用在文本里表现为特殊标记包起来的字符串，解码时遇到调用就执行工具、把返回值填回去，再继续生成。工具集在文中包括：Calculator、QA 系统、Wikipedia 搜索、机器翻译、日历。

关键主张：不必为每个工具准备大规模人类标注轨迹；自监督过滤就够让模型学会**何时**调用。

## 限度（文中可见）

工具集合是作者选定的，不是开放的任意函数。调用格式仍是文本插入，不是后来的 JSON schema。评测是语言任务与知识/计算基准，不是开放目标上的多步 Agent 循环。模型规模远小于 GPT-3 / GPT-4。
