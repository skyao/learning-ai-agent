---
title: "Claude Managed Agents（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 2026-04-08 工程博客与官方文档转述：三个接口、pet 到 cattle、凭证不进沙箱、权限与计费。
---

主要出处：Anthropic 工程博客，2026-04-08，[Scaling Managed Agents: Decoupling the brain from the hands](https://www.anthropic.com/engineering/managed-agents)；官方文档（Managed Agents overview 等）与定价页。本页不复制原文。

---

## 拆开的是哪三样

工程博客的说法是把 Agent 虚拟化成三个接口：

- **session** —— 「发生过什么」的可追加日志；
- **harness** —— 调用 Claude、并把 Claude 的工具调用路由到相应基础设施的那个循环；
- **sandbox** —— Claude 跑代码、改文件的执行环境。

三者可以各自替换实现而互不干扰。博客写得很直白：**对接口的形状有主张，对接口后面跑什么没有主张。**

## 为什么拆：从 pet 到 cattle

最初三样装在一个容器里。好处是「文件编辑就是直接的系统调用，没有服务边界要设计」。但这就养了一只 **pet**：容器挂了，session 就没了；容器不响应，只能护理它。而排查只有 WebSocket 事件流一个窗口——**harness 的 bug、事件流丢包、容器离线，三者长得一模一样**，工程师没法定位。

还有一个假设被写死在 harness 里：Claude 要处理的东西就在容器旁边。客户要把 Claude 接到自己的 VPC，就只能对等网络，或者在客户环境里跑 Anthropic 的 harness。

解耦之后：harness 像调任何工具一样调容器，容器死了就当作一次**工具调用错误**交回给 Claude；Claude 决定重试就重建一个。harness 自己也变成 cattle，可以从最后一条事件续跑。

## 凭证边界

博客的原话是：结构性的修法是**保证 token 永远不可能从跑模型生成代码的沙箱里被够到**。Git 场景在沙箱初始化时克隆仓库并把 token 接进本地 remote；自定义工具走 MCP 加 vault。**harness 始终不知道任何凭证的存在。**

## 产品形态与计费

官方文档把它定义为「预置的、可配置的 agent harness，跑在托管基础设施上；适合长时程任务与异步工作」，核心概念是 Agent / Environment / Session / Events。当时是 **Beta**。

定价页写明：标准 token 费率照收，**外加 $0.08 per session-hour 的 active runtime**；运行时按毫秒计，只在会话状态为 running 时累加——空闲等消息、等工具确认、重排、终止都不计费。文档另说明：**session runtime 取代了原来的容器小时计费模型**，不再单独收容器费用。

权限策略有三档：`always_allow` / `always_ask` / `auto`；文档写明 agent 自带工具默认 always_allow，MCP 工具默认 always_ask。

## 当时不是什么

不是新模型，也不是新循环——循环形状没变。它改的是循环**住在哪、活多久、以什么身份**：可以有**自托管沙箱**（编排留在 Anthropic 侧，工具执行留在你自己的基础设施里），可以把记忆挂在沙箱的 `/mnt/memory/` 下并保留不可变版本，可以按 session 设预算。这些在 2026 年 4 月都还是 Beta。
