---
title: "启动速度"
linkTitle: "启动速度"
weight: 100
date: 2025-11-13
description: >
  autogpt Agent 的启动速度
---

## 部署

参考: 

https://docs.agpt.co/platform/getting-started/


### 准备工作

这三个我 linux mint 机器上都有:

- Node.js
- Docker
- Git

### 安装

使用自动安装脚本进行安装:

```bash
mkdir -p ~/work/code/agents
cd ~/work/code/agents

curl -fsSL https://setup.agpt.co/install.sh -o install.sh && bash install.sh
```

输出为:

```bash
       d8888          888             .d8888b.  8888888b. 88888888888 
      d88888          888            d88P  Y88b 888   Y88b    888     
     d88P888          888            888    888 888    888    888     
    d88P 888 888  888 888888 .d88b.  888        888   d88P    888     
   d88P  888 888  888 888   d88""88b 888  88888 8888888P"     888     
  d88P   888 888  888 888   888  888 888    888 888           888     
 d8888888888 Y88b 888 Y88b. Y88..88P Y88b  d88P 888           888     
d88P     888  "Y88888  "Y888 "Y88P"   "Y8888P88 888           888     

AutoGPT Setup Script
-------------------
Checking prerequisites...
✓ Git is installed
✓ Docker is installed
All prerequisites installed!
Cloning AutoGPT repository...
Cloning into '/home/sky/work/code/agents/AutoGPT'...
remote: Enumerating objects: 129027, done.
remote: Counting objects: 100% (604/604), done.
remote: Compressing objects: 100% (359/359), done.
remote: Total 129027 (delta 471), reused 249 (delta 245), pack-reused 128423 (from 4)
Receiving objects: 100% (129027/129027), 297.76 MiB | 17.41 MiB/s, done.
Resolving deltas: 100% (83388/83388), done.
Repository cloned successfully.
Starting AutoGPT services with Docker Compose...
This may take a few minutes on first run...


✓ Services started successfully!

=============================
     Setup Complete!
=============================

🚀 Access AutoGPT at: http://localhost:3000
📡 API available at: http://localhost:8000

To stop services: docker compose down
To view logs: docker compose logs -f

All commands should be run in: /home/sky/work/code/agents/AutoGPT/autogpt_platform
```

安装过程中自动 clone AutoGPT 代码仓库. 

### 配置

```bash
 cd ~/work/code/agents/AutoGPT/autogpt_platform

 cp .env.default .env
 ```

## 启动

第一次:

```bash
cd ~/work/code/agents/AutoGPT

docker compose up -d --build
```

输出为:

