---
title: "模型、Harness 与计算用量：怎样评估 Spark 的完整工作流"
linkTitle: "模型与计算用量"
weight: 10
date: 2026-10-21
description: >
  区分发布时配置、当前 Task 模型菜单和我的工作流评估方法
materialType: "官方资料阅读与评估分析"
---

原始资料：[2026-05-19 发布](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/)、[About Gemini models](https://support.google.com/gemini/answer/18648722?hl=en)和 [计划限制](https://support.google.com/gemini/answer/17094710?hl=en)。阅读日期：**2026-10-21**。后两项为动态帮助；没有账号内模型配置和调用记录。

## 模型信息需要带时间与入口

5 月发布明确写到 Gemini 3.5 与 Antigravity harness。[原始发布](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/)

本轮读取的模型帮助已按 Chat / Task 分列：Pro、Ultra 的 Task 栏为 **Flash、Argon**，有 Low / Medium / High 思考级别；更高模型与思考级别消耗更多用量。Chat 的可选项不能直接当成 Task 的可选项。[当前模型说明](https://support.google.com/gemini/answer/18648722?hl=en)

我把这两条作为不同时点的配置资料，不将产品一直绑定到发布时的某个模型，也不根据帮助菜单推定每一步工具操作实际调用了什么。Harness 的公开名称同样不足以还原任务持久化、调度与工具隔离的完整实现。

## 我想测量的是一项委托的完成成本

对“每周更新个人代理调研笔记”这项工作，我准备记录：

| 维度 | 我的验收依据 |
| --- | --- |
| 事实质量 | 来源能否支持结论，是否混淆发布、开放与实测 |
| 时效 | 是否识别入口更名、恢复更新与旧文条件 |
| 执行结果 | 文件是否写到指定位置、重复运行是否覆盖或重复添加 |
| 人工介入 | 授权、接管、纠错、重新整理分别耗时多少 |
| 等待与恢复 | 是否因额度、设备或工具失败停住，能否解释状态 |
| 用量 | 模型、思考级别、任务次数与产品可见消耗 |

我会先固定资料集和输出标准，再比较不同配置。只提高思考级别而不固定来源和权限，很难判断改善究竟来自模型推理、更多检索，还是人工补充了关键上下文。

## 计算额度也会改变持续执行结果

官方计划文档说明，额度耗尽会使计划不运行。[计划限制](https://support.google.com/gemini/answer/17094710?hl=en) 这意味着成本约束会影响交付时间和持续性，不能只在任务完成后统计一笔费用。

我会把未运行、运行失败与验收失败分开记录。菜单中的 Chat 降级行为，也不能直接用于推断 Task 额度耗尽后会自动换模型继续。

目前尚无这轮条件下的可复核对照结果，因此这里只沉淀配置证据和评估方法，不给出 Spark 与其他个人代理的效果排名。
