import { defineConfig } from "vitepress"
import { shared } from "./shared"
import { enGB } from './en-GB'
import { zhCN } from './zh-CN'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: "English (Great Britain)",
      // lang: "en-GB",
      ...enGB,
    },
    "zh-CN": {
      label: "Chinese (Simplified) | 简体中文",
      // lang: "zh-CN",
      // link: "/zh-CN",
      ...zhCN,
    },
  },
})
