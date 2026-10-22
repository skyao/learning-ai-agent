---
title: "持续目标、Cron 与任务恢复"
weight: 30
date: "2026-10-22T00:00:00+08:00"
description: "持续目标、Cron 与任务恢复"
materialType: "资料阅读与个人分析"
---

## 持续执行不是单一循环

`/goal` 在同一会话中通过判定与续做推进目标；Kanban 管理多项任务；Cron 则按时间或事件发起执行。我将它们分别理解为持续推进、任务组织和触发，不从支持其中一个推定其他全部成立。

Cron 当前支持新会话、附加技能及投递目的地。恢复说明特别区分执行结束、持久投递交接和实际发送；发送结果不明时不会一概自动重发。我关注的是重复副作用怎样被限制。

对平台开发，这意味着计划、触发身份、运行和通知应分别留证。宿主与网关仍是实际执行依赖，保存了作业不等于关机后能推进。后续会验证忙碌、中断、审批等待和重新启动，而不是只检查一次提醒能否出现。

原始资料：[Persistent Goals](https://hermes-agent.nousresearch.com/docs/user-guide/features/goals)；[Scheduled Tasks](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
