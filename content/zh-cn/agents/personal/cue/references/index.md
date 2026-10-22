---
title: "Cue 资料索引与学习路线"
linkTitle: "资料索引"
weight: 70
date: 2026-10-21
description: >
  汇集中英文来源、资料更新与证据缺口，支持长期阅读、比较和实践回查
materialType: "资料索引"
---

这是我这轮 Cue 调研的来源入口，**检索与阅读截至 2026-10-21**。我优先核对 Manus 官方发布、帮助中心和开发者商店说明，再补充中英文外部观察。不同语言版本与官方内容的转述，不视为独立验证。

本轮形成资料阅读、架构理解和实验方案，没有账号实测。原始资料中的产品声明、第三方的使用经历和我的推断分别记录。

## 1. 我的阅读脉络

我先读 [发布与产品定位](../product/introducing-cue/)和 [开放更新](../product/access-and-updates/)，再从 [身份与运行边界](../architecture/identity-and-runtime/)理解资源归属，沿 [多代理交接](../architecture/multi-agent-handoffs/)与 [记忆和自动化](../architecture/memory-and-automations/)追踪持续任务。

接着看 [通信资源](../integrations/phone-and-email/)、[渠道与 Skills](../integrations/channels-and-skills/)、[服务二维码](../integrations/service-qr-codes/)和 [钱包权限](../security/wallet-and-approvals/)，最后用 [数据生命周期](../security/account-and-data-lifecycle/)检查管理范围。

[上下文工程旧文](../architecture/context-engineering-background/)提供历史技术背景，[Cascade 评估笔记](../models/cascade-and-evaluation/)记录厂商声明的适用条件。阶段性理解放在最后的 [调研总结](../summary/)。

## 2. 原始来源

帮助中心只显示相对更新时间时，我保留其为动态资料，不据此虚构发布日期。商店记录保留区域与读取时点，版本号不自动对应所有用户。

