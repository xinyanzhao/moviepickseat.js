# 🎬 MoviePickSeat.js

一个基于 JavaScript 的影院座位选择组件，适用于在线购票系统。该项目允许用户交互式选择座位，支持座位状态管理和价格计算。

## ✨ 功能特点

- 可视化座位布局
- 支持座位状态（可选、已选、已售）
- 实时价格计算
- 简洁的 UI 和交互逻辑
- 易于集成到任何网页中

## 🚀 快速开始

1. 克隆仓库：

   ```bash
   git clone https://github.com/xinyanzhao/moviepickseat.js.git
   cd moviepickseat.js
   ```

2. 打开 `index.html` 文件，即可在浏览器中查看演示。

## 🛠️ 使用方法

将以下代码嵌入你的 HTML 页面：

```html
<script src="moviepickseat.js"></script>
<link rel="stylesheet" href="style.css">
```

然后在页面中添加座位容器：

```html
<div id="seat-map"></div>
```

初始化座位图：

```javascript
const seatMap = new MoviePickSeat({
  container: '#seat-map',
  rows: 5,
  cols: 8,
  price: 50
});
```

## 📁 项目结构

```
moviepickseat.js/
├── index.html          # 示例页面
├── moviepickseat.js    # 主脚本文件
├── style.css           # 样式文件
└── README.md           # 项目说明
```

## 📸 演示截图

![演示截图](screenshot.png)

## 📄 许可证

MIT License
