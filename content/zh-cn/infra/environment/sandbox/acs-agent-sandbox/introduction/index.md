---
title: "介绍"
linkTitle: "介绍"
weight: 10
date: 2025-05-27
description: >
  阿里 ACS Agent Sandbox 介绍
---

## 资料

官方文档：

https://help.aliyun.com/zh/cs/user-guide/agent-sandbox/

公测公告：

https://www.aliyun.com/activity/cs/agentsandbox

## 介绍

ACS Agent Sandbox 是一款面向生产级 AI 智能体的沙箱算⼒产品，提供 MicroVM 级别的隔离运行环境，内存级休眠唤醒、Checkpoint 克隆能力，最高 15,000 Sandbox/分钟大规模弹性，原生支持 E2B 与 Kubernetes 生态，可快速接入 AgentScope、LangGraph 等主流 Agent 框架。

> 运行在 k8s 下还能实现 15,000 Sandbox/分钟？

## 产品优势

安全隔离、大规模弹性、状态保持、生态兼容 Agent 运行环境， 助力企业 Agent RL/Agent Serving 业务快速上线。 

### 强安全隔离环境

提供强安全隔离的沙箱环境，让 Agent 运行更受控更安全

核心能力：

- 默认 Sandbox 沙箱，MicroVM 级别隔离的运行环境： 底层跑的是什么？
- 提供计算、网络、存储端到端的安全强隔离能力。

### 状态保持

支持算力极速休眠&唤醒， 让 AI Agent 持久在线、按需计费

核心能力：

- 支持运行中 Sandbox 按需休眠，内存状态保持，快速唤醒，快速响应交互式 AI Agent 请求。
- 典型场景 1s ~ 10s 内，实现完成唤醒的能力。

### 大规模低延迟弹性

镜像缓存加速和大规模弹性，轻松应对大规模 Agent 并发

核心能力：

- 基于容器镜像缓存加速，实现秒级镜像就绪，典型场景拉取耗时缩短90%以上。
- 基于用户负载特征预调度优化，大规模创建 15,000 Sandbox/分钟。

### 生态兼容

无缝对接各种主流AI Agent框架和工具，企业无需改造即可平滑迁移上云

核心能力：

- 支持 Code、Browser、Computer 等多样化 Agent 沙箱运行环境。
- 无缝对接 AgentScope、E2B SDK 等主流 AI Agent 框架和工具。全面深度融合 K8s 原生生态体系方案，让企业无需改造即可平滑迁移上云。

