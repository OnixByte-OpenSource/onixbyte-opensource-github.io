import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OnixByte",
  description: "OnixByte Official Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "Home", link: "/"},
      {text: "Examples", link: "/markdown-examples"}
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          {text: "Markdown Examples", link: "/markdown-examples"},
          {text: "Runtime API Examples", link: "/api-examples"}
        ]
      }
    ],
    socialLinks: [
      {icon: "github", link: "https://github.com/onixbyte-opensource"}
    ]
  },
  locales: {
    root: {
      label: "English (Great Britain)",
      lang: "en-GB"
    },
    "zh-CN": {
      label: "Chinese (Simplified) | 简体中文",
      lang: "zh-CN",
      link: "/zh-CN"
    }
  }
})
