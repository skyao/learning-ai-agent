---
title: "镜像构建"
linkTitle: "镜像构建"
weight: 10
date: 2025-05-27
description: >
  E2B 基础镜像构建
---


## 准备工作

### 编译 envd 二进制

在本地宿主机（linux）上克隆并编译 `envd`:

```bash
# 回到 base 的上级目录
cd /home/sky/work/code/e2b/envd-image-builder

# 克隆官方 infra 仓库（如果慢可以换 github 镜像源）
git clone https://github.com/e2b-dev/infra.git

# 进入 envd 目录
cd infra/packages/envd

# 静态编译出 Linux x64 的二进制文件
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o ../../../base/envd main.go
```

### 代码定制

#### 修改默认 host IP

https://deepwiki.com/search/envd-host-ip-169254021_afda741e-0447-47c8-b19d-a63e1c3fa86a?mode=fast

envd 默认使用的 host IP 是 169.254.0.21 ，通过硬编码的方式配置，`代码在 packages/envd/internal/port/forward.go`

```bash
var defaultGatewayIP = net.IPv4(169, 254, 0, 21)
```

移植到其他环境之后，如果需要修改这个 host IP，比如修改为其他固定值，可以简单修改这行代码。

如果是移植到 k8s 下，sandbox 运行在 pod 中，这里的 host IP 就不是固定值，而是所在 pod 的被分配的 IP 地址。则需要修改 envd 代码，通过某种方式传入 pod IP。

TODO：看怎么修改代码合适。

## base 镜像

### 构建 base 镜像

base 镜像的 Dockerfile:

```bash
FROM debian:bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive

# 安装基础系统工具
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash ca-certificates curl git openssh-client procps sudo unzip wget \
    && rm -rf /var/lib/apt/lists/*

# 创建用于 AI 执行代码的普通隔离用户（让 envd 拥有 root 权限，但 AI 执行代码时可以用这个低权限用户）
RUN useradd -m -s /bin/bash sandboxuser && \
    echo "sandboxuser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# 直接把我们在本地编译好的 envd 复制进去
COPY envd /usr/local/bin/envd

# 显式指定工作目录并保持以 ROOT 用户身份运行
WORKDIR /root
USER root

# 暴露官方标准的 49983 端口
EXPOSE 49983

ENTRYPOINT ["/usr/local/bin/envd"]

# 生产默认配置：开启 49983 端口，非纯 Firecracker 兼容模式，开启详细日志
CMD ["-port", "49983", "-isnotfc", "-verbose"]
```

构建镜像：

```bash
docker build -t e2b-base:latest .
```

查看本地构建好的 e2b-base 镜像：

```bash
$ docker images                    

IMAGE                                          ID             DISK USAGE   CONTENT SIZE   EXTRA 
e2b-base:latest                                28d8689e05f8        289MB         72.9MB    U   
```

### 启动 base 镜像

直接在本机用 docker 启动上面构建好的 e2b base 镜像：

```bash
docker run -d \
  --name e2b-base-test \
  --privileged \
  -p 49983:49983 \
  e2b-base:latest
```

使用完成之后，或者更新代码后重新构建重新运行，关闭已经运行的容器：

```bash
docker rm -f e2b-base-test
```

## code interpreter 镜像

TODO