```bash
docker compose up -d --build
Compose can now delegate builds to bake for better performance.
 To do so, set COMPOSE_BAKE=true.
[+] Building 18.8s (132/220)                                                      docker:default
 => [migrate internal] load build definition from Dockerfile                                0.0s
 => => transferring dockerfile: 3.80kB                                                      0.0s
 => [notification_server internal] load metadata for docker.io/library/debian:13-slim      18.1s
 => [migrate internal] load .dockerignore                                                   0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [migrate internal] load build context                                                   0.0s
 => => transferring context: 1.03MB                                                         0.0s
 => [notification_server builder  1/13] FROM docker.io/library/debian:13-slim@sha256:18764  0.0s
 => CACHED [websocket_server builder  2/13] WORKDIR /app                                    0.0s
 => CACHED [websocket_server server_dependencies  3/16] RUN apt-get update && apt-get inst  0.0s
 => CACHED [websocket_server builder  3/13] RUN echo 'Acquire::http::Pipeline-Depth 0;\nAc  0.0s
 => CACHED [websocket_server builder  4/13] RUN apt-get update --allow-releaseinfo-change   0.0s
 => CACHED [websocket_server builder  5/13] RUN apt-get update     && apt-get install -y    0.0s
 => CACHED [websocket_server builder  6/13] RUN pip3 install poetry --break-system-package  0.0s
 => CACHED [migrate builder  7/13] COPY autogpt_platform/autogpt_libs /app/autogpt_platfor  0.0s
 => CACHED [migrate builder  8/13] COPY autogpt_platform/backend/poetry.lock autogpt_platf  0.0s
 => CACHED [migrate builder  9/13] WORKDIR /app/autogpt_platform/backend                    0.0s
 => CACHED [migrate builder 10/13] RUN poetry install --no-ansi --no-root                   0.0s
 => CACHED [migrate builder 11/13] COPY autogpt_platform/backend/schema.prisma ./           0.0s
 => CACHED [migrate builder 12/13] COPY autogpt_platform/backend/backend/data/partial_type  0.0s
 => CACHED [migrate builder 13/13] RUN poetry run prisma generate                           0.0s
 => CACHED [migrate server_dependencies  4/16] COPY --from=builder /app /app                0.0s
 => CACHED [migrate server_dependencies  5/16] COPY --from=builder /usr/local/lib/python3*  0.0s
 => CACHED [migrate server_dependencies  6/16] COPY --from=builder /usr/local/bin/poetry /  0.0s
 => CACHED [migrate server_dependencies  7/16] COPY --from=builder /usr/bin/node /usr/bin/  0.0s
 => CACHED [migrate server_dependencies  8/16] COPY --from=builder /usr/lib/node_modules /  0.0s
 => CACHED [migrate server_dependencies  9/16] COPY --from=builder /usr/bin/npm /usr/bin/n  0.0s
 => CACHED [migrate server_dependencies 10/16] COPY --from=builder /usr/bin/npx /usr/bin/n  0.0s
 => CACHED [migrate server_dependencies 11/16] COPY --from=builder /root/.cache/prisma-pyt  0.0s
 => CACHED [migrate server_dependencies 12/16] RUN mkdir -p /app/autogpt_platform/autogpt_  0.0s
 => CACHED [migrate server_dependencies 13/16] RUN mkdir -p /app/autogpt_platform/backend   0.0s
 => CACHED [migrate server_dependencies 14/16] COPY autogpt_platform/autogpt_libs /app/aut  0.0s
 => CACHED [migrate server_dependencies 15/16] COPY autogpt_platform/backend/poetry.lock a  0.0s
 => CACHED [migrate server_dependencies 16/16] WORKDIR /app/autogpt_platform/backend        0.0s
 => CACHED [migrate migrate 1/3] COPY autogpt_platform/backend/schema.prisma /app/autogpt_  0.0s
 => CACHED [migrate migrate 2/3] COPY autogpt_platform/backend/backend/data/partial_types.  0.0s
 => CACHED [migrate migrate 3/3] COPY autogpt_platform/backend/migrations /app/autogpt_pla  0.0s
 => [migrate] exporting to image                                                            0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:79e4f5dc5d9d3fd8d10aa986e3a367ff3525af72c047cd53dc7c740db21989  0.0s
 => => naming to docker.io/library/autogpt_platform-migrate                                 0.0s
 => [migrate] resolving provenance for metadata file                                        0.0s
 => [database_manager internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 3.80kB                                                      0.0s
 => [frontend internal] load build definition from Dockerfile                               0.0s
 => => transferring dockerfile: 1.96kB                                                      0.0s
 => [rest_server internal] load build definition from Dockerfile                            0.0s
 => => transferring dockerfile: 3.80kB                                                      0.0s
 => [frontend internal] load metadata for docker.io/library/node:21-alpine                  6.6s
 => [rest_server internal] load .dockerignore                                               0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [database_manager internal] load .dockerignore                                          0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [database_manager internal] load build context                                          0.1s
 => => transferring context: 4.64MB                                                         0.1s
 => [rest_server internal] load build context                                               0.1s
 => => transferring context: 5.64MB                                                         0.1s
 => CACHED [database_manager builder  7/13] COPY autogpt_platform/autogpt_libs /app/autogp  0.0s
 => CACHED [database_manager builder  8/13] COPY autogpt_platform/backend/poetry.lock auto  0.0s
 => CACHED [database_manager builder  9/13] WORKDIR /app/autogpt_platform/backend           0.0s
 => CACHED [database_manager builder 10/13] RUN poetry install --no-ansi --no-root          0.0s
 => CACHED [database_manager builder 11/13] COPY autogpt_platform/backend/schema.prisma ./  0.0s
 => CACHED [database_manager builder 12/13] COPY autogpt_platform/backend/backend/data/par  0.0s
 => CACHED [database_manager builder 13/13] RUN poetry run prisma generate                  0.0s
 => CACHED [database_manager server_dependencies  4/16] COPY --from=builder /app /app       0.0s
 => CACHED [database_manager server_dependencies  5/16] COPY --from=builder /usr/local/lib  0.0s
 => CACHED [database_manager server_dependencies  6/16] COPY --from=builder /usr/local/bin  0.0s
 => CACHED [database_manager server_dependencies  7/16] COPY --from=builder /usr/bin/node   0.0s
 => CACHED [database_manager server_dependencies  8/16] COPY --from=builder /usr/lib/node_  0.0s
 => CACHED [database_manager server_dependencies  9/16] COPY --from=builder /usr/bin/npm /  0.0s
 => CACHED [database_manager server_dependencies 10/16] COPY --from=builder /usr/bin/npx /  0.0s
 => CACHED [database_manager server_dependencies 11/16] COPY --from=builder /root/.cache/p  0.0s
 => CACHED [database_manager server_dependencies 12/16] RUN mkdir -p /app/autogpt_platform  0.0s
 => CACHED [database_manager server_dependencies 13/16] RUN mkdir -p /app/autogpt_platform  0.0s
 => CACHED [database_manager server_dependencies 14/16] COPY autogpt_platform/autogpt_libs  0.0s
 => CACHED [database_manager server_dependencies 15/16] COPY autogpt_platform/backend/poet  0.0s
 => CACHED [database_manager server_dependencies 16/16] WORKDIR /app/autogpt_platform/back  0.0s
 => CACHED [database_manager server 1/2] COPY autogpt_platform/backend /app/autogpt_platfo  0.0s
 => CACHED [rest_server server 2/2] RUN poetry install --no-ansi --only-root                0.0s
 => [database_manager] exporting to image                                                   0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:793d80d2bcf86a4d20e45d8378731ccfe50afa0b3555b1379a86b617e51962  0.0s
 => => naming to docker.io/library/autogpt_platform-database_manager                        0.0s
 => [rest_server] exporting to image                                                        0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:29521f5b6ab2cf880eb2f39bb4957f4ab3a5a93bd09ed2f6ee5d87ab1703b0  0.0s
 => => naming to docker.io/library/autogpt_platform-rest_server                             0.0s
 => [database_manager] resolving provenance for metadata file                               0.0s
 => [rest_server] resolving provenance for metadata file                                    0.0s
 => [notification_server internal] load build definition from Dockerfile                    0.0s
 => => transferring dockerfile: 3.80kB                                                      0.0s
 => [websocket_server internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 3.80kB                                                      0.0s
 => [executor internal] load build definition from Dockerfile                               0.0s
 => => transferring dockerfile: 3.80kB                                                      0.0s
 => [scheduler_server internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 3.80kB                                                      0.0s
 => [frontend internal] load .dockerignore                                                  0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [frontend base 1/5] FROM docker.io/library/node:21-alpine@sha256:78c45726ea205bbe2f238  0.0s
 => [frontend internal] load build context                                                  0.2s
 => => transferring context: 20.79MB                                                        0.2s
 => CACHED [frontend base 2/5] WORKDIR /app                                                 0.0s
 => CACHED [frontend prod 3/9] RUN addgroup --system --gid 1001 nodejs                      0.0s
 => CACHED [frontend prod 4/9] RUN adduser --system --uid 1001 nextjs                       0.0s
 => CACHED [frontend prod 5/9] RUN mkdir .next                                              0.0s
 => CACHED [frontend prod 6/9] RUN chown nextjs:nodejs .next                                0.0s
 => CACHED [frontend base 3/5] RUN corepack enable                                          0.0s
 => CACHED [frontend base 4/5] COPY autogpt_platform/frontend/package.json autogpt_platfor  0.0s
 => CACHED [frontend base 5/5] RUN --mount=type=cache,target=/root/.local/share/pnpm pnpm   0.0s
 => CACHED [frontend build 1/4] COPY autogpt_platform/frontend/ .                           0.0s
 => CACHED [frontend build 2/4] RUN if [ -f .env.production ]; then       cat .env.default  0.0s
 => CACHED [frontend build 3/4] RUN pnpm run generate:api                                   0.0s
 => CACHED [frontend build 4/4] RUN if [ "false" = "true" ]; then NEXT_PUBLIC_PW_TEST=true  0.0s
 => CACHED [frontend prod 7/9] COPY --from=build --chown=nextjs:nodejs /app/.next/standalo  0.0s
 => CACHED [frontend prod 8/9] COPY --from=build --chown=nextjs:nodejs /app/.next/static .  0.0s
 => CACHED [frontend prod 9/9] COPY --from=build /app/public ./public                       0.0s
 => [frontend] exporting to image                                                           0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:1c123401968788aa915e2ee9ed20010c36cdf917da95c7c57f0baa7736cc43  0.0s
 => => naming to docker.io/library/autogpt_platform-frontend                                0.0s
 => [frontend] resolving provenance for metadata file                                       0.0s
 => [scheduler_server internal] load .dockerignore                                          0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [notification_server internal] load .dockerignore                                       0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [websocket_server internal] load .dockerignore                                          0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [executor internal] load .dockerignore                                                  0.0s
 => => transferring context: 1.85kB                                                         0.0s
 => [scheduler_server internal] load build context                                          0.1s
 => => transferring context: 5.64MB                                                         0.1s
 => [websocket_server internal] load build context                                          0.0s
 => => transferring context: 65.49kB                                                        0.0s
 => [executor internal] load build context                                                  0.1s
 => => transferring context: 5.64MB                                                         0.1s
 => [notification_server internal] load build context                                       0.1s
 => => transferring context: 5.64MB                                                         0.1s
 => CACHED [websocket_server builder  7/13] COPY autogpt_platform/autogpt_libs /app/autogp  0.0s
 => CACHED [websocket_server builder  8/13] COPY autogpt_platform/backend/poetry.lock auto  0.0s
 => CACHED [websocket_server builder  9/13] WORKDIR /app/autogpt_platform/backend           0.0s
 => CACHED [websocket_server builder 10/13] RUN poetry install --no-ansi --no-root          0.0s
 => CACHED [websocket_server builder 11/13] COPY autogpt_platform/backend/schema.prisma ./  0.0s
 => CACHED [websocket_server builder 12/13] COPY autogpt_platform/backend/backend/data/par  0.0s
 => CACHED [websocket_server builder 13/13] RUN poetry run prisma generate                  0.0s
 => CACHED [websocket_server server_dependencies  4/16] COPY --from=builder /app /app       0.0s
 => CACHED [websocket_server server_dependencies  5/16] COPY --from=builder /usr/local/lib  0.0s
 => CACHED [websocket_server server_dependencies  6/16] COPY --from=builder /usr/local/bin  0.0s
 => CACHED [websocket_server server_dependencies  7/16] COPY --from=builder /usr/bin/node   0.0s
 => CACHED [websocket_server server_dependencies  8/16] COPY --from=builder /usr/lib/node_  0.0s
 => CACHED [websocket_server server_dependencies  9/16] COPY --from=builder /usr/bin/npm /  0.0s
 => CACHED [websocket_server server_dependencies 10/16] COPY --from=builder /usr/bin/npx /  0.0s
 => CACHED [websocket_server server_dependencies 11/16] COPY --from=builder /root/.cache/p  0.0s
 => CACHED [websocket_server server_dependencies 12/16] RUN mkdir -p /app/autogpt_platform  0.0s
 => CACHED [websocket_server server_dependencies 13/16] RUN mkdir -p /app/autogpt_platform  0.0s
 => CACHED [websocket_server server_dependencies 14/16] COPY autogpt_platform/autogpt_libs  0.0s
 => CACHED [websocket_server server_dependencies 15/16] COPY autogpt_platform/backend/poet  0.0s
 => CACHED [websocket_server server_dependencies 16/16] WORKDIR /app/autogpt_platform/back  0.0s
 => CACHED [websocket_server server 1/2] COPY autogpt_platform/backend /app/autogpt_platfo  0.0s
 => CACHED [scheduler_server server 2/2] RUN poetry install --no-ansi --only-root           0.0s
 => [websocket_server] exporting to image                                                   0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:2704efb2a355df26e3eeac826ec53efe576464affd72ba10cc4fd58993949c  0.0s
 => => naming to docker.io/library/autogpt_platform-websocket_server                        0.0s
 => [websocket_server] resolving provenance for metadata file                               0.0s
 => [executor] exporting to image                                                           0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:e1c89cc61ecf7c1e1e0277cb9821019977ba3332b530015372e8c218944fa7  0.0s
 => => naming to docker.io/library/autogpt_platform-executor                                0.0s
 => [scheduler_server] exporting to image                                                   0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:c52a47b1f606c5c9cddc813d480b3953fa7c98ba308d453edea728eaefa6e8  0.0s
 => => naming to docker.io/library/autogpt_platform-scheduler_server                        0.0s
 => [notification_server] exporting to image                                                0.0s
 => => exporting layers                                                                     0.0s
 => => writing image sha256:12b086866f50c684190215410e0cf4587e2d95c9f95acbd0121592ed4bea66  0.0s
 => => naming to docker.io/library/autogpt_platform-notification_server                     0.0s
 => [executor] resolving provenance for metadata file                                       0.0s
 => [scheduler_server] resolving provenance for metadata file                               0.0s
 => [notification_server] resolving provenance for metadata file                            0.0s
[+] Running 22/22
 ✔ database_manager                                  Built                                  0.0s 
 ✔ executor                                          Built                                  0.0s 
 ✔ frontend                                          Built                                  0.0s 
 ✔ migrate                                           Built                                  0.0s 
 ✔ notification_server                               Built                                  0.0s 
 ✔ rest_server                                       Built                                  0.0s 
 ✔ scheduler_server                                  Built                                  0.0s 
 ✔ websocket_server                                  Built                                  0.0s 
 ✔ Container supabase-kong                           Running                                0.0s 
 ✔ Container rabbitmq                                Healthy                                4.3s 
 ✔ Container supabase-db                             Healthy                                4.3s 
 ✔ Container autogpt_platform-redis-1                Healthy                                4.3s 
 ✔ Container autogpt_platform-clamav-1               Running                                0.0s 
 ✔ Container autogpt_platform-migrate-1              Exited                                 4.3s 
 ✔ Container supabase-auth                           Running                                0.0s 
 ✔ Container autogpt_platform-rest_server-1          Running                                0.0s 
 ✔ Container autogpt_platform-frontend-1             Running                                0.0s 
 ✔ Container autogpt_platform-database_manager-1     Running                                0.0s 
 ✔ Container autogpt_platform-websocket_server-1     Running                                0.0s 
 ✔ Container autogpt_platform-scheduler_server-1     Running                                0.0s 
 ✔ Container autogpt_platform-executor-1             Running                                0.0s 
 ✔ Container autogpt_platform-notification_server-1  Running 
```

