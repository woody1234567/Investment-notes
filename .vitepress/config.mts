import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "https://investment.studywithwoody.site/",
  srcDir: "./",
  title: "Woody's investment notes",
  description: "Establishing financial mindset.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Relative Strength Index(RSI)", link: "/investment/rsi/rsi" },
          {
            text: "Capital Reduction",
            link: "/investment/capital_reduction/capital_reduction",
          },
          {
            text: "DMI",
            link: "/investment/dmi/dmi",
          },
          {
            text: "Gap",
            link: "/investment/gap/gap",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
