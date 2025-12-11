---
title: "安装"
linkTitle: "安装"
weight: 20
date: 2025-12-11
description: >
  microsandbox 安装
---


## 安装

```bash
curl -sSL https://get.microsandbox.dev | sh
```

输出为：

```bash
:: Starting microsandbox installation...
:: Creating installation directories...
:: Downloading microsandbox 0.2.6 for linux-x86_64...
######################################################################## 100.0%
:: Verifying checksum...
:: Extracting files...
:: Installing executables...
:: Installing libraries...
:: Configuring detected shells...
:: Setting up bash configuration...
:: Setting up zsh configuration...
:: Setting up sh configuration...
:: All detected shell environments configured. Please restart your shell or source your shell's config file
:: Installation completed successfully!
:: Executables installed to: /home/sky/.local/bin
::   - msb: main microsandbox command
::   - msbrun: microsandbox runtime executable
::   - msbserver: microsandbox server executable
::   - msr: alias for 'msb run'
::   - msx: alias for 'msb exe'
::   - msi: alias for 'msb install'
:: Libraries installed to: /home/sky/.local/lib
:: Please restart your shell or source your shell's config file to use microsandbox
:: Cleaning up temporary files...

```

安装完成后：

```bash
source ~/.zshrc
```

然后检查安装情况:

```bash
 $ which msb                                         
/home/sky/.local/bin/msb
$ msb --version   
v0.2.6
```