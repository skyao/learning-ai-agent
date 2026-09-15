---
title: "GitHub Copilot 正式商用（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2022-06-21 公告转述：GA、定价、编辑器扩展与预览期数据。
---

本页转述 **2022-06-21 正式商用当时公开说了什么**，不以 2023 Copilot X / Chat、更不以后来的编码 Agent 回填。

主要出处：GitHub CEO Thomas Dohmke，2022-06-21，[GitHub Copilot is generally available to all developers](https://github.blog/news-insights/product-news/github-copilot-is-generally-available-to-all-developers/)。

本页不复制公告全文。

---

## 产品主张（2022-06-21）

GitHub Copilot **generally available**，面向个人开发者。自称仍是 **AI pair programmer**：在编辑器里建议代码。定价 **每月 10 美元或每年 100 美元**。**已验证学生**与**热门开源项目维护者**免费。提供免费试用。

公告把这次发布放进软件史：继编译器与开源之后，AI 辅助编码会改变开发方式——让写代码更容易、更快。同时写明：此前 AI 已能写邮件、生成相册、当购物助手，但**改善写代码这件事一直几乎完全靠人手**；今天第一次可以让开发者普遍用上 AI 来写和补全代码。

## 交互形态

专门做成**编辑器扩展**，以免挡住正在做的事。输入代码或注释时，建议下一行；不只是单词或单行，也可以建议完整方法、样板、整份单元测试，乃至复杂算法。

公开列出的能力：

- 得到匹配项目上下文与风格约定的建议；可在多个选项间循环，决定接受、拒绝或再改。
- 环境：Neovim、JetBrains IDE、Visual Studio、Visual Studio Code，作为不显眼的扩展。
- 不熟悉的语言或新尝试：在数十种语言上建议语法与代码，把时间花在边做边学。

没有「给一个仓库级目标、自己改到测试通过」的产品叙事。人始终在环，建议出现在光标处。

## 预览期数据（公告自己报的）

过去 12 个月技术预览超过 **120 万**开发者。启用 Copilot 的文件里，在 Python 等热门语言上，**近 40%** 的代码由 Copilot 写出——并称预期还会升高。开始用的人很快把它当成日常工作流里少不了的一部分。

## 企业版时间表

公告写：今天对所有开发者可用；**对企业将在 2022 年晚些时候**开始提供。这是「用 AI 赋能开发者」的第一步。
