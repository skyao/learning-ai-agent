---
title: "I think “agent” may finally have a widely enough agreed upon definition to be useful jargon now"
linkTitle: "Simon Willison博文"
weight: 30
date: 2025-09-18
description: >
  Simon Willison 博文中英对照：An LLM agent runs tools in a loop to achieve a goal.
---

来源： [I think “agent” may finally have a widely enough agreed upon definition to be useful jargon now](https://simonwillison.net/2025/Sep/18/agents/)  
日期： 2025 年 9 月 18 日  
作者： Simon Willison

作者背景： Simon Willison 是英国程序员、开源开发者，**Django Web 框架的联合创建者**、**Datasette 的作者**，如今是 AI/大模型领域最有影响力的独立技术博主之一——被称为"AI 圈里最会做笔记的人"。

# 我觉得 “agent” 终于有了一个足够被公认、能当行话用的定义

I’ve noticed something interesting over the past few weeks: I’ve started using the term “agent” in conversations where I don’t feel the need to then define it, roll my eyes or wrap it in scare quotes.

过去几周我注意到一件有趣的事：我开始在对话中使用“智能体”这个词，而且不再觉得有必要随后去定义它、翻白眼或给它加上引号。

This is a big piece of personal character development for me!

这对我来说是个人成长的一大步！

Moving forward, when I talk about agents I’m going to use this:

今后，当我谈论智能体时，我将使用这个：

**An LLM agent runs tools in a loop to achieve a goal.**

**LLM agent 在循环中运行工具以实现目标。**

I’ve been *very* hesitant to use the term “agent” for meaningful communication over the last couple of years. It felt to me like the ultimate in buzzword bingo—everyone was talking about agents, but if you quizzed them everyone seemed to hold a different mental model of what they actually were.

过去几年里，我一直非常犹豫是否在严肃交流中使用“agent”这个词。对我来说，它就像是流行语宾果游戏的终极代表——人人都在谈论 agent，但如果你考考他们，每个人似乎都对其实际含义持有不同的心智模型。

I even started collecting definitions in my [agent-definitions tag](https://simonwillison.net/tags/agent-definitions/), including crowdsourcing 211 definitions on Twitter and attempting to summarize and group them with Gemini (I got [13 groups](https://gist.github.com/simonw/beaa5f90133b30724c5cc1c4008d0654#response), here’s the [tool-using LLMS](https://gist.github.com/simonw/beaa5f90133b30724c5cc1c4008d0654#2-tool-using-llms) one.)

我甚至开始在自己的 agent-definitions 标签中收集定义，包括在 Twitter 上众包了 211 个定义，并尝试用 Gemini 对它们进行总结和分组（我得到了 13 个组，这里是使用工具的 LLM 那一组。）

Jargon terms are only useful if you can be confident that the people you are talking to share the same definition! If they don’t then communication becomes *less* effective—you can waste time passionately discussing entirely different concepts.

术语只有在你能确信与你交谈的人共享同一定义时才有用！如果他们不共享，沟通就会变得不那么有效——你可能会浪费时间热烈讨论完全不同的概念。

It turns out this is not a new problem. In 1994’s *Intelligent Agents: Theory and Practice* [Michael Wooldridge wrote](https://www.cs.ox.ac.uk/people/michael.wooldridge/pubs/ker95/subsection3_1_1.html):

事实证明，这并不是一个新问题。在 1994 年的《智能体：理论与实践》中，迈克尔·伍尔德里奇写道：

> Carl Hewitt recently remarked that the question *what is an agent?* is embarrassing for the agent-based computing community in just the same way that the question *what is intelligence?* is embarrassing for the mainstream AI community. The problem is that although the term is widely used, by many people working in closely related areas, it defies attempts to produce a single universally accepted definition.
>
> 卡尔·休伊特最近评论说，“什么是Agent？”这个问题让基于 Agent 的计算社区感到尴尬，就像“什么是智能？”这个问题让主流人工智能社区感到尴尬一样。问题在于，尽管这个术语被广泛使用，被许多在密切相关领域工作的人使用，但它无法形成一个被普遍接受的定义。

So long as agents lack a commonly shared definition, using the term reduces rather than increases the clarity of a conversation.

只要智能体缺乏一个共同认可的定义，使用这个术语就会降低而非提高对话的清晰度。

In the AI engineering space I think we may finally have settled on a widely enough accepted definition that we can now have productive conversations about them.

在人工智能工程领域，我认为我们可能终于达成了一个足够广泛接受的定义，以至于我们现在可以就它们进行富有成效的对话了。

## 循环中使用工具以达成目标

An LLM agent *runs tools in a loop to achieve a goal*. Let’s break that down.

LLM 智能体在循环中运行工具以达成目标。让我们来拆解一下。

The “tools in a loop” definition has been popular for a while—Anthropic in particular have [settled on that one](https://simonwillison.net/2025/May/22/tools-in-a-loop/). This is the pattern baked into many LLM APIs as tools or function calls—the LLM is given the ability to request actions to be executed by its harness, and the outcome of those tools is fed back into the model so it can continue to reason through and solve the given problem.

“循环中使用工具”这一定义已经流行了一段时间——尤其是 Anthropic 已经确定了这一说法。这一模式已内置于许多 LLM API 中，表现为工具或函数调用——LLM 被赋予请求其执行框架执行操作的能力，而这些工具的结果会被反馈回模型，使其能够继续推理并解决给定的问题。

“To achieve a goal” reflects that these are not infinite loops—there is a stopping condition.

“以达成目标”反映出这些并非无限循环——存在一个停止条件。

I debated whether to specify “... a goal set by a user”. I decided that’s not a necessary part of this definition: we already have sub-agent patterns where another LLM sets the goal (see [Claude Code](https://simonwillison.net/2025/Jun/2/claude-trace/) and [Claude Research](https://simonwillison.net/2025/Jun/14/multi-agent-research-system/)).

我曾犹豫是否要明确写上“……由用户设定的目标”。我最终决定，这不是这个定义的必要组成部分：我们已经有了由另一个 LLM 设定目标的子代理模式（参见 Claude Code 和 Claude Research）。

There remains an almost unlimited set of alternative definitions: if you talk to people outside of the technical field of building with LLMs you’re still likely to encounter travel agent analogies or employee replacements or excitable use of the word “autonomous”. In those contexts it’s important to clarify the definition they are using in order to have a productive conversation.

仍然存在几乎无穷无尽的替代定义：如果你与 LLM 构建技术领域之外的人交谈，你仍然很可能遇到旅行代理的类比、员工替代的说法，或者对“自主”一词的兴奋使用。在这些语境中，为了进行富有成效的对话，明确他们使用的是哪种定义很重要。

But from now on, if a technical implementer tells me they are building an “agent” I’m going to assume they mean they are wiring up tools to an LLM in order to achieve goals using those tools in a bounded loop.

但从现在起，如果一位技术实现者告诉我他们正在构建一个“代理”，我会假设他们的意思是：他们正在将工具连接到 LLM，以便在一个有界循环中使用这些工具来实现目标。

Some people might insist that agents have a memory. The “tools in a loop” model has a fundamental form of memory baked in: those tool calls are constructed as part of a conversation with the model, and the previous steps in that conversation provide short-term memory that’s essential for achieving the current specified goal.

有些人可能会坚持认为代理必须拥有记忆。“循环中的工具”模型内置了一种基本形式的记忆：这些工具调用是作为与模型对话的一部分构建的，而该对话中之前的步骤提供了短期记忆，这对于实现当前指定的目标至关重要。

If you want long-term memory the most promising way to implement it is [with an extra set of tools](https://simonwillison.net/2025/Sep/12/claude-memory/)!

如果你想实现长期记忆，最有前景的方式是通过一组额外的工具来实现！

## 我最不喜欢的定义是把智能体视为人类的替代品

If you talk to non-technical business folk you may encounter a depressingly common alternative definition: agents as replacements for human staff. This often takes the form of “customer support agents”, but you’ll also see cases where people assume that there should be marketing agents, sales agents, accounting agents and more.

如果你与非技术背景的商业人士交谈，你可能会遇到一个令人沮丧且相当普遍的定义：智能体是人类员工的替代品。这通常表现为“客服智能体”，但你也会看到有人假设应该有营销智能体、销售智能体、会计智能体等等。

If someone surveys Fortune 500s about their “agent strategy” there’s a good chance that’s what is being implied. Good luck getting a clear, distinct answer from them to the question “what is an agent?” though!

如果有人就“智能体战略”对《财富》500 强企业进行调查，那么这很可能就是他们暗示的意思。不过，要想从他们那里得到一个关于“什么是智能体？”这个问题的清晰、明确的答案，那祝你好运！

This category of agent remains science fiction. If your agent strategy is to replace your human staff with some fuzzily defined AI system (most likely a system prompt and a collection of tools under the hood) you’re going to end up sorely disappointed.

这一类智能体仍然属于科幻范畴。如果你的智能体战略是用某种定义模糊的 AI 系统（很可能底层是一个系统提示词和一组工具）来取代你的人类员工，那你最终会大失所望。

That’s because there’s one key feature that remains unique to human staff: **accountability**. A human can take responsibility for their actions and learn from their mistakes. Putting an AI agent on a [performance improvement plan](https://en.m.wikipedia.org/wiki/Performance_improvement#Performance_improvement_plans) makes no sense at all!

这是因为人类员工仍有一个独有的关键特征：问责能力。人类可以对自己的行为负责，并从错误中吸取教训。给 AI 智能体制定绩效改进计划根本毫无意义！

Amusingly enough, humans also have **agency**. They can form their own goals and intentions and act autonomously to achieve them—while taking accountability for those decisions. Despite the name, AI agents can do nothing of the sort.

有趣的是，人类也具有能动性。他们能够形成自己的目标和意图，并自主行动以实现这些目标——同时对这些决定承担责任。尽管名为“AI 代理”，但它们根本无法做到这些。

This [legendary 1979 IBM training slide](https://simonwillison.net/2025/Feb/3/a-computer-can-never-be-held-accountable/) says everything we need to know:

这张 1979 年 IBM 的传奇培训幻灯片说明了一切：

![](images/a-computer-can-never-be-held-accountable.jpg)

## OpenAI 需要统一口径

The single biggest source of agent definition confusion I’m aware of is OpenAI themselves.

据我所知，智能体定义混乱的最大单一来源就是 OpenAI 自己。

OpenAI CEO Sam Altman is fond of [calling agents](https://simonwillison.net/2025/Jan/23/introducing-operator/) “AI systems that can do work for you independently”.

OpenAI 首席执行官 Sam Altman 喜欢将智能体称为“能够独立为你完成工作的 AI 系统”。

Back in July OpenAI [launched a product feature](https://openai.com/index/introducing-chatgpt-agent/) called “ChatGPT agent” which is actually a browser automation system—toggle that option on in ChatGPT and it can launch a real web browser and use it to interact with web pages directly.

早在 7 月，OpenAI 推出了一项名为“ChatGPT 智能体”的产品功能，实际上是一个浏览器自动化系统——在 ChatGPT 中开启该选项后，它可以启动一个真实的网页浏览器，并直接用它来与网页交互。

And in March OpenAI [launched an Agents SDK](https://openai.com/index/new-tools-for-building-agents/) with libraries in Python ([openai-agents](https://pypi.org/project/openai-agents/)) and JavaScript ([@openai/agents](https://www.npmjs.com/package/@openai/agents)). This one is a much closer fit to the “tools in a loop” idea.

而在三月份，OpenAI 推出了 Agents SDK，包含 Python（openai-agents）和 JavaScript（@openai/agents）库。这个更贴近“循环中的工具”这一理念。

It may be too late for OpenAI to unify their definitions at this point. I’m going to ignore their various other definitions and stick with tools in a loop!

到了这个阶段，OpenAI 可能已经来不及统一他们的定义了。我打算忽略他们其他各种定义，坚持“循环中的工具”这个说法！

## 已经有一个相关的梗

Josh Bickett [tweeted this](https://twitter.com/josh_bickett/status/1725556267014595032) in November 2023:

Josh Bickett 在 2023 年 11 月发了这条推文：

> What is an AI agent?
>
> 什么是 AI 智能体？
>
> ![](images/agents-meme-card.jpg)

I guess I’ve climbed my way from the left side of that curve to the right.

我想我已经从那条曲线的左侧爬到了右侧。

Posted [18th September 2025](https://simonwillison.net/2025/Sep/18/) at 7:12 pm · Follow me on [Mastodon](https://fedi.simonwillison.net/@simon), [Bluesky](https://bsky.app/profile/simonwillison.net), [Twitter](https://twitter.com/simonw) or [subscribe to my newsletter](https://simonwillison.net/about/#subscribe)

发布于 2025 年 9 月 18 日晚上 7:12 · 在 Mastodon、Bluesky、Twitter 上关注我，或订阅我的新闻通讯
