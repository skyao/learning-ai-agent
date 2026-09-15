---
title: "Devin（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-03 公告转述：沙箱工程师叙事与 SWE-bench 子集成绩。
---

本页转述 **2024-03-12 产品公告与 03-15 评测说明当时公开说了什么**，不以后来的 Devin 2、定价或收购传闻回填。

主要出处：Cognition，Scott Wu，2024-03-12，[Introducing Devin, the first AI software engineer](https://cognition.com/blog/introducing-devin)；Cognition Team，2024-03-15，[SWE-bench technical report](https://cognition.com/blog/swe-bench-technical-report)。补丁与评测脚本：[CognitionAI/devin-swebench-results](https://github.com/CognitionAI/devin-swebench-results)。本页不复制公告全文。

---

## 产品主张

Devin 被写成「第一个 AI 软件工程师」：在自己的沙箱里有 shell、代码编辑器和浏览器，能规划并执行多步编程任务。演示包括：读文档学陌生框架、搭应用、修开源仓库的 bug、做 Upwork 上的真实单。用户用自然语言下任务，在界面里看它逐步干活。当时是**私有预览**，需申请。

## SWE-bench 数字（厂商自己报的）

评测用 2023 年的 SWE-bench：真实 GitHub issue，用单元测试判定是否修好。

- 评测集是测试集的随机 **25%**（570 / 2,294 题），理由是跑完全量太慢——原论文作者也用过同类抽样。
- Devin **端到端、unassisted**（不事先告诉要改哪些文件）解决 **79 / 570**，即 **13.86%**。
- 对照：当时公开的 unassisted 基线最高约 **1.96%**（Claude 2 + BM25 检索）；即便 assisted（告诉要改的文件），最好的先前模型约 **4.80%**（Claude 2）。
- Cognition 写明：agent 设定（整仓可导航）与 assisted / unassisted 检索设定**不是严格同口径**；他们仍用更强的基线数字做图。

## 当时不是什么

这不是开源系统，也不是全量 SWE-bench 的第三方复现。13.86% 是厂商在子集上的自报。产品叙事是「软件工程师」，交付形态是带人监看界面的云端预览。
