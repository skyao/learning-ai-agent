---
title: "Computer Use（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-10-22 公告转述：看屏幕 API、OSWorld 分数、实验性警告。
---

本页转述 **2024-10-22 公告当时公开说了什么**，不把 2025 年 Operator / ChatGPT agent 回填。

主要出处：Anthropic，2024-10-22，[Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku](https://www.anthropic.com/news/3-5-models-and-computer-use)。本页不复制公告全文。

---

## 产品主张

**Computer Use** 以公测形式出现在 API：开发者可让 Claude 像人一样用电脑——看屏幕、移动光标、点按钮、键入。公告称 3.5 Sonnet 是第一只提供电脑使用公测的前沿模型。当时仍是实验性：有时笨拙、易错；提前放出来是为了收开发者反馈。API 在 Anthropic、Bedrock、Vertex AI。同期放出升级版 3.5 Sonnet；3.5 Haiku 将在当月稍后。

开发者把指令（例如「用电脑上和网上的数据填这张表」）交给模型，由模型译成电脑命令（开浏览器、导航、填表等）。

## 评测（厂商自报）

- **OSWorld**，仅截图档：Claude 3.5 Sonnet **14.9%**；当时下一档系统约 **7.8%**。给更多步数时 **22.0%**。
- 升级后的 3.5 Sonnet 在 **SWE-bench Verified** 上自报从 **33.4%** 到 **49.0%**；TAU-bench 零售/航空域也有提升。这些是同一天模型升级的数字，不是 Computer Use 专用分。

公告与报道还提到滚动、拖拽、缩放等仍弱。

## 当时不是什么

这是给开发者的 API 与参考实现，不是消费级「替你操作整台电脑」的默认开关。14.9% 远低于 OSWorld 上的人类约 72%。厂商自己写了笨拙和易错。
