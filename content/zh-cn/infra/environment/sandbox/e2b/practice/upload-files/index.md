---
title: "上传文件"
linkTitle: "上传文件"
weight: 30
date: 2025-05-27
description: >
  E2B 上传文件到 sandbox
---


参考: https://e2b.dev/docs/quickstart/upload-download-files

## python 实现

```bash
mkdir -p ~/work/code/e2b/upload-files
cd ~/work/code/e2b/upload-files

touch ./upload.txt
# write some content to upload.txt
cat <<EOF > ./upload.txt
第一行
第二行
EOF

vi upload-files.py
```

内容为：

```python
from e2b_code_interpreter import Sandbox

sbx = Sandbox()

# Read local file relative to the current working directory
with open("./upload.txt", "rb") as file:
   # Upload file to the sandbox to absolute path '/home/user/upload.txt'
	sbx.files.write("/home/user/upload.txt", file)

# Download file from the sandbox to absolute path '/home/user/my-file'
content = sbx.files.read('/home/user/upload.txt')
print(content)

# Write file to local path relative to the current working directory
with open('./download.txt', 'w') as file:
    file.write(content)

print("done, check ./download.txt")
```

执行：

```bash
python upload-files.py
```

## 小结

只有简单的读写单个文件的 api，多个文件只能一个一个来，也不支持目录操作。