---
title: "Zero-shot-CoT（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Kojima 等 2022：零样本思维链与两段式抽取。
---

Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yutaka Matsuo, Yusuke Iwasawa. *Large Language Models are Zero-Shot Reasoners*。2022-05。[arXiv:2205.11916](https://arxiv.org/abs/2205.11916)。Kojima 通讯；部分工作完成于东京大学，Gu / Reid 属 Google Research。

中文译本：[技术栈（正文节译）](https://jishuzhan.net/article/2000743824361062401)。

---

## 摘要

大模型通常被当作带任务示例的优秀少样本学习者。Wei 等的 CoT 用逐步答题示例引出复杂推理。这些成功常被归因于少样本学习。本文表明：只要在每个答案前加上 **“Let's think step by step”**，LLM 已是像样的**零样本推理者**。同一句模板覆盖算术（MultiArith、GSM8K、AQUA-RAT、SVAMP）、符号（Last Letter、Coin Flip）及其他逻辑任务（日期理解、物体追踪等），无需手工少样本。InstructGPT（text-davinci-002）上 MultiArith 17.7%→78.7%，GSM8K 10.4%→40.7%；PaLM 540B 有同量级提升。作者希望这成为困难推理基准上最强的最小零样本基线，并强调在做微调数据或少样本示范之前，应先挖掘模型里已有的零样本能力。

## 方法

与 Few-shot-CoT 不同：不需要逐步示例；与多数零样本模板不同：任务无关，单模板跨多种推理。

**两段提示。** (1) 推理抽取：`Q: [问题]. A: Let's think step by step.` 贪心解码得到思维链 \(z\)。(2) 答案抽取：把第一段提示、\(z\) 与任务相关的结束句拼起来（如「Therefore, the answer (arabic numerals) is」），再生成并解析。Few-shot-CoT 靠示例自带格式避免第二段；Zero-shot-CoT 工程更少，但要调两次模型。

文中比较了其他触发句（Table 4）；「Let's think step by step」是主结果用句。

## 结果要点

相对标准零样本，增益极大；仍低于精心设计的任务专用 Few-shot-CoT。Few-shot-CoT 在示例题型与测试题型不匹配时会恶化；Zero-shot-CoT 用固定一句，跨任务更稳。随规模，零样本曲线变得可与少样本 CoT 比较。

## 限度

仍显著弱于最好的 Few-shot-CoT。需要两次前向。答案抽取句仍按题型略作区分。对象仍是语言推理，不是工具。
