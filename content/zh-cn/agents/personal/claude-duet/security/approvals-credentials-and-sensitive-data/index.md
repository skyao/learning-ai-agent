---
title: "审批、凭证与敏感信息流转"
weight: 10
date: "2026-10-23T00:00:00+08:00"
description: "审批、凭证与敏感信息流转"
materialType: "资料阅读与个人分析"
---

## 三类控制不能互相替代

发布文将动作分类、凭证保护与敏感信息流转分别介绍，并关联既有 Managed Agents、Auto mode 与浏览器安全研究。我的理解是，它们控制的是不同对象：能否执行、能否接触秘密，以及哪些数据能发给谁。

Managed Agents 文章中的凭证隔离与代理调用背景，适合帮助我提出问题；Claude Code 旧分类器的具体模型、阈值与测试结果，则不能直接当作 Duet 的当前实现。厂商说明相关设计被沿用，不代表我已经做了产品安全审计。

Duet 公告还描述消息级敏感信息检查。对平台而言，我希望授权同时绑定内容和接收对象；用户批准发送一份草稿后，如果系统又加入新信息，旧批准是否仍有效，需要在动作前重新校验。

下一步我会用合成敏感标记与测试目标，观察内容准备、批准与执行之间的关系，不向真实第三方发送数据。官方防护说明作为设计证据，实际覆盖范围仍以验证记录修正。

原始资料：[Introducing Claude Duet](https://claude.com/resources/articles/claude-duet)；[Scaling Managed Agents](https://www.anthropic.com/research/managed-agents)；[How we built Claude Code auto mode](https://www.anthropic.com/research/claude-code-auto-mode)；[Mitigating prompt injections in browser use](https://www.anthropic.com/research/prompt-injection-defenses)；[Trustworthy agents in practice](https://www.anthropic.com/research/trustworthy-agents)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
