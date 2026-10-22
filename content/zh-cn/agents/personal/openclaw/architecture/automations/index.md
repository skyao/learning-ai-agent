---
title: "Automations：把触发、运行与投递分开检查"
weight: 40
date: "2026-10-21"
description: "Automations：把触发、运行与投递分开检查"
materialType: "官方资料阅读与个人分析"
---

资料：[Automations](https://docs.openclaw.ai/automation/cron-jobs)、[How automations work](https://docs.openclaw.ai/automation/cron-jobs/how-it-works)、[Heartbeat migration](https://docs.openclaw.ai/gateway/heartbeat)。阅读：**2026-10-21**。

## 当前调度关系

自动化在 Gateway 进程中运行，作业、状态和历史保存在共享 SQLite 状态库；Gateway 必须运行，定时工作才会触发。`openclaw automations` 是当前名称，`cron` 保留为别名。[入口](https://docs.openclaw.ai/automation/cron-jobs) / [运行机制](https://docs.openclaw.ai/automation/cron-jobs/how-it-works)

Heartbeat 监控已按普通作业管理，不再是可以脱离版本讨论的另一套永恒机制。[迁移](https://docs.openclaw.ai/gateway/heartbeat)

## 我拆出的执行链

| 阶段 | 我的验证问题 |
| --- | --- |
| 触发条件 | 时区、事件、下一次时间和错过的周期怎样表示 |
| 入队 | Gateway 忙碌或代理未准备好时是否保留请求 |
| 执行 | 采用哪个会话、模型与工具策略 |
| 产物 | 文件或外部对象是否真实改变 |
| 投递 | 结果发到哪里，投递失败是否误判执行失败 |

官方运行页区分错过的调度时段及补偿条件，不能简单概括成全部补跑或全部跳过。我会依据固定版本，分别测试运行中错过周期、停止服务后恢复和手工触发。

## 持续运行的运营条件

云服务产品把可用性隐藏在订阅后面，自建则需要我维护进程、模型与渠道连接。配置持久化解决重启后记得任务，却不会自行保证宿主持续在线。

对自己的运行平台，我会把工作成功、通知成功与用户验收分别保存。一次写入已完成而投递失败时，恢复不应无依据地重做整个工作。具体方案见 [待实测计划](../../practice/validation-plan/)。
