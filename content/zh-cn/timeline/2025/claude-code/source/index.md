---
title: "Claude Code（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-02-24 预览与 05-22 GA 公告转述：终端 Agent，不是库。
---

本页按时间分开转述，不把后来的 IDE 插件、GitHub Actions、Agent SDK 写成 2 月已经有。

主要出处：Anthropic，2025-02-24，[Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet)；2025-05-22 Claude 4 发布说明中的 Claude Code 一般可用。本页不复制公告全文。

---

## 2025-02-24：有限研究预览

同日发布 **Claude 3.7 Sonnet**：公告称为当时最强模型，也是市场上第一只 **hybrid reasoning** 模型——可近乎即时回答，或延长逐步思考（对用户可见）；API 用户可控制思考时长。编码与前端被写成明显增强。

**Claude Code** 写成「第一个 agentic coding 工具」的有限研究预览：开发者可在**终端**里把相当体量的工程任务委派给 Claude。循环、工具、仓库访问由这套命令行运行时带着走，而不是再 import 一个 Agent 框架。预览范围有限。

## 2025-05-22：GA

随 **Claude 4** 发布，Claude Code 从预览转为一般可安装的开发者工具。此后 IDE 插件、CI 集成是同一引擎上的表面，2 月的核心主张不变：你用来干活的运行时，不是给应用嵌的库。

## 当时不是什么

2 月不是 GA，也不是 Slack 里的团队员工（那是 2026 的 Tag）。3.7 的混合推理是模型能力；Claude Code 是接在终端上的循环产品。两者同一天出现，不要把模型写成已经等于运行时。
