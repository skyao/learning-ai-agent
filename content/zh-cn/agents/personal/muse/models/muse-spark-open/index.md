---
title: "Muse Spark Open：模型开放权重与 Agent 产品的边界"
linkTitle: "Spark Open 的开放范围"
weight: 120
date: 2026-10-21
description: >
  记录 10 月 15 日的模型更新，辨别开放权重、本地运行与完整个人代理
aliases:
  - /agents/personal/muse/updates/muse-spark-open/
materialType: "官方资料笔记"
---

来源：[Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)  
作者 / 机构：Meta AI Research，页面未单独署名个人作者  
原文日期：2026-10-15  
整理日期：2026-10-21  
材料性质：相关模型资料，作为 Muse 研究的背景补充

----

## 原文要点

官方发布 Muse Spark Open 的模型权重，介绍多模态理解及长流程 Agent 工作，并展示在特定桌面硬件上通过 Muse Code 运行的案例。权重采用 Muse Model License，包含商业条款。具体硬件、推理框架和许可条件应到原文及模型卡核对。

## 我的理解：分别看模型、执行系统和服务

读这次公告时，我按自己做平台的职责边界拆成三层：

- 模型层：权重、推理框架、运行资源和许可证。
- 执行系统：Harness、工具、任务调度、记忆和权限管理。
- 产品服务：账号、云端环境、支付与对外通信。

本次开放为模型层提供了新的研究入口。完整个人代理仍需要执行系统和服务配合，不能由此推断 Muse 服务整体开源，也不能把 Muse Code 的本地案例视为 Muse App 的默认架构。

## 对后续自建比较的启发

如果尝试本地搭建，我会分别记录模型、Harness 和连接器的来源与版本，核对各自许可，再观察任务完成质量与资源开销。这样才能判断迁移成本究竟来自推理部署，还是来自工具、身份和持久状态等产品能力。

这里尚无本地部署结果。关联资料：[Gadget SDK](../../integrations/muse-gadgets/)开放的是设备接入能力，属于另一层的参考实现。
