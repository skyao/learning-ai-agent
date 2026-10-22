---
title: "Gateway 与 Node：控制面和执行位置怎样分开"
weight: 10
date: "2026-10-21"
description: "Gateway 与 Node：控制面和执行位置怎样分开"
materialType: "官方资料阅读与个人分析"
---

原始资料：[Gateway architecture](https://docs.openclaw.ai/concepts/architecture)。动态文档，阅读：**2026-10-21**。

## 文档的组件关系

官方架构把长期 Gateway 作为渠道连接与控制入口，客户端通过 WebSocket 请求和订阅事件；Node 也连接同一入口，但声明设备角色与可用命令。默认绑定地址为本机回环。[架构文档](https://docs.openclaw.ai/concepts/architecture)

## 我的职责理解

| 组件 | 我关心的状态 |
| --- | --- |
| 通信渠道 | 账号连接、消息标识与回执 |
| Gateway | 请求接纳、运行标识、状态事件 |
| Agent 会话 | 目标、上下文与一次运行 |
| Node | 设备身份、在线状态和可执行命令 |
| 外部工具 | 业务副作用及最终回执 |

我用这张表理解请求从消息到动作的链路，不据此假定所有工具都在 Gateway 主机执行。

## 接纳请求与工作完成

架构协议中的 accepted 与最终状态区分，提醒我平台需要让用户知道“已经接手”和“已经交付”的不同。客户端断线后，运行能否继续、结果怎样回到原入口，也需要有可查询依据。

对自己的平台，我希望动作与运行标识关联，恢复时能够核对哪些请求已提交。仅重发一次自然语言消息，很难判断会继续旧任务还是创建新任务。

## Node 使设备参与变得具体

手机和桌面可以提供不同能力，设备配对也涉及身份与授权。远程 Gateway 在线，不意味着离线设备的命令仍能执行。后续实验会分别改变客户端、Node、Gateway 和模型连接状态，观察每一层的行为。

调度对 Gateway 的依赖见 [Automations](../automations/)，执行位置与审批见 [策略笔记](../../security/execution-policy/)。
