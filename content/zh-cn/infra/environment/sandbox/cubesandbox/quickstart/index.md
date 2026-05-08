---
title: "快速开始"
linkTitle: "快速开始"
weight: 20
date: 2025-05-27
description: >
  快速开始体验 Cube Sandbox
---

https://github.com/TencentCloud/CubeSandbox/blob/master/README_zh.md#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B

## 准备开发环境

安装好 ripgrep ：

```bash
sudo apt install ripgrep -y
```

准备目录，克隆源代码，并准备镜像文件：

```bash
mkdir -p ~/work/code/cubesandbox/
cd ~/work/code/cubesandbox/
git clone https://cnb.cool/CubeSandbox/CubeSandbox

cd CubeSandbox/dev-env
./prepare_image.sh
```

输出为：

```bash
[prepare_image][INFO] Downloading image to /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/OpenCloudOS-GenericCloud-9.4-20251120.0.x86_64.qcow2
```

这个镜像文件有一点大，1.1GB：

```bash
ls -lh /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/OpenCloudOS-GenericCloud-9.4-20251120.0.x86_64.qcow2
-rw-r--r-- 1 root root 1.1G Apr 25 09:22 /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/OpenCloudOS-GenericCloud-9.4-20251120.0.x86_64.qcow2
```

下载完成后继续：

```bash
[prepare_image][INFO] Resizing qcow2 in place to 100G
Image resized.
[prepare_image][OK] Image preparation finished
[prepare_image][INFO]   Image path: /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/OpenCloudOS-GenericCloud-9.4-20251120.0.x86_64.qcow2
[prepare_image][INFO] Starting guest root disk auto-grow workflow
[prepare_image][INFO]   User     : opencloudos
[prepare_image][INFO]   SSH port : 10022
[prepare_image][INFO]   Image    : /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/OpenCloudOS-GenericCloud-9.4-20251120.0.x86_64.qcow2
[run_vm][INFO] Booting OpenCloudOS 9 VM
[run_vm][INFO]   Image      : /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/OpenCloudOS-GenericCloud-9.4-20251120.0.x86_64.qcow2
[run_vm][INFO]   Login user : opencloudos
[run_vm][INFO]   Password   : opencloudos
[run_vm][INFO]   SSH        : ssh -p 10022 opencloudos@127.0.0.1
[run_vm][INFO]   Cube API   : http://127.0.0.1:13000 -> guest:3000
[run_vm][INFO]   CubeProxy  : http://127.0.0.1:11080 -> guest:80
[run_vm][INFO]   CubeProxy  : https://127.0.0.1:11443 -> guest:443
[run_vm][INFO] Background mode:
[run_vm][INFO]   PID file   : /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/qemu.pid
[run_vm][INFO]   Serial log : /root/work/code/cubesandbox/CubeSandbox/dev-env/.workdir/qemu-serial.log
[prepare_image][INFO] Waiting for guest SSH to become ready...
[prepare_image][OK] Guest SSH is ready
[prepare_image][INFO] Uploading grow_rootfs.sh to the guest...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[prepare_image][OK] grow_rootfs.sh uploaded
[prepare_image][INFO] Running grow_rootfs.sh inside the guest...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[grow_rootfs][INFO] Current root device     : /dev/vda4
[grow_rootfs][INFO] Current root filesystem : xfs
[grow_rootfs][INFO] Growing partition /dev/vda4 to the end of disk /dev/vda
[grow_rootfs][INFO] Partition already fills the disk, continuing to grow the filesystem
[grow_rootfs][WARN] NOCHANGE: partition 4 is size 208138207. it cannot be grown
[grow_rootfs][INFO] Online-growing XFS root filesystem
meta-data=/dev/vda4              isize=512    agcount=43, agsize=606016 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=1
         =                       reflink=1    bigtime=1 inobtcount=1 nrext64=1
data     =                       bsize=4096   blocks=26017275, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=16384, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
[grow_rootfs][OK] XFS root filesystem grown
[grow_rootfs][OK] Root disk expansion finished, current usage:
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda4       100G  3.1G   97G   4% /
[prepare_image][OK] Guest root filesystem expansion finished
[prepare_image][INFO] Uploading setup_selinux.sh to the guest...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[prepare_image][OK] setup_selinux.sh uploaded
[prepare_image][INFO] Switching guest SELinux to permissive...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[setup_selinux][INFO] Current SELinux mode: Enforcing
[setup_selinux][INFO] Switching SELinux to permissive for the current boot...
[setup_selinux][OK] SELinux is now permissive at runtime
[setup_selinux][INFO] Persisting SELinux=permissive in /etc/selinux/config
[setup_selinux][OK] Persistent SELinux mode updated to permissive
[setup_selinux][OK] SELinux setup finished (mode: Permissive)
[prepare_image][OK] Guest SELinux is now permissive (persistent)
[prepare_image][INFO] Uploading setup_path.sh to the guest...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[prepare_image][OK] setup_path.sh uploaded
[prepare_image][INFO] Adding /usr/local/{sbin,bin} to login PATH and sudo secure_path...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[setup_path][INFO] Installing login shell PATH override at /etc/profile.d/cubesandbox-path.sh
[setup_path][OK] Login shell PATH override installed
[setup_path][INFO] Validating /etc/sudoers.d/00-cubesandbox-path with visudo -cf
[setup_path][OK] sudo secure_path updated at /etc/sudoers.d/00-cubesandbox-path
[prepare_image][OK] Guest PATH setup finished
[prepare_image][INFO] Uploading setup_banner.sh to the guest...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[prepare_image][OK] setup_banner.sh uploaded
[prepare_image][INFO] Installing welcome banner inside the guest...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[setup_banner][INFO] Installing welcome banner at /etc/profile.d/cubesandbox-banner.sh
[setup_banner][OK] Welcome banner installed at /etc/profile.d/cubesandbox-banner.sh
[prepare_image][OK] Welcome banner installed inside the guest
[prepare_image][INFO] Uploading setup_autostart.sh to the guest...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[prepare_image][OK] setup_autostart.sh uploaded
[prepare_image][INFO] Installing cube-sandbox-oneclick.service unit (not enabled)...
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.
[setup_autostart][INFO] Writing systemd unit: /etc/systemd/system/cube-sandbox-oneclick.service
[setup_autostart][OK] Unit file written
[setup_autostart][INFO] Reloading systemd manager configuration...
[setup_autostart][OK] systemd daemon-reload done
[setup_autostart][INFO] cube-sandbox-oneclick.service is installed but NOT enabled.
[setup_autostart][INFO] Run dev-env/cube-autostart.sh from the host to turn it on.
[setup_autostart][OK] Autostart unit setup finished
[prepare_image][OK] Autostart unit installed inside the guest (enable it later via dev-env/cube-autostart.sh)
[prepare_image][INFO] Requesting graceful shutdown from the guest...
[prepare_image][OK] Guest has shut down cleanly
[prepare_image][OK] All done:
[prepare_image][OK]   1. Image downloaded
[prepare_image][OK]   2. qcow2 resized to 100G
[prepare_image][OK]   3. VM booted and guest root filesystem expanded
[prepare_image][OK]   4. Guest SELinux set to permissive
[prepare_image][OK]   5. /usr/local/{sbin,bin} added to login PATH and sudo secure_path
[prepare_image][OK]   6. Welcome banner installed inside the guest
[prepare_image][OK]   7. cube-sandbox-oneclick.service unit installed (not enabled)
[prepare_image][OK]   8. VM powered off cleanly
[prepare_image][INFO] You can now run ./run_vm.sh to start the dev VM
```

