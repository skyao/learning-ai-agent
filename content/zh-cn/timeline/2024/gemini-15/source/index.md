---
title: "Gemini 1.5（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2024-02-15 公告转述：百万 token 窗口、多模态、私有预览。
---

本页转述 **2024-02-15 产品公告当时公开说了什么**，不以后来的 1.5 Flash、公开定价档或 200 万窗口回填。

主要出处：Google，2024-02-15，[Introducing Gemini 1.5](https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/)。开发者侧：[Gemini 1.5 in Google AI Studio](https://developers.googleblog.com/en/gemini-15-our-next-generation-model-now-available-for-private-preview-in-google-ai-studio/)。本页不复制公告全文。

---

## 产品主张

Gemini 1.5 被写成下一代模型，长上下文是突破点。首只放出测试的是 **Gemini 1.5 Pro**：中等规模多模态模型，宣称在一批任务上接近当时最大的 Gemini 1.0 Ultra。架构上写了 Mixture-of-Experts（MoE）。

上下文：

- **默认：** 128,000 token。
- **私有预览：** 有限开发者与企业客户可经 AI Studio / Vertex AI 试到 **最多约 100 万 token**。公告称这是当时大规模基础模型里最长的窗口；研究侧还写过测到约 1000 万 token，那不是产品默认。
- 公告把 100 万 token 约写成：约 70 万词、约 11 小时音频、或约 1 小时视频。早期测试免费，但延迟更长；正式定价打算按窗口档位收费。

用途举例（公告自己列的）：一次装进较长代码库、跨长文档推理、长对话、对视频内容提问。AI Studio 当时加了多文件（如 PDF）上传。

## 当时不是什么

这是模型能力与产品预览。长窗口让一次请求能看见更多文本、代码或视听，不等于系统已经在环境里多步循环。百万 token 当时仍是实验档，不是所有用户的默认。
