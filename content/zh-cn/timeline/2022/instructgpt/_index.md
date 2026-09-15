---
title: "InstructGPT"
linkTitle: "[论文]InstructGPT"
分类: "论文"
标签:
  - "工程化"
weight: 10
date: 2026-09-15
description: >
  用人类反馈微调 GPT-3 以跟随指令。2022-01 成为 API 默认；论文 3 月挂出。
---

Ouyang 等，2022，*Training language models to follow instructions with human feedback*。SFT + 奖励模型 + PPO（RLHF）。OpenAI 2022-01-27 宣布 InstructGPT 为 API 默认模型。

1. [论文](./paper/) — 按原文结构转述：三步训练、标注者偏好、TruthfulQA 与限度。
2. [讲解](./explanation/) — 解决了什么问题，如何传到对话产品与 Agent 提示。

原文：[arXiv:2203.02155](https://arxiv.org/abs/2203.02155)。产品公告：[Aligning language models to follow instructions](https://openai.com/index/instruction-following/)（2022-01-27）。
