---
title: "Claude Managed Agents"
linkTitle: "[产品]Claude Managed Agents"
分类: "产品"
标签:
  - "范式更替"
weight: 40
date: 2026-09-17
description: >
  2026-04-08。把 Agent 拆成 session / harness / sandbox 三个可替换接口；沙箱从 pet 变 cattle，凭证不进沙箱。按 session-hour 计费。
---

Anthropic，2026-04-08。托管的长时程 Agent 服务，把 Agent 虚拟化成三个接口：**session**（发生过什么的可追加日志）、**harness**（调用模型并把工具调用路由到基础设施的循环）、**sandbox**（跑代码与改文件的执行环境）。三者可各自替换。会话按 session-hour 计费；沙箱可托管也可自托管。

1. [材料](./source/) — 按工程博客与官方文档转述：拆哪三个接口、为什么拆、凭证边界、权限与计费。
2. [讲解](./explanation/) — 「进程活着」不再是正确性前提；这是 2026 供给线的骨架。

工程博客：[Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents)。定价：[claude.com/pricing](https://www.claude.com/pricing)。
