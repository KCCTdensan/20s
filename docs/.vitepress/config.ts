import { defineConfig } from "vitepress"
import katex from "markdown-it-katex"

export default defineConfig({
  lang: "ja",
  title: "電算20s",
  description: "神戸高専電算部20sのホームページ",
  themeConfig: {
    nav: [
      { text: "works", link: "/works/" },
      { text: "d3bu.net", link: "https://d3bu.net" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/KCCTdensan/20s" },
    ],
  },

  // https://github.com/vuejs/vitepress/issues/529
  markdown: {
    config: md => md.use(katex),
  },
})
