---
title: "Muse Gadgets：云端代理如何连接个人设备"
linkTitle: "Gadgets 与设备扩展"
weight: 120
date: 2026-10-21
description: >
  从官方 Gadget SDK 和 Linux README 理解设备接入与执行权限
aliases:
  - /agents/personal/muse/architecture/muse-gadgets/
materialType: "官方源码阅读"
---

来源：[facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk)、[Linux Device SDK README](https://github.com/facebookincubator/muse-gadget-sdk/blob/main/linux/README.md)  
作者 / 机构：Meta 与项目贡献者  
原文日期：持续更新的仓库，无单一文章发布日期；本页读取 main 分支，未固定提交版本  
中文报道：[Meta 开源 Muse Gadgets](https://www.ithome.com/1/009/743.htm)，IT之家，问舟，2026-10-05，报道的宣布日期为 2026-10-02  
整理日期：2026-10-21  
材料性质：官方公开代码与文档阅读，未安装设备

----

## 仓库说明

项目提供 ESP32 与 Linux 设备 SDK，通过 Muse App 配对。SDK token 是配对前提。仓库采用 Apache 2.0，但明确存在独立许可的第三方部分及头像例外；源码许可也不替代设备服务条款。

Linux 文档说明 Muse 可在设备上执行命令和读写文件，权限继承安装时选择的本机账号；该账号可用 sudo 时，Muse 也可使用。设备连接可在重启后恢复。文档也提供设备向 Muse 发消息的扩展入口。

## 我的理解：设备成为新的执行位置

我把 Gadgets 看作研究云端 Agent 与设备执行端关系的入口。Linux 文档中最值得注意的是执行身份：云端发来的动作最终使用本机账号权限，这个账号能做什么，会直接影响代理的操作范围。

| 环节 | 我想继续追踪的问题 |
| --- | --- |
| 配对 | 设备标识、token 和用户账号怎样绑定？ |
| 命令下发 | 一个动作怎样定位设备，是否有可关联的任务与命令标识？ |
| 执行结果 | 退出码、输出和副作用怎样回到任务状态？ |
| 断线恢复 | 未完成和重复收到的命令如何处理？ |
| 访问撤销 | 撤销配对、token 与停止本地服务各自何时生效？ |

这些是我对执行端设计的分析框架，尚未确认 SDK 对每个问题的处理方式。尤其是断线期间动作已执行、结果尚未返回的情况，需要结合代码和实验理解。

## 下一步源码阅读

本轮读了顶层与 Linux README，还没有逐行审计实现。接下来我会沿 `src/musegadget/executor.py` 追踪命令入口、权限、结果返回及恢复行为，并固定阅读的提交版本。

实际接入时，我想先用专用设备和测试文件验证上述链路，再比较用户授予的范围与本机账号实际拥有的权限。目前没有设备安装或运行结果。

## 补记：Meta 自制的 Home Link（2026-10-02 发布，2026-10-26 补记）

本节补的是此前只读 SDK 文档时缺失的一块：Meta 自己做了一台示例设备，并把它免费发给订阅用户。这是我在 10-26 跟踪 Meta Muse 动态时从资料库基线遗漏里找回的，发布日期是 10-02，不是 10-26 的新闻。

官方来源（我于 2026-10-26 直接读取）：[Muse Home Link](https://gadgets.muse.ai/home-link)。Home Link 是一台 USB-C 设备，Espressif ESP32-C5，8 MB PSRAM + 8 MB flash，Wi-Fi 6，尺寸 35 × 42 × 10 mm。它的固件基于开源 ESP32 Device SDK，但本机只运行官方固件、不可重刷。使用方式是插到路由器附近的电源，经蓝牙 LE 在 Muse App 内配对并选 Wi-Fi，此后常驻家庭网络，让云端 Muse 触达本地设备或任何带本地 HTTP API 的自建设备。社区技能覆盖 Philips Hue、Sonos、Apple TV、Google Nest 音箱、三星电视等，从 GitHub 安装。获取条件是美国地区、有效 Muse 订阅用户免费、每人限领 1 台，2026-10 月发货、先到先得。

第三方报道（层级低于官方页，个别口径待核实）：MetaversePost 2026-10-05、Pondero 2026-10-03、ETV Bharat 2026-10-03 均报道 Gadgets 于 10-02 发布；制造 5,000 台、免费发给美国订阅用户一说来自产品负责人 Nat Friedman 的 X 发帖（经 TechCrunch 报道转述，我未直接读取原帖，官方页亦未写数量，故此处不把它当官方数字）。MetaversePost 转述的 Meta 安全披露值得单独记一笔：配对过程不能防中间人攻击、认证 token 随固件下发、构建以开发密钥签名且未启用 Secure Boot——这些我尚未对照 SDK 文档原文逐项核实。

我的理解：Home Link 把前面 SDK 一节的抽象问题落到了一个具体产品上。云端代理要进家庭网络，必须经过一台常驻本地的桥，而这台桥的权限模型与 Secure VM 的叙事并不相同：官方页明言社区技能不可用于安防、急救、医疗等安全关键场景，等于承认这条线的执行边界比旗舰产品松。这对我有两个启示：一是评估 Agent 平台时要按产品线分开谈安全承诺，不能把旗舰架构的结论平移到开发者/玩具线；二是 Home Link 与年底待发货的 Charm 之间是否存在 SDK 与配对机制的复用，是接下来值得追踪的问题，目前 Meta 未说明，我也不作推断。
