---
title: "ReAct（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Yao 等 2022：交错推理与行动、四类基准。
---

Shunyu Yao（实习于 Google；普林斯顿）, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, Yuan Cao。*ReAct: Synergizing Reasoning and Acting in Language Models*。2022-10。[arXiv:2210.03629](https://arxiv.org/abs/2210.03629)。代码与项目页：<https://react-lm.github.io/>。

中文译本：[博客园（正文节译）](https://www.cnblogs.com/gccbuaa/p/19196553)。

---

## 摘要

LLM 的推理（如 CoT）与行动（如生成动作计划）此前多被分开研究。ReAct 让模型**交错**生成推理轨迹与任务相关动作：推理用来引出、跟踪、更新行动计划并处理例外；动作用来对接知识库或环境、采集额外信息。

在问答（HotpotQA）和事实验证（FEVER）上，通过一个简单的 Wikipedia API，ReAct 缓解 CoT 里常见的幻觉与误差传播，轨迹比没有推理痕迹的基线更可解释。在两个交互决策基准（ALFWorld、WebShop）上，相对模仿学习 / 强化学习方法，成功率绝对提升分别约 **34%** 和 **10%**，提示里只用一两条上下文示例。

## 1–2 方法

人的智能把面向任务的动作与内部语言推理缠在一起。CoT 是静态黑盒，不接地，难以及时按外部世界改知识，易幻觉、易沿链条错下去。先前用预训练 LM 在交互环境里规划/行动的工作，多半把观察转成文本再预测领域动作，却很少用 LM 对高层目标做抽象推理或维持工作记忆。

一般设定：时刻 \(t\) 观察 \(o_t\)，策略 \(\pi(a_t \mid c_t)\)。ReAct 把动作空间扩成 \(\hat{\mathcal{A}} = \mathcal{A} \cup \mathcal{L}\)：语言空间里的动作称 **thought**，**不改变外部环境、没有观察反馈**，只把有用信息写进上下文以支持后续推理或行动。思想类型包括：拆目标与做计划、注入常识、从观察里抽取要点、跟踪进度、处理例外。

主实验：冻结 **PaLM-540B**，few-shot 示例是人写的「动作 + 思想 + 观察」轨迹。知识密集型任务上思想与动作密集交替；决策任务动作空间大，思想可以稀疏出现，由模型自己决定何时插入。附录用 GPT-3（text-davinci-002）时，有的任务强于 PaLM。

性质（作者列）：提示好设计（人在动作旁写下想法即可）；通用（QA、事实验证、文字游戏、网页导航）；少样本即可泛化；人可检查推理与事实来源，也可靠编辑 thought 当场纠偏。

## 3 知识密集型任务

**动作：** `search[entity]`（页面存在则返回前 5 句，否则给 5 个相近实体）；`lookup[string]`（页内下一次出现，模拟 Ctrl+F）；`finish[answer]`。有意弱于当时最好的检索器，为了模拟人查维基、逼模型用语言推理来检索。

HotpotQA 6 条、FEVER 3 条人工轨迹作 few-shot。基线：Standard、CoT、CoT-SC（21 条、温度 0.7）、Act（去掉 thought，略像 WebGPT 的交互，但任务与动作空间不同）。

**数字（PaLM-540B）。** ReAct 稳定优于 Act。相对 CoT：FEVER **60.9 vs 56.3**；HotpotQA **27.4 vs 29.4**（略低）。FEVER 的 SUPPORTS/REFUTES 往往只差一点，检索准确知识更关键。人工看轨迹：ReAct 更事实、更接地；CoT 推理结构更准，但易幻觉。总体最好的是启发式切换：ReAct 步数用尽则退回 CoT-SC；CoT-SC 多数票不够自信则改 ReAct。

微调：用 ReAct 生成的约 **3000** 条答对轨迹微调 PaLM-8B / 62B，小模型可变强。

## 4 交互决策

**ALFWorld：** 文字版家务；一条任务可能 50+ 地点、专家也要 50+ 步。最好一次 ReAct 成功率 **71%**，最好 Act **45%**，BUTLER **37%**（绝对约 +34%）。最差一次 ReAct（48%）仍超过另两法最好一次。无 thought 时 Act 不会把目标拆成子目标，也跟丢状态。相对 Inner-Monologue 风格的密集外部反馈提示（ReAct-IM）也明显更好（71 vs 53）。

**WebShop：** 真实商品网页、用户指令买东西。成功率绝对约 +10%。环境噪声大、文本结构混杂。

限度（提示设定）：复杂动作空间的示范塞不进上下文；推理与行动行为的覆盖有限。作者认为扩大任务、再结合强化学习还有空间。
