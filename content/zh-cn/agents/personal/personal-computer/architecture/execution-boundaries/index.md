---
title: "三条执行路径：规划、私有数据与业务动作分别在哪里"
weight: 10
date: "2026-10-21"
description: "三条执行路径：规划、私有数据与业务动作分别在哪里"
materialType: "官方资料阅读与个人分析"
---

资料：[Mac fully local 发布](https://www.perplexity.ai/en-GB/hub/blog/perplexity-computer-now-runs-fully-local-on-mac)、[Personal Computer 设置](https://www.perplexity.ai/personal-computer-setup)、[SPACE 架构](https://github.com/perplexityai/SPACE/blob/main/docs/architecture.md)。阅读：**2026-10-21**。

## 我的职责视图

| 路径 | 我依据资料理解的范围 | 实验中需要确认 |
| --- | --- | --- |
| 云端 Computer | 远程规划与工具、沙箱工作 | 输入、凭证和产物实际位置 |
| Personal / Hybrid | 本机资源参与，可能与云端编排配合 | 哪些私有内容出站，设备何时被唤起 |
| 本地模型与执行 | 支持硬件上可在本地规划和处理文件 | 是否调用外部服务、何时升级云端 |

10 月 20 日资料明确区分从云端开始的 Hybrid 与从 Mac 开始的本地模式。[官方模式说明](https://www.perplexity.ai/en-GB/hub/blog/perplexity-computer-now-runs-fully-local-on-mac) 这张表是我的职责分析，不表示产品内部一定有三个独立服务。

## 本地推理与离线任务不是同义词

一项任务可以本地推理，但主动调用连接器、查询最新资料或向外分享。反过来，云端代理也可以通过受控工具处理本机资源。

因此我会分别标记模型位置、材料位置、动作位置和接收方。对自己的平台，这比单一“本地 / 云端”标签更能解释数据如何移动。

## 恢复要找到正确状态

手机发起工作后，Mac 可能休眠，浏览器会话可能过期，云端部分却仍在运行。平台需要说明哪个阶段在等待，以及重连后依据什么继续。

[SPACE 的技术资料](../../security/space/)提供了沙箱、操作和命令流生命周期的阅读入口，但不能自动解释本地 Mac App 的全部恢复机制。

后续对相同资料包测试三条路径，记录实际模型、外部调用、文件差异和人工接管。任何“数据完全未出站”的判断都要限定任务和观察方法，本轮没有做网络验证。
