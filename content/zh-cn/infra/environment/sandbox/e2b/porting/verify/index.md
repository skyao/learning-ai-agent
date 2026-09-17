---
title: "API验证"
linkTitle: "API验证"
weight: 20
date: 2025-05-27
description: >
  E2B 基础镜像的功能验证
---

## base 镜像

使用上一节构建好的 base 镜像启动 docker，然后验证相关的数据面 API。

### envd API

https://e2b.dev/docs/api-reference/envd/check-the-health-of-the-service

Check the health of the service：

```bash
curl -i http://localhost:49983/health

HTTP/1.1 204 No Content
Cache-Control: no-store
Content-Type: 
Vary: Origin
Date: Mon, 01 Jun 2026 08:05:52 GMT
```

Get the stats of the service

```bash
curl --request GET --url 'http://localhost:49983/metrics' 

{"ts":1780301268,"cpu_count":32,"cpu_used_pct":0.77,"mem_total_mib":64085,"mem_used_mib":3932,"mem_total":67198607360,"mem_used":4123037696,"mem_cache":4104839168,"disk_used":111465947136,"disk_total":966455894016}
```

Get the environment variables

```bash
curl --request GET --url 'http://localhost:49983/envs' 
```

小结：功能都可用。

### file system API

ListDir

```bash
curl --request POST --url 'http://localhost:49983/filesystem.Filesystem/ListDir'  \
	--header 'Content-Type: application/json' \
  --data '
{
  "path": "/",
  "depth": 1
}
'

{"entries":[{"name":".dockerenv", "type":"FILE_TYPE_FILE", "path":"/.dockerenv", "mode":493, "permissions":"-rwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-06-01T07:59:46.609468959Z"}, {"name":"bin", "type":"FILE_TYPE_DIRECTORY", "path":"/bin", "size":"7", "mode":493, "permissions":"Lrwxrwxrwx", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z", "symlinkTarget":"/usr/bin"}, {"name":"boot", "type":"FILE_TYPE_DIRECTORY", "path":"/boot", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-05-08T16:15:00Z"}, {"name":"dev", "type":"FILE_TYPE_DIRECTORY", "path":"/dev", "size":"4580", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-06-01T07:59:46.698102456Z"}, {"name":"etc", "type":"FILE_TYPE_DIRECTORY", "path":"/etc", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-06-01T07:59:46.609639982Z"}, {"name":"home", "type":"FILE_TYPE_DIRECTORY", "path":"/home", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-06-01T07:27:57Z"}, {"name":"lib", "type":"FILE_TYPE_DIRECTORY", "path":"/lib", "size":"7", "mode":493, "permissions":"Lrwxrwxrwx", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z", "symlinkTarget":"/usr/lib"}, {"name":"lib64", "type":"FILE_TYPE_DIRECTORY", "path":"/lib64", "size":"9", "mode":493, "permissions":"Lrwxrwxrwx", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z", "symlinkTarget":"/usr/lib64"}, {"name":"media", "type":"FILE_TYPE_DIRECTORY", "path":"/media", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}, {"name":"mnt", "type":"FILE_TYPE_DIRECTORY", "path":"/mnt", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}, {"name":"opt", "type":"FILE_TYPE_DIRECTORY", "path":"/opt", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}, {"name":"proc", "type":"FILE_TYPE_DIRECTORY", "path":"/proc", "mode":365, "permissions":"dr-xr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-06-01T07:59:46.670390345Z"}, {"name":"root", "type":"FILE_TYPE_DIRECTORY", "path":"/root", "size":"4096", "mode":448, "permissions":"drwx------", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}, {"name":"run", "type":"FILE_TYPE_DIRECTORY", "path":"/run", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-06-01T07:59:46.742410856Z"}, {"name":"sbin", "type":"FILE_TYPE_DIRECTORY", "path":"/sbin", "size":"8", "mode":493, "permissions":"Lrwxrwxrwx", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z", "symlinkTarget":"/usr/sbin"}, {"name":"srv", "type":"FILE_TYPE_DIRECTORY", "path":"/srv", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}, {"name":"sys", "type":"FILE_TYPE_DIRECTORY", "path":"/sys", "mode":365, "permissions":"dr-xr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-06-01T07:59:46.671390630Z"}, {"name":"tmp", "type":"FILE_TYPE_DIRECTORY", "path":"/tmp", "size":"4096", "mode":511, "permissions":"dtrwxrwxrwx", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}, {"name":"usr", "type":"FILE_TYPE_DIRECTORY", "path":"/usr", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}, {"name":"var", "type":"FILE_TYPE_DIRECTORY", "path":"/var", "size":"4096", "mode":493, "permissions":"drwxr-xr-x", "owner":"root", "group":"root", "modifiedTime":"2026-05-18T00:00:00Z"}]}% 
```

Download a file

