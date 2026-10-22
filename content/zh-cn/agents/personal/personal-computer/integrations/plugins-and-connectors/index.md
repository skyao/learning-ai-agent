---
title: "Plugins 统一入口：配置整合之后怎样核对业务访问"
weight: 30
date: "2026-10-21"
description: "Plugins 统一入口：配置整合之后怎样核对业务访问"
materialType: "官方资料阅读与个人分析"
---

资料：[Computer 帮助](https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer)、[Skills 帮助](https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills)。两页标注更新 **2026-10-14**；阅读：**2026-10-21**。

当前 Computer 帮助已使用 Plugins 入口，并为未更新界面保留 Customize → Connectors 路径。Skills 也进入同一管理入口；从插件安装的技能是可管理副本。[Computer](https://www.perplexity.ai/help-center/en/articles/13837784-what-is-computer) / [Skills](https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills)

## 统一入口减少概念，也需要保留作用范围

连接器提供服务访问，技能提供工作方法，项目提供工作范围。即使都能从一个页面管理，权限和生命周期也不应被合并理解。

我会为资料清单测试一个只读来源和一个可写目标，核对连接哪一个账号、采用哪些动作，以及断开后已有计划怎样报告失败。

## 对自己的平台开发有什么启发

用户希望按工作发现能力，平台内部仍需保存组件版本、凭证主体与依赖关系。一项插件更新之后，是只换了工具说明、增加新动作，还是改变方法副本，需要能解释。

我更想观察的不是连接器数量，而是同一业务对象能否稳定定位，失败能否诊断，凭证过期后是否停止消耗和重复执行。

本轮不将 Agent API 的 Profiles 或其他开发平台配置直接当成消费产品内的可用能力。相关资料属于后续扩展阅读，当前笔记只记录已读取页面明确覆盖的范围。
