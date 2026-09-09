---
title: "2023年"
linkTitle: "2023年"
weight: 40
date: 2026-09-09
description: >
  2023：LLM Agent 第一次工程化。循环、工具接口和舆论泡沫同场出现。
---

**一句话主线：** 2023 年，LLM Agent 第一次被工程化——ReAct 给出「想—做—看」的循环，Function Calling 把工具从 prompt 把戏收成 API，AutoGPT 把「自主 Agent」送上舆论顶点；同年也证明：热度远高于可靠性。

这一年是按时间线学 Agent 的样板页。定义和六类里程碑见 [调研方法](../overview/research/)，总弧线见 [概述](../overview/)。

## 和 LLM 的关系

没有 [2022](../2022/) 年底的对话接口和思维链，2023 的循环站不住。这一年模型侧又补了两块 Agent 真正能落地的前提：

- **更强的多步决策核。** GPT-4（2023-03）让「拆任务、选工具、读回执、再决定」在复杂指令上第一次像样。前一年的 ChatGPT / GPT-3.5 已经能聊，但长链工具使用仍然脆。
- **结构化的工具接口。** 上半年开发者仍在 prompt 里逼模型吐 JSON；[2023-06-13 Function Calling](https://openai.com/index/function-calling-and-other-api-updates/) 把「模型选择调用哪个函数、参数是什么」收进 Chat Completions API。这是模型层能力，本身不是 Agent，却是后面所有编排的地基。
- **稍长一点的上下文。** 同年 `gpt-3.5-turbo-16k` 把窗口从约 4k 拉到 16k。对 Agent 来说，上下文长度是一次任务能走多远的物理上限——当时仍然很短，所以长任务只能靠外部记忆和截断，失败模式随处可见。

Toolformer（2023-02）从训练侧证明模型可以学会插入工具调用；ReAct 论文则更早（arXiv 2022-10，会议在 ICLR 2023），但真正被大规模抄进产品循环的是 2023 上半年。叙事上：论文是首证，这一年是工程化。

## 里程碑

只记改写了后续可能的事件。类型按 [调研方法](../overview/research/#里程碑类型)。

| 时间 | 事件 | 类型 | 为什么记 |
| --- | --- | --- | --- |
| 2022-10 / 会议 2023 | [ReAct](https://arxiv.org/abs/2210.03629)（Yao et al.） | 首证 | 证明推理轨迹和行动可以交错；后来几乎所有 Agent 循环都是它的变体 |
| 2023-02 | Toolformer | 首证 | 从训练而非纯 prompt 证明「该在何时调工具」可学 |
| 2023-03 | GPT-4 | 工程化 | 决策核第一次撑得住稍长的工具链；后续产品默认站在它上面 |
| 2023-03 | ChatGPT plugins | 工程化 | 把「模型 + 外部工具」做成面向终端用户的产品形态，仍是厂商私有协议 |
| 2023-03 | [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) 爆红 | 引爆 | 把「给一个目标，让它自己循环」送进大众视野；star 数远高于当时任何可靠系统 |
| 2023-03 | BabyAGI | 引爆 | 用更短的任务队列演示同一幻想：自主规划 + 执行。衍生项目极多，大多很快消失 |
| 2023 全年 | [LangChain](/agents/langchain/) 成为默认编排层 | 工程化 / 警示 | 把 chain / agent / tool 做成库，降低起步成本；后来也因抽象过重被广泛批评——算成功还是失败，要分开看「当时生态」和「后来口味」 |
| 2023-04 | Generative Agents（Stanford） | 首证 | 用记忆流 + 反思做社会模拟，打开「长期记忆 / 角色」这条旁支，不是任务型 Agent 的主线 |
| 2023-06 | OpenAI Function Calling | 工程化 | 工具调用从 prompt hack 变成 API。后续各家的 tool use 都沿着这条路走 |
| 2023-07 | ChatGPT Code Interpreter（后称 Advanced Data Analysis） | 工程化 | 模型在云端沙箱里写代码、看图、处理文件：沙箱开始成为 Agent 的标配环境，而不只是聊天插件 |
| 2023-06 前后 | Voyager 等「开世界」实验 | 首证 | 在 Minecraft 等环境里展示终身学习式技能库；影响力在研究，不在生产 |
| 2023-08 | Microsoft AutoGen | 工程化 | 把多 Agent 对话做成可编排框架；「多角色」从论文走进仓库 |
| 2023-10 | SWE-bench 论文 | 首证 / 警示 | 第一次给「修真实 GitHub issue」打分。当时分数极低——这既是新赛道的出生证明，也是对 2023 自主编码宣传的冷水 |
| 2023-11 | OpenAI DevDay：Assistants API、GPTs、GPT-4 Turbo | 工程化 | 厂商把线程、工具、检索收成托管运行时；GPTs 是自定义助手商店，自主度仍有限 |
| 2023-10/11 | [MemGPT](/agents/memgpt/) | 首证 | 把操作系统式的分层记忆搬进 LLM Agent，直接针对「上下文太短」 |

刻意不升格为里程碑的：无数「AutoGPT 克隆」、大多数行业演示、以及任何只有厂商通稿、没有可复现行为的「自主员工」宣布。

## 能力栈切片

### 模型层

GPT-4 让规划不再完全是幻觉；Function Calling 让工具选择可解析；16k 上下文让单次循环能多看一点材料。推理仍是显式的：靠 CoT / ReAct 把想法写进文本，还没有后来的推理模型把规划藏进内部计算。多模态几乎还没进入 Agent 主线——看不见屏幕，就谈不上通用电脑操作。

### 框架 / 协议层

这一年的关键词是**框架，不是协议**。

[LangChain](/agents/langchain/) 提供 AgentExecutor、工具包装、记忆插槽，成为 2023 默认胶水。LlamaIndex 偏检索编排。AutoGen 把多 Agent 做成消息传递。它们都是开发库：你要自己托管循环、自己接工具、自己处理失败。

工具协议是各家私有的：OpenAI plugins、Function Calling schema、各框架自己的 Tool 抽象。没有跨厂商的「模型 ↔ 工具」标准——那是 2024 年 MCP 的事。Assistants API 是托管运行时的雏形，仍锁在一家 API 里。

记忆方面，短期靠窗口，长期靠向量库外挂；[MemGPT](/agents/memgpt/) 指出这条路不够，提出分层分页，但还没有成为产品默认。站点里的记忆总述见 [基础设施 · 记忆](/infra/context/memory/)。

### 应用层

公众看见的是 [AutoGPT](/agents/autogpt/) 和 BabyAGI：给定目标，自己列任务、自己搜网、自己调 API。演示好看，真实完成率低，循环容易空转、烧 token、做出不可逆操作。这是**引爆型**事件，不是可靠性事件。

稍扎实的应用形态其实更窄：检索增强的问答机器人、在沙箱里分析表格的 Code Interpreter、由人盯着的客服工具调用。Coding Agent 作为品类已经有人做（GPT-Engineer 等），但还经不起后来 SWE-bench 那种考核。浏览器 / 电脑操作仍属研究原型。

### 基础设施层

沙箱从「可选」变成「只要让模型跑代码就必须有」：Code Interpreter 是云端先例。评测刚刚摸到任务型 Agent——SWE-bench 在 10 月出现，WebArena 等网页基准也在这一年前后发表——但还没有成为产品发布会的必答项。可观测性几乎空白：一次 Agent 跑飞了，往往只剩日志和账单。

## 还做不到什么

2023 结束时，下面这些仍然不成立。把它们写清楚，是为了后面几年的进步有参照：

- **靠谱地做完一件几天级的事。** 循环会漂、会忘、会在同一失败上重复。自主度宣传远高于实际可放手程度。
- **通用电脑操作。** 看不见屏幕，也没有稳定的 GUI 动作接口。
- **可验证的软件工程 Agent。** SWE-bench 给出了考卷，当时的系统几乎做不出像样分数。
- **跨产品的工具协议。** 每接一个模型厂商或框架，工具就要重写一遍。
- **跨会话、可治理的记忆。** 向量库能搜到片段，不等于 Agent 真的「记得团队的约定」。
- **组织级身份。** Agent 要么借用某个用户的 OAuth，要么拿一把泄露风险极高的 API key。2026 年 Claude Tag 要解决的，正是这条线的后续。

当时就有反方意见：无限循环、prompt injection、成本、以及「给一个目标就去创业」类 demo 的空洞。这些批评后来被证明比 star 数更耐放。

## 怎么学 / 往哪跳

建议按机制读，而不是按 GitHub trending 读：

1. 读 ReAct 原文或综述，能在纸上画出 Thought → Action → Observation。没有这个循环，后面的产品都是皮肤。
2. 对照 OpenAI 的 Function Calling 公告，看「模型层接口」和「Agent 循环」差在哪一层。
3. 打开仓库里的 [AutoGPT](/agents/autogpt/) 和 [LangChain](/agents/langchain/)，问：循环谁在跑？工具谁在校验？失败了谁停？
4. 扫一眼 [MemGPT](/agents/memgpt/) 和 [记忆](/infra/context/memory/)，理解 2023 为什么家家外挂向量库，以及为什么不够。
5. 把 SWE-bench 的「当时几乎做不出」记下来，读 [2024](../2024/) 时才知道评测如何反过来塑造产品。

读完这一年，应能回答：为什么 2023 既是 Agent 元年，又是泡沫年；以及 2024 年的评测、协议、编码 Agent 分别在补 2023 的哪块缺口。
