import { DefaultTheme, defineConfig } from "vitepress"

export const zhCN = defineConfig({
  lang: "zh-CN",
  description: "一个非营利性开源开发者组织。",
  themeConfig: {
    nav: nav(),
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "主页",
      link: "/",
      activeMatch: "/",
    },
  ]
}
