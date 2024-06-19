import { DefaultTheme, defineConfig } from "vitepress"

export const enGB = defineConfig({
  lang: "en-GB",
  description: "A non-profit open source developer organisation.",
  themeConfig: {
    nav: nav(),
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
