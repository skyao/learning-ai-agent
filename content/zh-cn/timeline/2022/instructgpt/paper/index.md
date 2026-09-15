---
title: "InstructGPT（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Ouyang 等 2022：RLHF 三步、标注偏好与公开基准。
---

Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, Ryan Lowe. *Training language models to follow instructions with human feedback*. 2022-03。[arXiv:2203.02155](https://arxiv.org/abs/2203.02155)。OpenAI Alignment 团队；通讯作者 Ryan Lowe。2022-01-27 的 API 默认切换见 OpenAI 博客；博客注明线上模型与论文方法相近但略有差别。

中文译本：[Arthur Chiao 节译](https://arthurchiao.art/blog/instructgpt-paper-zh/)。

---

## 摘要

把语言模型做大，并不会自动让它更好地跟随用户意图。大模型仍会不真实、有毒、或对用户无帮助——即与用户不对齐。本文用人类反馈微调，使模型在广泛任务上对齐用户意图。从标注者撰写的提示与 OpenAI API 提交的提示出发：先收集期望行为的演示，监督微调 GPT-3；再收集模型输出排序，用强化学习（来自人类反馈）继续微调。得到的模型称 **InstructGPT**。

在作者的提示分布上，**13 亿参数 InstructGPT 的输出比 1750 亿 GPT-3 更受标注者偏好**，尽管参数少 100 倍以上。InstructGPT 提高真实性、减少有毒生成，同时在公开 NLP 数据集上回归很小。仍会犯简单错误。结论：用人类反馈微调是对齐语言模型与人类意图的有前景方向。

## 1 引言

语言模型可被提示做许多 NLP 任务，但常出现编造事实、偏见、有毒文本、或不跟指令。原因：预训练目标是预测网页上下一个 token，不同于「有帮助且安全地跟随用户指令」。作者采用 Askell 等的说法，希望模型 **helpful / honest / harmless**。

方法是 RLHF（Christiano 2017；Stiennon 等摘要工作）：雇约 40 名承包商；收集 API 提示（Playground 上更早 InstructGPT 版本，去掉 PII）与标注者自写提示上的人类演示，做监督基线；再在更大 API 提示集上收集输出比较，训奖励模型（RM）；用 PPO 最大化 RM。这是对齐到**特定人群（主要是标注者与研究者）陈述的偏好**，不是更广的「人类价值」。

主要发现（作者列出）：

- 测试集上来自未出现在训练中的客户：1.3B InstructGPT 仍优于 175B GPT-3；即使给 GPT-3 加 few-shot 指令提示也如此。175B InstructGPT 相对 175B GPT-3 胜 **85±3%**，相对 few-shot GPT-3 胜 **71±4%**。更可靠地遵守指令中的显式约束。
- TruthfulQA：真实且有信息的回答大约是 GPT-3 的两倍。闭域任务（摘要、闭域 QA）幻觉率约 21% vs GPT-3 的 41%。
- RealToxicityPrompts：被要求尊重时，有毒输出约少 25%。Winogender / CrowS-Pairs 上相对 GPT-3 **没有显著改善偏见**。
- RLHF 会在 SQuAD、DROP、HellaSwag、WMT 等上出现「对齐税」。把 PPO 与提高预训练分布对数似然的更新混合（**PPO-ptx**）可大幅减轻，且不牺牲标注偏好。
- 未参与训练的 held-out 标注者偏好率与训练标注者大致相同。
- 在作者的 API 提示分布上，微调 FLAN / T0++ 略差于 SFT 基线；InstructGPT 相对基线胜率 73.4%，T0 / FLAN 约 26.8% / 29.8%。
- 对代码摘要、代码问答、偶发其他语言指令有一定泛化，尽管微调分布里很少。
- 仍会：不跟指令、编造事实、对简单问题给冗长含糊回答、检测不出带错误前提的指令。

## 方法要点（第 3 节）

三步（图 2）：(1) SFT；(2) RM：对同一提示的多个模型输出排序；(3) PPO。模型尺寸 1.3B / 6B / 175B，架构同 GPT-3。评测以 held-out 客户提示上的标注者打分为主，辅以公开基准。

## 限度（作者自述）

对齐的是标注团队与研究者的偏好。模型仍会简单失败。公开 NLP 基准不能代表 API 真实用法。安全与可靠性仍有大量工作。
