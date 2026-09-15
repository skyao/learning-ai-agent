---
title: "PAL（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Gao 等 2022：程序辅助语言模型与解释器卸载。
---

Luyu Gao, Aman Madaan, Shuyan Zhou, Uri Alon, Pengfei Liu, Yiming Yang, Jamie Callan, Graham Neubig。*PAL: Program-aided Language Models*。CMU LTI；部分作者兼 Inspired Cognition。2022-11。[arXiv:2211.10435](https://arxiv.org/abs/2211.10435)。代码与数据：<http://reasonwithpal.com>。文中写作 PaL / PAL。

---

## 摘要

LLM 在少样本提示下已能做算术与符号推理，很大程度归功于 CoT 一类方法：模型既要理解题意并拆步，又要亲自解每一步。拆步往往还行，**求解部分**却常出逻辑和算术错。PAL：让 LLM 读自然语言题，把程序当作中间推理步骤，把求解交给 Python 解释器一类运行时。对 LLM 而言，学习任务收成「把题拆成可运行步骤」；求解委托解释器。

在 BIG-Bench Hard 及其他基准的 **13** 项数学、符号、算法自然语言推理任务上，用 LLM 生成代码、用解释器推理，比大得多的模型更准。例如 Codex 的 PAL 在 GSM8K 上达到当时少样本最好，top-1 绝对超过使用 CoT 的 PaLM-540B **约 15 个点**。

## 问题与方法

推理直到不久前仍被视为 LLM 未克服的挑战。CoT / scratchpad / least-to-most 让模型先写步骤。但复杂算术、大数字上成绩骤降；即便在大量数学文本上微调，两类最常见失败仍是「推理错」和「计算错」。

CoT 的上下文示例是 \(\langle x_i, t_i, y_i \rangle\)（题、自然语言步骤、答案）。PAL 的示例是 \(\langle x_i, t_i \rangle\)：\(t_i\) 是自然语言与程序语句交错的序列，**不提供最终答案**——答案由解释器跑出来。自然语言步骤写成语言注释（如 Python `# ...`），解释器忽略。本文用标准 Python 解释器；作者称也可换成其他求解器、解释器或编译器。

图 1 对照：CoT 全程自由文本；PAL 在逐步注释旁写出 `tennis_balls = 5`、`bought_balls = 2 * 3` 一类语句，最后由运行时给出答案。

## 结果要点

13 项任务上，Codex + PAL 超过用 CoT 的更大模型（含 PaLM-540B）。GSM8K：绝对约 +15% top-1。作者另造 **gsm-hard**（把数字改大）：PAL 相对 CoT 绝对约 **+40%**。主张：神经 LLM 与符号解释器的这种配合，是通向更通用、更稳健推理者的必要一步。

## 限度（文中可见）

依赖能生成可运行程序的代码模型（实验主用 Codex）。提示仍要为 PAL 手工组织。对象是推理基准上的解释器，不是通用操作系统沙箱，也不是开放 Agent 循环。