这个脚本 `./prepare_image.sh` 是一键构建和初始化开发环境（Virtual Machine, 虚拟机）的自动化准备脚本。

简单来说，它的核心工作是：**下载一个纯净的操作系统镜像 -> 扩容 -> 启动它 -> 连入其中进行各种开发环境所需的系统级配置 -> 最后安全关机，留下一个配置好的镜像供后续使用。**

根据你的输出日志，它具体执行了以下 8 个步骤：

1. 下载基础系统镜像 (Image downloaded)

脚本首先将 OpenCloudOS 9.4 的云镜像（`qcow2` 格式）下载到了你本地的 `.workdir` 隐藏目录下。这是一个纯净的初始操作系统。

2. 外部扩容虚拟磁盘 (qcow2 resized to 100G)

下载的原始镜像通常很小（比如只有几 GB）。脚本使用工具（如 `qemu-img`）在宿主机层面将这个 `qcow2` 虚拟磁盘文件的**最大容量上限**扩展到了 100GB。

3. 后台启动虚拟机并映射端口 (Booting OpenCloudOS 9 VM)

脚本使用 QEMU 在后台启动了这个虚拟机，并配置了一系列端口映射（把虚拟机的端口暴露给你当前的物理机）：
*   **SSH**: 本地 `10022` 端口 -> 虚拟机 `22` 端口（账号密码均为 `opencloudos`）。
*   **Cube API**: 本地 `13000` -> 虚拟机 `3000`。
*   **CubeProxy**: 本地 `11080/11443` -> 虚拟机 `80/443`。
启动后，脚本一直等待直到虚拟机的 SSH 服务就绪。

