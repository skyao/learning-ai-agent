---
title: "SWE-bench（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Jimenez 等 2023：真实 GitHub issue 上的软件工程评测。
---

Carlos E. Jimenez, John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, Karthik Narasimhan. *SWE-bench: Can Language Models Resolve Real-World GitHub Issues?*。Princeton Language and Intelligence 等。arXiv 2023-10。[arXiv:2310.06770](https://arxiv.org/abs/2310.06770)。后续年份的排行榜数字不回填本页。

---

## 摘要

语言模型的能力已经跑过许多旧基准。作者认为真实软件工程是可持续且够难的下一张考卷。**SWE-bench** 从 12 个流行 Python 仓库收集 2,294 个软件工程问题：每个问题把 GitHub issue 与对应的合并 PR 对齐。模型拿到一份代码快照和 issue 描述，要编辑仓库来解决问题。这经常要求同时理解并修改多个函数、类、甚至文件，与执行环境交互，处理极长上下文，推理复杂度远超传统代码生成。评测显示，当时最强的专有模型和作者微调的 SWE-Llama 都只能解决最简单的 issue。摘要给出的最好成绩：Claude 2 仅约 **1.96%**。

## 任务构造

从约 9 万个 PR 中过滤：已合并、解决了某个 issue、改了测试文件、安装能跑，并且至少有一项测试从失败变为通过（fail-to-pass）。代码库平均约 3,010 个非测试文件、43.8 万行；参考补丁平均改 1.7 个文件、3 个函数、32.8 行。issue 文本平均约 195 词。评估：把模型生成的 patch 打上去，跑相关测试；全部通过才算解决。指标是解决比例。

输入在实践中是 issue + 检索出的文件（主结果用 BM25），因为整库通常塞不进窗口。另有「oracle」设置：直接提供参考补丁改过的文件，供分析，不等于真实工程师事先知道改哪。

因预算，GPT-4（`gpt-4-32k-0613`）在 BM25 与 oracle 的部分设置上只跑了约 25% 随机子集。该子集上 GPT-4 的 BM25 解决率约 **1.74%**。ChatGPT-3.5（`gpt-3.5-turbo-16k-0613`）在全文上约 **0.17%**。补丁经常根本 apply 不上。oracle 检索会提高分数，但量级仍低。作者另发布 SWE-bench-train（约 1.9 万条、37 个与测试集不重叠的仓库）以及基于 CodeLlama 微调的 SWE-Llama 7B/13B。

## 限度（文中可见）

当时评测主要是「一次生成补丁」，不是完整的仓库内 Agent 循环（虽然作者写明这张考卷也可以用来比 agent）。多模态 issue（截图）当时的模型处理不了。难度与上下文长度相关：更长的检索窗口即使提高文件召回，分数仍可能下降，因为模型难以在噪声里定位该改的行。
