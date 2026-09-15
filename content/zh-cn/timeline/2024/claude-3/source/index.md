---
title: "Claude 3（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-03-04 公告转述：三档模型、200k 窗口、工具使用预告。
---

本页转述 **2024-03-04 公告当时公开说了什么**，不以后来的 3.5 / Computer Use / Claude Code 回填。

主要出处：Anthropic，2024-03-04，[Introducing the next generation of Claude](https://www.anthropic.com/news/claude-3-family)。本页不复制公告全文。

---

## 产品主张

Claude 3 家族按能力从低到高：**Haiku、Sonnet、Opus**。公告称在一批认知任务上刷新当时商用模型基准。用户按智力、速度、成本选档。

发布当天：Opus 与 Sonnet 可在 claude.ai 与 Claude API 使用；API 在 159 个国家一般可用。Haiku「即将推出」。claude.ai 免费体验由 Sonnet 驱动，Opus 给 Claude Pro。上下文窗口写为 **200K token**。能力包括图像理解（从图像抽文本等）。

企业向用途：Sonnet 被写成智力与速度的折中，适合大规模部署。Opus 被写成当时能力上限。

## 路线图（公告自己写的）

公告说智力远未到顶，计划随后几个月频繁更新 Claude 3。预告对企业与大规模部署有用的功能，包括 **Tool Use（即 function calling）**、交互式编码（REPL）、以及「更先进的 agentic 能力」。这些在 3 月 4 日是预告，不是当天已交付的运行时。

## 当时不是什么

这是模型家族与 API。三档核、长窗口、即将到来的工具调用，都不等于已经有多步环境循环。agentic 一词出现在路线图里，产品形态仍是聊天与补全。
