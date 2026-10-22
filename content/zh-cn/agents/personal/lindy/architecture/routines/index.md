---
title: "Routines：触发、工作内容与目的地"
weight: 30
date: "2026-10-22T00:00:00+08:00"
description: "Routines：触发、工作内容与目的地"
materialType: "资料阅读与个人分析"
---

## 把重复委托拆成三个对象

当前文档将 Routine 表达为 trigger、prompt、destination，并区分个人与工作空间范围。团队 Routines 由管理员创建和管理，个人 Routines 对应自己的助手。

我关注这种表达怎样帮助用户结束委托：关闭触发是否只影响下一次运行？已经进入审批或正在执行的动作如何处理？文档提供管理入口，完整恢复与幂等语义仍需测试。

我的平台设计会保留计划定义与每次运行的关联，记录采用的技能版本、读取来源和结果投递。当邮件连接过期、共享额度不足或审批人离线时，系统也需要给出明确原因，而不是只少发一次通知。

原始资料：[Routines](https://docs.lindy.ai/teammate/routines)；[Understanding Your Usage](https://docs.lindy.ai/account-billing/usage)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
