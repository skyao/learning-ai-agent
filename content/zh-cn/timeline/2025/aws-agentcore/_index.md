---
title: "Amazon Bedrock AgentCore（re:Invent 2025）"
linkTitle: "[产品]AWS AgentCore"
分类: "产品"
标签:
  - "工程化"
weight: 115
date: 2026-09-17
description: >
  2025-12-02。云厂商把工具调用裁决移到模型推理循环之外：策略拦截 Gateway 调用，评估实时看行为质量。
---

AWS，2025-12-02（re:Invent）。AgentCore 新增的策略（Policy）在**模型推理循环之外**拦截 Gateway 的工具调用，按细粒度权限放行或拒绝；评估（Evaluations）按真实行为给正确性与有用性打分；记忆加了情景策略；运行时支持双向流式，用于语音 Agent。前两项当时是 Preview，2026 年 3 月才 GA。

1. [材料](./source/) — 按 AWS 官方博客转述：策略、评估、记忆、双向流式，以及 GA 时间。
2. [讲解](./explanation/) — 「拒绝」从模型内决策移到平台层；这是 2026 组织身份与权限线的早期形态。

当时公告：[AgentCore adds quality evaluations and policy controls](https://aws.amazon.com/blogs/aws/amazon-bedrock-agentcore-adds-quality-evaluations-and-policy-controls-for-deploying-trusted-ai-agents/)。
