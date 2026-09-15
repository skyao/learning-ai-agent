---
title: "GPT-5（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-08-07 公告转述：统一系统、编码与工具链数字。
---

本页转述 **2025-08-07 发布当时公开说了什么**，不把 9 月 SWE-bench Pro 的 23.3% 写进当天材料。

主要出处：OpenAI，2025-08-07，[Introducing GPT-5](https://openai.com/index/introducing-gpt-5/)；[Introducing GPT-5 for developers](https://openai.com/index/introducing-gpt-5-for-developers/)。本页不复制公告全文。

---

## 产品主张

GPT-5 被写成统一系统：多数问题快速回答，难题延长思考；路由器按对话类型、复杂度、工具需求和用户明示（如 “think hard”）选择。ChatGPT 里替换 GPT-4o、o3、o4-mini、GPT-4.1、GPT-4.5 等，成为登录用户默认。另有 **GPT-5 pro**（更长思考，替换 o3-pro）。公告称思考版用更少输出 token 仍优于 o3。

开发者向：面向编码与 agentic 任务。新参数包括 `verbosity`、`reasoning_effort` 可取 minimal。新增 custom tools：可用纯文本而非 JSON 调工具，并可用开发者提供的 CFG 约束。

## 评测（厂商自报）

- **SWE-bench Verified：74.9%**（对照文中 o3 的 69.1%）；相对 o3 high reasoning 自称少 22% 输出 token、少 45% 工具调用。
- Aider Polyglot **88%**；τ2-bench telecom **96.7%**；AIME 2025 无工具 **94.6%**；MMMU **84.2%**。
- 内部「经济上有价值的知识工作」评测：思考模式下约一半案例可比或优于专家（跨 40 余职业）——这是厂商内部卷，不是公开考卷。

## 当时不是什么

这是默认决策核心与 ChatGPT 入口，不是新的自主运行时。74.9% 是 Verified，不能直接读成「四分之三真实工程已经能交给它」。长链工具更稳，循环仍由 Codex / Claude Code / 自建系统来跑。
