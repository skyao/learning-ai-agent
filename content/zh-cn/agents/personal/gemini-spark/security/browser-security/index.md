---
title: "Chrome 代理安全设计：动作审核与来源边界"
linkTitle: "浏览器安全设计"
weight: 10
date: 2026-10-21
description: >
  阅读 Chrome 团队公开的 User Alignment Critic 与 Origin Sets，分析其适用范围
materialType: "官方历史技术资料阅读笔记"
---

原始资料：[Architecting Security for Agentic Capabilities in Chrome](https://blog.google/security/architecting-security-for-agentic/)，Nathan Parker，Chrome security team，**2025-12-08**。阅读日期：**2026-10-21**。

这是 Spark 发布以前的 Chrome 技术背景。7 月 Spark 公告将 Chrome 接入与这一安全架构联系起来，但它仍不能视为 Spark 所有云端、Workspace 或 MCP 操作的完整设计文档。[7 月官方更新](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/)

## 我读到的防护思路

文章针对网页间接提示注入介绍 User Alignment Critic：独立模型审核拟执行动作，只接触动作元数据，不直接接触未过滤的网页内容。Origin Sets 设计区分可读、可读写来源；文中也说明初版采用较简单的可读写集合追踪。此外还有关键动作确认、检测与持续测试。[Chrome 技术原文](https://blog.google/security/architecting-security-for-agentic/)

这里要保留设计与实施阶段的区别。我不能因为原文画出了两类集合，就认定当时完整实现了所有读写来源约束，更不能由文章推出当前防护已经消除了提示注入。

## 我关注审核器的输入边界

规划器必须读取网页，才知道下一步做什么；审核器如果再次读取同样的未可信内容，也可能受到相同影响。原文让我关注：拆开模型职责的同时，还需要拆开输入与信任范围。

对自己的平台，我会先问审核动作所需的最小信息是什么：用户委托、目标对象、拟发送内容、目标位置与必要来源关系。给审核器的信息太少可能无法判断，给得太多又会重新引入污染面。这是需要用具体任务与攻击样本衡量的取舍。

## 来源边界需要关联数据去向

网页任务常常跨站点。例如从一个资料页提取信息，再填写到另一个系统。仅判断“两个网站都与任务有关”，还不够解释哪些数据可以从前者流向后者。

我会用人工构造的公开测试页面验证：页面内容能否诱导代理把另一处的测试标记写出去，或者扩大写入目标。需要同时记录规划、审核、实际请求和用户确认，而不只看最终回答是否声称拒绝。

目前这些是我的学习和测试问题；本轮没有进行攻击实验，也没有可复核的 Spark 安全成功率。不同执行路径如何受控，仍需结合 [工具边界](../../integrations/)和 [控制语义](../controls-and-data-lifecycle/)分别检查。
