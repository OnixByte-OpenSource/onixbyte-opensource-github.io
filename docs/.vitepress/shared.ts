import { defineConfig } from "vitepress"

export const shared = defineConfig({
  title: "OnixByte",
  description: "OnixByte Official Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/onixbyte-opensource" },
    ],
  },
})
