module.exports = {
  title: "",
  base: "/noteCSS/",
  description: "Note CSS -- CSS学习目录",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`,
      },
    ],
  ],
  themeConfig: {
    logo: "/assets/img/logo.jpg",
    nav: [{ text: "External", link: "https://github.com/superwtt" }],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: [["/introduction/introduction.html", "简介"]],
      },
      {
        title: "CSS Base",
        collapsable: false,
        children: [
          {
            title: "背景",
            path: "/base/background/background.html",
            children: [
              {
                title: "background-image",
                path: "/base/background/backgroundImage.html",
              },
              {
                title: "background-repeat",
                path: "/base/background/backgroundRepeat.html"
              },
              {
                title: "background-position",
                path: "/base/background/backgroundPosition.html"
              },
              {
                title: "background-attachment",
                path: "/base/background/backgroundAttachment.html"
              },
              {
                title: "background-clip",
                path: "/base/background/backgroundClip.html"
              },
              {
                title: "background-origin",
                path: "/base/background/backgroundOrigin.html"
              },
              {
                title: "background-size",
                path: "/base/background/backgroundSize.html"
              },
              {
                title: "background-blend-mode",
                path: "/base/background/backgroundBlendMode.html"
              }
            ],
          },
          {
            title: "渐变",
            children: [
              {
                title: "linear-gradient",
                path: "/base/gradient/linearGradient.html",
              },
              {
                title: "radial-gradient",
                path: "/base/gradient/radialGradient.html"
              }
            ],
          },
          {
            title: "box-shadow",
            children: [
              {
                title: "box-shadow",
                path: "/base/boxshadow/boxShadow.html",
              }
            ],
          },
        ],
      },
      // {
      //   title: "CSS Base",
      //   collapsable: false,
      //   children: [['/base/background.html', 'CSS 背景']],
      // },
      // {
      //   title: "CSS Advanced",
      //   collapsable: false,
      //   children: [['/advanced/index.html', 'CSS 背景']],
      // },
    ],
  },
  plugins: {
    "@vuepress/active-header-links": {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor",
    },
    "@vuepress/search": {
      search: true, //默认false
      searchMaxSuggestions: 10, // 默认是5
    },
    "@vuepress/nprogress": false, //默认为true，设置为false可以关闭进度条
  },
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
};
