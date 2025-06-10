---
title: "介绍"
linkTitle: "介绍"
weight: 10
date: 2025-05-27
description: >
  Docker MCP Catalog介绍
---


https://docs.docker.com/ai/mcp-catalog-and-toolkit/catalog/

Docker MCP 目录是一个集中化、可信赖的注册中心，用于发现、共享和运行兼容 MCP 的工具。它与 Docker Hub 无缝集成，提供经过验证、版本化且精心筛选的 MCP 服务器，这些服务器均打包为 Docker 镜像。该目录也可在 Docker Desktop 中使用。

该目录解决了 MCP 服务器的常见难题：

- 环境冲突：工具通常需要特定运行时环境，可能与现有配置产生冲突。

- 缺乏隔离性：传统配置方式存在暴露主机系统的风险。

- 配置复杂性：手动安装和配置导致采用速度缓慢。

- 跨平台不一致性：工具在不同操作系统上可能出现不可预测的行为。

借助 Docker，每个 MCP 服务器都作为独立容器运行，因此具有可移植性、隔离性和一致性。您可以通过 Docker CLI 或 Docker Desktop 即时启动工具，无需担心依赖项或兼容性问题。

### 核心特性

- 一站式提供 100 多个经过验证的 MCP 服务器

- 发布者验证与版本化发布

- 基于 Docker 基础设施的拉取式分发

- 由 New Relic、Stripe、Grafana 等合作伙伴提供的工具

### 工作原理

MCP 目录中的每个工具都打包为带有元数据的 Docker 镜像

- 通过 Docker Hub 的 mcp/ 命名空间发现工具。
- 通过 MCP Toolkit 进行简单配置，将工具连接到其首选代理。
- 使用 Docker Desktop 或 CLI 拉取并运行工具。

每个目录条目提供：

- 工具描述与元数据
- 版本历史
- agent 集成示例配置

### 从目录中使用 MCP 服务器

要从目录中使用 MCP 服务器，请参阅 MCP 工具包。

向目录贡献 MCP 服务器

若要将 MCP 服务器添加到 Docker MCP 目录，请填写 Docker MCP 提交表单。