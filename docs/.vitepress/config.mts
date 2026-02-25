import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Old Mac 开发指南',
  description: 'MacBook Pro 2015 OpenClaw 安装配置一对一指导服务',
  lang: 'zh-CN',

  // 仓库名作为基础路径
  base: '/openclaw-guide/',

  // SEO 优化
  head: [
    ['meta', { name: 'keywords', content: 'Old Mac, MacBook Pro 2015, OpenClaw, 开发环境, 旧 Mac, macOS 开发, 开发工具' }],
    ['meta', { name: 'author', content: 'jiangbingo' }],
    ['meta', { property: 'og:title', content: 'Old Mac 开发指南 - OpenClaw 安装配置' }],
    ['meta', { property: 'og:description', content: '让 MacBook Pro 2015 焕发新生的开发环境解决方案，专业一对一指导服务' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  // 主题配置
  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'Old Mac 开发指南',

    nav: [
      { text: '首页', link: '/' },
      { text: '安装指南', link: '/guide/' },
      { text: '服务详情', link: '/service/' },
      { text: '联系咨询', link: '/contact' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '安装指南',
          items: [
            { text: '概览', link: '/guide/' },
            { text: '问题背景', link: '/guide/overview' },
            { text: '准备工作', link: '/guide/preparation' },
            { text: '安装步骤', link: '/guide/installation' },
            { text: '故障排除', link: '/guide/troubleshooting' },
          ]
        }
      ],
      '/service/': [
        {
          text: '服务详情',
          items: [
            { text: '服务介绍', link: '/service/' },
            { text: '常见问题', link: '/service/faq' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jiangbingo/openclaw-guide' }
    ],

    footer: {
      message: '专业一对一技术指导服务',
      copyright: 'Copyright © 2024-present jiangbingo'
    },

    outline: {
      level: [2, 3]
    },

    search: {
      provider: 'local'
    }
  }
})