此时执行:

```bash
docker ps
```

可以看到 autogpt 的多个容器和依赖的底层组件:

```bash
CONTAINER ID   IMAGE                                  COMMAND                   CREATED          STATUS                    PORTS                                                                                                                                                     NAMES
cb7a557cf896   autogpt_platform-notification_server   "python -m backend.n…"    3 minutes ago    Up 3 minutes              0.0.0.0:8007->8007/tcp, [::]:8007->8007/tcp                                                                                                               autogpt_platform-notification_server-1
3b55b78d16e8   autogpt_platform-websocket_server      "python -m backend.ws"    3 minutes ago    Up 3 minutes              0.0.0.0:8001->8001/tcp, [::]:8001->8001/tcp                                                                                                               autogpt_platform-websocket_server-1
300ae427cb8f   autogpt_platform-scheduler_server      "python -m backend.s…"    3 minutes ago    Up 3 minutes              0.0.0.0:8003->8003/tcp, [::]:8003->8003/tcp                                                                                                               autogpt_platform-scheduler_server-1
142479a30cf1   autogpt_platform-executor              "python -m backend.e…"    3 minutes ago    Up 3 minutes              0.0.0.0:8002->8002/tcp, [::]:8002->8002/tcp                                                                                                               autogpt_platform-executor-1
96cb2f3ebf36   autogpt_platform-rest_server           "python -m backend.r…"    3 minutes ago    Up 3 minutes              0.0.0.0:8006->8006/tcp, [::]:8006->8006/tcp                                                                                                               autogpt_platform-rest_server-1
39234cb8a67f   autogpt_platform-database_manager      "python -m backend.db"    3 minutes ago    Up 3 minutes              0.0.0.0:8005->8005/tcp, [::]:8005->8005/tcp                                                                                                               autogpt_platform-database_manager-1
aa403ad8f61f   supabase/postgres:15.8.1.049           "docker-entrypoint.s…"    3 minutes ago    Up 3 minutes (healthy)    0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp                                                                                                               supabase-db
2681b4df8b73   kong:2.8.1                             "bash -c 'eval \"echo…"   3 minutes ago    Up 3 minutes (healthy)    0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp, 8001/tcp, 0.0.0.0:8443->8443/tcp, [::]:8443->8443/tcp, 8444/tcp                                              supabase-kong
c2f2d97c0cde   autogpt_platform-frontend              "docker-entrypoint.s…"    28 minutes ago   Up 28 minutes             0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp                                                                                                               autogpt_platform-frontend-1
7ca46aa8769f   supabase/gotrue:v2.170.0               "auth"                    28 minutes ago   Up 28 minutes (healthy)                                                                                                                                                             supabase-auth
cad37656bf28   rabbitmq:management                    "docker-entrypoint.s…"    28 minutes ago   Up 28 minutes (healthy)   4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, [::]:5672->5672/tcp, 15671/tcp, 15691-15692/tcp, 25672/tcp, 0.0.0.0:15672->15672/tcp, [::]:15672->15672/tcp   rabbitmq
454f81fbb681   redis:latest                           "docker-entrypoint.s…"    28 minutes ago   Up 28 minutes (healthy)   0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp                                                                                                               autogpt_platform-redis-1
3e0e32178353   clamav/clamav-debian:latest            "/init"                   28 minutes ago   Up 28 minutes (healthy)   0.0.0.0:3310->3310/tcp, [::]:3310->3310/tcp, 7357/tcp                                                                                                     autogpt_platform-clamav-1
```

