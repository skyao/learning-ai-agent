---
title: "Docker MCP Datalog与工具包发布"
linkTitle: "Docker MCP Datalog与工具包发布"
weight: 20
date: 2025-05-27
description: >
  Docker MCP Datalog与工具包发布：为 AI 智能体赋能 MCP 的简易安全之道
---

https://www.docker.com/blog/announcing-docker-mcp-catalog-and-toolkit-beta/

-----

模型上下文协议（MCP）正迅速成为连接 AI 智能体与外部工具的标准，但开发者体验尚未同步跟进。当前存在发现渠道碎片化、配置流程笨拙、安全措施往往事后补丁等问题。改善这一体验非单打独斗可成——需要全行业共同努力。构建安全、可扩展且可信的 MCP 生态系统，必须实现跨平台与供应商的协作。

为此，我们兴奋地宣布 Docker MCP datalog与工具包现已开放 Beta 测试。作为 Docker Hub 的新成员，Docker MCP 目录是您探索的起点，它精选呈现了一系列热门的容器化 MCP 服务器，助您快速启动智能体 AI 开发。但仅有发现功能还不够——这正是 MCP 工具包的用武之地。该工具包能简化安装流程、管理凭证、实施访问控制并保障运行时环境安全。Docker MCP datalog与工具包双剑合璧，为开发者和团队提供了完整的 MCP 工具使用基础，让这些工具更易发现、更安全使用，并能轻松跨项目和团队扩展。

我们正与 Stripe、Elastic、Heroku、Pulumi、Grafana Labs、Kong Inc.、Neo4j、New Relic、Continue.dev 等云计算、开发者工具及 AI 领域最受信赖的伙伴携手，共同构建安全的 MCP 工具生态系统。通过 Docker Desktop 一键连接 Gordon（Docker AI 智能体）、Claude、Cursor、VSCode、Windsurf、continue.dev 和 Goose 等主流 MCP 客户端，打造强大智能的 AI 智能体从未如此简单。

这完全契合我们的使命。Docker 开创了容器革命，彻底改变了开发者构建和部署软件的方式。如今，超过 2000 万注册开发者依赖 Docker 来构建、共享和运行现代应用程序。现在，我们将把同样值得信赖的体验带到下一个前沿领域：搭载 MCP 工具的智能体 AI。


## 模型上下文协议（MCP）发展势头正劲——还有哪些方面需要改进？

随着 MCP 成为智能体 AI 系统的支柱，开发者体验仍面临关键挑战。以下是当前存在的主要障碍：

- 难以发现合适、官方且/或可信的工具

  寻找 MCP 服务器的渠道十分分散。开发者需要在各类注册中心、社区维护列表和博客文章间反复搜索——却依然难以辨别哪些是官方可信的服务器。

- 复杂的安装与分发流程

  MCP 工具的入门门槛依然很高。开发者通常需要克隆代码仓库，在 Node.js 或 Python 等环境中解决依赖冲突，还要自行托管本地服务——其中许多服务并未容器化，这使得配置和移植更加困难。更麻烦的是，连接 MCP 客户端会带来更多阻碍，每个客户端都需要定制化配置，严重拖慢了上手速度。

- 认证与权限机制存在缺陷

  许多 MCP 工具在运行时拥有对主机的完全访问权限，通过 npx 或 uvx 启动，缺乏隔离或沙箱保护。凭证通常以明文环境变量形式传递，导致敏感数据暴露并增加泄露风险。此外，这些工具往往未针对规模化和安全性进行设计，缺少企业级功能如策略执行、审计日志和标准化安全措施。

## Docker 如何助力解决这些挑战

Docker MCP 目录与工具包旨在通过安全简化 MCP 服务器的发现、安装和认证流程，解决上述痛点——让您轻松连接喜爱的 MCP 客户端。

### 在安全隔离的容器中轻松发现并运行 MCP 服务器

MCP 目录让您能便捷发现并访问 100 多种 MCP 服务器——包括 Stripe、Elastic、Neo4j 等众多服务，所有资源均可在 Docker Hub 获取。通过 MCP Toolkit 的 Docker Desktop 扩展插件，您能快速安全地运行这些服务器并与之交互。将 MCP 服务器容器化后，开发者可规避运行时配置、依赖冲突和环境不一致等常见难题——只需运行容器，即可开箱即用。

