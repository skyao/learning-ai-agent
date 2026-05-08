---
title: "介绍"
linkTitle: "介绍"
weight: 10
date: 2025-05-27
description: >
  Cube Sandbox 是一款基于 RustVMM 与 KVM 构建的高性能、开箱即用的安全沙箱服务
---

## 介绍

https://github.com/TencentCloud/CubeSandbox/blob/master/README_zh.md

Cube Sandbox 是一款基于 RustVMM 与 KVM 构建的高性能、开箱即用的安全沙箱服务。它既支持单机部署，也能够很方便的扩展到多台机器的集群服务。同时对外兼容E2B SDK， 在60ms内就可以创建一个具备服务能力的硬件隔离沙箱环境，并保持着小于5M的内存开销。

核心优势:

- **极致冷启动：** 基于资源池化预置和快照克隆技术，直接跳过耗时初始化流程。整个沙箱服务端到端冷启动一个可服务的沙箱时间平均 < 60ms
- **单机千例的高密部署：** 基于 CoW 技术实现极致内存复用，用 Rust 重构底层极致裁剪，使得单实例内存开销低至 <5MB，轻松在一台机器上跑起数千个 Agent。
- **真正的内核级隔离：** 告别不安全的 Docker 共享内核（Namespace）。每个 Agent 拥有独立的 Guest OS 内核，杜绝容器逃逸，放心运行任何大模型生成的未知代码。
- **零成本迁移（E2B 完美平替）：** 原生兼容 E2B SDK 接口规范。只需替换一个 URL 环境变量，无需业务代码改动就可切换到免费的 Cube Sandbox，并获得更好的性能体验。
- **网络安全：** 基于 eBPF 的 CubeVS 在内核态实现严格的沙箱间网络隔离，支持细粒度出站流量过滤策略。
- **开箱即用：** 可一键快速部署，同时支持单机部署和集群部署。
- **事件级快照回滚（coming soon）：** 百毫秒级的高频快照回滚能力，基于快照快速创建分叉探索环境
- **可用于生产环境：** Cube Sandbox 已在腾讯云生产环境中经历大规模的服务验证，稳定可靠。

## 官网

github 代码仓库：

https://github.com/TencentCloud/CubeSandbox

## 架构概览

![](https://github.com/TencentCloud/CubeSandbox/raw/master/docs/assets/cube-sandbox-arch.png)

| 组件                          | 职责                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| **CubeAPI**                   | 兼容 E2B 的 REST API 网关（Rust），替换 URL 即可从 E2B 无缝切换。 |
| **CubeMaster**                | 编排调度器，接收 API 请求并分发到对应 Cubelet，负责资源调度与集群状态维护。 |
| **CubeProxy**                 | 反向代理，兼容 E2B 协议，将请求路由到对应沙箱。              |
| **Cubelet**                   | 计算节点本地调度组件，管理单节点所有沙箱实例的完整生命周期。 |
| **CubeVS**                    | 基于 eBPF 内核态转发的虚拟交换机，提供网络隔离与安全策略支持。 |
| **CubeHypervisor & CubeShim** | 虚拟化层 —— CubeHypervisor 负责管理 KVM MicroVM，CubeShim 实现 containerd Shim v2 接口，将沙箱集成到容器运行时。 |

## 网络模型

参考官方文档： https://github.com/TencentCloud/CubeSandbox/blob/master/docs/zh/architecture/network.md 

## 资料

- [腾讯云开源OpenAI、Manus同款Agent底座](https://cloud.tencent.com/developer/article/2659528)