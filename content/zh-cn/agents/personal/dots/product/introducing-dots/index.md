---
title: "Dots 发布资料阅读：从一次委托到持续职责"
linkTitle: "发布与产品定位"
weight: 100
date: 2026-10-21
description: >
  对照中英文发布资料，理解 Dots 的持续职责、产品分工及个人代理与专家型代理的边界
materialType: "官方资料笔记"
---

英文来源：[Introducing dots](https://openai.com/index/introducing-dots/)  
中文对照：[dot 正式登场](https://openai.com/zh-Hans-CN/index/introducing-dots/)  
补充文档：[Meet dots](https://learn.chatgpt.com/docs/dots)  
作者 / 机构：OpenAI  
原始日期：发布文章为 2026-09-29；产品文档持续更新，未见独立发布日期  
阅读与整理：2026-10-21  
材料性质：官方资料笔记；本轮未做账号实测

----

## 资料要点

发布文章将 Dots 定位为承接持续职责的个人代理，配备云端电脑，可通过已连接的应用推进工作。个人 dot 与组织内的 specialist dots 分别介绍，后者仍是企业试点方向。中英文发布页属于同一来源。[中英文发布资料](https://openai.com/index/introducing-dots/)

产品文档将普通聊天、Work、Codex 和 dot 分别放在问答、任务交付、软件开发与长期职责的语境中。[产品分工](https://learn.chatgpt.com/docs/dots)

## 我怎样理解“持续职责”

我把一次任务理解为有明确完成条件的工作，把持续职责理解为需要反复发现变化、产生新任务并检查结果的承诺。例如，“整理本周发布动态”可以完成；“持续跟踪我关心的 Agent 技术，并维护学习资料”还需要判断什么变化值得进入笔记。

这种区别对平台设计有实际影响。任务完成后，职责可能仍然存在；职责暂停时，已经派生出去的任务也需要明确处置。它们最好有各自的状态与关联关系。这是我的设计理解，不是对 Dots 数据库或内部对象的确认。

我也会关注个人代理和组织代理的身份差别。个人代理沿用一个人的目标与授权，组织内的代理则需要明确职责归属、账号配置和人员变更后的接管方式。不能仅凭都叫 dot，就把企业预览中的身份能力写成每个个人账号的现状。

## 放回 Personal Agent 的定义

按照我在 [调研清单](../../../research-list/)中采用的定义，Dots 的公开定位覆盖个人上下文、持续工作与受托执行，因此适合作为主要案例。至于完成质量、长期可靠性和用户干预成本，还需要具体任务记录。

接下来我会沿 [任务与委派](../../architecture/tasks-and-delegation/)、[上下文与记忆](../../architecture/context-and-memory/)和 [控制语义](../../security/controls-and-cancellation/)继续理解这份产品承诺。
