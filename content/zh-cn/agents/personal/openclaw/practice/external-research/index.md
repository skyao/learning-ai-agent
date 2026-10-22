---
title: "中英文对照与历史研究：怎样避免把旧结论写成当前事实"
weight: 10
date: "2026-10-21"
description: "中英文对照与历史研究：怎样避免把旧结论写成当前事实"
materialType: "外部研究与中英文资料阅读"
---

阅读：**2026-10-21**。本轮技术机制以官方资料为主，外部研究保留测试时点，没有复现。

## 中文官方资料也需要核对时间差

[中文记忆概览](https://docs.openclaw.ai/zh-CN/concepts/memory)便于理解文件与检索术语，但本轮仍有旧段落将维护与 Heartbeat 联系，部分默认设置也与 [当前英文概览](https://docs.openclaw.ai/concepts/memory)不同。

我按主题保留这些差异，具体机制用英文当前页、专门文档和固定版本复核，不把不同语言相互补齐成一个从未存在的配置。

## 英文安全研究的用途

[Microsoft Defender 团队 2026-02-19 文章](https://www.microsoft.com/en-us/security/blog/2026/02/19/running-openclaw-safely-identity-isolation-runtime-risk/)讨论身份、凭证、隔离和运行风险。我用它构建检查问题，不把年初对控制能力的评价直接当成 10 月实现的完整结论。

[Mind Your HEARTBEAT!](https://arxiv.org/abs/2603.23064)，Yechao Zhang 等，初版 **2026-03-24**，本轮摘要页显示 v3 更新 **04-04**，研究后台接触未可信内容后污染持久记忆的问题。本轮只核对摘要和版本信息，未审阅其完整实验或复现攻击，不采用成功率等数字。

## 我想转成什么实验

除了观察当前动作是否被拒绝，还要观察不可信材料是否进入长期知识，之后是否在新任务中重新获得影响。我的测试会用虚构标记，保存来源、候选和最终笔记。

这类研究帮助我提出跨时间的问题，不能由论文标题推断当前版本仍可被同样方式利用，也不能反过来由出现来源追踪文档就宣称问题已全部解决。

版本差异和机制更新分别见 [版本笔记](../../product/versions-and-migrations/)与 [记忆笔记](../../architecture/memory-and-dreaming/)。
