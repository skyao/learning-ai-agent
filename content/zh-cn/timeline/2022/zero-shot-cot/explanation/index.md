---
title: "Zero-shot CoT 讲解"
linkTitle: "讲解"
weight: 20
date: 2026-09-15
description: >
  推理协议从「每任务写示例」收成一句触发器。可复制；仍无 Action / Observation。
---

## 论文解决了什么问题

[CoT](../../chain-of-thought/) 有效，但每类题要写逐步示范，题型一换还可能伤成绩。成功容易被记在「少样本」账上。本文把示范拿掉，只留一句英语祈使，证明多步推理也可以是**零样本模板**引出的能力。

## 对后续 LLM 与 Agent 的影响

「先想再答」的触发成本降到可复制的一句。后来系统提示里的 think step by step、思维链开关、Agent 里默认先输出 Thought，都不再依赖为 GSM8K 手写的那 8 条。它没有把计算接到环境：没有搜索，没有解释器。协议可复制，循环仍未接通。
