---
title: "安装"
linkTitle: "安装"
weight: 20
date: 2025-11-13
description: >
  crewAI 安装
---

https://docs.crewai.com/en/installation

----

## 准备工作

### 安装 uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## 安装 CrewAI

```bash
uv tool install crewai
```

安装完成后验证：

```bash
uv tool list
```

可以看到输出:

```bash
crewai v1.6.1
- crewai
```

## 更新

如果需要更新版本，可以：

```bash
uv tool install crewai --upgrade
```