---
title: "Agent identity（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2026-06-24 博文转述：不要以用户身份行事，权限跟频道走。
---

本页转述 **2026-06-24 概念博文当时写了什么**，不把文中的未来项（JIT 凭证、身份叠加）写成已经交付。

主要出处：Noah Zweben，2026-06-24，[Agent identity: a new access model for autonomous, team-wide AI](https://claude.com/blog/agent-identity-access-model)。中英对照：[身份模型博文](/data/2026/claude-tag/mechanism/agent-identity-access-model/)。机制文档：[How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)。

---

## 主张

单人 AI（一个人对一个助手）可以连自己的 Google Drive / GitHub，让模型**代表你**行事。多人体验如 Claude Tag：Claude 同时坐在共享频道里，调用的是**工作区**的工具与上下文，而不是某一个人的。因此 Claude 需要由管理员配置、绑到工作区的**自己的账号**。这套访问模型叫 **agent identity**。

博文解释：为何「act as the user」在异步、多驾驶员场景会垮——任务可能在用户已经离开后还在跑；频道里下一条指令可能来自另一个人；权限跟「最后说话的那个人」走会错乱、不可审计。公开频道应共享工作区身份；范围按**频道**划，而不是按人。例如为法务配的 Claude 不应把记忆种进工程频道。

文档补充（与博文同一产品）：频道里 Claude 用自己的服务账号（Slack 应用、GitHub App、其他已连接工具里的服务账号）；动作记在这些账号上。用户与 @Claude 的 **DM** 不适用这套身份，改跑在该个人的 claude.ai 与个人 connectors 上（GitHub PR 署名仍可能是 Claude GitHub App）。Owner 可禁用 DM。

## 当时不是什么

JIT（单次敏感动作当场批）、以及「频道 profile ∩ 用户权限」的身份叠加，博文当作**未来**方向。不要读成 6 月 24 日已经上线。自托管 runner 上 Access bundle 的限度见机制文档，不是这篇博文的中心声明。
