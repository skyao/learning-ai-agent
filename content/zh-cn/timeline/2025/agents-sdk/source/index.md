---
title: "Agents SDK（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-03-11 公告转述：Responses API、内置工具、Agents SDK、tracing。
---

本页转述 **2025-03-11 公告当时公开说了什么**，不把 5 月远程 MCP、JS SDK 或后来的 Sandbox Agent 写成当天已有。

主要出处：OpenAI，2025-03-11，[New tools for building agents](https://openai.com/index/new-tools-for-building-agents/)。Python 仓库当日创建：[openai-agents-python](https://github.com/openai/openai-agents-python/)。本页不复制公告全文。

---

## 主张

客户要把推理、多模态和安全技术做成生产级 agent，仍常卡在提示词迭代、自写编排、缺少可见性。当天给出一组积木：

- **Responses API：** 把 Chat Completions 的简单性与 Assistants API 的工具能力合在一起，面向构建 agent。
- **内置工具：** web search、file search、computer use。
- **开源 Agents SDK：** 编排单 Agent 与多 Agent 工作流；写成对 2024 年实验库 **Swarm** 的显著改进。可与 Responses / Chat Completions 一起用；只要提供 Chat Completions 风格端点，也可接其他厂商模型。当时先 Python，Node 随后。
- **可观测：** 跟踪并检查 agent 工作流执行。

核心概念（SDK 文档同期方向）：带指令与工具的 Agent、handoffs、guardrails、sessions、tracing。

## 当时不是什么

这是给开发者的 API 与库，不是 Claude Code 那种「打开终端就能委派」的运行时。computer use 内置工具是 API 能力，不是 Operator 网站。MCP 支持在 Agents SDK 里要到同月稍后的公开表态，不写进 3 月 11 日这一天。
