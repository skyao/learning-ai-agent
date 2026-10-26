---
title: "连接器、Skills 与浏览器的能力范围"
weight: 10
date: "2026-10-23T00:00:00+08:00"
description: "连接器、Skills 与浏览器的能力范围"
materialType: "资料阅读与个人分析"
---

## 共享接入配置以后，仍要检查动作

Duet 复用账号已有的部分方法与应用配置。通用连接器帮助说明访问受来源账号权限约束，共享凭证则跟随该凭证可访问的范围。我会把这个原则与 Duet 自身的限制一起阅读。

入门中特别列出部分 Slack 限制、Microsoft 365 尚不可用。Marketplace 的目录规模不能直接当成 Duet 中每个连接器都经过相同验证，更不能推导出每个应用的所有写操作都可执行。

对没有专门连接器的网站，云端浏览器提供另一条动作路径。我关注它与 API 的身份和权限怎样对应：连接器拒绝某项写入后，是否应允许换浏览器完成同样副作用，需要沿真实批准范围判断。

后续用无副作用的测试工具，分别记录连接身份、读取对象、写入请求、错误与回执。Skill 说明怎样工作，连接和浏览器提供能力，真正授权仍落在动作执行处。

原始资料：[Use connectors to extend Claude capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)；[Get started with Claude Duet](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
