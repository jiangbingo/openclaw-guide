# 准备工作

在开始安装 OpenClaw 之前，需要先准备好系统环境。本章将指导您完成所有必要的准备工作。

## 系统要求

### 最低配置

| 项目 | 要求 |
|------|------|
| Mac 型号 | MacBook Pro 2015 或同等设备 |
| macOS 版本 | 10.13 (High Sierra) 或更高 |
| 内存 | 4GB RAM（推荐 8GB） |
| 磁盘空间 | 至少 2GB 可用空间 |
| 处理器 | Intel Core i5 或更高 |

### 检查系统版本

点击左上角苹果图标 → "关于本机"，查看您的系统信息。

## 安装命令行工具

首先，确保您已安装 Xcode Command Line Tools：

```bash
xcode-select --install
```

如果已安装，会提示您；否则会弹出安装窗口。

## 安装 Homebrew

Homebrew 是 macOS 上最流行的包管理器，我们将用它来安装依赖：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

::: details Homebrew 安装后配置
如果您的 macOS 版本较旧，可能需要额外配置环境变量：

```bash
# 添加到 ~/.zshrc 或 ~/.bash_profile
eval "$(/opt/homebrew/bin/brew shellenv)"
# 或对于 Intel Mac
eval "$(/usr/local/Homebrew/bin/brew shellenv)"
```
:::

## 安装基础依赖

使用 Homebrew 安装必要的基础工具：

```bash
# 安装 Git
brew install git

# 安装其他常用工具
brew install curl wget
```

## 验证环境

运行以下命令验证环境是否就绪：

```bash
# 检查 Xcode 工具
xcode-select -p

# 检查 Homebrew
brew --version

# 检查 Git
git --version
```

如果以上命令都正常输出，说明基础环境已准备就绪。

## 下一步

环境准备完成后，请继续阅读 [安装步骤](/guide/installation)。

<PaywallCTA />
