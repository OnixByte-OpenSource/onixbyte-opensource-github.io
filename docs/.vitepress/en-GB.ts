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
    {
      text: "Open-source Projects",
      items: [
        {
          text: "JDevKit",
          link: "/jdevkit",
          items: [
            {
              text: "Devkit Utils",
              link: "/devkit-utils",
            },
          ],
        },
      ],
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    "/jdevkit": [
      {
        text: "JDevKit",
        items: [
          { text: "Devkit Utils", link: "/jdevkit/devkit-utils" },
        ],
      },
    ],
  }
}
