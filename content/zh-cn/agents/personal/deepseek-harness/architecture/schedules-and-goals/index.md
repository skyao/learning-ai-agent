---
title: "定时投递、持续目标与任务完成"
weight: 30
date: "2026-10-22T00:00:00+08:00"
description: "定时投递、持续目标与任务完成"
materialType: "资料阅读与个人分析"
---

## 两种继续工作的机制

当前调度由 Host 保存作业，到期后向原 Session 的持久收件箱投递，即使该会话尚未激活也可交付。Host 仍需要运行；调度记录的投递确认不代表模型已经执行，更不代表业务任务完成。

我特别记下两个边界：删除作业阻止后续触发，但不会清走已经入队的消息；会话收件箱与作业记录的更新并非一个原子事务，特定崩溃窗口可能造成重复投递。这意味着业务写入仍需自己的幂等标识，不能从“有持久调度”推断恰好执行一次。

Goal 是另一套同会话机制，区分目标的持久阶段和进程内继续执行的激活状态，并记录修订与轮数上限。我的理解是：提醒负责何时注入工作，Goal 负责目标推进状态，二者都没有替代最终交付物检查。

后续实验要分别观察重启、暂停目标、删除排程和撤销外部凭证。若只记录“隔天有一条回复”，看不出究竟是哪层恢复成功。

原始资料：[Host-wide Schedule](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/schedule)；[Same-session goals](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/goal)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
