---
title: "阿里云 AgentRun 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-17
description: >
  无状态 Serverless 撞上有状态 Agent：会话亲和与休眠唤醒是这道矛盾的产品答案。
---

## 当时解决了什么问题

Serverless 的默认契约是**无状态**：请求来了起实例，请求走了销毁，状态外置到数据库或对象存储。Agent 的运行形态恰好相反——一次任务是一段长达几分钟到几小时的轨迹，中间有工作副本、进程、打开的连接、累积的观察。把它硬塞进无状态函数，每一步都要重新装载，代价全落在延迟上。

AgentRun 的两个设计正面回答这道矛盾：**会话亲和**让同一个会话持续路由到同一份运行时状态；**休眠与唤醒**让这份状态在空闲时不被销毁、需要时快速回来。这不是新循环，是给循环换了一个能活得更久的宿主。

它同时把沙箱做成平台内置项（代码解释器、浏览器），意味着「Agent 在哪执行」从开发者的选型变成云厂商的目录项。

## 对后续 LLM 与 Agent 的影响

这条与同期 [AWS AgentCore](https://aws.amazon.com/blogs/aws/amazon-bedrock-agentcore-adds-quality-evaluations-and-policy-controls-for-deploying-trusted-ai-agents/)、以及 2026 年上半年 Anthropic、OpenAI、Google 的动作连起来看，是同一个转折：**云厂商开始把 Agent 运行时当作一种基础设施品类来提供**。

对时间线的意义在于时间点——2025 年 12 月。此时 Aries、SpecBox 这类测量与调度论文还没出现（2026 年），但产品侧的答案已经先摆出来了。**工程先于论文**，这条线在 2026 年被倒过来写成「基础设施第一次成为 Agent 史主线」。
