---
title: "Personal Computer 资料索引"
linkTitle: "资料索引"
weight: 70
date: "2026-10-21"
description: "保留中英文资料、原始日期、证据范围与待核实问题"
materialType: "资料索引"
---

本轮检索与阅读截至 **2026-10-21**。以下资料区分官方发布、动态帮助、开源仓库和外部观察。没有账号实测；没有绝对更新日期的页面只记录读取日期，不把阅读日当成发布日期。

## 原始资料与本地笔记

| 日期 / 状态 | 原始资料 | 性质与本地笔记 |
| --- | --- | --- |
| 动态 | [Computer](https://www.perplexity.ai/products/computer)、[Personal Computer](https://www.perplexity.ai/personal-computer)、[Windows](https://www.perplexity.ai/en-GB/hub/products/computer-for-windows) | 官方产品入口；[谱系](../product/positioning/) |
| 页面日期 2026-04-16；2026-05-10 | [Mac 上线](https://www.perplexity.ai/changelog/personal-computer-on-mac-launch-and-computer-updates---april-17-2026)、[Mac for all](https://www.perplexity.ai/changelog/personal-computer-for-all-users-on-mac) | 官方历史日志；[演进](../product/access-and-updates/) |
| 2026-09-21 / 10-05 | [9 月更新](https://www.perplexity.ai/changelog/effort-mode-gpt-6-astra-and-skills-marketplace)、[10 月更新](https://www.perplexity.ai/changelog/automations-inline-visualizations-and-gpt-6-1-sol) | 官方更新；[演进](../product/access-and-updates/) |
| 2026-10-20；日期由官方博客索引核对 | [Mac fully local](https://www.perplexity.ai/en-GB/hub/blog/perplexity-computer-now-runs-fully-local-on-mac)、[索引](https://www.perplexity.ai/en-GB/hub/blog) | 官方近期发布；[路径](../architecture/execution-boundaries/) |
| 动态 | [英文设置](https://www.perplexity.ai/personal-computer-setup)、[中文设置](https://www.perplexity.ai/zh/personal-computer-setup)、[Academy](https://www.perplexity.ai/en-GB/hub/academy/personal-computer-for-mac) | 官方指南；[设备与浏览器](../integrations/files-and-browser/) |
| 更新标注 2026-10-02 / 09-14 | [Brain](https://www.perplexity.ai/help-center/en/articles/19700001-what-is-brain)、[Max](https://www.perplexity.ai/help-center/en/articles/11680686-perplexity-max) | 官方工作记忆；[Brain 笔记](../architecture/brain/) |
| 更新标注 2026-09-21 | [Scheduled Tasks](https://www.perplexity.ai/help-center/en/articles/11521526-perplexity-tasks) | 官方计划与恢复；[自动化](../architecture/automations/) |
| 更新标注 2026-10-01 | [Effort mode](https://www.perplexity.ai/help-center/en/articles/20260917-effort-mode-in-perplexity-computer) | 官方模型设置；[用量分析](../models/effort-and-cost/) |
| 动态 | [Credits](https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity) | 官方计费与暂停；[用量](../models/effort-and-cost/)、[控制](../security/controls-and-data/) |
| 更新标注 2026-10-14 | [Skills](https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills)、[Computer 帮助](https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer) | 官方能力与入口；[Skills](../integrations/skills/)、[Plugins](../integrations/plugins-and-connectors/) |
| 更新标注 2026-08-05 | [Browsers and Apps](https://www.perplexity.ai/help-center/en/articles/19800006-work-with-browsers-and-apps) | 官方历史帮助，与后来日志对照；[工具](../integrations/files-and-browser/) |
| 2026-10-15 / 动态仓库 | [SPACE 开源](https://www.perplexity.ai/en-GB/hub/blog/open-sourcing-space)、[仓库](https://github.com/perplexityai/SPACE)、[架构](https://github.com/perplexityai/SPACE/blob/main/docs/architecture.md) | 官方运行平台；[SPACE 阅读](../security/space/) |
| 2026-09-23，官方索引日期 | [Escaping SPACE: Part I](https://www.perplexity.ai/en-GB/hub/blog/escaping-space-part-i) | 原始安全研究；[SPACE 阅读](../security/space/) |
| 2026-03-12 / 09-15 | [TechRadar](https://www.techradar.com/pro/ai-is-the-computer-perplexity-reveals-personal-computer-a-cloud-based-ai-agent-running-on-your-mac)、[Tom’s Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/perplexitys-local-ai-agent-comes-to-windows-but-only-for-rtx-gpus-with-at-least-24gb-of-vram-portable-computer-brings-ai-for-multistep-tasks-to-compatible-pcs) | 英文历史报道；[外部观察](../practice/source-observations/) |

## 本轮资料边界

硬件门槛、Mac 系统版本、Effort 的端支持和额度规则有不同快照，按各页日期与范围保留。云端计划与本地周期不能共用一条离线运行结论；Brain 维护记忆也不等于主动执行任务。

本轮未读完全部 SPACE 代码、没有部署或安全复现。两篇专门博客正文读取失败时，只用已可读的官方日志记录相应能力，不补写实现。后续见 [实践计划](../practice/validation-plan/)。
