---
title: "本地 Web、公开部署与数据边界"
weight: 20
date: "2026-10-22T00:00:00+08:00"
description: "本地 Web、公开部署与数据边界"
materialType: "资料阅读与个人分析"
---

## 访问地址不是身份系统

公开部署指南默认以本地 Web 服务为起点，由反向代理承担外部 TLS 和入口配置。`--public-url` 用于声明对外地址，并不自动完成鉴权或改变监听方式。因此我不会把能够从手机打开页面直接当成已经具备受控远程访问。

从数据角度，我还需要分别跟踪工作区文件、会话日志、模型请求和插件后端。本地保存其中一部分，不意味着其余部分不会离开设备；第三方记忆的删除也不能由删除本地历史替代。

官方 SAFETY 文件明确仍处实验阶段，尚未完成安全审计。这是项目自述的成熟度边界，我将其和产品 Public Preview 一并保存，不将开放下载理解为生产安全保证。

本轮未公开部署服务。后续只在隔离的测试环境检查监听、认证、日志和凭证撤销，并按实际 Profile 记录边界。

原始资料：[Public deployments](https://deepseek-harness.github.io/deepseek-harness/en/guide/public-deployments)；[SAFETY.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md)；[Providers](https://deepseek-harness.github.io/deepseek-harness/en/guide/providers)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
