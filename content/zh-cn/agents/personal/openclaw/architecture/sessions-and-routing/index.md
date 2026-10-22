---
title: "消息路由与会话：连续性和隔离怎样取舍"
weight: 20
date: "2026-10-21"
description: "消息路由与会话：连续性和隔离怎样取舍"
materialType: "官方资料阅读与个人分析"
---

原始资料：[Session management](https://docs.openclaw.ai/concepts/session)、[Multi-agent routing](https://docs.openclaw.ai/concepts/multi-agent)。阅读：**2026-10-21**。

默认 DM 以主会话延续上下文，`dmScope` 可以按发送者、渠道和账号拆分。多代理则通过 bindings 路由到有独立工作区、状态与会话历史的代理。[会话](https://docs.openclaw.ai/concepts/session) / [多代理](https://docs.openclaw.ai/concepts/multi-agent)

工作区是默认目录，不是硬沙箱；插件的全局存储也不因增加一个代理就全部分开。[多代理边界](https://docs.openclaw.ai/concepts/multi-agent)

## 我先区分四种标识

用户身份、渠道账号、对话线程和代理标识分别回答不同问题。来自同一个人的两条渠道消息，可能应共享学习偏好，但不一定应该共用全部任务上下文。

对自己的平台，我会显式记录路由规则和命中结果。发生“代理记错人”时，需要能区分身份识别、会话选择与记忆检索，不能全部归因于模型幻觉。

## 连续性也可能造成混用

单人使用的主会话很方便，多人接入后却可能混入不同人的私聊。会话分开后，宿主文件和工具权限是否仍共享，又是另一项问题。

因此我不会用“每代理有工作区”直接解释多租户隔离。信任边界的官方范围见 [安全笔记](../../security/trust-boundary/)。

## 我的实验问题

用两名虚构用户、两个渠道和两项职责检查四种情况：是否串话、是否正确恢复旧任务、是否从其他代理文件读取信息，以及改变路由后旧状态怎样处理。

状态路径与数据库结构以实验版本核对。本轮资料说明当前 SQLite 会话存储，但没有完成对固定提交的数据库或代码检查。
