---
title: "SPACE 阅读：沙箱、生命周期操作和命令流的不同寿命"
weight: 10
date: "2026-10-21"
description: "SPACE 阅读：沙箱、生命周期操作和命令流的不同寿命"
materialType: "官方资料阅读与个人分析"
---

资料：[10 月 15 日开源公告](https://www.perplexity.ai/en-GB/hub/blog/open-sourcing-space)、[SPACE 仓库](https://github.com/perplexityai/SPACE)、[架构文档](https://github.com/perplexityai/SPACE/blob/main/docs/architecture.md)、[Escaping SPACE](https://www.perplexity.ai/en-GB/hub/blog/escaping-space-part-i)，后者博客索引日期 **2026-09-23**。阅读：**2026-10-21**。

## 我读到的底层对象

仓库 README 描述 Firecracker microVM 隔离、HTTP 控制和独立命令输出连接。架构文档区分 Template、Sandbox、Process、Command session、Operation；沙箱可以比创建请求和输出连接存活更久。[仓库](https://github.com/perplexityai/SPACE) / [架构](https://github.com/perplexityai/SPACE/blob/main/docs/architecture.md)

开源公告说明平台侧凭证与网络控制放在沙箱外，并支持状态恢复与分支。[公告](https://www.perplexity.ai/en-GB/hub/blog/open-sourcing-space) 这不是本轮完成了部署或代码审计，也不证明 Mac 本地模式完全采用相同后端实现。

## 生命周期分离对我很有帮助

输出连接断开，不一定意味着进程停止；生命周期请求被接受，也不等于操作已经完成。平台需要让客户端查询真实状态，避免用户在重试时启动重复命令。

我会进一步阅读断开、暂停和删除时的进程行为，再设计自己的运行标识和回执关系。恢复计算状态还不等于撤回已发送的邮件或业务写入。

## VM 隔离与网络控制分别评价

官方安全研究用九个模型测试隔离与网络边界，报告没有观察到 VM 到宿主逃逸，但发现网络绕过，修复后相应方法复测未成功。[原始研究](https://www.perplexity.ai/en-GB/hub/blog/escaping-space-part-i)

我保留测试条件和修复前后区别，不将零观察结果写成绝对安全证明。对自己的平台，宿主隔离、网络去向、凭证和具体业务动作需要分别检查。
