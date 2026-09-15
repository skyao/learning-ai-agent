---
title: "Claude Code 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  装一个运行时就能委派。循环、沙箱、工具由厂商托管。按定义是人在循环的编码 Agent。
---

## 当时解决了什么问题

2023–2024 年要自己的编码 Agent，通常是：选框架、接 Function Calling、配沙箱、写停机。Claude Code 把这些收成一条命令：在仓库目录里跑，模型读文件、改文件、跑命令，人在终端里盯着授权。3.7 的可延长思考让「难步」不必再手写一篇 ReAct。

按 AI Agent 定义，这 **是** Agent：决策核心在循环里对环境（本地仓库与 shell）行动。人在循环仍然是主路径——批准、打断、收 diff——不是无人值守员工。

## 对后续 LLM 与 Agent 的影响

2025 年 5 月的 [OpenAI Codex](../../openai-codex/) 云端沙箱、年中的 IDE Agent 模式，都是「运行时压过框架」的并列产品。LangGraph 没有消失，但大量开发者不再从零拼循环。2026 年 Claude Tag 文档写明：频道里的工作跑在与 Claude Code on the web 相同的短暂沙箱上——同一引擎，换表面。
