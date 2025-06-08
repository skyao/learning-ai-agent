---
title: "安装自定义包"
linkTitle: "安装自定义包"
weight: 40
date: 2025-06-08
description: >
  E2B 安装自定义包
---


参考: https://e2b.dev/docs/quickstart/install-custom-packages

## 准备工作

### 安装 cli

安装 e2b 的 cli：

```bash
npm i -g @e2b/cli
```

检查是否安装成功：

```bash
$ e2b --version
1.4.3

$ e2b -h       
Usage: e2b [options] [command]

Create sandbox templates from Dockerfiles by running e2b
template build then use our SDKs to create sandboxes from these templates.

Visit E2B docs (https://e2b.dev/docs) to learn how to create sandbox templates and start sandboxes.

Options:
  -V, --version   display E2B CLI version
  -h, --help      display help for command

Commands:
  auth            authentication commands
  template|tpl    manage sandbox templates
  sandbox|sbx     work with sandboxes
  help [command]  display help for command
```

### 登录 e2b

```bash
e2b auth login
```

会自动打开浏览器要求登录，因为我之前登录过，所以直接跳过，页面显示：

```bash
Successfully linked
You can close this page and start using CLI.
```

终端显示：

```bash
$ e2b auth login
Attempting to log in...
Logged in as aoxiaojian@gmail.com with selected team aoxiaojian@gmail.com
```

## 安装自定义包

### 初始化 sandbox 模板

```bash
e2b template init
```

输出为：

```bash
Created ./e2b.Dockerfile
```

打开这个文件，可以看到默认的模板内容：

```bash
# You can use most Debian-based base images
FROM ubuntu:22.04

# Install dependencies and customize sandbox
```

仅仅是一个 ubuntu 22.04 的镜像，没有任何其他内容。

### 指定需要的包

```bash
vi ./e2b.Dockerfile
```

修改内容，指定需要的包：

```bash
FROM e2bdev/code-interpreter:latest

RUN pip install cowsay
RUN npm install cowsay

```

注意：基础镜像必须使用 e2bdev/code-interpreter:latest 。