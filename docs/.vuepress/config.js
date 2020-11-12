module.exports = {
  title: " ",
  base: "/noteCSS/",
  description: "Note CSS -- CSS学习之路",
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
    nav: [{ text: "Github", link: "https://github.com/superwtt" }],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: [["/introduction/introduction.html", "Awesome CSS"]],
      },
      {
        title: "CSS Base",
        collapsable: false,
        children: [
          {
            title: "Scss",
            children: [
              {
                title: "Scss基础",
                path: "/base/scss/scss基础.html",
              },
              {
                title: "Scss高级",
                path: "/base/scss/scss进阶.html",
              },
            ],
          },
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
                path: "/base/background/backgroundRepeat.html",
              },
              {
                title: "background-position",
                path: "/base/background/backgroundPosition.html",
              },
              {
                title: "background-attachment",
                path: "/base/background/backgroundAttachment.html",
              },
              {
                title: "background-clip",
                path: "/base/background/backgroundClip.html",
              },
              {
                title: "background-origin",
                path: "/base/background/backgroundOrigin.html",
              },
              {
                title: "background-size",
                path: "/base/background/backgroundSize.html",
              },
              {
                title: "background-blend-mode",
                path: "/base/background/backgroundBlendMode.html",
              },
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
                path: "/base/gradient/radialGradient.html",
              },
            ],
          },
          {
            title: "阴影",
            children: [
              {
                title: "box-shadow",
                path: "/base/boxshadow/boxShadow.html",
              },
              {
                title: "text-shadow",
                path: "/base/boxshadow/textShadow.html",
              },
            ],
          },
          {
            title: "边框",
            children: [
              {
                title: "border",
                path: "/base/border/border.html",
              },
              {
                title: "border-radius",
                path: "/base/border/borderradius.html",
              },
            ],
          },
          {
            title: "动画",
            children: [
              {
                title: "transition",
                path: "/base/animate/transition.html",
              },
              {
                title: "transform2d",
                path: "/base/animate/transform2d.html",
              },
              {
                title: "transform3d",
                path: "/base/animate/transform3d.html",
              },
              {
                title: "animation",
                path: "/base/animate/animation.html",
              },
              {
                title: "逐帧动画和补帧动画",
                path: "/base/animate/steps.html",
              },
            ],
          },
          {
            title: "滤镜",
            children: [
              {
                title: "filter",
                path: "/base/filter/滤镜.html",
              },
            ],
          },
          // {
          //   title: "布局",
          //   children: [
          //     {
          //       title: "瀑布流布局",
          //       path: "/base/布局/瀑布流布局.html",
          //     },
          //   ],
          // },
        ],
      },
      {
        title: "CSS Inspiration",
        collapsable: false,
        children: [
          {
            title: "伪类",
            children: [
              {
                title: "纯CSS实现白天黑夜切换效果",
                path: "/inspiration/after/light.html",
              },
            ],
          },
          {
            title: "animation",
            children: [
              // {
              //   title: "使用animation实现心形加载",
              //   path: "/inspiration/animation/心形加载.html",
              // },
              {
                title: "perspective 实现3D文字效果",
                path: "/inspiration/animation/3Dbutton.html",
              },
            ],
          },
          {
            title: "阴影",
            children: [
              {
                title: "闪烁的霓虹灯牌",
                path: "/inspiration/boxshadow/霓虹灯牌.html",
              },
              {
                title: "使用box-shadow位移实现云彩",
                path: "/inspiration/boxshadow/rainbow.html",
              },
              // {
              //   title: "使用box-shadow实现3D按钮",
              //   path: "/inspiration/boxshadow/3dbutton.html",
              // },
            ],
          },
          {
            title: "边框",
            children: [
              {
                title: "使用border-radius实现QQ音乐LOGO",
                path: "/inspiration/border/QQ.html",
              },
              {
                title: "使用border-radius实现花瓣加载效果",
                path: "/inspiration/border/water.html",
              },
              {
                title: "使用border-radius实现可爱的小南瓜",
                path: "/inspiration/border/pumpkin.html",
              },
              {
                title: "使用border-style实现各种加载样式",
                path: "/inspiration/border/loading.html",
              },
            ],
          },
          {
            title: "渐变色",
            children: [
              {
                title: "使用渐变色实现按钮各种样式",
                path: "/inspiration/gradient/btn.html",
              },
              {
                title: "渐变色实现霓虹灯按钮样式",
                path: "/inspiration/gradient/neon.html",
              },
            ],
          },
        ],
      },
      {
        title: "CSS General",
        collapsable: false,
        children: [
          {
            title: "粒子流星🌟",
            path: "/general/流星雨.html",
          },
          {
            title: "纯CSS实现落雪满南山⛄",
            path: "/general/下雪.html",
          },
          {
            title: "HappyNewYear之烟花绽放🎆",
            path: "/general/烟花.html",
          },
          {
            title: "Loading合集🍄",
            path: "/general/loading合集.html",
          }
        ],
      },
      {
        title: "CSS Tools",
        collapsable: false,
        children: [
          {
            title: "前端动效小工具",
            path: "/tools/动效.html",
          },
          {
            title: "前端小工具",
            path: "/tools/小工具.html",
          },
        ],
      },
      {
        title: "CSS Q&A",
        collapsable: false,
        children: [
          {
            title: "CSS如何截取图片",
            path: "/q&a/如何截取图片.html",
          },
        ],
      },
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
