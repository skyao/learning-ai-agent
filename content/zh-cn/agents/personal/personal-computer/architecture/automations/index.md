---
title: "计划与 Automations：持续工作采用哪一份上下文"
weight: 30
date: "2026-10-21"
description: "计划与 Automations：持续工作采用哪一份上下文"
materialType: "官方资料阅读与个人分析"
---

资料：[Scheduled Tasks in Computer](https://www.perplexity.ai/help-center/en/articles/11521526-perplexity-tasks)，标注更新 **2026-09-21**；[10 月更新](https://www.perplexity.ai/changelog/automations-inline-visualizations-and-gpt-6-1-sol)。阅读：**2026-10-21**。

## 当前文档中明确的条件

定时工作运行在云端，与一次性等待区别；最密每小时一次，每个会话最多 15 项。后台运行可使用新隔离上下文，有些工作自动采用含对话的方式。额度或连接器反复失败可能使计划暂停，恢复后需手工启用。[计划帮助](https://www.perplexity.ai/help-center/en/articles/11521526-perplexity-tasks)

10 月公告还提到连接应用事件触发和沿用 Memory、Skills 等能力；本轮未读取到该专门发布正文，概括限于 [官方更新日志](https://www.perplexity.ai/changelog/automations-inline-visualizations-and-gpt-6-1-sol)。

## 两种恢复不能混在一起

[额度帮助](https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity)描述活动任务可能在补充额度后自动恢复；计划帮助则说明多次跳过后暂停的计划不会自动重新启用。我把它们视为不同对象，而不是随意选一句当作全部恢复规则。

## 我的持续学习任务

我会先要求代理整理一个固定主题，生成草稿，再设周期。每轮明确范围、来源、输出位置和不得重复添加的规则。

如果每次使用新上下文，哪些稳定方法会被加载？如果沿用对话，过时范围是否被继续使用？Brain、Skill、计划指令和当前源数据需要分别观察。

对自己的平台，我会保留触发、输入版本、执行、外部结果和通知，避免把通知安静当成没有执行，也避免把报告出现当作所有业务动作完成。
