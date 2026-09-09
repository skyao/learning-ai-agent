---
title: "概述"
linkTitle: "概述"
weight: 10
date: 2026-09-09
description: >
  对照社区口径：本笔记的四要素从哪来，和 Anthropic、OpenAI、LangChain 差在哪。
---

工作定义在 [什么是 AI Agent](/definition/what-is-ai-agent/) 和 [什么不是](/definition/what-is-not-ai-agent/)。

写那两页的时候，我担心四要素是自己收窄出来的口径，和社区讲的不是一回事。对照过 2024–2026 社区常用的几份原文之后，我有了信息：我没有另起流派，只是把已经收敛的说法收成可判定的四要素，并故意比光谱派更窄、比「独立干活的数字员工」营销更严格。

## 最短的对照句

各家用词不同，落到工程上几乎是同一句。我后来最常拿来对照的，是 Simon Willison 写成的行话：

> An LLM agent runs tools in a loop to achieve a goal.

LLM Agent = 为了达成目标，在循环里调用工具。出处：[I think “agent” may finally have a widely enough agreed upon definition](https://simonwillison.net/2025/Sep/18/agents/)。Anthropic 在 [Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) 里也收敛成：**LLMs autonomously using tools in a loop**。

本笔记的四要素就是把这句话拆开：谁在决策、是不是多步、有没有碰到环境、看没看反馈。停止条件（完成、失败、交给人）Simon 也强调了——这不是无限循环。

## 我主要对照了谁

经典教材（Russell & Norvig）仍然是另一套：任何能感知环境、按性能度量行动的东西。那套太宽，我已经写进 [什么不是](/definition/what-is-not-ai-agent/)，这里不再展开。下面只列 LLM Agent 这一波里，我会回去翻的几份。

| 来源 | 他们怎么说 | 我怎么用 |
| --- | --- | --- |
| [Anthropic · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | 先把东西都叫 *agentic systems*，再切开：**workflow** = 代码写死路径；**agent** = 模型自己决定流程和工具。 | 四要素里的「LLM 当决策核 + 循环」就是这条线。他们会把写死的多步流水线排除在 Agent 之外，比我略严。 |
| [OpenAI · Practical Guide](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) | *Agents are systems that independently accomplish tasks on your behalf.* 并写明：简单 chatbot、单轮 LLM、情感分类器 **不是** Agent。 | 「什么不是」几乎同构。他们更强调 *on your behalf* 和独立性，听起来像高自主；我明确写弱自主也算。 |
| [LangChain · What is an AI agent?](https://www.langchain.com/blog/what-is-an-agent) | *A system that uses an LLM to decide the control flow of an application.* 也写：Agent 就是 **LLM running in a loop**。 | 把「谁决定下一步」当成定义核。他们用 **spectrum**：router → 状态机 → 长程自主，不搞二元是/否。 |
| [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit1/what-are-agents) | *A system that leverages an AI model to interact with its environment in order to achieve a user-defined objective.* 循环写成 Think → Act → Observe。 | 教学拆法和本笔记最像。但他们的光谱从「只处理输出」到「多步 Agent」都叫 agency，例子里还带上客服 chatbot，边界比我松。 |
| [Lilian Weng · 2023](https://lilianweng.github.io/posts/2023-06-23-agent/) | LLM 当 brain，再配 **Planning + Memory + Tool use**。 | 研究综述口径。多出来的是「记忆 / 规划」作为一等组件；我没把长期记忆写成定义必要条件。 |
| [ReAct, Yao et al.](https://arxiv.org/abs/2210.03629) | Thought ↔ Action ↔ Observation 交错。 | 这是循环的名字来源，不是产品定义。[什么是](/definition/what-is-ai-agent/) 里的最小循环就是在讲这篇。 |

## 和本笔记对齐的地方

工程侧这几年基本收到同一组条件，只是用词不同。对照下来，我认这四条：

1. **决策核是模型，不是写死的 if/else** — Anthropic / LangChain 说的 control flow。
2. **有环境行动（tools）**，不是只吐文本。
3. **有环**：看结果，再决定下一步 — ReAct / Anthropic 的 loop。
4. **有停止条件**：目标完成、失败、或交给人。

OpenAI 也把 chatbot、单轮调用划出去，和我在「什么不是」里的切法一致。Function Calling 我标成「地基不是系统」：工具接口是模型能力，循环才是 Agent。社区里普遍这么分。

弱自主也算。Anthropic、LangChain、OpenAI 都承认 human-in-the-loop。Agent 不是「完全没人管」。这一点我写进定义页，不是为了放宽，是为了挡住「必须全自动才叫 Agent」那种说法。

## 我刻意不同的几处

不是谁对谁错。是入门页要用门槛，还是用光谱；记忆算不算定义；workflow 算不算进来。

**Workflow 算不算 Agent。** Anthropic（以及部分 LangChain 论述）认为：路径若全是代码编排，哪怕每步都调 LLM+工具，仍叫 workflow，不叫 agent。本笔记写「弱自主也算」。如果弱自主被理解成「人写死步骤、模型只填槽」，按 Anthropic 会落在 workflow 一侧。我认他们这条更严的线：模型必须至少能选下一步或选工具，否则降为 workflow，不进本笔记的主线对象。

**光谱 vs 门槛。** Hugging Face / LangChain 用星级光谱，路由器也算一点 agency。本笔记用四要素门槛：四个是，才进时间线和产品笔记。入门我更想要能判定的是/否；光谱适合后面讲产品怎么演化，不适合当成定义本身。

**记忆是不是定义的一部分。** Lilian Weng 把 Memory 写成三大件之一。Simon 明确反对：对话里的 tool 回执已经是短期记忆，不必另立一条。我没把长期记忆写进四要素，更接近后者。长期记忆是能力，不是「算不算 Agent」的门槛。

**「独立完成任务」容易被营销带跑。** OpenAI 的 *independently*、产品名里的 Agent，和工程上的 *tools in a loop* 经常不是一回事。Simon 专门写过 OpenAI 自己内部都没用同一个词。所以我把定义拆成「什么是 / 什么不是」两页，就是为了挡住「比较能干活的 AI」这种起名。

## 若只读三篇原文

对照社区口径，我自己会先读这三篇：

1. [Anthropic · Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) — workflow vs agent，后面引用最多。
2. [OpenAI 指南 PDF](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) — 明确列出什么不是 Agent。
3. [Simon Willison, 2025-09](https://simonwillison.net/2025/Sep/18/agents/) — 最短、最好记的工程行话。

教学结构最像本笔记那两页的，是 [Hugging Face Agents Course · What is an Agent](https://huggingface.co/learn/agents-course/unit1/what-are-agents)（定义 + agency 光谱 + Think/Act/Observe）。光谱那张表可以看，但不要拿它替换本笔记的四要素门槛。

## 读完怎么用

社区里没有另一套更权威的「四要素清单」。2024 年后工程侧已经高度同构。本笔记只是把 Anthropic / LangChain / OpenAI / Hugging Face 的共识收成可判定的四条。

回去判定一个产品或一篇文章时，仍用 [什么是](/definition/what-is-ai-agent/) 里的四句话。本页只负责回答：这四句话不是我一个人的习惯用语。
