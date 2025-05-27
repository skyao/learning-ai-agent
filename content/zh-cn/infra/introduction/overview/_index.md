---
title: "基础设施概述"
linkTitle: "概述"
weight: 10
date: 2021-08-13
description: >
  AI Agent 基础设施概述
---

### 背景

2025 年以来，Agent 开发量和使用量都有明显提高。Agent 的爆发带来了 Agent Infra 需求的爆发。在过去 1-2 年，Agent 开发大多依赖开发者手动使用传统 Infra 搭建，开发工程量大、流程复杂，但随着越来越多 Agent-native Infra 涌现，Agent 开发的难度和周期都在缩小，开发的范式正在重构和收敛。

目前 Agent Infra 是模型公司、云厂商、初创公司都在积极拓展的领域.

### 分类

Environment 指的是 Agent 可操作的容器，相当于给了 Agent 一台可自行操作的计算机，Agent 可以在其中端到端地完成任务，这个赛道包括 Sandbox、Browser Infra、Agent 操作系统等不同的细分领域，我们看好其中的 Sandbox 和 Browser Infra。


Context 为 Agent 有效运行提供所需的信息，这个信息既包括任务相关的背景知识，也包含各类工具的使用方法。有了这些信息，Agent 才能在特定任务场景中，合理判断应以哪种顺序调用哪些工具，才能更有效地完成任务。我们将主要分析这个赛道中的 RAG、MCP 和 Memory。


Tools 相关的 Infra 使 Agent 能够便捷调用各类工具，实现搜索、UI 设计、数据访问、支付等多样化的任务。随着 Agent 交互复杂度的持续上升，工具层正迅速扩展。搜索（Search & Scraping）、金融（Finance & Payment）、后端工作流（Backend Workflow）这三类工具，尤为值得重点关注。


Security Infra 以 Agent-native 的方式保障 Agent 的行为与数据在执行过程中的安全与合规。随着 Agent 能力边界的不断拓展，市场对 Agent 安全性的要求也在同步提高。然而，这一环节的 AI-native Infra 机会需要在 Agent 生态更为完善后才能出现更清晰的格局。

> 备注: 这个分类来自文章 https://www.bestblogs.dev/article/234f9a 