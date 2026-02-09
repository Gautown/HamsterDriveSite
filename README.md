# 仓鼠驱动管家 (Hamster Driver Manager)

一个现代化的 Windows 驱动管理工具，采用 Rust 语言开发，提供直观的图形界面，帮助用户轻松管理和维护系统驱动程序。

## 🚀 主要功能

- 🔍 **系统信息检测**: 硬件信息、显示器信息、网络适配器等详细信息
- 💾 **驱动管理**: 驱动扫描、状态查看、备份恢复、签名验证
- 🔧 **系统优化**: 依赖分析、问题诊断、性能监控

## 🛠️ 技术特性

- **Rust 语言**: 内存安全、高性能的系统级编程语言
- **egui 框架**: 轻量级、跨平台的即时模式GUI
- **Windows API**: 深度集成Windows系统功能

## 📖 文档

访问 [https://hamster-drivers.com/docs](https://hamster-drivers.com/docs) 查看完整文档。

## 🚀 快速开始

### 从源码构建

```bash
# 克隆仓库
git clone https://github.com/Gautown/HamsterDrivers.git
cd HamsterDrivers

# 构建发布版本
cargo build --release

# 运行程序
cargo run
```

### 预编译版本

从 [Releases 页面](https://github.com/Gautown/HamsterDrivers/releases) 下载预编译的可执行文件。

## 🤝 贡献

请阅读 [贡献指南](./CONTRIBUTING.md)。

## 📄 许可证

基于 [MIT 许可证](./LICENSE)。
