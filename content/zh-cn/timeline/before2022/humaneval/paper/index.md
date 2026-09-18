---
title: "HumanEval（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按 Chen 等 2021 年论文转述评测集本身：功能正确、pass@k、164 道手写题。
---

评测集随 Codex 论文一次交出。这里只转述 **HumanEval 这张考卷**；模型训练与限度见 [Codex 论文](../../codex/paper/)。Chen 等，*Evaluating Large Language Models Trained on Code*，2021-07。[arXiv:2107.03374](https://arxiv.org/abs/2107.03374)。仓库：<https://github.com/openai/human-eval>。

---

## 主张

代码生成原先常用与参考解的精确或模糊匹配（BLEU）。匹配无法覆盖「功能等价但写法不同」的大空间。本文改用**功能正确**：样本通过一组单元测试即算对。这与测试驱动开发、合并代码前过单测的工程习惯一致。

为此手写 **164** 道带单测的 Python 题，覆盖语言理解、算法与简单数学，部分接近初级面试题。每题含签名、文档字符串、函数体与若干单测，平均 **7.7** 个测试。必须手写：模型训在 GitHub 很大一部分上，网上已有各种题解。

## pass@k

每题生成 \(k\) 个样本，任一通过则该题算解出，再报解出比例。直接用 \(k\) 个样本方差大。改为每题生成 \(n\ge k\) 个（文中 \(n=200\)，\(k\le 100\)），设 \(c\) 个通过，用无偏估计

\[
\mathrm{pass@}k=\mathbb{E}_{\text{Problems}}\left[1-\frac{\binom{n-c}{k}}{\binom{n}{k}}\right]
\]

用 \(1-(1-\hat p)^k\) 是有偏的。文中还显示：功能不等价的错误解与正确解的 BLEU 分布大量重叠，优化 BLEU 不等于优化功能正确。

## 当时报的分数（对照模型）

12B Codex 单样本解出 **28.8%**；GPT-3 约 **0%**；GPT-J 11.4%。每题 100 个样本，Codex 可解出约 70%。监督微调后的 Codex-S，pass@1 约 37.7%，pass@100 约 77.5%。这些数字属于模型对照，不是考卷自己的属性。

## 当时不是什么

不是仓库级、多文件、带真实 GitHub issue 的考试。164 道独立函数，尺度故意很小，为的是可复现、可自动判。执行在 gVisor 沙箱里，是为了安全地跑生成代码。