| 原始日期 / 状态 | 原始资料 | 语言与性质 | 本地笔记 |
| --- | --- | --- | --- |
| 2026-09-28 | [Introducing Manus 2.0](https://www.manus.im/blog/introducing-manus-2-0) / [中文发布](https://manus.im/zh-cn/blog/introducing-manus-2-0) | 英文 / 中文，官方发布 | [发布与定位](../product/introducing-cue/) / [Cascade 评估](../models/cascade-and-evaluation/) |
| 动态帮助页 | [Manus 2.0 有哪些新变化](https://help.manus.im/zh-CN/articles/17190150-manus-2-0-有哪些新变化) | 中文，官方帮助 | [团队交接](../architecture/multi-agent-handoffs/) / [自动化](../architecture/memory-and-automations/) |
| 动态商店页；本轮见 26.18.2 | [Cue by Manus，美国区 App Store](https://apps.apple.com/us/app/cue-by-manus/id6808613358) | 英文，开发者说明、版本和内购条目 | [开放与更新](../product/access-and-updates/) |
| 页面更新 2026-10-20 | [Cue by Manus，Google Play 英文页](https://play.google.com/store/apps/details?hl=en&id=ai.manus.agents) | 英文，开发者应用说明 | [记忆与自动化](../architecture/memory-and-automations/) / [服务二维码](../integrations/service-qr-codes/) |
| 动态帮助页 | [多消息平台连接](https://help.manus.im/en/articles/14178640-can-i-connect-multiple-messaging-agents-at-once-in-cue) | 英文，官方配置说明 | [渠道与 Skills](../integrations/channels-and-skills/) |
| 动态帮助页 | [Skills 分享与使用，其中 Cue 专节](https://help.manus.im/en/articles/14753565-how-to-share-and-use-skills-in-manus) | 英文，官方配置边界 | [渠道与 Skills](../integrations/channels-and-skills/) |
| 动态帮助页 | [会员定价，其中 Cue 电话订阅专节](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus) | 英文，官方计量说明 | [电话与邮箱](../integrations/phone-and-email/) |
| 动态帮助页 | [Mail Manus，其中 Cue 邮箱删除专节](https://help.manus.im/en/articles/12059745-how-can-i-use-mail-manus) | 英文，官方管理说明 | [电话与邮箱](../integrations/phone-and-email/) |
| 动态帮助页 | [订阅取消，其中 Cue 专节](https://help.manus.im/en/articles/11711087-how-can-i-cancel-my-subscription) | 英文，官方取消说明 | [电话与邮箱](../integrations/phone-and-email/) |
| 动态帮助页；含发布初期条件 | [退款，其中 Cue 电话购买专节](https://help.manus.im/en/articles/11711102-how-can-i-request-a-refund-for-a-purchased-membership) | 英文，官方退款说明 | [电话与邮箱](../integrations/phone-and-email/) |
| 动态帮助页 | [账号删除](https://help.manus.im/en/articles/11711969-how-can-i-delete-my-account) | 英文，官方账号范围 | [账号与数据](../security/account-and-data-lifecycle/) |
| 动态帮助页 | [删除后的数据保留](https://help.manus.im/en/articles/11711823-will-my-personal-data-be-deleted-after-i-delete-my-account) | 英文，官方数据说明 | [账号与数据](../security/account-and-data-lifecycle/) |
| 2025-07-18 | [Context Engineering for AI Agents](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)，Yichao “Peak” Ji | 英文，官方历史技术文章 | [上下文工程背景](../architecture/context-engineering-background/) |
| 发布 2026-10-02；页面更新 10-20；测试 10-01 | [What Is Manus Cue?](https://zentor.ai/blog/what-is-manus-cue)，Zentor Editorial | 英文，第三方小样本观察，含自家产品推广 | [外部观察](../practice/external-observations/) |
| 2026-09-29 | [Manus 发布 2.0 版和个人智能体 CUE](https://www.36kr.com/p/4003830453686403)，财经涂鸦，MD / tuya | 中文，36氪授权发布 | [外部观察](../practice/external-observations/) |
| 2026-09-29 | [Manus 这次，直接冲着“人”去了](https://www.36kr.com/p/4004213133596291)，字母AI | 中文，产品分析 | [外部观察](../practice/external-observations/) |

## 3. 这轮需要保留的区别

| 容易合并的信息 | 我的记录方式 |
| --- | --- |
| 独立应用与共用账号 | 产品入口、账号管理和具体数据访问分别核对 |
| 共享基础设施与共享配置 | 不将 Manus Skills、会员权益和工具默认迁移到 Cue |
| 每个代理的电脑与项目 Cloud Computer | 不假定两者资源规格、购买条件和生命周期一致 |
| 预算内支付与用户确认 | 共同研究批准范围，不推定所有交易都可无人确认 |
| 发布时等待 iOS 审核与当前商店条目 | 按资料日期分别保留 |
| Memory / Dream 名称与算法 | 能力描述与内部机制分别标记 |
| 厂商效率数据与 Cue 效果 | 不从一项 Harness 测试推导全部产品任务表现 |

## 4. 待实测与待补资料 {#待实测问题}

- 我的账号实际可用的入口、资源、额度和地区条件。
- 多代理是否独立保存上下文，群聊交接具体传递什么。
- 目标修改、取消和权限撤销如何传播到其他代理及已有任务。
- 邮件、电话与计划重复触发时，如何关联工作并避免重复副作用。
- Memory / Dream 的可查看、更新与删除能力。
- 钱包预算与审批的实际执行位置、失败回执及并发行为。
- 运行环境的回收恢复、存储与凭证隔离方式。
- 单代理和多代理完成同一项职责的质量、人工介入与整体成本。

[实践计划](../practice/validation-plan/)记录了可执行的观察方案，实际结果后续另立文章。

## 5. 本轮读取缺口与后续跟踪

[Cue 官网](https://www.cue.im/)和 [隐私政策](https://manus.im/privacy)本次没有返回可读正文；英文 Manus 2.0 帮助页也未能读取，相关内容用中文官方帮助补充。以上是资料获取限制，不证明网页或服务不可用。

我会继续看官方帮助、商店版本与 [Manus 博客](https://www.manus.im/blog)。动态资料变更时补充新记录，不把过去的宣传描述、某个商店区域或单次第三方任务当作全局现状。

后续我会继续研究“代理拥有身份以后，平台需要管理什么”，具体判断仍回到本地笔记与实践证据。
