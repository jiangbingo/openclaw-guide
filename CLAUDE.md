# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
# 安装依赖
npm install

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```
openclaw-guide/
├── docs/
│   ├── .vitepress/          # VitePress 配置
│   ├── public/images/       # 静态图片资源
│   ├── guide/               # 安装指南页面
│   ├── service/             # 服务介绍页面
│   ├── index.md             # 首页
│   └── contact.md           # 联系方式
├── .github/workflows/       # GitHub Actions 部署
└── package.json
```

## 技术栈

- **VitePress** - 静态站点生成器
- **GitHub Pages** - 网站托管

## 自定义内容

### 替换咸鱼二维码

1. 准备您的咸鱼二维码图片
2. 将图片放到 `docs/public/images/xianyu-qr.png`
3. 更新 `docs/.vitepress/theme/components/PaywallCTA.vue` 中的二维码显示

### 修改价格

在以下文件中搜索并修改价格：

- `docs/.vitepress/theme/components/PaywallCTA.vue`
- `docs/index.md`
- `docs/contact.md`
- `docs/service/index.md`

## License

MIT，这是一个指导别人安装的付费项目。
