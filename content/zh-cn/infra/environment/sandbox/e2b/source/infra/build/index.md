---
title: "构建"
linkTitle: "构建"
weight: 10
date: 2026-04-23
description: >
  E2B infra仓库源码的构建
---



## 背景

代码仓库：

https://github.com/e2b-dev/infra

## 准备工作

### clone仓库

```bash
mkdir -p ~/work/code/e2b
cd ~/work/code/e2b
git clone git@github.com:e2b-dev/infra.git
cd infra
```

### 构建环境

根据 DEV.md 描述，需要基于 Linux（推荐 Ubuntu 22.04+）环境安装基础工具[1][5]。

前置安装：

- Go：核心服务（Orchestrator, API, envd）由 Go 编写，需要 Go 1.22+ 版本。
- Make：统一入口工具
- Docker & Node.js：用于本地基础设施运行和部分前端/脚本编译
- 内核要求：如果要在本地完整跑通虚拟机 Sandbox 构建，Linux 内核推荐 6.8+，并支持 KVM 和 HugePages。

## 构建

参考代码仓库下的 Makefile 文件：

https://github.com/e2b-dev/E2B/blob/main/Makefile

### 启动本地构建基础设施

先执行： 

```bash
make local-infra
```

启动后要下载一批容器镜像：

```bash
make local-infra
cat: .last_used_env: No such file or directory
make -C packages/local-dev local-infra
make[1]: Entering directory '/home/sky/work/code/e2b/infra/packages/local-dev'
USERNAME=clickhouse PASSWORD=clickhouse PORT=9000 \
envsubst < ../clickhouse/local/config.tpl.xml > clickhouse-config-generated.xml
docker compose --file ./docker-compose.yaml up --abort-on-container-failure
[+] Running 107/107
 ✔ memcached Pulled                                                      239.5s 
 ✔ clickhouse Pulled                                                     994.1s 
 ✔ loki Pulled                                                            84.4s 
 ✔ grafana Pulled                                                        129.6s 
 ✔ mimir Pulled                                                           38.1s 
 ✔ redis Pulled                                                          239.1s 
 ✔ postgres Pulled                                                       273.7s 
 ✔ otel-collector Pulled                                                  99.4s 
 ✔ vector Pulled                                                          52.8s 
 ✔ tempo-init Pulled                                                     144.3s 
 ✔ tempo Pulled                                                           46.4s 
 ```

 可以看到下载的镜像：

 ```bash
 docker images
REPOSITORY                             TAG             IMAGE ID       CREATED         SIZE
otel/opentelemetry-collector-contrib   0.146.0         ea107e054905   2 months ago    357MB
grafana/mimir                          2.17.1          571ecdabe4af   7 months ago    101MB
grafana/tempo                          2.8.2           08c4147d7e1e   8 months ago    118MB
memcached                              1.6.38          eba955ff6453   9 months ago    87.1MB
clickhouse                             25.4.5.24       37d98d845098   11 months ago   682MB
grafana/grafana                        12.0.0          29c2d986a9d8   11 months ago   680MB
postgres                               17.4            45a04d02adcf   14 months ago   438MB
grafana/loki                           3.4.1           6e2b55358175   14 months ago   112MB
redis                                  7.4.2           65750d044ac8   15 months ago   117MB
timberio/vector                        0.34.X-alpine   2710728a77c2   2 years ago     134MB
```

然后本地运行下列的容器，提供本地构建的各种基础设施：

```bash
[+] Running 15/15
 ✔ Network local-dev_default             Cr...                             0.0s 
 ✔ Volume local-dev_postgres             Cr...                             0.0s 
 ✔ Volume local-dev_clickhouse           Created                           0.0s 
 ✔ Volume local-dev_tempo                Creat...                          0.0s 
 ✔ Container local-dev-tempo-init-1      Created                           0.3s 
 ✔ Container local-dev-clickhouse-1      Created                           0.3s 
 ✔ Container local-dev-mimir-1           Created                           0.3s 
 ✔ Container local-dev-loki-1            C...                              0.3s 
 ✔ Container local-dev-redis-1           Created                           0.3s 
 ✔ Container local-dev-otel-collector-1  Created                           0.3s 
 ✔ Container local-dev-postgres-1        Created                           0.3s 
 ✔ Container memcached                   Created                           0.3s 
 ✔ Container local-dev-grafana-1         Created                           0.3s 
 ✔ Container local-dev-tempo-1           Created                           0.0s 
 ✔ Container local-dev-vector-1          Created                           0.0s 
```

### 构建核心组件

打开另外一个终端，执行：

```bash
make build/api
```

输出为：

```bash
cat: .last_used_env: No such file or directory
make -C packages/api build
make[1]: Entering directory '/home/sky/work/code/e2b/infra/packages/api'
cat: ../../.last_used_env: No such file or directory
# Allow for passing commit sha directly for docker builds
CGO_ENABLED=0 go build -o bin/api -ldflags "-X=main.commitSHA=7e37444a5 -X=main.expectedMigrationTimestamp=20260416120000" .
make[1]: Leaving directory '/home/sky/work/code/e2b/infra/packages/api'
```


```bash
make build/api
```