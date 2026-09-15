---
title: "AutoGen（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Wu 等 2023：用多 Agent 对话构建 LLM 应用。
---

Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Awadallah, Ryen W. White, Doug Burger, Chi Wang. *AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation*。Microsoft Research 等。arXiv 2023-08。[arXiv:2308.08155](https://arxiv.org/abs/2308.08155)。

---

## 摘要

AutoGen 是开源框架，让开发者通过**多个可以互相交谈的 agent** 构建 LLM 应用。agent 可定制、可对话，后端可以是 LLM、人类输入、工具，或它们的组合。交互行为也可灵活定义。自然语言和代码都能用来编排不同应用的对话模式。作者在数学、编程、问答、运筹、在线决策、娱乐等示例上展示框架有效。

## 框架

两个核心概念：

**可对话 agent。** 能收发消息、维护内部上下文。能力来自三类后端：LLM（角色扮演、根据对话推进、写代码）、人（按配置在若干轮征求输入，默认 UserProxy 可设频率与可跳过）、工具（执行代码或函数调用）。`ConversableAgent` 是最高层抽象；预置的 `AssistantAgent` 偏 LLM 助手，`UserProxyAgent` 偏人类代理兼代码/函数执行。

文中示例：助手生成方案，用户代理征求人输入或执行代码，再把结果作为反馈送回助手。

**对话式编程。** 把复杂工作流收成 agent 之间的对话：计算是「为了回话采取的动作」，控制流是「谁在何时对谁说话」。统一接口包括 send/receive 与 `generate_reply`。默认 **auto-reply**：收到消息就生成回复并送回，直到终止条件。控制可以用自然语言提示（例如出错就再写代码，完成时输出 `TERMINATE`）、Python 代码（最大自动回复数、人工模式、注册自定义回复函数），以及两者切换（含 LLM 提出的 function call）。除静态来回外，还支持动态选下一个说话者的群聊（`GroupChatManager`）。

## 应用与限度（文中可见）

示例包括：两只内置 agent 解 MATH；检索增强问答（助手在上下文不够时回复 UPDATE CONTEXT 以触发再检索）；ALFWorld 上加一只常识 grounding agent，相对两 agent 变体平均约 15% 提升；把 OptiGuide 编码工作流从 430 行以上收到约 100 行，多 agent 相对单 agent 在识别不安全代码上 F1 更高。伦理节写明：让 LLM agent 通过执行代码或函数调用改外部环境（例如装包）有风险，需要额外防护。文中称工作仍偏早期实验。
