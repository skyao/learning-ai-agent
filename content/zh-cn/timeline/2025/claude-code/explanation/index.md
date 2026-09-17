---
title: "Claude Code 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  运行时吞掉 AgentExecutor。循环、沙箱、停机由厂商托管。按定义是人在环路的编码 Agent。
---

## 当时解决了什么问题

2023–2024 自建编码 Agent 的路径是：选编排库、接 Function Calling、配沙箱、写停机。循环在调用方进程里，AgentExecutor 是应用代码。Claude Code 把控制平面收成可安装的运行时：在仓库目录启动，读树、改文件、跑 shell，人在终端批 diff。3.7 的可延长思考把「难步」从明文 ReAct 收进核心；循环本身不在核心里。

框架、运行时、协议必须分列。[Agents SDK](../../agents-sdk/) 一类是库，进程仍是你的。Claude Code 是装上即委派的执行环境。[MCP](../../mcp-adoption/) 是它后来的工具插槽，不是它的循环。按定义这 **是** Agent：核心在循环里对环境（工作副本与 shell）产生副作用。人在环路是主路径，不是无人值守员工。

## 对后续 LLM 与 Agent 的影响

5 月云端 [Codex](../../openai-codex/) 是同一迁移的另一边：循环进托管沙箱，而不是进又一个 Python 包。年中 IDE Agent 模式把这层习惯锁进编辑器。2026 年 Tag 文档写明：频道任务跑在与 Claude Code on the web 相同的短寿沙箱上——引擎未换，换的是委派面与 principal。读 2025，这一条才是「运行时压过框架」的可核对点。
