---
title: "Profile、Bot 与运行中的 Agent"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "Profile、Bot 与运行中的 Agent"
materialType: "资料阅读与个人分析"
---

## 先对应产品对象

官方中文区分 Profile、Agent、桌面 Bot 和通信平台 bot。Profile 是持久主目录，保存配置、记忆、会话、技能和计划；桌面 Bot 是进入花名册并具有固定聊天的 Profile。平台账号的 bot token 又属于外部渠道身份。

我因此不会把“新建一个 Bot”只看成增加角色提示，也不会把子 Agent 的独立对话理解成完整的新 Profile。长期状态与临时委派需要不同的管理方式。

独立目录有助于避免配置混用，但不直接证明操作系统权限或网络已经隔离。对自己的运行平台，我会进一步检查不同 Profile 是否共用宿主用户、目录挂载和模型凭证，以及删除一个角色究竟删除哪些状态。这些仍是本轮提出的验证问题。

原始资料：[Profiles（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/profiles)；[Bot 模式（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/bot-mode)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
