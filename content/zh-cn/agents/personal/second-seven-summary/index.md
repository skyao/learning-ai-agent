---
title: "Personal Agent：第二批七个产品的阶段性比较"
weight: 1010
date: "2026-10-22T00:00:00+08:00"
description: "从七个补充样本比较状态、持续执行、组织治理和产品化责任"
materialType: "阶段性比较"
---

这一轮我补完了 Hermes Agent、Copilot Autopilot、Poke、Lindy、Kimi Claw、WorkBuddy 和 DeepSeek Harness 的公开资料调研。加上 [前八个产品](../first-eight-summary/)，主清单的 **15 个对象**都有了按主题组织的材料、来源与阶段性总结。

第二批资料读取截至 **2026-10-22（北京时间）**。本文记录我的比较认识，没有新增账号、设备或部署实测。不同产品公开资料深浅不一，以下按机制与问题比较，不据此给任务质量或可靠性排名。

## 七个样本分别补充了什么

| 对象与本地总结 | 我关注的实现路线 | 必须保留的条件 |
| --- | --- | --- |
| [Hermes Agent](../hermes-agent/summary/) | 自建运行、文件记忆、经验技能与持续目标 | Profile、Bot、会话、子代理不是同一边界；分发版本和宿主在线条件分别记录 |
| [Copilot Autopilot](../copilot-autopilot/summary/) | 在组织上下文中代表个人持续工作 | 新云托管公告与旧 Scout 桌面资料分开；Private Preview 未做实测 |
| [Poke](../poke/summary/) | 通过日常消息接受委托，连接数字服务与人工协助 | 消息渠道不是完整状态模型；人工执行与模型额度、现实支出分别核对 |
| [Lindy](../lindy/summary/) | 个人上下文与团队技能、例行工作共同使用 | Memory、凭证、审批与产物可见范围不同；具体入口决定控制覆盖范围 |
| [Kimi Claw](../kimi-claw/summary/) | 将开源底座封装为会员、托管与设备产品 | 云端、已有实例、桌面与手机各有条件；产品文档不直接等于上游最新版本 |
| [WorkBuddy](../workbuddy/summary/) | 办公生态、个人桌面、项目与云端任务结合 | 手机远程本机不等于云端托管；桌面与企业套件版本分别核验 |
| [DeepSeek Harness](../deepseek-harness/summary/) | 可直接委托的工作助手与可组合运行时 | Profile 决定加载能力；会话持久化、外接记忆、调度与 Goal 各有职责 |

各行链接的总结可继续进入主题与原始资料索引。第一批核验日期仍保留为 10 月 21 日，不能把第二批阅读日期当成所有产品同时更新的证明。

## 1. 记忆需要说明对象、作用域和更新时刻

第一批让我看到个人上下文的重要性，第二批则让我更注意它怎样成为可管理状态。

[Hermes 的内建记忆](../hermes-agent/architecture/memory/)有文件预算与会话快照语义；[Lindy 的 Memory](../lindy/architecture/memory/)按个人、团队与系统划分作用域；[WorkBuddy 的记忆与项目](../workbuddy/architecture/memory-and-projects/)又需要区分内建个人记忆、项目共享资料和可选后端。

[DeepSeek Harness](../deepseek-harness/architecture/sessions-and-memory/)提供了一个有用的反例：恢复 Session 有明确机制，第三方长期记忆接入仍需另行配置。会话历史、个人事实和可复用方法不能只用“有记忆”概括。

我的比较方法因此变得更具体：新增一条事实，修改它，制造冲突，再删除。观察下一会话和另一入口使用的是哪个版本，同时检查实际存储与权限。只有“记住了什么”还不够，我还想知道“谁能纠正、什么时候生效”。

## 2. 长期委托是由多个状态衔接起来的

[Hermes 的目标与 Cron](../hermes-agent/architecture/goals-and-cron/)、[WorkBuddy 的排程与运行](../workbuddy/architecture/schedules-and-runs/)、[Harness 的调度与 Goal](../deepseek-harness/architecture/schedules-and-goals/)都让我继续拆分时间触发、消息投递、模型执行与业务完成。

一项作业暂停以后，已开始的运行是否继续？Host 重启后恢复的是定时器还是原任务？消息已经入箱但模型尚未执行时，界面显示什么？这些问题直接关系到个人能否放心离开设备。

对自己的运行平台，我希望一项委托保留目标、触发、执行、产物与通知的关联。失败重试还应知道哪些外部写入已经发生，避免用“重新跑一次”处理所有异常。这里是我的设计认识，尚未通过七个产品的同条件故障实验验证。

## 3. 个人代理进入组织后，授权对象会变多

[Autopilot 的身份与策略](../copilot-autopilot/security/identity-and-policy/)适合与第一批 Cue、Grok Bot 对照：请求者、代理身份和实际操作资源的账号可能不同。

[Lindy 的 Guardrails 与凭证](../lindy/security/guardrails-and-credentials/)进一步显示，控制范围应落实到具体入口。共享 Slack 线程的写入审批，不能直接推断也覆盖所有私信和手机消息；共享一个连接，也可能意味着多个任务使用同一个资源所有者的身份。

[Poke 的人工协助](../poke/security/human-and-permissions/)则增加执行者交接。数字代理把工作交给人工以后，仍要说明对方拿到哪些信息、授权到哪里、费用怎样产生。

我的平台笔记中会继续把用户、代理、连接所有者、批准者和执行者分别记录。一个任务名称或代理头像不足以解释这些关系。

## 4. 产品化降低部署门槛，也重新分配维护责任

[Kimi Claw 的运行路径](../kimi-claw/architecture/runtime-paths/)让我区分开源底座的能力与托管产品的适配。升级、备份、渠道绑定和会员状态会共同影响个人工作的连续性；同名功能不一定具有与上游相同的版本行为。

[WorkBuddy 的本地与云端](../workbuddy/architecture/local-and-cloud/)则说明，手机发消息控制自己的电脑，和由云端宿主继续执行，是两种运行条件。[Autopilot 的新旧边界](../copilot-autopilot/architecture/runtime-boundaries/)也需要按时间保留，不能把旧桌面实现拼进新云托管介绍。

与自建 OpenClaw、Hermes 相比，托管方案把一部分基础设施责任交给厂商，也引入升级节奏、套餐和迁移条件。我会把这些维护成本与模型用量一起观察，而不只比较首个任务是否能启动。

## 下一轮实践如何收敛

资料的广度已经足够，接下来更需要可复核的小实验。七个产品各自的“实践与评测”已保留验证方案，我准备使用相同测试资料与完成标准，逐步补充四类记录：

1. **事实纠错**：新增、修改与删除偏好，观察跨会话和跨入口的实际使用。
2. **离开与恢复**：分别让客户端、宿主或外部连接中断，记录恢复范围与重复副作用。
3. **计划执行**：区分触发、入队、执行、产物和通知，测试暂停及已入队工作的处理。
4. **撤权与交接**：撤销测试凭证，检查在途工作、子代理、人工协助和既有产物的访问。

每轮都保存版本、运行形态、来源、产物、耗时、人工介入和费用。当前形成的是可追溯的学习材料与比较问题，实际评价随着这些记录逐步更新。完整产品入口与证据范围见 [调研清单](../research-list/)。
