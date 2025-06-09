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

### 安装 Docker

后面构建模板时需要使用 docker 构建镜像。

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
mkdir -p ~/work/code/e2b/install-custom-packages
cd ~/work/code/e2b/install-custom-packages

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
```

注意：基础镜像必须使用 e2bdev/code-interpreter:latest 。

### 构建模板

```bash
# cd ~/work/code/e2b/install-custom-packages

e2b template build -c "/root/.jupyter/start-up.sh"
```

输出为:

```bash
Found sandbox template j5zqgb7g5aeyugxrtfz1  <-> ./e2b.toml
Found ./e2b.Dockerfile that will be used to build the sandbox template.
Requested build for the sandbox template j5zqgb7g5aeyugxrtfz1 
Login Succeeded

Building docker image with the following command:
docker build -f e2b.Dockerfile --pull --platform linux/amd64 -t docker.e2b.app/e2b/custom-envs/j5zqgb7g5aeyugxrtfz1:884051f3-0c77-4d45-8de7-fd1eff03203f   .

[+] Building 9.8s (6/6) FINISHED                                                  docker:default
 => [internal] load build definition from e2b.Dockerfile                                    0.0s
 => => transferring dockerfile: 103B                                                        0.0s
 => [internal] load metadata for docker.io/e2bdev/code-interpreter:latest                   9.7s
 => [internal] load .dockerignore                                                           0.0s
 => => transferring context: 2B                                                             0.0s
 => [1/2] FROM docker.io/e2bdev/code-interpreter:latest@sha256:b8d0cdae882fb0f3a76c71de0f6  0.0s
 => CACHED [2/2] RUN pip install cowsay                                                     0.0s
 => exporting to image                                                                      0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:b1802722693655ebe55a3332ea5e6b2862c40e0a788afce3b9047be0362554  0.0s
 => => naming to docker.e2b.app/e2b/custom-envs/j5zqgb7g5aeyugxrtfz1:884051f3-0c77-4d45-8d  0.0s
> Docker image built.

Pushing docker image with the following command:
docker push docker.e2b.app/e2b/custom-envs/j5zqgb7g5aeyugxrtfz1:884051f3-0c77-4d45-8de7-fd1eff03203f

The push refers to repository [docker.e2b.app/e2b/custom-envs/j5zqgb7g5aeyugxrtfz1]
bdf722f13640: Preparing 
......
884051f3-0c77-4d45-8de7-fd1eff03203f: digest: sha256:12c6337ace9ec9003cd5d844478c9dfd5fd0abd27370df00b3c60f835802bd5b size: 8493
> Docker image pushed.

Triggering build...
> Triggered build for the sandbox template j5zqgb7g5aeyugxrtfz1 with build ID: 884051f3-0c77-4d45-8de7-fd1eff03203f
Waiting for build to finish...

[2025-06-09T02:55:10Z] Starting postprocessing
[2025-06-09T02:55:10Z] Requesting Docker Image
[2025-06-09T02:55:10Z] Docker image size: 1.5 GB
[2025-06-09T02:55:10Z] Setting up system files
[2025-06-09T02:55:11Z] Creating file system and pulling Docker image
[2025-06-09T02:56:11Z] ...
[2025-06-09T02:56:11Z] Filesystem cleanup
[2025-06-09T02:56:11Z] Provisioning sandbox template
[2025-06-09T02:56:12Z] Starting provisioning script
[2025-06-09T02:56:12Z] Making configuration immutable
[2025-06-09T02:56:12Z] Checking presence of the following packages: systemd systemd-sysv openssh-server sudo chrony linuxptp
[2025-06-09T02:56:12Z] Package systemd is missing, will install it.
[2025-06-09T02:56:12Z] Package systemd-sysv is missing, will install it.
[2025-06-09T02:56:12Z] Package openssh-server is missing, will install it.
[2025-06-09T02:56:12Z] Package chrony is missing, will install it.
[2025-06-09T02:56:12Z] Package linuxptp is missing, will install it.
[2025-06-09T02:56:12Z] Missing packages detected, installing: systemd systemd-sysv openssh-server chrony linuxptp
[2025-06-09T02:56:15Z] Selecting previously unselected package libargon2-1:amd64.
......
[2025-06-09T02:56:48Z] Start command is running
[2025-06-09T02:56:48Z] Pausing sandbox template
[2025-06-09T02:56:53Z] ...
[2025-06-09T02:56:58Z] ...
[2025-06-09T02:57:01Z] Uploading template
[2025-06-09T02:57:06Z] ...
[2025-06-09T02:57:09Z] ...
[2025-06-09T02:57:09Z] Postprocessing finished. Took 1m59s. Cleaning up...

✅ Building sandbox template j5zqgb7g5aeyugxrtfz1 finished.

┌───────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                               │
│  You can now use the template to create custom sandboxes.                                     │
│  Learn more on https://e2b.dev/docs                                                           │
│                                                                                               │
└───────────────────────────────────────────────────────────────────────────────────────────────┘

 ───────────────────────────────────────── Python SDK ──────────────────────────────────────────
                                                                                                
   from e2b import Sandbox, AsyncSandbox                                                        
                                                                                                
   # Create sync sandbox                                                                        
   sandbox = Sandbox("j5zqgb7g5aeyugxrtfz1")                                                    
                                                                                                
   # Create async sandbox                                                                       
   sandbox = await AsyncSandbox.create("j5zqgb7g5aeyugxrtfz1")                                  
 
 ─────────────────────────────────────────── JS SDK ────────────────────────────────────────────
                                                                                                
   import { Sandbox } from 'e2b'                                                                
                                                                                                
   // Create sandbox                                                                            
   const sandbox = await Sandbox.create('j5zqgb7g5aeyugxrtfz1')                                 
                                                                                                
 ───────────────────────────────────────────────────────────────────────────────────────────────

```

### 使用自定义模板

```bash
vi use-custom-template.py
```

内容为:

```python
from e2b_code_interpreter import Sandbox

sbx = Sandbox(template='j5zqgb7g5aeyugxrtfz1')

print(sbx.run_code("""
import cowsay  

cowsay.cow("Hello from Python!")
"""))
```

执行:

```bash
python use-custom-template.py
```

输出为:

```bash
Execution(Results: [], Logs: Logs(stdout: ['  __________________\n| Hello from Python! |\n  ==================\n                  \\\n                   \\\n                     ^__^\n                     (oo)\\_______\n                     (__)\\       )\\/\\\n                         ||----w |\n                         ||     ||\n'], stderr: []), Error: None)

```

## 在运行时安装包

如果包无法提前在模板中安装，可以在运行时安装。

```bash
mkdir -p ~/work/code/e2b/install-custom-packages-on-runtime
cd ~/work/code/e2b/install-custom-packages-on-runtime

vi install-custom-packages-on-runtime.py
```

内容为:

```python
from e2b_code_interpreter import Sandbox

sbx = Sandbox()
sbx.commands.run("pip install cowsay") # This will install the cowsay package
sbx.commands.run("cowsay -t aaa") 
sbx.run_code("""
  import cowsay
  cowsay.cow("Hello, world!")
""")
```

执行:

```bash
python install-custom-packages-on-runtime.py
```

