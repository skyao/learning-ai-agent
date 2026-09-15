---
title: "OpenAI o1（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-09-12 公告转述：推理模型、考试数字、预览限额。
---

本页转述 **2024-09-12 发布当时公开说了什么**，不把 12 月的正式 o1、2025 的 o3 回填进当天数字。

主要出处：OpenAI，2024-09-12，[Introducing OpenAI o1-preview](https://openai.com/index/introducing-openai-o1-preview/)；[Learning to reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/)。本页不复制公告全文。

---

## 产品主张

新系列模型被设计成**先多想再答**。科学、编码、数学上比先前模型更能处理难题。当天放出系列的第一只预览：**o1-preview**，以及更小的 **o1-mini**。ChatGPT Plus 与 Team 可在模型选择器里手动选用；预览周限额最初约 30 条（o1-preview）与 50 条（o1-mini），数日后上调。可信 API 用户同期可调用。用户看不到完整内部思维链，产品展示的是摘要后的「思考」。

## 评测（文中报告）

研究博文用完整 o1（当时尚未全部产品化）对照 GPT-4o，并给出 o1-preview 的中间数字。强调的方向：

- **AIME 2024：** GPT-4o 约 13%，推理模型（完整 o1、高测试时计算）约 **83%**（cons@64）。
- **Codeforces：** 完整 o1 约第 **89** 百分位；o1-preview 低于完整 o1、仍明显高于 4o。
- **GPQA Diamond：** 完整 o1 超过人类博士准确率的叙事写在博文里（物理/化学/生物题）。

安全：在其最难的越狱测试上，o1-preview 分数远高于 GPT-4o（博文给出 84 vs 22，0–100 分）。思维链用于训练与对齐，不作为完整原文交给用户。

## 当时不是什么

这是新的模型系列与 ChatGPT 里的一个选项。内部思考不是 ReAct 那样写给宿主解析的 Thought 字段。没有新的工具协议，也没有宣称已经是自主 Agent。高延迟、高单价、限额，是发布时就写明的约束。
