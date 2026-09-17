---
title: "Google AX（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按仓库 README 与源码转述：分布式 harness 运行时、可靠性三机制、Substrate 关系、协议支持的真实情况。
---

主要出处：[google/ax](https://github.com/google/ax) 仓库（README 与源码，仓库创建于 2026-03-30，v0.1.0 发布于 2026-05-20）；[agent-substrate/substrate](https://github.com/agent-substrate/substrate)（仓库创建于 2026-05-13）；项目官站 agentexecutor.io。Google 官方博客对本机不可访问，「2026-05-21 发布」只有二手来源。

---

## 自我定位

README 原话：**AX 是一个分布式 harness 运行时**。它**从可挂起、可恢复的镜像动态供给隔离环境**来执行 harness 与 Agent；为可靠性设计，即使分布式部署也原生支持恢复与执行续跑。

「AX 不是什么」一节写了两条边界：**不是托管服务**（AX 是自托管的）；**不是 agentic 框架**（对用什么框架构建 Agent 不做假设）。

## 可靠性三机制

- **单写者架构**：单一控制器保证状态一致。源码注释写「它作为管理 agentic 循环的单写者系统」。
- **事件日志**：持久化的执行状态，自动恢复。
- **高级恢复**：在兼容平台上支持 compute 层的 actor 恢复——调度器侧有对应的挂起与恢复操作。

用例上看，客户端发起的交互如果 `conversation_id` 已存在，就表示**恢复**一个已有会话而不是新建。

## 与 Agent Substrate 的关系

AX 在 Kubernetes 上的 Agent Substrate 上有原生支持，这是推荐的生产部署方式。反过来，Substrate 把自己描述为「默认安全的 agent 执行运行时」，用 actor 到 worker 的映射来做高密度调度，支持 microVM 与 gVisor 一类隔离载体，并明说**不是 Google 官方支持的产品**。

## 需要更正的说法：协议支持

项目官站声称原生支持 MCP、A2A 等协议。**代码里的实际情况不同**：主分支源码中检索 a2a / agent-to-agent 为零命中，也没有 `AgentService`；MCP 则有代码证据。所以按「官站声称支持 A2A，代码未见」记录，不要写成已经支持。LangChain / ADK 的兼容性声明出现在 Substrate 的 README 里，属于 Substrate 的集成面，不是 AX 的能力。

## 当时不是什么

不是托管产品，不是新协议，也不是新的 Agent 框架。它回答的是运行时那一层的问题：**执行环境怎么被供给、怎么被挂起、怎么在崩溃后续跑**。
