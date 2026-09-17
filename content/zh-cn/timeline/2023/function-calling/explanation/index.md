---
title: "Function Calling 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  工具调用从 prompt 把戏收成可校验 schema。协议，不是系统；环仍由宿主写。
---

## 当时解决了什么问题

上半年开发者仍在 prompt 里逼模型吐 JSON，再正则抠字段。ReAct 的 Action 是自由文本。插件是 ChatGPT 产品里的私有协议。Function Calling 把同一件事做成 Chat Completions 的一等参数：schema 进、结构化调用出。模型还被专门微调过「何时调用」，不再只靠少样本示范。

模型输出的是 `name` + `arguments`。执行发生在调用方进程里：宿主跑完，把回执当后续消息送回去。单次 Function Call 是一次 I/O，没有「根据返回值再选」——那一跳仍要宿主再发一次请求。16k 窗口是并列的物理前提：单次循环能多看一点工具回执，仍然远不够装下一个仓库。

## 对后续 LLM 与 Agent 的影响

这是 2023 年工具接口的工程化节点。之后各家的 tool use 都沿着「模型选工具 + JSON 参数 + 宿主执行」走。LangChain 一类库很快把函数调用收进同一套 Agent 抽象。跨厂商总线是下一年的 [MCP](../../../2024/mcp/)；今年只有一家方言。

按 AI Agent 定义，**Function Calling 本身不是 Agent**。它是协议：模型↔工具的第一种稳定 schema。它没有规定多步循环，也不对环境行动——副作用出在你的服务器上。缺了它，循环仍然能用文本协议硬撑；有了它，循环才变得可产品化。不可信工具输出仍可注入非预期动作：公告已经写明，不是后来才发现的漏洞。协议不是系统；schema 到位，环仍在宿主。
