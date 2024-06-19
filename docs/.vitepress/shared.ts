import { defineConfig } from "vitepress"

export const shared = defineConfig({
  title: "OnixByte",
  description: "OnixByte Official Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: "github", link: "https://github.com/onixbyte-opensource" },
    ],
  },
})