![](https://www.docker.com/app/uploads/2025/05/blog-MCP-Hub.png)

图 1：在 Docker Hub 的 Docker MCP 目录中发现精选和热门的 MCP 服务器

我们不仅简化了发现和安装流程——更将安全性置于 MCP 体验的核心。由于 MCP 运行在 Docker 容器镜像内，它们继承了开发者早已信赖的内置安全特性，以及贯穿软件供应链的丰富安全工具生态。我们更进一步：Docker MCP 工具包通过发挥 Docker 作为安全内容与安全运行时提供者的双重优势，专门应对 MCP 服务器特有的新兴威胁，如工具投毒和工具撤池攻击。

![](https://www.docker.com/app/uploads/2025/05/blog-MCP-Servers-1.png)

图 2：MCP 工具包 Docker 桌面扩展让您能够轻松安全地在容器中运行 MCP 服务器。

前往 Docker Desktop 的扩展菜单即可开始使用 Docker MCP 目录和工具包，或通过此链接进行安装。查看我们的文档以获取更多信息。

### 一键式 MCP 客户端集成与内置安全认证

精选的 MCP 列表和简化的安全设置固然是良好的开端，但这仅仅是个开始。您可以将 Docker MCP 目录中的热门 MCP 服务器连接至任何 MCP 客户端。对于 Gordon（Docker AI 助手）、Claude、Cursor、VSCode、Windsurf、continue.dev 和 Goose 等客户端，一键设置功能将实现无缝集成。

Docker MCP 工具包内置 OAuth 支持与安全凭证存储功能，使客户端无需将密钥硬编码到环境变量中即可完成 MCP 服务器及第三方服务的认证。这确保您的 MCP 工具从一开始就能安全可靠地运行。

![](https://www.docker.com/app/uploads/2025/05/blog-MCP-Clients.png)

图 3：只需点击一下，即可轻松连接至您喜爱的 MCP 客户端，如 Gordon、Claude、Cursor 和 continue.dev。

### 企业级 MCP 工具链：在 Docker Hub 上构建、管理和共享

很快，您将能在 Docker Hub 上构建和共享自己的 MCP——这个托管着超 1400 万镜像、拥有数百万活跃用户及强大可信内容生态的平台。团队依赖 Docker Hub 获取经过验证的镜像、深度镜像分析、生命周期管理和企业级工具。这些同样值得信赖的功能即将扩展至 MCP 领域，让团队能获取最新工具，并以安全可靠的方式分发自己的 MCP。与容器镜像类似，MCP 也将集成注册表访问管理、镜像访问管理等企业功能，确保端到端的安全高效开发者工作流。

## 总结

Docker MCP datalog 与工具包为快速发展的 MCP 工具领域带来了亟需的体系化架构、安全保障和操作简捷性。通过标准化 MCP 服务器的发现、安装与安全配置流程，我们为开发者消除了构建更智能、更强大 AI 驱动应用与代理时的技术障碍。

无论您需要连接外部工具、定制工作流，还是在 IDE 内扩展自动化能力，Docker 都能让整个过程既简单又安全。而这仅仅是个开始。通过持续投入扩展 MCP 生态系统并优化工具管理方式，我们致力于让每个团队都能便捷使用强大的 AI 工具链。

借助 Docker 目录与工具包，您的 AI 代理将不再受限于内置功能——任何可接入的组件都能成为其能力延伸。

立即前往 Docker Desktop 的扩展菜单启用 Docker MCP 目录与工具包，或通过此链接直接安装。您还可在我们即将举办的网络研讨会中观看实际演示。有意在 Docker 上托管您的 MCP 服务器？欢迎随时联系我们。

## 补充

- 专为简便与安全而设计

  agentic AI 的核心是 MCP 工具，但使用它们不应带来麻烦。Docker的 MCP datalog 和工具包让使用过程既简单又安全。

- 加速代理型人工智能开发，借助 Docker MCP datalog与工具包

  无论您是在开发人工智能驱动的应用程序还是代理，MCP 目录都能为您提供经过精心筛选的可信服务器，助您快速入门。您可以将 MCP 服务器与 Docker AI Agent、Claude、Cursor、VS Code、Windsurf、continue.dev 和 Goose 等客户端快速且安全地连接。MCP工具包在后台处理设置、身份验证和安全事宜，让您能够专注于核心任务。基于Docker Hub构建，它是一个可靠的平台，用于上传、存储和管理MCP服务器，提供企业级安全性和控制力。

