# Old Mac 开发指南 - OpenClaw 安装配置

[![Deploy VitePress site to Pages](https://github.com/jiangbingo/openclaw-guide/actions/workflows/deploy.yml/badge.svg)](https://github.com/jiangbingo/openclaw-guide/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://jiangbingo.github.io/openclaw-guide/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> MacBook Pro 2015 OpenClaw 安装配置一对一指导服务网站

## 预览

**网站地址**：[https://jiangbingo.github.io/openclaw-guide/](https://jiangbingo.github.io/openclaw-guide/)

## 功能特性

- 技术文档风格的 VitePress 网站
- 完整的安装指南内容（问题背景、准备工作、安装步骤、故障排除）
- 服务介绍和 FAQ 页面
- 付费引导组件（PaywallCTA），展示咸鱼二维码
- 支持深色模式
- 响应式设计，支持移动端
- GitHub Actions 自动部署到 GitHub Pages

## 页面结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | 服务介绍和亮点展示 |
| 安装指南 | `/guide/` | 完整的安装流程说明 |
| 问题背景 | `/guide/overview` | Old Mac 面临的困境 |
| 准备工作 | `/guide/preparation` | 系统要求和依赖安装 |
| 安装步骤 | `/guide/installation` | 核心安装流程（模糊展示）|
| 故障排除 | `/guide/troubleshooting` | 常见问题解决方向 |
| 服务介绍 | `/service/` | 远程协助方式说明 |
| 常见问题 | `/service/faq` | FAQ 问答 |
| 联系咨询 | `/contact` | 咸鱼联系方式 |

## 远程协助方式

网站详细说明了腾讯会议远程控制的操作流程：

1. 加入会议 → 输入会议号
2. 共享屏幕 → 选择桌面
3. 授权控制 → 点击「远程控制」→ 邀请
4. 开始服务 → 远程操作完成安装

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/jiangbingo/openclaw-guide.git
cd openclaw-guide

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```
openclaw-guide/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts              # VitePress 配置（导航、SEO、主题）
│   │   └── theme/
│   │       ├── index.ts            # 主题入口
│   │       ├── custom.css          # 自定义样式
│   │       └── components/
│   │           └── PaywallCTA.vue  # 付费引导组件
│   │
│   ├── public/images/
│   │   └── xianyu-qr.jpg           # 咸鱼二维码
│   │
│   ├── guide/                      # 安装指南
│   │   ├── index.md                # 概览
│   │   ├── overview.md             # 问题背景
│   │   ├── preparation.md          # 准备工作
│   │   ├── installation.md         # 安装步骤
│   │   └── troubleshooting.md      # 故障排除
│   │
│   ├── service/                    # 服务介绍
│   │   ├── index.md                # 服务详情
│   │   └── faq.md                  # 常见问题
│   │
│   ├── index.md                    # 首页
│   └── contact.md                  # 联系方式
│
├── .github/workflows/
│   └── deploy.yml                  # GitHub Actions 自动部署
│
├── package.json
└── README.md
```

## 技术栈

- [VitePress](https://vitepress.dev/) - Vue 驱动的静态站点生成器
- [Vue 3](https://vuejs.org/) - 组件化开发
- [GitHub Pages](https://pages.github.com/) - 静态网站托管
- [GitHub Actions](https://github.com/features/actions) - CI/CD 自动部署

## 自定义配置

### 替换咸鱼二维码

1. 准备您的咸鱼二维码图片（建议 JPG/PNG 格式）
2. 将图片放到 `docs/public/images/xianyu-qr.jpg`
3. 更新以下文件中的图片路径（如需要）：
   - `docs/.vitepress/theme/components/PaywallCTA.vue`
   - `docs/contact.md`

### 修改价格

在以下文件中搜索 `¥39` 并修改：

- `docs/.vitepress/theme/components/PaywallCTA.vue`
- `docs/index.md`
- `docs/contact.md`
- `docs/service/index.md`

### 修改 SEO 信息

编辑 `docs/.vitepress/config.mts` 中的 `head` 配置：

```typescript
head: [
  ['meta', { name: 'keywords', content: 'Old Mac, MacBook Pro 2015, ...' }],
  ['meta', { name: 'author', content: 'your-username' }],
  // ...
]
```

## 部署

项目使用 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 访问 `https://<username>.github.io/<repo-name>/`

### 手动触发部署

在 GitHub 仓库页面：
1. 点击「Actions」标签
2. 选择「Deploy VitePress site to Pages」工作流
3. 点击「Run workflow」

## License

[MIT](LICENSE)

## 相关链接

- [VitePress 官方文档](https://vitepress.dev/)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [腾讯会议下载](https://meeting.tencent.com/download.html)
