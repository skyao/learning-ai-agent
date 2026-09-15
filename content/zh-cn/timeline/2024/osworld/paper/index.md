---
title: "OSWorld（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文转述：真实电脑环境、369 题、人与模型的成功率差距。
---

Tianbao Xie 等。*OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments*。2024-04 首挂。[arXiv:2404.07972](https://arxiv.org/abs/2404.07972)。后收入 NeurIPS 2024 Datasets and Benchmarks。

---

## 摘要

能少用人干预完成复杂电脑任务的自主 agent，被写成可改变人机交互。既有基准要么缺交互环境，要么锁在特定应用/领域，反映不了真实电脑使用的多样与复杂。论文给出 **OSWorld**：可扩展的真实电脑环境，支持在 Ubuntu、Windows、macOS 上做任务布置、交互学习、基于执行的评测。其上构建 **369** 道任务：真实网页与桌面应用、操作系统文件 I/O、跨应用工作流。每题来自真实用例，带初始状态配置与自定义评测脚本。当时最强 LLM/VLM agent 在 OSWorld 上暴露明显不足：人能完成超过 **72.36%**，最好模型约 **12.24%**，主要卡在 GUI grounding 与操作知识。

## 环境与任务

OSWorld 不是模拟器里的假桌面，而是真实 OS 上的可复现任务。动作包括截屏、无障碍树、键盘与鼠标。任务跨开放域应用，常要多应用、GUI 与 CLI 并用。

## 评测（文中报告）

基线成功率从约 **0.99%** 到约 **12.24%**。人约 **72.4%**。失败分析指向：点不准控件、不懂常见软件操作流程，而不只是「语言模型不够聪明」。

对象是电脑操作 agent 的环境与考卷，不是某一个厂商产品。