此时访问 http://localhost:3000/ 就可以看到 autogpt 的页面.

以后再启动, 不需要再 build 的

```bash
docker compose up -d
```

### 启动速度

为了测试启动时间,前后打印一下时间值:

```bash
TZ=UTC-8 date +"%Y-%m-%d %H:%M:%S,%3N"
docker compose up -d
TZ=UTC-8 date +"%Y-%m-%d %H:%M:%S,%3N"
```

输出为:

```bash
2025-11-20 18:02:46,972
[+] Running 16/16
 ✔ Network shared-network                            Created                                0.0s 
 ✔ Network app-network                               Created                                0.0s 
 ✔ Container rabbitmq                                Healthy                               10.9s 
 ✔ Container supabase-db                             Healthy                               10.9s 
 ✔ Container autogpt_platform-clamav-1               Started                                0.4s 
 ✔ Container supabase-kong                           Started                                0.4s 
 ✔ Container autogpt_platform-redis-1                Healthy                               10.6s 
 ✔ Container autogpt_platform-migrate-1              Exited                                10.8s 
 ✔ Container supabase-auth                           Started                                6.1s 
 ✔ Container autogpt_platform-frontend-1             Started                               10.3s 
 ✔ Container autogpt_platform-database_manager-1     Started                               10.3s 
 ✔ Container autogpt_platform-rest_server-1          Started                               10.7s 
 ✔ Container autogpt_platform-websocket_server-1     Started                               11.0s 
 ✔ Container autogpt_platform-notification_server-1  Started                               11.1s 
 ✔ Container autogpt_platform-executor-1             Started                               11.0s 
 ✔ Container autogpt_platform-scheduler_server-1     Started                               11.0s 
2025-11-20 18:02:58,334
```

