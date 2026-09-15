---
title: "Claude 3 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  编码与指令跟随变强的决策核心。后续 Claude 系 Agent 站在这条线上；模型不是循环。
---

## 当时解决了什么问题

2023 年默认决策核心是 GPT-4。Claude 2 能聊、能写，但在编码和长指令上经常被当成「另一个聊天模型」。Claude 3 把三档核做成可买的产品线：便宜快的 Haiku、主力 Sonnet、上限 Opus。对应用方，这意味着可以按步骤成本选模型，而不是全程烧最贵的那只。

Tool Use 写在路线图里，说明 Anthropic 此时仍在补 2023 年 OpenAI 已经做成 API 的那一层。真正让「Claude 当 Agent 核」变日常的，是几个月后的 3.5 Sonnet，不是 3 月这一天。

## 对后续 LLM 与 Agent 的影响

没有 Claude 3，就没有后面 3.5、Computer Use、Claude Code 这条产品线。200k 窗口与 GPT-4 Turbo / Gemini 长上下文同一年竞赛。公告里的 agentic 预告后来大部分兑现，但不能把 3 月的聊天模型写成已经会用电脑。

按 AI Agent 定义，**Claude 3 本身不是 Agent**。它是更强的决策核心。循环、沙箱、看屏幕，是 2024 年其余月份和其他产品补上的。
