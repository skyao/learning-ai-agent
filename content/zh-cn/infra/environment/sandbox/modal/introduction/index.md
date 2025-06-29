---
title: "介绍"
linkTitle: "介绍"
weight: 10
date: 2025-06-09
description: >
  Modal 介绍
---

## 介绍

https://modal.com/docs/guide

Modal 是一个云函数平台，它可以让您：

- 在几秒钟内远程运行任何代码
- 在代码中定义容器环境 （或使用我们的预构建后端之一）
- 水平扩展到数千个容器
- 只需一行代码即可连接 GPU
- 将您的函数用作 Web 端点
- 部署和监视持久计划作业
- 使用强大的原语，如分布式字典和队列

## 工作模式

Modal 获取您的代码，将其放入容器中，并在云中执行。

它在哪里运行？Modal 在自己的云环境中运行它。好处是我们为您解决了所有硬件基础设施问题，因此您无需做任何事情。你不需要弄乱 Kubernetes，Docker 甚至 AWS 帐户。

Modal 目前仅支持 Python，但将来可能会支持其他语言。

为了增加安全性，Modal 使用沙箱 gVisor 容器运行时运行容器。