启动时长为 11.36 秒. 重复几次, 11.247 / 11.353, 取 11.35 秒.

### 内存占用

启动之后, 执行命令:

```bash
docker ps --format "{{.Names}}" | xargs -I {} docker stats {} --no-stream --format "{{.Name}}: {{.MemUsage}}"
```

能看到各个容器的内存占用:

```bash
autogpt_platform-notification_server-1: 212.3MiB / 31.11GiB
autogpt_platform-executor-1: 264MiB / 31.11GiB
autogpt_platform-websocket_server-1: 206.5MiB / 31.11GiB
autogpt_platform-scheduler_server-1: 270.1MiB / 31.11GiB
autogpt_platform-rest_server-1: 513.2MiB / 31.11GiB
autogpt_platform-database_manager-1: 279.3MiB / 31.11GiB
autogpt_platform-frontend-1: 130.6MiB / 31.11GiB
supabase-auth: 8.438MiB / 31.11GiB
supabase-db: 65.4MiB / 31.11GiB
rabbitmq: 123.2MiB / 31.11GiB
autogpt_platform-redis-1: 5.168MiB / 31.11GiB
supabase-kong: 1.645GiB / 31.11GiB
autogpt_platform-clamav-1: 1.299GiB / 31.11GiB
```

写个脚本统计一下内存总数:

