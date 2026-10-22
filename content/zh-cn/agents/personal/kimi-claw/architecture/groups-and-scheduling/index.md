---
title: "Conductor、Worker 与定时工作"
weight: 30
date: "2026-10-22T00:00:00+08:00"
description: "Conductor、Worker 与定时工作"
materialType: "资料阅读与个人分析"
---

## 群聊增加了目标与派生任务

群聊帮助区分 Kimi Conductor 的组织职责与各 Claw 的执行职责，并用 Threads 保存子任务上下文。用户还可以携带自己的 Claw 加入，参与者与设备的资源范围因此更加复杂。

我关注协调者怎样传递目标变化、如何合并结果，以及成员离开或设备断线后谁负责未完成工作。独立子上下文不能直接证明文件、凭证和权限隔离。

使用技巧另提供定时委托，并提醒整点拥塞。它能形成触发条件，但精确调度、重试、错过周期与取消传播还需实测。我不会从“定时运行”推成任意长期目标都会自动完成。

原始资料：[Claw Group Chat](https://www.kimi.com/en/help/kimi-claw/kimiclaw-group-chat)；[Usage Tips 英文指南](https://www.kimi.com/en/help/kimi-claw/usage-tips)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
