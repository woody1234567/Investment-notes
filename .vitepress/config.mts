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
      { text: "Investment", link: "/investment" },
    ],

    sidebar: [
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
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/woody1234567" }],
    footer: {
      copyright: "Copyright © 2026-present StudyWithWoody",
    },
  },
});
