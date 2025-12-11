---
title: "文档"
linkTitle: "文档"
weight: 30
date: 2025-12-11
description: >
  microsandbox 文档
---


https://docs.microsandbox.dev/

----

用虚拟机级别的隔离和闪电般的启动速度运行不受信任的代码。为 AI Agent、开发人员和任何需要安全执行代码而不牺牲速度或安全性的人构建。

## 为什么使用 microsandbox?  

你是否需要运行你不完全信任的代码？无论是 AI 生成的代码、用户提交的代码还是实验性代码，传统的选项都有严重的缺点：

- 在本地运行 - 一个恶意脚本就会让你的整个系统被破坏  
- 使用容器 - 共享内核意味着复杂的攻击仍然可以突破  
- 传统虚拟机 - 等待 10 秒以上才能启动虚拟机，严重影响生产力和性能  
- 云解决方案 - 昂贵，并且受云提供商的控制  

microsandbox 结合了所有最好的特性:

- 强大的安全性 - 用分离的内核实现真正的虚拟机隔离
- 即时启动 - 启动时间低于 200 毫秒，而不是 10 秒以上
- 您的基础设施 - 自托管，完全控制
- OCI 兼容 - 与标准容器镜像兼容
- AI-Ready - 内置 MCP 服务器，无缝集成 AI

## 快速运行

### 安装

注意：我在 debian13 下遇到问题，如果用普通帐号如我一般用的 sky 用户，无法正常启动 microvm。暂时先用 root 用户安装和运行 msb server 来绕来这个问题。

```bash
curl -sSL https://get.microsandbox.dev | sh
```

### 启动

```bash
msb server start --dev
```

### 执行

客户端可以用普通帐号如我一般用的 sky 用户，无需 root 权限。

在新的终端下执行：

```bash
mkdir -p ~/work/code/microsandbox/quickstart-python
cd ~/work/code/microsandbox/quickstart-python 

pip install microsandbox
```

新建一个 python 文件:

```bash
vi quickstart.py
```

内容为:

```python
import asyncio
from microsandbox import PythonSandbox

async def main():
    async with PythonSandbox.create(name="demo") as sb:
        exec = await sb.run("print('🚀 Secure execution!')")
        print(await exec.output())

asyncio.run(main())
```

执行:

```bash
python quickstart.py
```

输出为:

```bash
🚀 Secure execution!
```