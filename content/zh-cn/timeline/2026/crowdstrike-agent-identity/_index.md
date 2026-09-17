---
title: "CrowdStrike 的 Agent 身份与运行时管控"
linkTitle: "[产品]CrowdStrike Agent 身份"
分类: "产品"
标签:
  - "工程化"
weight: 170
date: 2026-09-17
description: >
  2026-08-31 ~ 09-02。给每个 Agent 签发可验证身份、不发常设凭证、令牌按最小权限最短时间签发；终端上管控已知与影子 Agent。
---

CrowdStrike，Fal.Con 2026。三件与 Agent 直接相关：**Falcon Guardian**（在 Windows / macOS 终端发现已知与影子 Agent，给出实时清单，阻止未授权 Agent，把治理策略变成可执行的运行时控制）；**Agentic Identity Provider**（每个 Agent 签发**可加密验证、不可冒用或共享的身份**；**Agent 从不持有常设凭证**，访问由令牌代理，按每个任务所需的最小权限与最短时间签发；**每个动作都绑定到它代表的人或工作负载**）；以及 agentic SOC（跨 Agent 的持久记忆、按工作流配置自治等级）。

1. [材料](./source/) — 按官方新闻稿转述：三件事各自说了什么、身份模型的三条规则、以及未发布服务的免责声明。
2. [讲解](./explanation/) — 目前最完整的 Agent 身份模型；与运行时侧、数据侧的同类做法对照。

来源：[Falcon Guardian](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-unveils-falcon-guardian-ai-agent-security/)、[Agentic Identity Provider](https://www.crowdstrike.com/en-us/press-releases/crowdstrike-agentic-identity-provider-foundation-for-ai-agent-identity-security/)。
