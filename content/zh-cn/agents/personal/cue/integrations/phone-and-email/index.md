---
title: "Cue 电话与邮箱：独立身份对应的计量和生命周期"
linkTitle: "电话与邮箱"
weight: 110
date: 2026-10-21
description: >
  研究电话号码、通话额度、邮箱管理和订阅取消的边界，联系异步任务处理
materialType: "官方文档笔记"
---

来源：[Membership pricing — Cue phone-number subscriptions](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus)、[Mail Manus — Deleting a Cue agent’s email](https://help.manus.im/en/articles/12059745-how-can-i-use-mail-manus)、[Cancel subscription — Cue 专节](https://help.manus.im/en/articles/11711087-how-can-i-cancel-my-subscription)、[Refund — Cue phone-number purchases](https://help.manus.im/en/articles/11711102-how-can-i-request-a-refund-for-a-purchased-membership)  
作者 / 机构：Manus Help Center  
原始日期 / 版本：动态帮助页，仅显示相对更新时间；退款表述限定在初始发布阶段  
阅读与整理：2026-10-21  
材料性质：官方文档笔记；本轮未做账号实测

----

## 本轮确认的管理关系

电话订阅单独购买，通话占用 Cue 周额度而非 Manus credits。[计量说明](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus)

Cue 代理邮箱的删除入口，帮助页指向 Manus 的 Settings → Email；该页其余 Mail Manus 工作流说明，不直接当作 Cue 收件策略。[邮箱说明](https://help.manus.im/en/articles/12059745-how-can-i-use-mail-manus)

取消电话订阅与退款完成分别处理，发布初期的电话退款也有独立说明。[取消](https://help.manus.im/en/articles/11711087-how-can-i-cancel-my-subscription)、[退款](https://help.manus.im/en/articles/11711102-how-can-i-request-a-refund-for-a-purchased-membership)

## 我的理解：联系方式也是有生命周期的资源

如果号码长期用于预约和跟进，它的停用会影响任务能否继续接收外部回复。邮箱地址同样如此。对平台设计，我会把配置资源、绑定代理、接收事件、停用和历史查询分别处理。

我还想核实号码回收后的边界：旧任务会不会继续使用旧地址，未完成事项怎样通知用户，外部回复如何避免被关联到新的代理身份。这些是设计问题，当前文档没有提供完整答案。

## 通信触发与指令来源

一通来电或一封邮件，既可能提供任务所需事实，也可能要求代理作出新的承诺。我会分别追踪来源身份、已有委托和允许的动作，避免把通信对象的要求直接当成用户授权。

同样，我不能把 Mail Manus 的批准发送者规则和工作流邮箱额度直接写成 Cue 的实现。两者虽然存在管理入口上的联系，任务创建机制仍需分别核验。

## 后续实践要留下什么

我准备从自己的测试邮箱与可控联系人开始，记录发送与接收的时间、所属代理、任务关联、摘要与实际回执。费用则按资源订阅、通话用量和任务执行分别保留。目前没有购买号码、发信或拨号记录。
