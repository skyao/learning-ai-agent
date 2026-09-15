---
title: "Claude Tag（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2026-06-23 发布博文转述：Slack 队友、@Claude、Beta 与迁移。
---

本页转述 **2026-06-23 发布博文当时公开说了什么**。身份模型细节见次日 [Agent identity](../../agent-identity/)；机制深挖见本站 [Claude Tag 资料](/data/2026/claude-tag/)，本页不整页复制。

主要出处：Anthropic，2026-06-23，[Introducing Claude Tag](https://www.anthropic.com/news/introducing-claude-tag)。中英对照：[发布博文](/data/2026/claude-tag/introduction/introducing-claude-tag/)。

---

## 产品主张

Claude Tag 是团队与 Claude 协作的新方式。先从 **Slack** 开始：Claude 可以像团队成员一样加入。向选定频道授权，并连接到所选工具、数据乃至代码库。频道里任何人可 **@Claude** 委派任务，自己去忙别的。Claude 记住频道里的相关信息，并能规划将来要做的任务。

Anthropic 把它写成 Claude Code 演化的开端：更主动，也更适合整个团队。内部叙事：@Claude 已成为推进工作的主要方式之一；产品团队约 **65%** 的代码由内部版 Tag 产出（**厂商自报**，不是独立审计）。同一模式超出工程：追指标、处理支持工单、帮定位缺陷。

即日起 **Claude Enterprise 与 Team** 可以 **beta** 使用。目标是扩展到团队工作的其他表面，当时交付的是 Slack。

## 使用方式（博文自己列的）

用过 [Claude Code](../../../2025/claude-code/) 或 [Cowork](../../cowork/) 会有熟悉感：用简单的话提出请求，它拆成阶段，用已有工具推进，完成后在 Slack 线程里回复产物。相对个人聊天，博文强调三点：

- **多人：** 一个频道里只有一个与所有人互动的 Claude；谁都能看见它在做什么，也能从上一任停下的地方接续。
- **随时间学习：** 跟进频道积累上下文；若授权，还可从其他频道和数据源学习（不从私有频道向外汇报）。
- **主动：** 若开启 **ambient**，会主动更新它认为你该知道的事，跟进沉寂未决的线程或任务。

管理员侧：配对 Slack、给工具、设组织月度花费上限、先在私有频道测试。Tag **取代**现有 Claude in Slack 应用；管理员可在 30 天内选择迁移。旧应用退役时间在帮助文档里写成 **2026-08-03**。符合条件的 Enterprise / Team 有上线积分（仅限 Tag 在 Slack 中的用量等限制，以当时说明为准）。

## 当时不是什么

Beta，不是所有套餐、不是 Slack 之外的默认表面。65% 是内部产品团队自报。ZDR 等限制写在后续文档，不在这篇发布博文的中心，但产品当时明确不是「已经普及的虚拟员工」。
