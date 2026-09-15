---
title: "Self-Consistency（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Wang 等 2022：多样推理路径与多数表决。
---

Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc Le, Ed H. Chi, Sharan Narang, Aakanksha Chowdhery, Denny Zhou. *Self-Consistency Improves Chain of Thought Reasoning in Language Models*。Google Research。2022-03。[arXiv:2203.11171](https://arxiv.org/abs/2203.11171)。

---

## 摘要

CoT 提示配合预训练大模型在复杂推理上已有结果。本文提出解码策略 **self-consistency**，替换 CoT 里的贪心解码：先采样多样推理路径，再对路径边际化，选最一致的最终答案。直觉：复杂题通常有多条思路通向**同一个**正确答案。相对贪心 CoT，GSM8K +17.9%、SVAMP +11.0%、AQuA +12.2%、StrategyQA +6.4%、ARC-challenge +3.9%（文中报告的绝对增益）。

## 方法

人解题往往有多条路。用温度 / top-k / nucleus 从解码器采样多条 \((\mathbf{r}_i, \mathbf{a}_i)\)（路径 + 答案），再对 \(\mathbf{a}\) 做多数表决：\(\arg\max_a \sum_i \mathbb{1}(\mathbf{a}_i=a)\)。也可按路径概率加权；实验表明未归一化多数票与长度归一化加权和接近，未归一化的 token 概率加权更差。无需额外标注、无需训 verifier 或重排器，是单个模型上的「self-ensemble」。

与训练多个模型再集成不同。与 sample-and-rank、束搜索等对照，文中称 self-consistency 更好。对采样策略和不完美提示较稳健。在「加 CoT 可能伤标准 prompting」的部分 NLP 任务上也能抬分。

## 实验

UL2-20B、GPT-3-175B、LaMDA-137B、PaLM-540B。所有模型、所有所列推理任务上均明显高于贪心 CoT。与 PaLM-540B 或 GPT-3 结合时，若干算术任务达到当时新 SOTA。

## 限度

消耗推理算力（多样本）。依赖能解析出的最终答案格式。模型校准差：各条路径的归一化概率往往接近，所以多数票比「信概率最高的那条」更有用。对象仍是语言推理，不是环境循环。
