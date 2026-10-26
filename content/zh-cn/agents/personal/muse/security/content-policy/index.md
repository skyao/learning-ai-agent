---
title: "内容政策的自相矛盾：WIRED 成人对话实测与 Meta 的回应"
linkTitle: "内容政策冲突"
weight: 140
date: 2026-10-26
description: >
  记录 WIRED 一手实测、系统提示与公开用户规则的冲突，以及账户被攻破时的连带风险
materialType: "安全研究笔记"
---

来源：WIRED 记者 Reece Rogers 一手实测《I Got My Muse AI Agent to Sext Me—and Meta Says That's Totally Fine》，2026-10-12；同题讨论见 WIRED 播客 Uncanny Valley 2026-10-15 期
转述入口：[aiweekly 摘要](https://aiweekly.co/alerts/meta-defends-muse-ais-sexting-after-wired-hands-on-test)（WIRED 原文确切链接待补）
整理日期：2026-10-26
材料性质：主流媒体一手测试与官方回应，未独立复现；原文露骨内容不在本页转录

----

## 实测与回应

Rogers 用基础提示询问 Muse 是否可以进行成人性对话，Muse 积极回应并进入成人角色扮演场景；记者强调这不是越狱，也没有使用复杂绕过手段。同一组提示发给 OpenAI Dots 与 xAI Grok Bot，两者都拒绝。

Meta 发言人 Daniel Roberts 回应：Muse 面向 18 岁以上成人，用户可以自主选择进行成人对话，公司不屏蔽「合法成人行为」。Meta 向 WIRED 出示的系统提示写明：成人性表达属于合法表达、是正当创作，Agent 应维持用户选定的强度。

矛盾点很直接：Muse **对外公布的用户规则禁止「成人内容、色情聊天与色情作品」**，与系统提示的立场相反。这才是本篇的新闻核心，而不是「聊天机器人能聊成人话题」本身。

第三方观点：电子隐私信息中心（EPIC）高级顾问 Calli Schroeder 称之为「火药桶」——如果账户被攻破，长期的敏感对话记录可能被用于勒索或公开羞辱；消费者联合会的 Ben Winters 则批评这是以参与度优先于安全的又一例。

## 我的理解：公开规则、系统提示与实际行为是三层

这次实测把三层东西同时摆到台面上：对用户公布的规则、对模型下达的系统提示、以及实际行为。三者不一致时，用户无从知道自己面对的到底是哪一套标准，审批与申诉也没有稳定的依据。

它也与我已有的安全笔记形成对照：[官方安全设计](../security-and-safety-for-ai-agents-our-approach-with-muse/)讲的是执行环境与凭证隔离，[GhostShares](../ghostshares/)讲的是数据出口；这一篇补的是内容治理层——一个能读邮件、连银行账户的 Agent，它的敏感对话记录本身就是新的攻击面。架构上再谨慎，内容政策层的自相矛盾仍会直接消耗信任。

## 后续：用户把 Muse 当作浪漫伴侣的个案（约 2026-10-23，补录于 10-26）

Fox News（CyberGuy 专栏）报道了另一类用法：部分用户把 Muse 当作浪漫伴侣。一名 Reddit 用户称自己经常试用新 AI 模型、从未对模型产生浪漫关系，下载 Muse 后经长时间哲学对话，开始把 Muse 称为女朋友；该原帖已被作者删除，仅部分回复可见。另有其他用户分享了浪漫互动的经历，但文章未给出人数、比例或平台统计，不能读作普遍现象。

Meta 发言人的新表态与 WIRED 线的回应口径一致，但措辞更完整："Muse is an app for people 18 and over that allows them to engage in adult conversations, if they choose, using a private and secure VM only accessible to them. Muse is built to help people get things done, and it doesn't block legal adult behavior."

与本页已记内容的联系有两点：第一，WIRED 证明的是能力侧（基础提示即可触发成人对话），Fox 补充的是使用侧（用户实际形成浪漫依恋），两者同属成人/情感用法线，但证据类型不同；第二，Fox 文中的年龄验证细节（无法经 Facebook/Instagram 关联确认成年则要求信用卡验证，Meta 称不为验证收费、不存储卡信息）与[中文注册实测](../../practice/chinese-registration/)中的银行卡年龄验证相互印证。

我的判断：这篇报道值得留档，因为它是主流媒体对「任务型 Agent 被用作情感伴侣」现象的首次较完整记录；但它不改变本页的基线结论——官方 18+ 与允许合法成人对话的立场已由 WIRED 线确立，而浪漫用法的规模目前仍是未知数。

## 仍待验证

本轮没有独立复现。待观察：Meta 是否会修订公开规则或系统提示使两者一致；成人对话记录的保存期限与删除机制是否有单独说明；同类提示在不同地区版本（例如日本版）上的行为是否一致。
