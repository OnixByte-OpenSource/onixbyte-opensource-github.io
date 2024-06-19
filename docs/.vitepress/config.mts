import { defineConfig } from "vitepress"
import { shared } from "./shared"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: "English (Great Britain)",
      lang: "en-GB",
    },
    "zh-CN": {
      label: "Chinese (Simplified) | 简体中文",
      lang: "zh-CN",
      link: "/zh-CN",
    },
  },
})
