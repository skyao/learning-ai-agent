---
title: "SWE-bench Verified（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-08-13 公告转述：人工校验子集、难度切片、GPT-4o 分数。
---

本页转述 **2024-08-13 公告当时公开说了什么**，不把后来的 50%+ 刷榜写进当天。

主要出处：OpenAI，2024-08-13，[Introducing SWE-bench Verified](https://openai.com/index/introducing-swe-bench-verified/)。与 SWE-bench 原作者合作。本页不复制公告全文。原论文见 [2023 SWE-bench](../../../2023/swe-bench/paper/)。

---

## 主张

SWE-bench 用真实 GitHub issue 考「给仓库和问题描述，能否改到测试通过」。到 2024-08-05，公开榜上最好 agent 在原版约 **20%**、SWE-bench Lite 约 **43%**。OpenAI 认为原测试集含**有问题**的题（含混、不可解、测试不足等），会低估模型能力。

**SWE-bench Verified：** 从原测试集抽出 **500** 条，经人类标注员确认「非 problematic」。公告写它**取代**原版 SWE-bench 与 SWE-bench Lite 作为推荐测试集。同时公开全部原测试样本的人工标注，可按难度切片：约 **196** 道「不到 15 分钟」的 easy，约 **45** 道「超过 1 小时」的 hard。

## 当时报的分数

用若干在原榜上表现好的开源脚手架测 GPT-4o（`gpt-4o-2024-05-13`）：最好脚手架在 Verified 上 **33.2%**，而其在原版 SWE-bench 上约 **16%**。公告把这读成：原数据集低估了 agent 能力。从 Lite 到 Verified 的跳变没有那么大，因为 Lite 已经滤过一轮。

## 当时不是什么

这不是新任务分布，是原分布上的清洗子集。33.2% 是 GPT-4o + 开源脚手架，不是「软件工程师已经能做三分之一真实工作」。公告也没有说可以和 2023 年论文里的个位数直接做减法。
