---
title: "概述"
linkTitle: "概述"
weight: 10
date: 2021-08-13
description: >
  Claude Tag 概述
---

## 基本信息

- 产品名：Claude Tag
- 发布：2026 年 6 月 23 日（公开 Beta）
- 厂商：Anthropic
- 形态：Slack 频道里的共享 AI 队友；在频道中 `@Claude` 委派任务
- 底层模型：默认 Opus 4.8（频道内可切换）
- 可用计划：Claude Team / Enterprise（Anthropic 第一方服务）。Free / Pro / Max 以及 Bedrock、Vertex 等第三方部署不可用
- 取代：旧版 Claude in Slack（含 Claude Code in Slack）。Slack 侧已于 2026 年 8 月 3 日切到 Claude Tag
- 官方产品页：https://claude.com/product/tag
- 管理后台：https://claude.ai/admin-settings/claude-tag
- 文档总索引（机器可读，含全部 Claude Tag 条目）：https://claude.com/docs/llms.txt

一句话：Claude Tag 把 Claude Code 那套云端沙箱引擎放进团队 Slack，用组织级 Agent Identity（服务账号）干活，而不是借用某个员工的个人权限。

## 使用门槛（读资料前先记住）

- 只有 Claude 组织的 Primary Owner / Owner 能完成身份与频道配置；普通 Admin 看得到但配不完
- 组织必须先开启 Routines，否则 `@Claude` 会回不可用
- 启用了 Zero Data Retention（ZDR）的组织不能用（需要存频道记忆与 session 记录）
- 频道内 Tag 走组织用量余额；私信 DM 走个人 claude.ai 席位
- Slack 配对：在频道发送 `@Claude connect`，15 分钟内把配对码贴到管理页

## 怎么用这份列表

按编号从 1 往下读即可。每一条对应一篇原文，后面可以单独拆成学习笔记。

- **必读**：深入理解产品所必须过一遍
- **按需**：连接指南、单点用例，按自己的工具栈和场景选读，不必全篇啃完
- 中文二手文放在最后，只作对照，以官网为准

---

## 第一阶段：产品是什么

先建立定位：它不是又一个 Slack 聊天机器人，而是多人、异步、带独立身份的团队 Agent。

