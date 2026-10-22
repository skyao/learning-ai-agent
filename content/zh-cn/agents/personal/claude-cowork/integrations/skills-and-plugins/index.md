---
title: "Skills、Plugins 与 MCP：复用方法与授予能力分别看"
weight: 20
date: "2026-10-21"
description: "Skills、Plugins 与 MCP：复用方法与授予能力分别看"
materialType: "官方资料阅读与个人分析"
---

## 我区分三种复用

| 对象 | 我主要从中学习什么 |
| --- | --- |
| Skill | 将专业知识、步骤和检查要求保存为可复用方法 |
| Plugin | 将技能、连接器等组合成某类工作能力 |
| MCP 工具 | 访问具体服务、数据或执行动作的接口 |

当前 Skills 帮助说明自定义技能可以打包上传，且需要启用代码执行。它扩展了方法与资料，但不等于自动取得所有外部系统权限。执行时仍要看接入工具及其授权。

当前插件帮助说明账号安装可以跨 Web、Desktop 和同账号 Claude Code 同步，但组件支持并不完全一致，例如 hooks、子代理更偏 Cowork / Code 场景。我不会把“插件可安装”理解成每个入口都能运行其中全部组件。

## 本地工具是重要边界

远程连接器通常由服务端访问，服务本身需要满足对应可达性条件。本地 MCP 则依赖桌面路径，并不因为 Cowork 有 Linux VM，就自动被包含在该代码沙箱中。

这对我开发平台的启发是：插件清单要表达组件类型、运行位置与权限依赖。只展示一个安装成功状态，无法解释为什么某个技能可读而工具不可达，或为什么一个插件会在宿主执行程序。

## 方法更新也需要治理

我希望后续验证同一个技能更新以后，已有计划是否立即采用新方法、任务历史是否保留当时版本，以及停用插件能否同时阻止正在等待的工具调用。

这些是我的验证问题，并不是已确认的缺陷。方法复用能降低重复配置成本，但长任务要可复现，还需要记录使用了哪份技能、哪个工具版本与哪次授权。

原始资料：[Skills](https://support.claude.com/en/articles/12512180-use-skills-in-claude)；[Plugins](https://support.claude.com/en/articles/13837440-use-plugins-in-claude)；[架构说明](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview)。动态帮助按 2026-10-21 读取内容记录，未进行账号实测。
