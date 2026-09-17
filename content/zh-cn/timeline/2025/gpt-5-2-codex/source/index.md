---
title: "GPT-5.2-Codex（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 system card 转述：定位、上下文压缩、Windows 原生沙箱、网络安全与生物学评级口径。
---

主要出处：OpenAI，2025-12-18，[GPT-5.2-Codex system card](https://cdn.openai.com/pdf/ac7c37ae-7f4c-4442-b741-2eabdeaf77e0/oai_5_2_Codex.pdf)；[Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-5-2-codex)。本页不复制原文全文。

---

## 模型定位

system card 的原话是：这是当时最强的 agentic coding 模型，**一个为 Codex 中 agentic coding 优化的 GPT-5.2 版本**。公告页（openai.com）对本机不可访问，以下均取自 system card。

## 三处机制变化

- **上下文压缩（compaction）**：让模型**跨多个上下文窗口**保持连贯地工作，而不是只在一个窗口内。原文说明它对长时间运行的评测帮助明显——即压缩服务的是长时程任务。
- **项目级任务**：重构、迁移这类跨文件跨模块的工作被单独点出。
- **Windows 环境**：写明改进。执行隔离上给出两个选项——**Windows 原生沙箱实现**，或经 WSL 使用 Linux 沙箱。用户可以批准命令运行。

## 安全评级口径

按 Preparedness Framework：网络安全领域「很有能力，但**未达到 High**」；生物学被列为 **High capability**；AI 自我改进未达 High。另注明该模型**不面向通用聊天应用部署**。

## 基准分数：只有二手

公开报道普遍转述为 **SWE-bench Pro 56.4%、Terminal-Bench 2.0 64.0%**，并给出前代对照。但 system card 全文不含 SWE-bench、Terminal-Bench 或这两个数字；数字只出现在被拦截的公告页上，评测口径（脚手架、推理档位、是否开压缩、样本数）**均未核实**。因此时间线不引用这两个数字，按「厂商自报、口径不明」处理。

## 当时不是什么

不是新模型世代，也不是循环语义的变化。压缩与 Windows 沙箱改的分别是**一次能做多久**和**在哪执行**，工具调用与停止语义未见官方描述为改变。
