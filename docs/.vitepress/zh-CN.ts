import { DefaultTheme, defineConfig } from "vitepress"

export const zhCN = defineConfig({
  lang: "zh-CN",
  description: "一个非营利性开源开发者组织。",
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "主页",
      link: "/zh-CN/",
      activeMatch: "/zh-CN/",
    },
    {
      text: "开源项目",
      items: [{ text: "JDevKit", link: "/zh-CN/jdevkit.md" }],
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: "案例",
      items: [
        { text: "Markdown 案例", link: "/zh-CN/markdown-examples" },
        { text: "运行时 API 案例", link: "/zh-CN/api-examples" },
      ],
    },
  ]
}
