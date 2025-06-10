---
title: "轻松构建更智能的 AI 代理"
linkTitle: "轻松构建更智能的 AI 代理"
weight: 30
date: 2025-05-27
description: >
  Docker MCP 目录与工具包：轻松构建更智能的 AI 代理
---

https://dev.to/docker/docker-mcp-catalog-toolkit-building-smarter-ai-agents-with-ease-408c

------

## 引言：Docker MCP 是什么及其重要性

由 ChatGPT、Claude 和定制 LLMs 驱动的基于智能体的 AI 应用兴起，催生了对与现实世界工具进行模块化、安全且标准化集成的需求。Docker 的模型上下文协议（MCP）及其目录与工具包正是为此而生。

Docker 正将自身定位不仅作为容器平台，更是智能代理的基础设施支柱。本文将探讨 MCP 架构、目录和工具包，并演示如何构建自己的 MCP 服务器。

## 理解 MCP——模型上下文协议

**What it is: 它是什么：**

- MCP 是一种开放协议，允许 AI 客户端（如智能体）安全且可预测地调用现实世界服务。
- 该协议专为实现工具互操作性、安全凭证管理（处理 API 密钥和令牌）以及基于容器的执行而设计。

**Why it matters: 为何重要：**

- 缺乏 MCP 这类标准，智能体只能依赖脆弱的 API 或不安全的插件。
- Docker 通过容器化技术为这些服务提供了安全隔离的运行环境。

**Visual overview: 可视化概览：**

[![MCP Arch Diagram](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnl9fzxlbty6djtfhhuzn.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnl9fzxlbty6djtfhhuzn.png)

AI 客户端如何通过 MCP 与容器化服务进行通信

## MCP datalog：预构建的安全 MCP 服务器

**包含内容：**

不断增长的 100 多个经 Docker 验证的 MCP 服务器库，包括：

- Stripe
- LangChain
- Elastic
- Pinecone
- Hugging Face

**主要特性：**

每个 MCP 服务器运行在容器内，包含：

- OpenAPI 规范
- 安全的默认配置
- Docker Desktop 集成

**开发者为何关注：**

- AI Agent 的即插即用工具
- 跨服务一致的开发体验

**可视化概览：**

[![MCP Catalog Diagram](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr1awaatmw44r57fm2as3.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr1awaatmw44r57fm2as3.png)

Docker Desktop 集成 MCP 目录

## MCP 工具包：构建您专属的安全 MCP 服务器

**工具包命令行功能：**

- `mcp init` → 快速搭建新 MCP 服务器
- `mcp run` → 运行本地开发版本
- `mcp deploy` → 部署至 Docker 桌面版

**安全特性：**

- 容器隔离
- 支持 OAuth 凭证认证
- 可选速率限制与追踪功能

**演示操作流程：**

```bash
npm install -g @docker/mcp-toolkit
mcp init my-weather-api
cd my-weather-api
mcp run
```

**可视化操作指南**

[![MCP Toolkit Diagram](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpflyy3al2z9h1nxzhw03.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpflyy3al2z9h1nxzhw03.png)

MCP 工具包工作流程：从命令行到容器

## 将 MCP 服务器连接至 AI 客户端

**支持的客户端：**

- Claude (Anthropic) 
- GPT Agents (OpenAI)
- Docker AI (beta) 
- VS Code Extensions

**运作原理：**

- 智能体调用 MCP 规范中定义的 `/invoke` 端点。
- 安全令牌交换处理身份验证。
- 响应返回给模型进行推理/执行。

**用例示例：**

Claude 在电商交互过程中通过 Docker MCP 服务器调用 Stripe 支付处理容器

**可视化流程:**

[![Agent-to-API via Docker MCP](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqht7pop4qx9u0lakaito.png)](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqht7pop4qx9u0lakaito.png)

*Shows how Claude securely calls a Stripe service via Docker MCP.
展示 Claude 如何通过 Docker MCP 安全调用 Stripe 服务*

## MCP 服务器开发者的最佳实践

**Security: 安全性：**

- 切勿使用 root 容器
- 使用 `docker scan` 和 `trivy` 进行镜像漏洞扫描
- 使用 Docker 的密钥管理器（或 Vault）存储敏感信息

**Performance: 性能优化：**

- 保持容器轻量化（使用 Alpine 或 Distroless 镜像）
- 使用流式响应进行 LLM 交互

**Testing tips: 测试技巧：**

- 使用 `Postman` + `curl` 测试 `/invoke` 端点
- 使用 `swagger-cli` 对 OpenAPI 规范进行代码检查

## MCP 的未来发展方向

**Predictions: 未来展望：**

- Docker AI 仪表板集成
- MCP 编排（每个智能体支持多服务）
- AI 原生 DevOps（通过 MCP 服务器构建基础设施的智能体）

**开发者机遇：**

- 为开放的 MCP 服务器贡献力量
- 提交至 Docker 应用目录
- 构建供内部或公共使用的智能体工具

**结语**

Docker 的 MCP 目录与工具包仍处于测试阶段，但发展方向已然明确：AI 应用需要接入现实世界工具，而 Docker 正在构建一个安全开放的生态系统来支撑这一需求。

无论您正在开发智能体框架，还是仅仅尝试使用工具的 LLMs，现在都是参与其中的绝佳时机。

有什么想看到的 MCP 服务器创意？或者考虑贡献你自己的点子？我很乐意听取你的想法！😊
