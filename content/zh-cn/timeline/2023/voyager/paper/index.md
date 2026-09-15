---
title: "Voyager（论文）"
linkTitle: "论文"
weight: 10
date: 2026-09-15
description: >
  按原文结构转述 Wang 等 2023：Minecraft 中的开放式具身终身学习。
---

Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi “Jim” Fan, Anima Anandkumar. *Voyager: An Open-Ended Embodied Agent with Large Language Models*。arXiv 2023-05。[arXiv:2305.16291](https://arxiv.org/abs/2305.16291)。

中文译本：[宝玉](https://baoyu.io/translations/ai-paper/voyager-an-open-ended-embodied-agent-with-large-language-models)。

---

## 摘要

Voyager 是作者所称第一只由 LLM 驱动、在 Minecraft 中做具身终身学习的 agent：持续探索、获得多样技能、发现新事物，无需人工干预。三块组成：

1. **自动课程**，最大化探索。
2. **不断增长的技能库**，用可执行代码存储和检索复杂行为。
3. **迭代提示**：把环境反馈、执行错误、自验证写回提示，改进程序。

与 GPT-4 的交互是黑盒查询，不微调参数。技能在时间上可延长、可解释、可组合，能力会复利，并减轻灾难性遗忘。相对先前方法，文中报告：独特物品约 3.3 倍，旅行距离约 2.3 倍，关键科技树里程碑最快约 15.3 倍。学到的技能库可以带到新世界，从零解新任务；对照方法难以泛化。

## 方法

环境基于 MineDojo，底层动作走 Mineflayer 的 JavaScript API，而不是像素到按键。作者写明：重点是推 GPT-4 做终身具身学习，不是解 3D 感知或低层运动控制。

自动课程让 GPT-4 在「发现尽可能多样的事物」这一总目标下提出下一任务，输入包括当前物品栏、附近方块、已完成/失败任务，以及 GPT-3.5 自问自答的附加上下文。难度自下而上，避免下一步过难。

技能是一段可复用函数。成功并通过自验证后，用描述的嵌入做索引，存进向量库。新任务时检索最相关的若干技能，再生成新代码。复杂技能由简单程序组合。

迭代提示用三类反馈：环境中间进度（例如还缺 7 个铁锭）、解释器报错、以及另一个 GPT-4 充当批评者判断任务是否完成并给改进建议。最多约 4 轮仍卡住就换课程里的下一个任务。主模型 `gpt-4-0314`，部分 NLP 辅助用 `gpt-3.5-turbo-0301`。

基线是作者改写后能在 MineDojo 里跑的 ReAct、Reflexion、AutoGPT 风格循环。Voyager 相对它们多了技能库、自验证和开放探索课程。文中对照方法在科技树的钻石层解锁为 0/3 试次；Voyager 是唯一解锁钻石工具的。160 次提示迭代内发现 63 种独特物品。
