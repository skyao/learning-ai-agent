---
title: "中英文资料与外部安全研究如何对照"
weight: 10
date: "2026-10-22T00:00:00+08:00"
description: "中英文资料与外部安全研究如何对照"
materialType: "资料阅读与个人分析"
---

## 先对齐时间与证据范围

我这轮交叉阅读了中文 Web 入门、中文权限预设与英文架构、子系统参考。中文入门以服务器已经启动为前提，因此不能把它当作覆盖所有安装和运维条件的完整部署说明。

动态参考比旧演示更细，但也可能先于某个桌面安装包。记录疑点时，我优先保留版本与来源差异，再等实际部署确认，而不是把不同时间的能力拼成一个无条件成立的产品形象。

外部资料中，我读到 2026 年 8 月的安全研究预印本摘要。它描述受控本地环境中的注入攻击评估，并区分规则判定与模型判定。本轮只读摘要，没有阅读全文或复现，不能拿其中实验直接评价 10 月预发布的风险程度，也不摘取脱离条件的成功率。

对我有价值的是后续实验方法：同时保存输入来源、权限组合、工具动作和最终副作用。真正要检查的是信任边界在哪里被跨过。

原始资料：[使用 Web UI](https://deepseek-harness.github.io/deepseek-harness/guide/quickstart)；[权限预设](https://deepseek-harness.github.io/deepseek-harness/reference/subsystems/permission-presets)；[Security Assessment of DeepSeek Harness with A.I.G](https://arxiv.org/abs/2608.16393)；[DeepSeek Harness Releases](https://github.com/deepseek-ai/deepseek-harness/releases)。资料日期与性质见 [资料索引](../../references/)，动态页面按本轮读取内容记录。
