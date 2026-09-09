---
title: "2022年"
linkTitle: "2022年"
weight: 30
date: 2026-09-09
description: >
  2022：底物就绪。可对话接口和思维链出现，Agent 循环在论文里成形，产品尚未出现。
---

**一句话主线：** 2022 年，LLM 补齐了两块后来所有 Agent 都要踩的底物——指令跟随后的可对话接口，以及把多步推理写进文本的思维链。同年 10 月 ReAct 把「想」和「做」交错写成循环，LangChain 把常见拼法收成库；但这一年公众看见的是 11 月的 ChatGPT，不是自主执行。稳定的「循环 + 工具 + 环境」产品要到 [2023](../2023/) 才出现。

总弧线见 [概述](../overview/)，前传见 [2022 年之前](../before2022/)。ChatGPT 按本站定义**不是** Agent：它是多轮问答，没有对环境的行动循环。它改变的是入口，不是执行。

## 和 LLM 的关系

[前一年](../before2022/) 结尾时，零件已经有了：GPT-3 能少样本模仿，Codex 能写短函数，WebGPT 能在受控浏览器里查资料。2022 年模型侧做的事，是把这些零件变成**人人能用、且能多步想**的决策核——仍然不是完整 Agent。

- **指令跟随成为默认。** [InstructGPT](https://arxiv.org/abs/2203.02155) 的工作贯穿 2021，OpenAI 在 2022-01 宣布用人类反馈训练的模型作为 API 默认，论文 3 月挂出。模型开始「按人的意图答」，而不是只补全网页文本。没有这一步，后面的对话产品和 Agent 提示词都站不住。
- **多步推理被证明可以逼出来。** [Chain-of-Thought](https://arxiv.org/abs/2201.11903)（Wei et al.，2022-01）用少量「中间步骤」示例，让够大的模型在算术、常识、符号任务上明显变强。5 月的 Zero-shot CoT 把触发器收成一句 “Let's think step by step”。这是推理协议，不是工具循环：模型仍在自言自语，没有观察环境。
- **规模让协议生效。** PaLM 540B 等结果表明：同样的 CoT，小模型几乎没用，大模型才涌现。对 Agent 史的含义很具体——「会想」一度是模型规模问题，而不只是提示词技巧。
- **对话接口在年底炸开。** ChatGPT（2022-11-30）把 RLHF 后的对话模型做成网页产品。它不调任意工具、不跑沙箱循环，却把「对着一个会多轮改主意的 LLM 说话」变成默认人机界面。2023 年所有 Tag、插件、Agent 演示，都假定用户已经会用这种界面。

工具调用这一年仍是 prompt 把戏：MRKL、PAL、ReAct 都在论文或试点里让模型把计算、检索、动作交给外部模块，但没有后来的 Function Calling schema。结构化接口是 [2023-06](../2023/) 的事。

## 里程碑

只记改写了后续可能的事件。ReAct 的**论文首证**记在今年，**被抄进产品**记在明年——当时热度和后世重要性要分开。类型按 [调研方法](../overview/research/#里程碑类型)。

| 时间 | 事件 | 类型 | 为什么记 |
| --- | --- | --- | --- |
| 2022-01 | InstructGPT 成为 API 默认（[论文 3 月](https://arxiv.org/abs/2203.02155)） | 工程化 | 决策核开始跟人类意图对齐。ChatGPT 和后来的 Agent 提示，都建立在「模型听得懂指令」上 |
| 2022-01 | [Chain-of-Thought](https://arxiv.org/abs/2201.11903)（Wei et al.） | 首证 | 证明中间推理步骤可被提示出来。ReAct 的 Thought 就是 CoT 接到动作上 |
| 2022-03 | Self-Consistency（Wang et al.） | 首证 | 对同一题采多样推理再投票。后来 Agent 里的「多试几次 / 反思」有一条根在这里 |
| 2022-04 | PaLM 540B | 工程化 | 把「CoT 要够大才有用」做成可引用的事实。规模是这一年代理能力的物理前提之一 |
| 2022-05 | [Zero-shot CoT](https://arxiv.org/abs/2205.11916)（Kojima et al.） | 首证 | 一句 “Let's think step by step” 即可。提示词成本降到最低，推理协议开始可复制 |
| 2022-05 | [MRKL](https://arxiv.org/abs/2205.00445)（AI21） | 首证 | 明确主张：LLM 必须外挂知识与离散推理模块。架构图很像后来的「模型 + 工具」，实现仍是厂商私有系统 |
| 2022-06 | GitHub Copilot 正式商用 | 工程化 | 编码助手从预览变成产品。仍是行级补全，不是 Agent；「Copilot → Agent」的演化从这里有了付费用户 |
| 2022-09 | DeepMind Sparrow | 首证 | 对话模型可以搜索网页并带证据回答，并用规则约束。仍是问答 Agent 研究原型，目标不是开放任务执行 |
| 2022-10 | [ReAct](https://arxiv.org/abs/2210.03629)（Yao et al.） | 首证 | Thought → Action → Observation 交错。HotpotQA / ALFWorld / WebShop 上证明「边想边做」优于只想或只做。ChatGPT 还没发布；Function Calling 还有八个月。当时引用爬得慢，2023 年才成为默认控制协议 |
| 2022-10 | [LangChain](/agents/langchain/) 以开源库出现 | 工程化 | Harrison Chase 把 RAG、工具、Agent 提示等拼法收进 Python 包。公司 2023-02 才成立；今年只是胶水雏形，引爆在明年 |
| 2022-11 | [PAL](https://arxiv.org/abs/2211.10435)（Gao et al.） | 首证 | 推理步骤写成程序，计算交给 Python 解释器。后来 Code Interpreter / 沙箱跑代码，这条根比「让模型心算」更硬 |
| 2022-11-30 | ChatGPT | 引爆 | 把对话 LLM 送进大众视野。不是 Agent，却是后面所有 Agent 产品的人机界面前提。当年舆论中心是它，不是 ReAct |
| 2022-12 | Anthropic [Constitutional AI](https://arxiv.org/abs/2212.08073) | 工程化 | 用原则和 AI 反馈对齐。对 Agent 史是旁支（安全与可控），但对后来 Claude 系运行时是训练前提 |

刻意不升格的：SayCan / Inner Monologue 等「语言模型给机器人下指令」（具身，见 [边界](../overview/research/#agent-边界清单)）；各种 CoT 变体论文（Least-to-most、Self-Ask 等，机制上收进 CoT 家族即可）；以及任何把 ChatGPT 直接称作 Agent 的通稿。

## 能力栈切片

### 模型层

这一年的主线是**推理协议**和**对齐后的对话模型**。CoT 让多步思考显式化；InstructGPT / ChatGPT 让思考可以对着用户进行。上下文窗口仍大约 4k，长任务塞不下多少观察。没有原生 function calling，模型要调工具就得在文本里演。多模态几乎未进入软件 Agent 主线。

### 框架 / 协议层

关键词是**提示词模式 + 最早的胶水**，还不是协议。

ReAct 规定了一种可抄的文本协议（思考/动作/观察的交错格式）。LangChain 年底开始把这种格式和检索、工具包装进库，但生态要到 2023 才膨胀。MRKL 画出了模块图，没有成为跨厂商标准。FIPA 式的 Agent 通信标准这一年无人重提。

### 应用层

公众应用是 ChatGPT 聊天和 Copilot 补全：人在环、一步一确认。实验室里有浏览对话（Sparrow）、模块化工具（Jurassic-X / MRKL）、程序辅助推理（PAL）、以及 ReAct 在文字游戏和网店环境里的演示。没有 AutoGPT 那种「给一个目标，自己转完」的产品——GitHub trending 上还看不到它。

### 基础设施层

沙箱不是产品关键词。PAL 把解释器当计算器，和后来「Agent 在云端虚拟机里改仓库」不是同一量级。评测仍是 GSM8K、HotpotQA、HumanEval、文字游戏；没有 SWE-bench。记忆等于多轮对话窗口。身份、花费限额、组织治理都不存在。

## 还做不到什么

2022 年 12 月 31 日，按本站定义，下面这些仍不成立：

- **可交付的 LLM Agent 产品。** 循环写在论文和早期库里，没有人能把一件开放任务交给系统并指望它做完。
- **结构化工具接口。** 解析失败、幻觉调用、prompt injection 没有产品级挡板。
- **从对话到行动的默认路径。** 用户会和 ChatGPT 聊天，不会（也还不能）让它去开 PR、查数仓、操作电脑。
- **可验证的任务型分数。** 编码 Agent 作为品类甚至还没被认真考试。
- **长上下文与跨会话记忆。** 一次任务的观察一多，窗口就满。

当时的反方意见主要冲着 ChatGPT：幻觉、自信的错误、数据截止。这些批评成立，但还没有对准「自主循环会空转、会乱执行」——那种失败模式要等 [2023](../2023/) 的 AutoGPT 才会大规模出现。

## 怎么学 / 往哪跳

建议按「先协议、后入口、最后循环」读，不要从 ChatGPT 倒推整年：

1. 读 CoT 摘要，能区分「模型在文本里显式多步想」和「模型在环境里行动」。没有前者，ReAct 的 Thought 无处安放。
2. 对照 InstructGPT 与 ChatGPT：前者是训练方法，后者是把该方法做成入口。问：为什么入口改变了 Agent 史，而它本身仍不是 Agent。
3. 打开 [ReAct](https://arxiv.org/abs/2210.03629)，在纸上画出 Thought → Action → Observation。记一句：论文在 ChatGPT 之前，流行在 ChatGPT 和 Function Calling 之后。工程化细节见 [2023](../2023/)。
4. 扫 PAL 和 MRKL：一个把计算交给解释器，一个把知识/推理模块外挂。2023 的 Code Interpreter 和工具插件，是这两条的产品形态。
5. 看一眼仓库里的 [LangChain](/agents/langchain/) 时，把它的生日记在 2022 秋，把它的舆论高峰记在 2023。不要用后来的批评抹掉「当年为什么人人先用它」。

读完这一年，应能回答：为什么 2022 是 Agent 的底物年而不是元年；以及 2023 的循环、接口、泡沫，分别接在 CoT、ReAct、ChatGPT 的哪一块上。
