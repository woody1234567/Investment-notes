import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "https://investment.studywithwoody.site/",
  // srcDir: "./",
  title: "Woody's blog",
  description: "Record my thoughts.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples" },
      { text: "Investment", link: "/investment" },
      { text: "Education", link: "/education" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/examples/markdown-examples" },
          { text: "Runtime API Examples", link: "/examples/api-examples" },
        ],
      },
      {
        text: "Investment",
        items: [
          { text: "Relative Strength Index(RSI)", link: "/investment/rsi/" },
          {
            text: "Capital Reduction",
            link: "/investment/capital_reduction/",
          },
          {
            text: "DMI",
            link: "/investment/dmi/",
          },
          {
            text: "Gap",
            link: "/investment/gap/",
          },
          {
            text: "Ordering",
            link: "/investment/ordering/",
          },
          {
            text: "Credit Order",
            link: "/investment/credit_order/",
          },
        ],
      },
      {
        text: "Education",
        items: [{ text: "Education", link: "/education" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/woody1234567" }],
    footer: {
      copyright: "Copyright © 2026-present StudyWithWoody",
    },
  },
});
