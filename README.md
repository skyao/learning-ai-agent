## AI Agent 学习笔记

这是我持续学习 AI Agent 的笔记。我目前从事 AI Agent 运行平台和 Agent 开发，在这里记录业界进展、技术调研、源码阅读与实践中的理解和疑问，通过比较不同方案积累自己的知识体系。

阅读入口：

- [在线阅读](https://skyao.io/learning-ai-agent/)：hugo格式 + docsy主题，界面清爽。托管于腾讯云香港节点。
- [@github](https://github.com/skyao/learning-ai-agent/)：源码托管于github，如有谬误或需讨论，请提issue，欢迎提交PR

### 版权申明

本笔记内容可以任意转载，但请注明来源并提供链接。

### 本地开发

```bash
npm install                              # 首次：装 postcss 等依赖，hugo 构建需要
hugo server                              # 本地预览
python3 scripts/check-links.py --build   # 校验内部链接与页内锚点
```

`scripts/` 下的工具说明见 [scripts/README.md](scripts/README.md)。

