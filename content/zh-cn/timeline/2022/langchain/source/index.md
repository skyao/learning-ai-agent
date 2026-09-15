---
title: "LangChain 开源出现（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2022-10 的 PyPI 0.0.1 与仓库生日转述：可组合的 LLM 应用胶水。
---

LangChain 在 2022 年没有对应研究论文。本页转述 **包刚出现时公开说了什么**，不以 2023 公司、2024 拆包、LangGraph 回填。

主要出处：

- GitHub 仓库创建于 **2022-10-17**（当时账号路径 `hwchase17/langchain`）
- PyPI `langchain` **0.0.1**，上传于 **2022-10-25**，简介 *Building applications with LLMs through composability*
- 0.0.1 说明文档（包页 README）

公司侧：Harrison Chase 后来写明，当时没有公司、没有宏大计划；**2023-02** 才创办公司，认定这个包只是第一件工具。本页不展开融资与后续产品。本页不复制 README 全文。

---

## 产品主张（0.0.1）

LLM 正在变成能做出此前做不出的应用的技术。但**单独用 LLM 往往不够**——真正的力量来自把它们和**其他计算或知识来源**组合起来。这个库协助开发那类应用，目标写成三条：

1. 一份你可能想组合的部件的尽量全面的集合
2. 把部件收成一条综合 **chain** 的灵活接口
3. 便于保存和分享这些 chain 的 schema

认证类 API 用环境变量：当时列出 OpenAI、Cohere、SerpAPI（Google Search）。用哪个才需要设哪个。

## 最初三条可复现示例

README 写明：项目很大程度上受 Twitter 上几个项目启发，初期功能是为了把那些做法收成更明确的工具。

- **Self-ask-with-search**：复现 self-ask 论文。`SelfAskWithSearchChain` + `OpenAI` + `SerpAPIChain`，例题是「卫冕美网男单冠军的家乡」。
- **LLM Math**：复现一条推上的「让模型算数」演示。`LLMMathChain`，整数整除计数一类题。
- **Generic Prompting**：普通提示管道。模板里已经写了 `Answer: Let's think step by step.`

文档指向 Read the Docs；作者称上面三个例子可能是当时最友好的说明。

## 当时还不是什么

0.0.1 没有后来的 AgentExecutor 全家桶叙事，也没有公司、云观测、图执行引擎。它是 MIT 许可的个人仓库 Python 包：Prompt、LLM、Chain、搜索与计算器各一块，用 pydantic 拼起来。
