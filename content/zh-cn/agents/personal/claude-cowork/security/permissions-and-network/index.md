---
title: "审批与网络控制：沿动作路径理解权限"
weight: 10
date: "2026-10-21"
description: "审批与网络控制：沿动作路径理解权限"
materialType: "官方资料阅读与个人分析"
---

## 审批方式不能脱离工具理解

官方当前区分手动审批、自动审批和跳过审批。自动模式仍有动作检查，跳过模式则不是同一种机制；组织管理员还可以限制成员是否能使用这些选项。

我将它们视为任务执行策略，而不把某个模式名称当成全部安全边界。比如文件工具、连接器与屏幕操作的可检查粒度不同，一次同意也可能只针对某个动作或一定范围。

## 网络权限覆盖范围有限

入门帮助明确，代码执行环境的 egress 设置不覆盖 Web fetch / search，也不覆盖 MCP，包括 Chrome。架构中的外置代理有助于控制代码环境的网络路径，但整条任务链还有其他出口。

这提醒我在做运行平台时，要把网络控制与业务工具授权一起建模。如果任务还能通过邮件、连接器或浏览器传递信息，仅检查 Shell 出站域名并不能说明任务全部外部动作已被覆盖。

## 组织策略与运行中的撤权

Team / Enterprise 管理文档说明，不同层级限制取更严格的结果；连接器写操作和只读注解也会影响审批。我的理解是，服务端必须在实际调用时继续校验，而不能仅在创建会话时检查一次。

我准备从三个方向验证：审批界面是否表达真实后果；资源授权撤回后是否立即阻止后续动作；任务由连接器转为浏览器或屏幕操作时是否仍保持原先约束。

安全帮助对提示注入的讨论，也让我把“能读到什么”与“能执行什么”联合考虑。隔离代码环境控制了某条执行路径，但用户已授权的现实资源仍然需要独立保护。本轮未执行攻击测试，也没有将厂商防护描述写成攻击无法成功的保证。

原始资料：[Cowork 入门](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)；[安全说明](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely)；[Team / Enterprise 管理](https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans)；[架构说明](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview)。动态帮助按 2026-10-21 读取内容记录，未进行账号实测。
