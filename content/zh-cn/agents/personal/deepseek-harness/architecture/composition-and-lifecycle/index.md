---
title: "插件组合、Profile 与运行生命周期"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "插件组合、Profile 与运行生命周期"
materialType: "资料阅读与个人分析"
---

## 运行时也是配置结果

官方架构把工具、模型、循环、会话日志等能力放进 Cordis 插件与服务体系；Profile 定义运行组合，分发包、配置补丁与本地配置共同决定最终能力。Web、Headless、SDK、SDK-minimal、ACP 并不是同一套界面换皮后拥有完全相同的服务。

这让我想到平台中的“能力可用”应有两个判断：代码已经存在，以及当前作用域是否真的加载了该服务。SDK-minimal 特别适合作为反例，不能把完整 Web 的自动化和工具目录一并假设进去。

生命周期资料还区分会话中的持久事实与进程内控制事件。一次成功的模型调用，即使文本为空，也和失败、重试或取消的尝试不同。我的理解是，观测系统应保留这些层次，避免只用最后一段回复判断执行是否成功。

插件卸载能清理受其生命周期管理的进程内效果，但已经发出的邮件、修改的外部数据不会因此自动回滚。这一点属于我从可逆效果机制推导出的业务边界，仍需具体工具验证。

原始资料：[Architecture](https://deepseek-harness.github.io/deepseek-harness/en/reference/)；[Agent lifecycle](https://deepseek-harness.github.io/deepseek-harness/en/reference/agent-lifecycle)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
