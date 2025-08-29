# ACGN 创想乐园 🎮📚🎬🎨

一个集展示、互动与体验于一体的综合性 ACGN（动画、漫画、游戏、小说）文化主题网页项目。

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub-Pages-brightgreen?style=for-the-badge&logo=github)](https://yankeesean.github.io/ACGN/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

## ✨ 项目特色

- **沉浸式视觉体验**：运用视差滚动、动态文字、卡片翻转等效果，营造梦幻的 ACGN 氛围。
- **全方位内容覆盖**：深入介绍 8 部经典作品，涵盖动画、漫画、游戏、小说四大领域。
- **丰富的交互功能**：包含画板创作、BGM 播放、人物卡片翻转、作品集跳转等互动元素。
- **响应式设计**：适配不同设备屏幕，提供良好的浏览体验。

## 🗺️ 网站结构

### 主要页面
| 页面名称 | 文件路径 | 功能描述 |
| :--- | :--- | :--- |
| **文化首页** | `FirstPage.html` | ACGN 字母视差效果，文化起源介绍，引导探索 |
| **主展厅** | `index.html` | 手风琴式作品导航，八大板块入口 |
| **作品角色页** | `xxx.html` (如 `spiritedaway.html`) | 人物卡片翻转效果，展示角色简介 |
| **剧情介绍页** | `xxxStory.html` | 文字滑入动画，作品故事概要 |
| **作者介绍页** | `xxxAuthor.html` | 作者定位动画，成就与作品集展示 |
| **评价页面** | `xxxComment.html` | 动态评价展示，BGM 背景音乐播放 |
| **经典台词页** | `xxxLines.html` | 台词动态排列与轮播卡片展示 |
| **文化主页** | `HomePage.html` | 视差滚动效果，ACGN 历史与发展介绍 |
| **作品画廊** | `ACGN主要代表作品.html` | 卡片式作品展示，滚动隐现效果 |
| **创意画板** | `画板.html` | 在线绘画工具，轮廓选择与保存功能 |

### 涵盖作品
1.  **动画**：《千与千寻》、《你的名字》
2.  **漫画**：《罗小黑战记》、《刺客伍六七》
3.  **游戏**：《逆转裁判》、《弹丸论破》
4.  **小说**：《凉宫春日的忧郁》、《龙王的工作》

## 🚀 快速开始

### 在线访问
项目已通过 GitHub Pages 自动部署，可直接访问：
👉 **[https://yankeesean.github.io/ACGN/](https://yankeesean.github.io/ACGN/ACGN/index.html)**

### 本地运行
1.  **克隆项目**
    ```bash
    git clone https://github.com/YANKEESEAN/ACGN.git
    cd ACGN
    ```

2.  **启动本地服务器**（推荐使用 Live Server）
    - 使用 VS Code 安装 Live Server 插件
    - 右键点击 `FirstPage.html` 或 `index.html`
    - 选择 "Open with Live Server"

3.  **直接在浏览器中打开**
    - 双击 `FirstPage.html` 文件即可在浏览器中打开

## 🛠️ 技术栈

- **前端三件套**：HTML5、CSS3、JavaScript (ES6+)
- **布局技术**：Flexbox、Grid、响应式设计
- **动画效果**：CSS Animation、CSS Transition、JavaScript 动画
- **交互功能**：原生 JavaScript DOM 操作、事件处理
- **音频处理**：HTML5 Audio API

## 📁 项目结构

```
ACGN/
├── FirstPage.html          # 文化首页 - 入口页面
├── index.html             # 主展厅 - 作品导航中心
├── HomePage.html          # 文化主页 - ACGN发展历史
├── ACGN主要代表作品.html    # 作品画廊 - 扩展作品展示
├── 画板.html              # 创意画板 - 绘画互动功能
├── spiritedaway/          # 《千与千寻》系列页面
│   ├── spiritedaway.html
│   ├── spiritStory.html
│   ├── spiritAuthor.html
│   ├── spiritComment.html
│   └── spiritLines.html
├── yourname/              # 《你的名字》系列页面
│   └── (类似结构)
├── luoxiaohei/            # 《罗小黑战记》系列页面
│   └── (类似结构)
├── cike/                  # 《刺客伍六七》系列页面
│   └── (类似结构)
├── nizhuan/               # 《逆转裁判》系列页面
│   └── (类似结构)
├── danwan/                # 《弹丸论破》系列页面
│   └── (类似结构)
├── lianggong/             # 《凉宫春日的忧郁》系列页面
│   └── (类似结构)
├── longwang/              # 《龙王的工作》系列页面
│   └── (类似结构)
├── css/                   # 样式文件目录
├── js/                    # 脚本文件目录
├── images/                # 图片资源目录
├── ACGN/                  # 主要内容资源
│   └── mp3/               # 音频文件
└── README.md              # 项目说明文档
```

## 🎨 核心功能

### 视觉特效
- ✅ 视差滚动效果
- ✅ 卡片翻转动画
- ✅ 文字滑入特效
- ✅ 图片定位动画
- ✅ 手风琴式导航

### 交互功能
- ✅ 鼠标悬停效果
- ✅ 点击跳转导航
- ✅ 画板绘画工具
- ✅ BGM 音乐播放
- ✅ 作品轮廓选择

### 内容展示
- ✅ 多作品分类展示
- ✅ 人物角色介绍
- ✅ 剧情故事概要
- ✅ 作者成就展示
- ✅ 用户评价轮播
- ✅ 经典台词展示

## 📝 详细文档

如需了解每个页面的详细设计说明、实现原理和效果演示，请查看：
- **[网页详细介绍.docx](./网页详细介绍.docx)** - 完整的设计文档与功能介绍

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改善这个项目！

1.  Fork 本项目
2.  创建特性分支 (`git checkout -b feature/AmazingFeature`)
3.  提交更改 (`git commit -m 'Add some AmazingFeature'`)
4.  推送到分支 (`git push origin feature/AmazingFeature`)
5.  开启 Pull Request

## 📄 版权说明

本项目仅用于学习和交流目的，所有涉及的 ACGN 作品版权归原作者及相关公司所有。

- 项目代码采用 MIT 许可证
- 资源文件（图片、音频等）仅限教育用途

## 👥 作者

- GitHub: [@YANKEESEAN](https://github.com/YANKEESEAN)
- 项目链接: [https://github.com/YANKEESEAN/ACGN](https://github.com/YANKEESEAN/ACGN)

---

**探索 ACGN 的无限可能，开启你的二次元之旅！** 🚀
