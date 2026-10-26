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

## 仍待验证

本轮没有独立复现。待观察：Meta 是否会修订公开规则或系统提示使两者一致；成人对话记录的保存期限与删除机制是否有单独说明；同类提示在不同地区版本（例如日本版）上的行为是否一致。
