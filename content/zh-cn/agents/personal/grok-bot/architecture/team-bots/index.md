---
title: "Team Bots：共享方法、个人访问与群聊交接"
weight: 30
date: "2026-10-21"
description: "Team Bots：共享方法、个人访问与群聊交接"
materialType: "官方资料阅读与个人分析"
---

原始资料：[Team Bots](https://docs.x.ai/grok-bot/team-bots)、[Message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration)。阅读：**2026-10-21**。

## 三种对象先分清

Team Bot 是团队共用的代理；模板是导入后各自维护的副本；个人 Bot 服务于自己的职责。Team Bot 有团队记忆和个人笔记，OAuth 连接使用提问者账号，而密钥型插件可能使用共同凭证。[Team Bots](https://docs.x.ai/grok-bot/team-bots)

同一页还区分执行位置：个人聊天用提问者自己的电脑，Slack 共享频道等使用该 Team Bot 的共享电脑；计划仍归创建者个人。这些规则不能直接套用到所有个人 Bot 的群聊。

## 对我而言，交接包含什么

我会安排研究、核验和写作三个职责，交接包至少保留目标、来源、未确认事项、产物位置和验收标准。这是我的实验设计，不是宣称产品已有这种结构化消息格式。

[协作帮助](https://docs.x.ai/grok-bot/chat-and-collaboration)描述了群聊、工作中追加指令和直接停止消息；停止不撤销已经完成的动作。

## 共享知识与共享权限不是同一项选择

一项团队经验可以对所有人可读，某个业务系统的访问却应该随请求者身份确定。相反，一把共同服务密钥可能把相同能力授予多人。只说明“聊天互相不可见”，还不足以解释这些业务动作。

对自己的平台，我希望交接记录同时保留请求人、实际授权主体和目标对象。这样在一个成员纠正事实、撤销访问或停止任务后，才有条件核对传播范围。

Team Bots 的复杂度适合作为个人代理进入团队后的对照，但本轮仍以个人委托为主，不把团队共享形态直接定义成所有 Personal Agent 的必要条件。
