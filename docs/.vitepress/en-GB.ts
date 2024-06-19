import { DefaultTheme, defineConfig } from "vitepress"

export const enGB = defineConfig({
  lang: "en-GB",
  description: "A non-profit open source developer organisation.",
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Home",
      link: "/",
      activeMatch: "/",
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: "Examples",
      items: [
        { text: "Markdown Examples", link: "/markdown-examples" },
        { text: "Runtime API Examples", link: "/api-examples" },
      ],
    },
  ]
}