1. [Introducing Claude Tag](https://www.anthropic.com/news/introducing-claude-tag)（必读）  
   Anthropic 发布博文。多人协作、跨天记忆、Ambient 主动跟进、异步执行；内部产品团队约 65% 代码来自内部版 Tag。

2. [Claude in Slack: Tag @Claude in any thread](https://claude.com/product/tag)（必读）  
   官方产品页。适合先看它对外承诺的能力边界。

3. [什么是 Claude Tag？](https://support.claude.com/zh-CN/articles/15594475-%E4%BB%80%E4%B9%88%E6%98%AF-claude-tag)（必读，中文）  
   帮助中心总述：频道 Tag / DM / 助手面板三套入口，计费、权限层级、记忆与隐私。

4. [What is Claude Tag?](https://support.claude.com/en/articles/15594475-what-is-claude-tag)（对照）  
   上一篇的英文原文，细节有出入时以这篇和官方 docs 为准。

5. [Work with Claude Tag](https://claude.com/docs/claude-tag/overview)（必读）  
   官方文档总览。管理员一次性配置、终端用户如何派活、计费与 spend limit、常见用途入口。

---

## 第二阶段：运行机制（深入核心）

这一阶段是后面所有配置和用法的地基。建议按顺序、每篇读完再进下一篇。

6. [How Claude Tag works](https://claude.com/docs/claude-tag/concepts/how-it-works)（必读）  
   会话模型：`@Claude` → 短暂沙箱 → checklist → 回帖 → 空闲释放。频道 session 与线程 session 的区别，以及和 Cowork / Claude Code 的对比表。

7. [Glossary](https://claude.com/docs/claude-tag/concepts/glossary)  
   先扫一遍术语：agent identity、Access bundle、scope、Agent Proxy、routine、channel memory、session。读后续文档时回查。

8. [How agent identity works](https://claude.com/docs/claude-tag/concepts/agent-identity)（必读）  
   频道里 Claude 用自己的服务账号，不是“替发消息的人行事”。频道 vs DM 的身份分叉、GitHub App 署名。

9. [Agent identity: a new access model for autonomous, team-wide AI](https://claude.com/blog/agent-identity-access-model)（必读）  
   概念博文（Noah Zweben，Claude Code 团队）。为什么 “act as the user” 在异步、多驾驶员场景会崩；公开频道共享工作区身份、私有频道隔离；未来 JIT 凭证。

10. [Security and data handling](https://claude.com/docs/claude-tag/concepts/security-and-data)（必读）  
    沙箱不持有凭证；凭证在网络边界注入；出站主机白名单；频道成员共享该频道 bundle 的能力。

11. [Data lifecycle and deletion](https://claude.com/docs/claude-tag/concepts/data-lifecycle)（必读）  
    Anthropic 侧存什么、存多久；断开工作区、卸载应用、删频道、离开组织分别发生什么。Slack 里删消息删不掉 session transcript。

12. [Claude Tag settings map](https://claude.com/docs/claude-tag/concepts/settings-map)  
    管理页、用量页、频道内 Configure、个人 connector（仅 DM）分别管什么。

13. [Claude Tag for Claude Code users](https://claude.com/docs/claude-tag/concepts/for-claude-code-users)  
    已会 Claude Code 的人必看：哪些配置能迁过来，哪些必须改由管理员配；Slack 线程如何映射到 session。

---

## 第三阶段：管理员配置

读完身份模型再看落地。组织里如果暂时没有 Owner 权限，仍建议通读 14–22，知道生产上要配哪些开关。

14. [Set up Claude Tag](https://claude.com/docs/claude-tag/admins/setup-overview)（必读）  
    四步：配对 Slack → 接工具 → 设花费上限 → 私有频道试跑。含前置条件与常见失败。

15. [What the Claude Slack app can access](https://claude.com/docs/claude-tag/admins/for-slack-admins)  
    写给批准 Slack 安装的人：OAuth scope、能读能发什么、安装本身不授予外部系统权限。

16. [Give Claude access to your tools](https://claude.com/docs/claude-tag/admins/add-connections)（必读）  
    Access bundle：专用服务账号、先接什么、allowed websites 如何限制可达范围。

17. [Configure GitHub access](https://claude.com/docs/claude-tag/admins/configure-github)  
    Claude 自己的 GitHub 身份、仓库授权、克隆进沙箱、依赖安装、GitHub Actions。写代码场景优先读。

18. [Configure GitLab access](https://claude.com/docs/claude-tag/admins/configure-gitlab)  
    与 GitHub 对照，自建 GitLab 时读。

19. [Configure per-channel access](https://claude.com/docs/claude-tag/admins/attach-to-scope)（必读）  
    bundle 绑到组织 / 工作区 / 单个频道；继承与重叠规则。

20. [Restrict where Claude Tag operates](https://claude.com/docs/claude-tag/admins/restrict-access)（必读）  
    谁能调用、guest 频道、按频道开关、RBAC（Enterprise）、安静或移除。

21. [Manage workspaces and versions](https://claude.com/docs/claude-tag/admins/workspaces)  
    多个 Slack 工作区、Enterprise Grid、每频道 Off / Legacy / New。

22. [Set a spend limit](https://claude.com/docs/claude-tag/admins/set-spend-limit)（必读）  
    组织用量余额、频道上限、75%/95% 告警；超限会拒绝任务，不会悄悄截断。

23. [Customize Claude Tag](https://claude.com/docs/claude-tag/admins/customize)  
    按 scope 定制，不是按人。哪些在 claude.ai 配，哪些可在频道里改。

24. [Set up a skills repository Claude can update](https://claude.com/docs/claude-tag/admins/skills-repo)  
    组织 skills 放 git 并自动同步；可授权 Claude 给自己的 skills 开 PR。

25. [Review what Claude Tag has done](https://claude.com/docs/claude-tag/admins/audit)  
    审计页 + 各连接系统自己的日志；如何把一次动作追回 Slack 线程。

26. [Network requirements](https://claude.com/docs/claude-tag/admins/network-requirements)  
    出站 IP、仅 HTTP/HTTPS；和企业防火墙 allowlist 的关系。

27. [Migrate from the earlier Claude in Slack](https://claude.com/docs/claude-tag/admins/migrate-from-earlier)  
    身份从“每人自己的账号”变成“组织一个身份”；数据不迁移；频道可钉在 Legacy。

28. [Troubleshoot Claude Tag setup](https://claude.com/docs/claude-tag/admins/troubleshooting)  
    配置阶段报错手册。用到再查也可以。

### 连接指南（按需，不必按号全读）

先读总览，再只打开自己栈里有的服务。自定义 MCP 适合没有预设的内部系统。

29. [Per-service connection guides](https://claude.com/docs/claude-tag/admins/connections/overview)
30. [Connect a service that isn't in the list（自定义 / MCP）](https://claude.com/docs/claude-tag/admins/connections/custom)
31. [Asana](https://claude.com/docs/claude-tag/admins/connections/asana)
32. [Jira and Confluence](https://claude.com/docs/claude-tag/admins/connections/atlassian)
33. [BigQuery](https://claude.com/docs/claude-tag/admins/connections/bigquery)
34. [Datadog](https://claude.com/docs/claude-tag/admins/connections/datadog)
35. [GitLab API](https://claude.com/docs/claude-tag/admins/connections/gitlab)
36. [Gong](https://claude.com/docs/claude-tag/admins/connections/gong)
37. [Google Drive, Calendar, and Gmail](https://claude.com/docs/claude-tag/admins/connections/google)
38. [HubSpot](https://claude.com/docs/claude-tag/admins/connections/hubspot)
39. [Linear](https://claude.com/docs/claude-tag/admins/connections/linear)
40. [Notion](https://claude.com/docs/claude-tag/admins/connections/notion)
41. [PagerDuty](https://claude.com/docs/claude-tag/admins/connections/pagerduty)
42. [Salesforce](https://claude.com/docs/claude-tag/admins/connections/salesforce)
43. [Sentry](https://claude.com/docs/claude-tag/admins/connections/sentry)
44. [Snowflake](https://claude.com/docs/claude-tag/admins/connections/snowflake)
45. [Stripe](https://claude.com/docs/claude-tag/admins/connections/stripe)
46. [Vercel](https://claude.com/docs/claude-tag/admins/connections/vercel)

---

## 第四阶段：作为频道成员怎么用

管理员配完之后，日常就靠这一组。建议 47–54 全读，用例库按自己工作选。

47. [Get started](https://claude.com/docs/claude-tag/users/getting-started)（必读）  
    如何确认频道已开通、第一条消息、Claude 能读什么、DM 为何不同。

48. [Commands Claude Tag understands](https://claude.com/docs/claude-tag/users/commands)（必读）  
    `@Claude !restart`、`!routines` 等 bang 命令；卡住或上下文跑偏时用。

49. [Control when Claude Tag responds](https://claude.com/docs/claude-tag/users/when-claude-responds)  
    没人 @ 它时会不会回；线程/频道静音。觉得它话太多或突然哑巴时读。

50. [Good habits for working with Claude Tag](https://claude.com/docs/claude-tag/users/good-habits)（必读）  
    写清完成定义、选对频道、长任务尽早把产物推到 GitHub/文档，因为沙箱会释放。

51. [Set up routines](https://claude.com/docs/claude-tag/users/proactivity)（必读）  
    定时任务、盯频道、订 PR；列出/暂停站岗工作。Ambient 行为的操作面。

52. [What Claude Tag remembers](https://claude.com/docs/claude-tag/users/memory)（必读）  
    记忆属于频道不是个人；公开频道写入工作区记忆，私有频道隔离。如何查看和纠正。

53. [Choose the model Claude Tag uses](https://claude.com/docs/claude-tag/users/models)  
    线程内切换、频道默认、DM 选模型。

54. [Prompt library](https://claude.com/docs/claude-tag/users/prompt-library)  
    可粘贴的第一句、转发交接、频道规则、记忆检查、中途转向。

55. [Troubleshoot Claude Tag in channels and DMs](https://claude.com/docs/claude-tag/users/troubleshooting)  
    无回复、排队失败、丢失工作、缺连接、链接被拦。用到再查。

### 用例库（按需）

先读总库，再按场景点开单篇。每篇都带可粘贴 prompt 和所需连接。

56. [Use case library](https://claude.com/docs/claude-tag/users/use-cases)
57. [Triage requests](https://claude.com/docs/claude-tag/users/use-cases/triage-requests)
58. [Catch up](https://claude.com/docs/claude-tag/users/use-cases/catch-up)
59. [Work from your own channel](https://claude.com/docs/claude-tag/users/use-cases/your-own-channel)
60. [Turn threads into docs and tickets](https://claude.com/docs/claude-tag/users/use-cases/create-artifacts)
61. [Track projects and chase approvals](https://claude.com/docs/claude-tag/users/use-cases/track-projects)
62. [Answer data questions](https://claude.com/docs/claude-tag/users/use-cases/answer-data-questions)
63. [Find answers in your docs](https://claude.com/docs/claude-tag/users/use-cases/find-answers)
64. [Review documents against a checklist](https://claude.com/docs/claude-tag/users/use-cases/review-documents)
65. [Pull deal and account state](https://claude.com/docs/claude-tag/users/use-cases/pull-deal-state)
66. [Claude Tag for marketing teams](https://claude.com/docs/claude-tag/users/use-cases/marketing-team)
67. [Watch monitors and alerts](https://claude.com/docs/claude-tag/users/use-cases/watch-monitors)
68. [Fix bugs](https://claude.com/docs/claude-tag/users/use-cases/fix-bugs)
69. [Work with your GitHub repositories](https://claude.com/docs/claude-tag/users/use-cases/work-with-github)

---

## 第五阶段：内部案例与业界评论

官方 docs 读完后，用案例建立“团队里到底怎么用”的直觉。

70. [How Anthropic employees use Claude Tag](https://claude.com/blog/how-anthropic-employees-use-claude-tag)（必读）  
    Anthropic 内部：客诉/事故汇总、法务审素材、数据自助查询等。

71. [Self-service data analytics in Slack](https://claude.com/blog/self-service-data-analytics-in-slack-how-anthropic-deploys-claude-tag-for-ad-hoc-questions)  
    内部如何把数仓问答放到共享频道。若链接变更，从上一篇文末的 related posts 进入。

72. [Anthropic releases Claude Tag, a virtual employee that works within Slack](https://fortune.com/2026/06/23/anthropic-claude-tag-virtual-employee-tool-slack/)  
    Fortune 报道。Cat Wu 对“相对 Claude Code / Cowork 的多人产品”表述；和 Slackbot、Agentforce 的竞品语境。

73. [Anthropic and Salesforce Announce New Claude to Slack Integration](https://www.salesforceben.com/anthropic-and-salesforce-announce-new-claude-to-slack-integration/)  
    Salesforce 侧对 ambient colleague 的解读。

---

## 附录：中文二手整理（对照用，不作为依据）

官方与帮助中心读完后，如需中文导读可看这些，细节冲突以 1–69 为准。

74. [Claude Tag：Anthropic 把 AI 队友放进了你的 Slack](https://blog.sandbase.ai/zh-CN/claude-tag-slack-ai-teammate-2026/)
75. [Slack 配置 Claude Tag：4 步上手、ambient 模式](https://ofox.ai/zh/blog/claude-tag-slack-setup-guide-2026/)
76. [Claude Tag 完整教程（OSCHINA）](https://my.oschina.net/u/9487999/blog/19748088)

---

## 建议的精读顺序（压缩版）

时间紧时，先按这条最短路径走完再回头补按需篇：

1 → 3 → 5 → 6 → 8 → 9 → 10 → 14 → 16 → 19 → 20 → 22 → 47 → 50 → 51 → 52 → 56 → 70

最短路径过完，对身份模型、沙箱生命周期、管理员四步、日常派活和内部案例就有完整骨架；其余编号按工具栈和场景插入即可。
