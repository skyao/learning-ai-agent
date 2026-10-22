---
title: "Skills、插件市场与扩展信任"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "Skills、插件市场与扩展信任"
materialType: "资料阅读与个人分析"
---

## 指令复用与服务加载不是同一层

Skills 参考将技能发现、提供方和作用域组织为服务，来源可以是文件系统或打包资源。我的理解是，技能主要承载可按需使用的工作方法，不能仅凭目录里存在一份说明，就认为对应工具和权限也已经具备。

插件则可以改变运行组合。当前市场指南描述基于索引的发现流程，自定义市场仍是实验性能力，需要在设置中启用。可安装、可热更新与可信是三个不同问题；市场元数据本身不构成安全审计结论。

对自己的平台开发，我会把技能内容、插件依赖、工具权限和来源版本一起存档。只有这样，下一次执行改变时，才能区分是指令更新、插件升级还是模型路由变化。

本轮没有安装市场插件。后续用自建无外部副作用的扩展验证安装、卸载与升级，再观察会话中哪些能力随生命周期消失、哪些历史记录仍保留。

原始资料：[Skills](https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/skills)；[Plugin market](https://deepseek-harness.github.io/deepseek-harness/en/guide/plugin-market)；[Architecture](https://deepseek-harness.github.io/deepseek-harness/en/reference/)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
