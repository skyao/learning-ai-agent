---
title: "SWE-agent（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文转述：Agent-Computer Interface，以及 SWE-bench 上的 pass@1。
---

John Yang, Carlos E. Jimenez, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan, Ofir Press。*SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering*。2024-05-24 首挂。[arXiv:2405.15793](https://arxiv.org/abs/2405.15793)。后收入 NeurIPS 2024。

---

## 摘要

语言模型 agent 越来越多被用来在数字环境里自动化复杂任务。人做软件工程会用 IDE 这类应用；作者认为 LM agent 是另一类终端用户，有自己的能力与需求，应有专门为它设计的软件界面。论文研究界面设计如何影响 agent 表现，并给出 **SWE-agent**：让 LM 自主用计算机做软件工程。自定义的 **agent-computer interface（ACI）** 增强创建/编辑文件、导航仓库、跑测试与程序的能力。在 SWE-bench 与 HumanEvalFix 上分别达到当时的 pass@1 **约 12.5%** 与 **87.7%**，超过先前非交互式 LM 的最好成绩。论文还分析 ACI 设计如何改变行为与分数。

## ACI 主张

人用的 Linux shell / IDE 对模型并不友好：动作太细、反馈太长或太噪。SWE-agent 提供较小的、面向 LM 的命令集：搜索与导航、面向模型的文件查看与编辑、护栏、简短反馈。每一步大致是 ReAct 式的「想 + 命令」，环境回执进入下一步。需要时仍可落到普通 Linux 命令。

作者把贡献写成：证明界面是 agent 表现的一等变量，而不只是换更强的模型。

## 评测（文中报告）

- **SWE-bench：** GPT-4 Turbo 作决策核心时，pass@1 约 **12.47% / 12.5%**（摘要四舍五入）。
- **HumanEvalFix：** **87.7%**。

对象是开源循环 + 公开模型，不是闭源「软件工程师」产品。数字与 Devin 的 13.86% **不能直接横比**（子集、是否 assisted、脚手架都不同）；论文自己比的是先前非交互式基线。
