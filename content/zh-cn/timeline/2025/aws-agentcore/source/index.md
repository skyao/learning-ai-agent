---
title: "AWS AgentCore（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-17
description: >
  按 2025-12-02 AWS 博客转述：策略在推理循环外裁决、实时评估、情景记忆、双向流式。
---

主要出处：AWS，2025-12-02，[Amazon Bedrock AgentCore adds quality evaluations and policy controls](https://aws.amazon.com/blogs/aws/amazon-bedrock-agentcore-adds-quality-evaluations-and-policy-controls-for-deploying-trusted-ai-agents/)；同日 Strands Agents SDK 见 [TypeScript 预览公告](https://aws.amazon.com/about-aws/whats-new/2025/12/typescript-strands-agents-preview/)（12-03）。本页不复制公告全文。

---

## 当时说了什么

- **Policy in AgentCore（Preview）**：在工具真正执行之前**拦截 AgentCore Gateway 的调用**，按细粒度权限决定放行或拒绝。公告的措辞值得抄下来：策略**施加于 agent 推理循环之外**，把 Agent 当作「自主行动者」——它的决定在到达工具、系统或数据之前**需要被校验**。策略可以用自然语言或开源策略语言 Cedar 写。
- **AgentCore Evaluations（Preview）**：按**真实运行行为**评估质量，内置正确性、有用性等维度，也可自定义；结果在 CloudWatch 里看并可告警。
- **AgentCore Memory 的情景（episodic）策略**：长期记忆的一种，让 Agent 从经历中学习。
- **AgentCore Runtime 双向流式**：用户与 Agent 可以同时说话，用于语音 Agent。

## 时间线要分清

- 2025-12-02 是 **Preview**。公告页顶部有编者更新：**Policy 2026-03-03 GA，Evaluations 2026-03-31 GA**。写 2025 时不能写成已经可用。
- 同日发布的 Strands Agents SDK 变化属于**开发面**：TypeScript 支持进入预览、边缘设备支持 GA、steering 实验特性。语言与部署位置的变化，不是循环语义的变化。

## 当时不是什么

不是新模型，也不是新的 Agent 架构。AgentCore 不改循环怎么转，改的是**循环之外那一圈**：谁来判断一次工具调用该不该发出去、谁来给整段行为打分。这两件事此前默认由开发者自己写在应用里，或者干脆交给模型。
