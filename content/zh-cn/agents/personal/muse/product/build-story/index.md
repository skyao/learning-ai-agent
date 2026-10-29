---
title: "Muse 是怎样建成的：Wang 访谈中的七个月"
linkTitle: "Muse 的七个月建造过程"
weight: 180
date: 2026-10-29
description: >
  Alexandr Wang 在 2026 年 10 月 11 日播客中讲述的 Muse 建造过程：备忘录、OpenClaw 实验、原型与 100 多项行为评估的上线门槛
materialType: "访谈整理笔记"
---

来源：[Alexandr Wang tells David Senra how Muse went from a 2025 memo to a product in seven months](https://www.allthingsmuse.com/articles/alexandr-wang-david-senra-muse-build-story/)（All Things Muse 整理，2026-10-12）  
原始访谈：David Senra 播客，2026-10-11 播出，约 72 分钟  
整理日期：2026-10-29

----

## 证据层级，先说清楚

我没有逐字听完播客原声，也没有拿到完整文字稿。下面依据的是 All Things Muse 的整理全文，并用 Seoul Economic Daily 的报道、Longbridge 与 PJFP 的整理、CEOInterviews 的播客文字稿摘录做了交叉：100 多项行为评估、原型一到两周、团队不到 200 人这几个要点在多家整理中一致。凡是只在某一家整理里出现的说法，我都单独标注，不把它写成已证实的事实。

播客标题里的「自 ChatGPT 以来增长最快的产品」是播客方的宣传语，没有独立数据支撑，我不采信。

## 我读到的时间线

- 2025 年 6 月：Meta Superintelligence Labs 的起点是一份〈Personal Superintelligence〉备忘录，Wang 与扎克伯格、Nat Friedman 等人合写，当时已经勾勒出 Muse 的样子。
- 2026 年 2 月：方向定型。两个因素汇合：OpenAI 的 Opus 4.5 展示了 agent 的能力；Friedman 在公司内部全力投入开源 agent 项目 OpenClaw。Wang 自己也装了 OpenClaw，试了 Friedman 的深度心理分析提示，给了邮箱与照片权限，事后形容相当于「三年心理治疗压缩进一个瞬间」。
- 2026 年 2 月到 9 月：约七个月。原型本身只花了一到两周，随后向董事会演示，演示里已经有 Jolly 吉祥物机器人和早期版 Muse Charm；剩下的时间全部用于把脆弱演示打磨成可靠的消费产品。
- 2026 年 9 月 8 日：Muse 正式上线。

## 我的理解：上线门槛比原型更重要

这篇访谈对我最有价值的不是「七个月」这个数字，而是 Wang 给出的上线门槛定义：团队列出 100 多项「作为个人 agent 必须具备的具体行为」，为每一项建评估，用评审循环逐项清掉失败。早期检查点约 80 项通过、20 项失败；第一个全部变绿的检查点是一个经特别调优的 Muse Spark 1.3 版本。

按我做运行平台的视角看，这正是原型与产品之间的分界：原型证明「能跑一次」，行为清单加逐项评估证明「能稳定跑」。Wang 自己也把这个判断说得很直白：Muse 的未来取决于规模化可靠性，而不是基准分数；并以 OpenClaw 自身的轨迹为例，说明可靠性始终不到位会怎样。

但清单本身没有公开，逐项内容无法核对，「80/20」也只是 Wang 口述的约数。所以我只能把「全绿放行」记为一种可复用的工程方法，不能把它当成 Muse 内部评估项的实测记录。

## 与我已有笔记的联系

- **OpenClaw 起源的证据升级**。我之前在 Nvidia 合作一节里记过 Reuters「以 OpenClaw 为模式」的说法，并标注为 Reuters 单方表述。这次 Wang 本人口述证实了实验起点层面：2026 年 2 月的 OpenClaw 实验确实是方向定型的关键一环。这个升级只到「实验起点」，不等于 Muse 的实现就是 OpenClaw 的复刻。
- **战略分叉**。当时业界共识是编码 agent 唯一值得做，Anthropic 与 Claude 遥遥领先。Meta 反向押注日常任务个人 agent，理由是 Meta 各应用每天约 35 亿人次的消费者分发。这个分发论证与我在[日本上线](../japan-launch/)里看到的本地伙伴接通顺序是同一条逻辑：先拿到人，再把任务接进来。
- **Confidential VM 的时间表重申**。Wang 在访谈中称 Meta 计划在 2026 年内推出 Muse Confidential VM（用户持有加密密钥）。这与发布时「今年晚些时候」的口径一致，是重申，不是新的上线日期；截至 2026 年 10 月 29 日，我仍把它记为 forthcoming，界面泄露的记录见安全目录。
- **用户数口径不要混读**。访谈里 Wang 被追问时只重复公司口径「数百万」，没有给出新数字。访谈在 10 月 11 日，早于 10 月 21 日财报会「美加超 1,000 万设置」的口径，两者不能互相印证。

## 待核验

- 播客原声与完整文字稿逐字核对；100 多项行为清单的具体内容（未公开，可能长期拿不到）。
- Friedman「买了几百台 Mac mini 供团队使用」一说只见于整理文末，称源自 Friedman 本人在 X 上的自述，我没有读到原帖，不作事实。
- 团队不到 200 人是模型与产品开发合计，还是仅指某一侧，整理中没有拆分，我按「合计」理解并保留这个不确定性。