```bash
curl -i --request GET --get \
  --data-urlencode "path=/etc/hosts" \
  http://localhost:49983/files
  
HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Disposition: inline; filename=hosts
Content-Length: 172
Content-Type: text/plain; charset=utf-8
Last-Modified: Mon, 01 Jun 2026 07:59:46 GMT
Vary: Accept-Encoding
Date: Mon, 01 Jun 2026 08:27:59 GMT

127.0.0.1	localhost
::1	localhost ip6-localhost ip6-loopback
fe00::	ip6-localnet
ff00::	ip6-mcastprefix
ff02::1	ip6-allnodes
ff02::2	ip6-allrouters
172.17.0.2	a3c723dfcd0a
```

### process API

start process：

```bash
(printf "\x00\x00\x00\x00\x2a" && printf '{"process":{"cmd":"sleep","args":["300"]}}') | curl -i --no-buffer --request POST \
  --url 'http://localhost:49983/process.Process/Start' \
  --header 'Content-Type: application/connect+json' \
  --data-binary @- \
  --output output.bin
```

List process：

启动 process 之后，在另外一个终端中操作：

```bash
# 1. 看看 Docker 容器里有没有这个 sleep 300 现行
docker exec e2b-base-test ps aux

# 2. 看看 envd 内部的 List 注册表有没有抓到它
curl -i --request POST \
  --url 'http://localhost:49983/process.Process/List' \
  --header 'Content-Type: application/json' \
  --data '{}'
```

### init 内部接口

#### 设置环境变量

先通过 init 接口设置环境变量 AI_PROVIDER 和 SANDBOX_STAGE：

```bash
 curl -i --request POST \
  --url 'http://localhost:49983/init' \
  --header 'Content-Type: application/json' \
  --data '{
    "envVars": {
      "AI_PROVIDER": "NacreAgent2",
      "SANDBOX_STAGE": "Development2"
    }
  }'
  
  
HTTP/1.1 204 No Content
Cache-Control: no-store
Vary: Origin
Date: Mon, 01 Jun 2026 09:33:02 GMT
```

启动进程，这个进程通过 env 命个令打印传递给它的环境变量：

```bash
(printf "\x00\x00\x00\x00\x23" && printf '{"process":{"cmd":"env","args":[]}}') | curl -i --no-buffer --request POST \
  --url 'http://localhost:49983/process.Process/Start' \
  --header 'Content-Type: application/connect+json' \
  --data-binary @- \
  --output init_env.bin
  
  
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   419    0   379  100    40   115k  12488 --:--:-- --:--:-- --:--:--  136k
```

strings init_env.bin 查看输出：

```bash
strings init_env.bin


HTTP/1.1 200 OK
Connect-Accept-Encoding: gzip
Content-Type: application/connect+json
Vary: Origin
Date: Mon, 01 Jun 2026 09:35:01 GMT
Transfer-Encoding: chunked
{"event":{"start":{"pid":62}}}
{"event":{"data":{"stdout":"RTJCX1NBTkRCT1g9ZmFsc2UKVVNFUj1yb290CkhPTUU9L3Jvb3QKTE9HTkFNRT1yb290CkFJX1BST1ZJREVSPU5hY3JlQWdlbnQKUEFUSD0vdXNyL2xvY2FsL3NiaW46L3Vzci9sb2NhbC9iaW46L3Vzci9zYmluOi91c3IvYmluOi9zYmluOi9iaW4KU0FOREJPWF9TVEFHRT1EZXZlbG9wbWVudApQV0Q9L3Jvb3QK"}}}
;{"event":{"end":{"exited":true, "status":"exit status 0"}}}
```

把 base64 的数据打印出来

```bash
echo "RTJCX1NBTkRCT1g9ZmFsc2UKVVNFUj1yb290CkhPTUU9L3Jvb3QKTE9HTkFNRT1yb290CkFJX1BST1ZJREVSPU5hY3JlQWdlbnQKUEFUSD0vdXNyL2xvY2FsL3NiaW46L3Vzci9sb2NhbC9iaW46L3Vzci9zYmluOi91c3IvYmluOi9zYmluOi9iaW4KU0FOREJPWF9TVEFHRT1EZXZlbG9wbWVudApQV0Q9L3Jvb3QK" | base64 -d
```

这是 env 命令的输出：

```bash
E2B_SANDBOX=false
USER=root
HOME=/root
LOGNAME=root
AI_PROVIDER=NacreAgent
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
SANDBOX_STAGE=Development
PWD=/root
```

之前设置的 "AI_PROVIDER": "NacreAgent" 和 "SANDBOX_STAGE": "Development"  被正确的传递到新启动的进程了。验证OK！

也可以简单的直接调用 envd 的接口查看环境变量：

```bash
curl --request GET --url 'http://localhost:49983/envs' 

{"AI_PROVIDER":"NacreAgent","E2B_SANDBOX":"false","SANDBOX_STAGE":"Development"}
```

#### 设置 access token

通过 init 接口设置 access token：

```bash
 curl -i --request POST \
  --url 'http://localhost:49983/init' \
  --header 'Content-Type: application/json' \
  --data '{
  	"accessToken": "your-secret-token",
    "envVars": {
      "AI_PROVIDER": "NacreAgent2",
      "SANDBOX_STAGE": "Development2"
    }
  }'
```

## code interpreter 镜像

TODO


