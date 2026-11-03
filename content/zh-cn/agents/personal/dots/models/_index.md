---
title: "Dots 模型与评估"
linkTitle: "模型与评估"
weight: 30
date: 2026-10-21
description: >
  研究 Dots 中模型、Harness、确认策略与长期任务的评估条件
---

我在这里记录模型与运行系统怎样共同影响行为，重点看评估条件和结果的适用范围。

- [Astra 与长期任务评估](astra-system-card/)：阅读官方系统卡的 dots 附录，关注范围变化和连续任务边界。

本轮没有独立复现，也没有根据安全评估建立产品效果排名。

## 模型家族扩展：从单一 Astra 到 Astra + Terra（2026-11-03 官方发布页修订）

我记这一节的理由是它改写了我此前在模型章节默认的前提：Dots 发布时是“Powered by GPT-6 Astra”的单一模型口径，而 2026-11-03 官方在《Introducing dots》页首写入的更新注把口径改成了模型家族。我是 2026-11-03 在跟踪检查中直接读到这条更新注的，并用 curl 保存了页面快照核对，更新注原文如下：

> Update on November 3, 2026: We're expanding the family of frontier models that power dots to include GPT-6.1 Terra. Your dot can draw on different models for different parts of its work. GPT-6.1 Terra builds on the GPT-6 series' alignment improvements and uses safeguards developed for GPT-6 Astra.

证据分层我分三层写。第一层是官方文档本身：模型家族纳入 GPT-6.1 Terra，dot 可为工作的不同部分调用不同模型，Terra 建立在 GPT-6 系列对齐改进之上、使用为 Astra 开发的安全防护——这三句是我能直接引用的官方口径。第二层是此前的高管表态：OpenAI 高管 Tibo 在 2026-11-02 的两帖（经多家追踪站逐字转述，X 原帖我仍未直接打开）称正在扩展模型家族、Terra 更快且个性有所提升、将帮助把 dots 带给更多人、dot 将按任务及任务内不同部分选用最合适模型——发布页更新注只印证了“家族扩展 + 按工作部分调用不同模型”的方向，速度、个性、扩围三点并未写入发布页，我不得把高管帖子的表述升级为官方文档口径。第三层是待验证：路由规则（哪类任务用哪个模型）、默认模型是否变化、是即时全量还是逐步放量、除 Astra 与 Terra 外还有哪些模型，官方文档均未公布，我不得写成“Dots 已经改用 Terra”或“已经实现多模型路由”。

还有一处页面内部的不一致我必须同时记：更新注之下，正文仍写 "Powered by GPT-6 Astra"，且另一处仍写短信功能 "coming soon"（而短信通道已于 2026-10-28 上线）。引用时我只引更新注作模型家族口径，不引正文作“仍只用 Astra”的证据；同理，帮助中心 Getting started 页我同日重读后口径未变且不具名底层模型，它不能印证这次修订，资格（Pro 排除 EEA、英国、瑞士）与“带给更多人”之间也没有官方对应关系，不得拼成 Plus 扩围或欧洲 Pro 开放的结论。

对我自己的学习而言，这一节的意义不在 Terra 本身的性能，而在模型选择从“固定一款”变成“按工作部分分流”：此后不同任务的速度、成本与行为可能不再一致，引用任何 Dots 实测结论时都应多问一句——这次运行用的是家族中的哪一款、路由是否可干预可查看。在官方公布路由规则与可见性之前，这句追问只能记为待验证问题，不能当作已有答案。
