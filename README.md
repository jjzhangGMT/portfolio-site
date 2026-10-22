# jjzhang.zone — React 个人站点

基于 Vite + React + TypeScript + Tailwind，动效组件来自 [React Bits](https://reactbits.dev)（经 shadcn registry / MCP 安装）。

## 开发

```bash
cd web
npm install
npm run dev
```

## 打包发布

```bash
cd web
npm run build
```

产物在 `web/dist/`，把该目录内容部署到个人站点静态托管即可。

## React Bits MCP

项目已配置：

- `web/components.json` → `@react-bits` registry
- `web/.mcp.json` 与仓库根 `.cursor/mcp.json` → shadcn MCP

重启 Cursor 后可用自然语言安装组件，例如：

> Add @react-bits/ScrollStack-TS-TW

## 主要动效布局

| 区域 | 组件 | 作用 |
|------|------|------|
| 全站背景 | DarkVeil | 跟随指针的暗色光幕 |
| 导航 | CardNav | 点击展开卡片导航，改变顶栏布局 |
| 首屏 | GradientText / SplitText / CountUp | 品牌字与数字入场 |
| 核心优势 | MagicBento | 磁性 / 倾斜 / 聚光灯的 bento 网格 |
| 技能 | FlowingMenu | 悬停液态色带改写行布局 |
| 经历 | ScrollStack | 滚动时卡片钉住并堆叠 |
| 代表项目 | CardSwap | 3D 翻牌栈 |
| 项目集 | SpotlightCard | 光标聚光 |
| 分隔 / 页脚 | ScrollVelocity / LogoLoop | 速度卷轴与技术栈循环 |

头像已移除。