4. 内部扩展根文件系统 (Guest root filesystem expanded)

由于第 2 步只是扩大了“物理硬盘”的容量，虚拟机系统内部的“分区”还没变大。
*   脚本通过 SSH 将 `grow_rootfs.sh` 脚本传进虚拟机并运行。
*   在虚拟机内部，它自动将 `/dev/vda4` 分区和 XFS 文件系统扩容。
*   **结果**：系统的根目录 `/` 成功获取了全部 100GB 的空间（目前只用了 3.1GB，剩余 97GB）。

5. 放宽 SELinux 权限 (Guest SELinux set to permissive)

*   为了避免在开发过程中遇到复杂的权限阻碍，脚本上传并运行了 `setup_selinux.sh`。
*   它将虚拟机的 SELinux 状态从严格的 `Enforcing` 改为了宽容模式 `Permissive`（只记录警告，不拦截操作）。
*   并且修改了 `/etc/selinux/config` 确保以后每次重启都生效。

6. 配置环境变量 PATH (Guest PATH setup)

*   上传并运行 `setup_path.sh`。
*   它将 `/usr/local/sbin` 和 `/usr/local/bin` 添加到了用户的登录环境变量（`/etc/profile.d/`）以及 `sudo` 的安全路径（`/etc/sudoers.d/`）中。
*   **目的**：以后你自己编译或安装在这些目录下的开发工具，可以直接敲命令运行，不需要输入绝对路径。

7. 安装欢迎词横幅 (Welcome banner installed)

*   上传并运行 `setup_banner.sh`。
*   在 `/etc/profile.d/` 下配置了一个横幅（Banner）。以后只要有人通过 SSH 登录进这个虚拟机，就会看到打印出来的提示信息或 Logo。

8. 配置自启动服务，并安全关机 (Autostart unit installed & powered off cleanly)

*   上传了 `setup_autostart.sh` 并创建了一个 systemd 服务 `cube-sandbox-oneclick.service`，用于以后一键启动你的核心应用。**注意：目前只是安装了，并没有激活（Not enabled）。**
*   所有配置完成后，脚本向虚拟机发送关机指令（Graceful shutdown）。
*   虚拟机安全关机。

正如日志最后一行提示的：
`[prepare_image][INFO] You can now run ./run_vm.sh to start the dev VM`

这个 100G 的、已经配置好开发环境的镜像已经准备就绪了。之后启动这个开发环境，保持此终端不关：

```bash
./run_vm.sh 
```

新开一个终端，进入上一步准备好的环境：

```bash
cd work/code/cubesandbox/
cd CubeSandbox/dev-env && ./login.sh
```

输出为：

