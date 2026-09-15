---
title: "Chain-of-Thought Prompting（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Wei 等 2022：思维链提示、算术/常识/符号实验。
---

Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed H. Chi, Quoc V. Le, Denny Zhou. *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*。Google Research, Brain Team。2022-01。[arXiv:2201.11903](https://arxiv.org/abs/2201.11903)。

中文译本：[小七姐 精读翻译（飞书）](https://waytoagi.feishu.cn/wiki/GmcbwbHEtiRDgqkEe7ncuVuWnGd)。

---

## 摘要

生成一条 **chain of thought**（一系列中间推理步骤）会显著提高大语言模型做复杂推理的能力。这种能力在足够大的模型上，可通过简单的 **chain-of-thought prompting** 自然出现：把少量带思维链的示范作为示例写进提示。

在三个系列大模型上，该方法改善算术、常识、符号推理。例如 PaLM 540B 仅用 **8 条**思维链示范，在 GSM8K 上达到当时最好，超过带 verifier 的微调 GPT-3。

## 1 引言

放大模型规模带来许多好处，但单靠规模不足以在算术、常识、符号推理上得到高分。两条已有思路各有缺口：为中间步骤做训练/微调，要大量高质量 rationale，成本高于普通输入—输出对；GPT-3 式标准 few-shot 在需要推理的任务上很弱，且往往不随规模明显改善。

本文把两者合在一起：提示由三元组 ⟨输入, 思维链, 输出⟩ 组成。思维链是通向最终输出的中间自然语言步骤。只需提示、不必为每任务训一个检查点。

## 2 方法

人解多步应用题时会先拆步骤。目标是让够大的模型在 few-shot 示例里见到这种过程后，自己生成类似链条。性质：把多步问题拆开，从而把更多计算分给更难的题；提供可检查的窗口（虽不能完全刻画内部计算）；原则上适用于人能用语言解的任务；对现成大模型，只要把思维链写进示范即可引出。

标准 prompting：示例是问题—答案，模型直接给答案。CoT：每个示例附一条通向答案的思维链。算术题手工写了 8 条示范（除选择题 AQuA 用训练集 4 条）；作者称这些示范**没有**做 prompt engineering。解码默认贪心（后文 Self-Consistency 再改进）。评测 GPT-3 / InstructGPT 系列、LaMDA、PaLM、UL2、Codex。

## 3–5 实验要点

**算术。** GSM8K、SVAMP、ASDiv、AQuA、MAWPS。三条结论：(1) CoT 是模型规模的**涌现能力**——约 1000 亿参数以下几乎无正面效果，小模型会写出流畅但不合逻辑的链条，成绩甚至差于标准提示；(2) 题越难增益越大，GSM8K 上最大 GPT/PaLM 成绩翻倍以上；单步 MAWPS 子集增益很小或为负；(3) PaLM 540B + CoT 在 GSM8K / SVAMP / MAWPS 达当时 SOTA。附录表：PaLM 540B 的 GSM8K CoT **56.9**（相对标准提示 +39.0）；外接计算器到 58.6。

人工检查 LaMDA 137B：50 条最终答案正确的样本中，除 2 条碰巧对以外链条也正确；50 条答错里约 46% 只差小错（计算、符号、缺一步），54% 是语义或连贯性大错。

消融：只输出算式对 GSM8K 帮助不大，说明需要自然语言步骤，不能直接译成方程。多套人工或 GSM8K 训练集示范都显著优于标准提示。

**常识与符号。** StrategyQA、CSQA、日期理解、物体追踪、字母拼接、抛硬币等：够大的模型同样受益。符号任务上可看到对「未见过长度」的一定泛化。

## 限度（文中可见）

小模型无效。链条正确不等于内部计算被完全解释。依赖手工或现成示范。贪心解码不是最优（Wang 等后续工作）。对象是语言任务上的中间步骤，不是环境行动。
