---
title: "Guardrails 与凭证：共享线程的规则有适用范围"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "Guardrails 与凭证：共享线程的规则有适用范围"
materialType: "资料阅读与个人分析"
---

## 详细文档限定了控制入口

Integrations 帮助明确：Guardrails 主要覆盖共享 Slack 线程中的写操作，读取不受这套 Guardrails 管理，Web 私聊、Slack DM、iMessage / SMS 也不在同一范围。这比价格页“外部影响都需批准”的概括更具体，我保留差异并优先按实际入口验证。

个人连接与团队连接也不同；共享连接意味着其他成员可能代表同一个服务账号工作。Credentials 提供独立密钥保存、轮换、共享和撤销，轮换并不会自动取消原有共享。

对自己的平台，必须让用户知道批准的是哪个动作、谁可以批准，以及改变规则影响个人还是整个工作空间。没有实测之前，不把某个入口的审批承诺泛化到所有替代执行路径。

原始资料：[Integrations](https://docs.lindy.ai/integrations/overview)；[Credentials](https://docs.lindy.ai/integrations/credentials)；[Pricing](https://www.lindy.ai/pricing)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