```bash
[login][INFO] Logging into opencloudos@127.0.0.1:10022 and switching to root (sudo -i)
Warning: Permanently added '[127.0.0.1]:10022' (ED25519) to the list of known hosts.

  ____      _          ____                  _ _
 / ___|   _| |__   ___/ ___|  __ _ _ __   __| | |__   _____  __
| |  | | | | '_ \ / _ \___ \ / _` | '_ \ / _` | '_ \ / _ \ \/ /
| |__| |_| | |_) |  __/___) | (_| | | | | (_| | |_) | (_) >  <
 \____\__,_|_.__/ \___|____/ \__,_|_| |_|\__,_|_.__/ \___/_/\_\

Welcome to the Cube Sandbox development environment!

  * Guest OS      : OpenCloudOS 9 (qcow2, 100G root disk)
  * Project repo  : https://github.com/tencentcloud/CubeSandbox
  * Install cmd   : curl -sL https://cnb.cool/CubeSandbox/CubeSandbox/-/git/raw/master/deploy/one-click/online-install.sh | MIRROR=cn bash
  * Cube API      : http://127.0.0.1:3000 (from guest) / http://127.0.0.1:13000 (from host)

This VM is a disposable dev environment; do not use it for production.

[root@localhost ~]# 
```

文档提示： 该命令会把你送进一台一次性的 Linux 环境中，后续所有安装都在这里进行，不会污染你的宿主机。

继续启动沙箱服务：

```bash
curl -sL https://cnb.cool/CubeSandbox/CubeSandbox/-/git/raw/master/deploy/one-click/online-install.sh | MIRROR=cn bash
```

这个命令在执行时会报错：

```bash
 > [cube-proxy 2/8] RUN mkdir -p /data/log/cube-proxy/     /usr/local/openresty/nginx/conf/global/     /usr/local/openresty/nginx/certs/     && sed -i "s#https\?://dl-cdn.alpinelinux.org/alpine#https://mirrors.tuna.tsinghua.edu.cn/alpine#g" /etc/apk/repositories     && apk update     && apk add tcpdump     && apk add vim     && apk add tzdata     && apk add python3     && apk add py3-pip     && apk add bpftrace busybox curl ethtool file gawk inetutils-telnet         iperf iperf3 iproute2 netcat-openbsd net-tools sysstat wget     && pip3 install -i "https://pypi.tuna.tsinghua.edu.cn/simple" pythonping requests     && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime     && echo "Asia/Shanghai" > /etc/timezone:
0.070 fetch https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.17/main/x86_64/APKINDEX.tar.gz
0.169 ERROR: https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.17/main: remote server returned error (try 'apk update')
0.169 WARNING: Ignoring https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.17/main: No such file or directory
0.169 fetch https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.17/community/x86_64/APKINDEX.tar.gz
0.265 ERROR: https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.17/community: remote server returned error (try 'apk update')
0.265 WARNING: Ignoring https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.17/community: No such file or directory
0.265 2 errors; 85 distinct packages available
------
failed to solve: process "/bin/sh -c mkdir -p /data/log/cube-proxy/     /usr/local/openresty/nginx/conf/global/     /usr/local/openresty/nginx/certs/     && sed -i \"s#https\\?://dl-cdn.alpinelinux.org/alpine#${ALPINE_MIRROR_URL}#g\" /etc/apk/repositories     && apk update     && apk add tcpdump     && apk add vim     && apk add tzdata     && apk add python3     && apk add py3-pip     && apk add bpftrace busybox curl ethtool file gawk inetutils-telnet         iperf iperf3 iproute2 netcat-openbsd net-tools sysstat wget     && pip3 install -i \"${PIP_INDEX_URL}\" pythonping requests     && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime     && echo \"Asia/Shanghai\" > /etc/timezone" did not complete successfully: exit code: 2
```

看错误日志是说 Alpine 3.17 版本太老，已经停止维护 (EOL)，清华大学开源镜像站（TUNA）已经清理并下架了该版本的软件包。因此服务器返回了 remote server returned error (try 'apk update') 和 No such file or directory（404 ）。

给官方提交了一个 bug： https://github.com/TencentCloud/CubeSandbox/issues/85

在正式修复之前，先看看能不能临时解决。先把脚本下载下来：

```bash
wget https://cnb.cool/CubeSandbox/CubeSandbox/-/git/raw/master/deploy/one-click/online-install.sh -O online-install.sh
```

直接执行本地已经下载好的这个 MIRROR=cn bash ./online-install.sh 脚本：

```bash
MIRROR=cn bash ./MIRROR=cn bash ./online-install.sh
```

然后发现已经更新，上面的问题解决了。继续执行，发现报错 xfs：

```bash
[one-click] ERROR: The filesystem that will host /data/cubelet is on '/' (type: ext4), which is not XFS.
  Cube Sandbox requires the /data/cubelet directory to reside on an XFS filesystem.
  Options:
    1. Mount a dedicated XFS-formatted partition at /data/cubelet:
         mkfs.xfs /dev/<your-partition>
         mount /dev/<your-partition> /data/cubelet
    2. Ensure the parent path (/) itself is on XFS.
```

我的磁盘分区如下：

```bash
lsblk -f
NAME FSTYPE FSVER LABEL UUID                                   FSAVAIL FSUSE% MOUNTPOINTS
nvme0n1
│                                                                             
├─nvme0n1p1
│                                                                             
├─nvme0n1p2
│    vfat   FAT32       560E-DDD5                              1013.2M     1% /boot/efi
├─nvme0n1p3
│ │  LVM2_m LVM2        v3SRzN-3z22-OLDA-LHRf-q5cO-uvTg-eniAqS                
│ ├─pve-swap
│ │  swap   1           530d218b-6bf8-4bff-b5a9-8b2b09c4dcfe                  [SWAP]
│ └─pve-root
│    ext4   1.0         771feb17-395e-42c6-94a9-eb9f67ad888f      3.1T     5% /
└─nvme0n1p4
     ext4   1.0         85d49f17-ff26-4a67-87ed-2020014c3a8f 
```

目前是安装了 pve9. 准备从 771feb17-395e-42c6-94a9-eb9f67ad888f 这个 3.1T 的分区拆出来 512G，作为一个新的分区，然后格式化为 xfs 挂在到 /data/cubelet。

先安装 parted 软件：

```bash
apt-get update
apt-get install parted
```

