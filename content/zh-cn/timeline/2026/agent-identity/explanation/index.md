---
title: "Agent identity 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  异步多驾驶员下，借用用户 token 会让授权、审计、回放同时失真。组织级 Agent 必须有自己的 principal。
---

## 当时解决了什么问题

2025 年运行时默认「用你的 GitHub、你的浏览器、你的 OAuth」。这对个人副驾驶成立：委派者、凭证持有者、审计对象是同一个人。频道里一旦多人转向同一个正在跑的任务，借用某人的 token 会变成：走了的人仍在担责，后来的人越权，回放对不上当时权限。act-as-user 在同步、单驾驶员、短会话里勉强可过；在异步多驾驶员下，授权、审计、回放三条都不闭合。

博文把规则写成产品：共享工作区用服务账号；私信仍是个人助手。身份与「怎么表现」（指令、plugins、记忆）分开配置。按定义身份模型 **不是** Agent。它是循环能在组织里转的前提。没有它，[Tag](../../claude-tag/) 只能是又一个 Slack 机器人。

## 对后续 LLM 与 Agent 的影响

词接近一层新协议：Agent Identity、Agent Proxy、Access bundle、scope。MCP / Skills 在 Tag 里变成管理员按 scope 配的 bundle。[Cowork](../../cowork/) 的文件夹 principal 仍是用户，不要回填成已经切换到这套模型。A2A 仍偏企业平台；Tag 的多驾驶员是产品层，还不是跨厂商 agent 互操作。JIT 与权限交集（频道 profile ∩ 用户权限）在 2026-09 仍不要当已交付事实。
