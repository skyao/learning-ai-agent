---
title: "OpenAI o3（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-01-31 与 04-16 公告转述：o3-mini、o3 在思考中用工具。
---

本页按时间分开转述，不把 8 月 GPT-5 或 Codex 的 codex-1 写成这两天已经有。

---

## 2025-01-31：o3-mini

出处：OpenAI，[OpenAI o3-mini](https://openai.com/index/openai-o3-mini/)。推理系列里更便宜、更快的一档，面向 STEM、数学、编码。ChatGPT 与 API 当天可用。开发者可设 reasoning effort：low / medium / high。当时**不支持视觉**；看图仍用 o1。Plus / Team 限额相对 o1-mini 上调。可与搜索配合给带链接的答案（早期原型）。

这是 o3 家族进入产品的第一只，不是完整 o3。

## 2025-04-16：o3 与 o4-mini

出处：系统卡 [OpenAI o3 and o4-mini System Card](https://openai.com/index/o3-o4-mini-system-card/)；同期产品说明。o3 被写成当时最强推理模型；o4-mini 更快更便宜。关键主张：推理与**完整工具能力**结合——网页浏览、Python、图像与文件分析、生图、canvas、automations、file search、memory。模型可在思维链里调用工具，例如裁剪图像、上网、用 Python 分析数据。公告还写「think with images」：视觉不只是看一眼，而是进入推理链。

开发者侧：Chat Completions 与 Responses API。社区说明里 o3 在 SWE-bench Verified 上自报 **69.1%**（厂商榜，脚手架另计）。Plus / Pro / Team 当天可在 ChatGPT 选用。

## 当时不是什么

推理模型与工具结合，不是新的运行时，也不是自托管网关。o3-mini 1 月还不能看图；完整 o3 的工具是 ChatGPT / API 宿主提供的，不是用户机器上的 shell。
