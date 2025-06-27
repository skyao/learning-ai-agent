---
title: "概述"
linkTitle: "概述"
weight: 10
date: 2025-06-27
description: >
  创建真正具备记忆、学习与进化能力的智能体代理
---

> 原文：https://docs.letta.com/overview

Letta 让您能够构建并部署具备状态记忆的 AI 智能体，这些智能体会在持续对话中保持记忆与上下文关联。开发真正能从交互中学习进化的智能体，无需每次都从头开始。

![img](https://docs.letta.com/_files/https://letta.docs.buildwithfern.com/2025-06-27T01:01:22.439Z/images/platform_overview.png)

## 打造拥有智能记忆的智能体，突破有限上下文的局限

Letta 由 MemGPT 核心研究团队打造的先进上下文管理系统，彻底改变了智能体的记忆与学习方式。当普通智能体因上下文窗口填满而遗忘时，Letta 智能体却能跨会话保存记忆持续进化——甚至在休眠时仍在学习。

## 几分钟即可开始构建

我们的快速入门和示例在 Letta 云平台和自托管 Letta 上均可运行。

1. 开发者快速入门

  使用 Letta API 和 ADE 创建您的首个有状态智能体

2. 入门套件

  使用 `create-letta-app` 构建完整的智能体应用程序

## 用您喜爱的工具构建有状态的智能体

通过任意您偏好的开发框架连接运行在 Letta 服务器上的智能体。Letta 能与您熟悉且喜爱的开发者工具无缝集成。


## 了解智能体的想法

智能体开发环境（Agent Development Environment/ADE）为您提供对智能体记忆、上下文窗口及决策过程的完整可视化——这对开发和调试生产级智能体应用至关重要。

![img](https://raw.githubusercontent.com/letta-ai/letta/refs/heads/main/assets/example_ade_screenshot_light.png)

## 将智能体作为服务运行，而非类库

Letta 与其他智能体框架存在本质区别。多数框架仅是封装模型 API 的代码库，而 Letta 则提供了一个专属服务环境——智能体在此自主生存与运作。即使您的应用程序未运行，智能体仍持续存在并保持状态，所有计算在服务器端完成，记忆存储、上下文维护及工具连接均由 Letta 服务器统一管理。

![img](https://docs.letta.com/_files/https://letta.docs.buildwithfern.com/2025-06-27T01:01:22.439Z/images/platform_system.png)

## 生产级智能体所需的一切

Letta provides a complete suite of capabilities for building and deploying advanced AI agents:
Letta 提供了一套完整的工具集，用于构建和部署高级 AI 智能体：

-  [Agent Development Environment](https://docs.letta.com/agent-development-environment) (agent builder + monitoring UI)
  智能体开发环境（智能体构建器 + 监控界面）
-  [Python SDK](https://docs.letta.com/api-reference/overview) + [TypeScript SDK](https://docs.letta.com/api-reference/overview) + [REST API](https://docs.letta.com/api-reference/overview)
-  [Memory management 内存管理](https://docs.letta.com/guides/agents/memory)
-  [Persistence](https://docs.letta.com/guides/agents/overview#agents-vs-threads) (all agent state is stored in a database)
  持久化（所有智能体状态均存储在数据库中）
-  [Tool calling & execution](https://docs.letta.com/guides/agents/tools) (support for custom tools & [pre-made tools](https://docs.letta.com/guides/agents/composio))
  工具调用与执行（支持自定义工具及预制工具）
-  [Tool rules](https://docs.letta.com/guides/agents/tool-rules) (constraining an agent’s action set in a graph-like structure)
  工具规则（以图状结构约束智能体的动作集）
-  [Streaming support 流媒体支持](https://docs.letta.com/guides/agents/streaming)
-  [Native multi-agent support](https://docs.letta.com/guides/agents/multi-agent) and [multi-user support](https://docs.letta.com/guides/agents/multi-user)
  原生多智能体支持与多用户支持
-  Model-agnostic across closed ([OpenAI](https://docs.letta.com/guides/server/providers/openai), etc.) and open providers ([LM Studio](https://docs.letta.com/guides/server/providers/lmstudio), [vLLM](https://docs.letta.com/guides/server/providers/vllm), etc.)
  兼容封闭式（如 OpenAI 等）与开放式（如 LM Studio、vLLM 等）各类模型供应商
-  Production-ready deployment ([self-hosted with Docker](https://docs.letta.com/quickstart/docker) or [Letta Cloud](https://docs.letta.com/quickstart/cloud))
  生产就绪部署（支持 Docker 自托管或 Letta 云服务）