```bash
docker ps --format "{{.Names}}" | \
xargs -I {} docker stats {} --no-stream --format "{{.MemUsage}}" | \
awk '{split($1,a,"MiB"); sum+=a[1]} END {print "AutoGPT 总内存占用: " sum " MiB"}'
```

输出为 AutoGPT 总内存占用: 2082.09 MiB . 整整2.08GB的内存使用.

## 关闭

```bash
cd ~/work/code/agents/AutoGPT

docker compose down
```

输出:

```bash
[+] Running 16/16
 ✔ Container autogpt_platform-rest_server-1          Removed                                2.1s 
 ✔ Container autogpt_platform-websocket_server-1     Removed                                1.2s 
 ✔ Container autogpt_platform-frontend-1             Removed                                0.5s 
 ✔ Container supabase-auth                           Removed                                0.4s 
 ✔ Container autogpt_platform-executor-1             Removed                                1.4s 
 ✔ Container supabase-kong                           Removed                                0.6s 
 ✔ Container autogpt_platform-clamav-1               Removed                               10.4s 
 ✔ Container autogpt_platform-notification_server-1  Removed                                1.4s 
 ✔ Container autogpt_platform-scheduler_server-1     Removed                                1.5s 
 ✔ Container autogpt_platform-database_manager-1     Removed                                1.2s 
 ✔ Container autogpt_platform-redis-1                Removed                                0.4s 
 ✔ Container rabbitmq                                Removed                                1.5s 
 ✔ Container autogpt_platform-migrate-1              Removed                                0.0s 
 ✔ Container supabase-db                             Removed                                1.4s 
 ✔ Network app-network                               Removed                                0.4s 
 ✔ Network shared-network                            Removed                                0.2s
 ```


