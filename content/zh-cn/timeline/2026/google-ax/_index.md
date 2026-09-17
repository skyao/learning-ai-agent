---
title: "Google Agent Executor (AX)"
linkTitle: "[框架]Google AX"
分类: "框架"
标签:
  - "工程化"
weight: 60
date: 2026-09-17
description: >
  2026-05-20（v0.1.0）。分布式 harness 运行时：从可挂起/可恢复的镜像动态供给隔离环境，单写者加事件日志保证可恢复。
---

Google，仓库建于 2026-03-30，首个版本 v0.1.0 于 2026-05-20。定位是**分布式 harness 运行时**：从可挂起、可恢复的镜像动态供给隔离环境来跑 harness 与 Agent；明确说自己**不是托管服务**，是自托管运行时，框架无关。配套的 Agent Substrate 负责在 Kubernetes 上大规模调度这些执行环境。

1. [材料](./source/) — 按仓库 README 与源码转述：可靠性三机制、与 Substrate 的关系、以及被夸大的协议支持。
2. [讲解](./explanation/) — 同一架构命题的第三种形态：托管、库之外的「自托管运行时」。

仓库：[google/ax](https://github.com/google/ax)。配套：[agent-substrate/substrate](https://github.com/agent-substrate/substrate)。
