---
title: "API"
linkTitle: "API"
weight: 20
date: 2025-05-27
description: >
  阿里 ACS Agent Sandbox API
---



丰富场景：支持 Code Interpreter、Browser Use 等多样化 AI Agent 沙箱场景。

接入方式：

- E2B 兼容 SDK（推荐）：提供与 E2B 生态兼容的接入方式，可沿用 E2B SDK 调用方式完成沙箱创建、连接、执行和回收，降低迁移改造成本。

- Sandbox CR（推荐）：提供声明式接入方式，可通过自定义资源对象管理 Sandbox 模板、运行参数和生命周期。

Kubernetes生态：全面深度融合 Kubernetes 原生生态体系方案，兼容现有存储、网络及运维监控体系。

## 操作

### 创建Agent Sandbox

https://help.aliyun.com/zh/cs/user-guide/create-an-agent-sandbox?spm=a2c4g.11186623.help-menu-2584271.d_2_1_0.60bd2360fYW7xs&scm=20140722.H_3022303._.OR_help-T_cn~zh-V_1


## 模型

在 e2b 模型之外，ACS 增加了模型对象，以 k8s CR 的形式：

- SandboxSet / 预热池
- SandboxClaim
- Sandbox: 对应 e2b 的 sandbox，在 k8s 下有 Sandbox CR




