module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "whatsapp-web.js",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    "A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favcion/logo_32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favcion/logo_16x16.png" }],
    ["link", { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/favcion/logo_shortcut.ico' }],
    ["meta", { name: "theme-color", content: "#25D366" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],
  locales: {
    '/': {
      lang: 'en-US'

    },
    '/zh/': {
      lang: 'de'
    }
  },
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "pedroslopez/whatsapp-web.js",
    docsRepo: "wwebjs/wwebjs.dev",
    docsBranch: "main",
    editLinks: true,
    docsDir: "src",
    smoothScroll: true,
    lastUpdated: "Last Updated",
    sidebarDepth: 3,
    nav: require("./config/navbar"),
    sidebar: require("./config/sidebar"),
    yuu: require("./config/yuu"),

  },
  theme: "/theme/layouts/Layout.vue",

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "vuepress-plugin-code-copy",
      {
        align: "bottom",
        color: "#25D366",
        backgroundColor: "#25D366",
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
  ],
};
