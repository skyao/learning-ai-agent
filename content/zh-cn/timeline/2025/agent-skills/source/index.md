---
title: "Agent Skills（材料）"
linkTitle: "材料"
weight: 10
date: 2026-09-15
description: >
  按 2025-10-16 博文转述：SKILL.md、渐进披露、把专长打成文件夹。
---

本页转述 **2025-10-16 博文当时写了什么**。12 月「开放标准」更新可一笔带过，不把后来所有生态写成当天。

主要出处：Anthropic，2025-10-16，[Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)。本页不复制全文。中英对照见本站 [该文](/protocal/skills/posts/equipping-agents-for-the-real-world-with-agent-skills/)。

---

## 主张

Claude 很强，但真实工作需要程序性知识与组织上下文。**Agent Skills** 用文件和文件夹构建专用 agent：指令、脚本、资源放在一起，agent 按需发现并加载。把专长打包成可组合资源，通用 agent 变成适合你的专用 agent。类比：给新员工写入职指南，而不是为每个用例另做一只定制 agent。

结构：一个 skill 是含 **`SKILL.md`** 的目录。文件以 YAML frontmatter 开头，必填 **name** 与 **description**。启动时，agent 把已安装 skill 的 name/description 预装进系统提示——这是渐进披露的第一级。任务相关时再读入完整 `SKILL.md`（第二级）。更大的参考文件、脚本按需再读（第三级及以后）。PDF skill 被当作例子：Claude 懂 PDF，但直接填表单要靠 skill 里的操作说明与脚本。

当时支持面：Claude.ai、Claude Code、Claude Agent SDK、Claude Developer Platform。与 MCP 的关系：文中写成互补——MCP 接外部工具，Skills 教更复杂的流程。

## 当时不是什么

不是新的模型权重，不是 MCP 的替代品，不是 A2A。12 月才另文把 Skills 推向跨平台开放标准，10 月仍是 Anthropic 运行时上的包装方式。
