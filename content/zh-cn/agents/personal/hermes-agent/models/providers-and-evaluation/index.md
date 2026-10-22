---
title: "模型与评估：主模型、辅助槽位与计划配置"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "模型与评估：主模型、辅助槽位与计划配置"
materialType: "资料阅读与个人分析"
---

## 我关注整条调用链

官方配置把主模型与压缩、视觉、审批等辅助任务分开。更换聊天模型不等于所有历史任务、辅助槽位和定时作业都采用新配置；当前 Cron 还有单作业固定、Cron 默认与主模型回退的选择顺序。

这对我的平台工作很重要：审批结果和记忆摘要也依赖模型，不能只记录最终回答使用哪个模型。相同任务的质量、耗时与成本，应关联全部调用和实际生效配置。

我准备使用一份资料包，比较事实引用、工具遵循、记忆写入和纠错，再改变单个模型条件。未运行测试前，不引用模型数量或厂商宣传作为系统可靠性证据。开源免费也不代表模型、设备与维护时间没有成本。

原始资料：[模型配置（官方中文）](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/configuring-models)；[Scheduled Tasks](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
