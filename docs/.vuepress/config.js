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
            title: "阴影",
            children: [
              {
                title: "box-shadow",
                path: "/base/boxshadow/boxShadow.html",
              },
              {
                title: "text-shadow",
                path: "/base/boxshadow/textShadow.html",
              }
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
              }
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
                title: "animation",
                path: "/base/animate/animation.html",
              },
              {
                title: "逐帧动画和补帧动画",
                path: "/base/animate/steps.html",
              }
            ],
          },
          // {
          //   title: "SVG",
          //   children: [
          //     {
          //       title: "svg",
          //       path: "/base/svg/svg.html",
          //     }
          //   ],
          // },
        ],
      },
      {
        title: "CSS Inspiration",
        collapsable: false,
        children: [
          {
            title: "阴影",
            children: [
              {
                title: "使用box-shadow位移实现摆动的小花朵",
                path: "/inspiration/boxshadow/flower.html",
              },
            ],
          },
          {
            title: "边框",
            children: [
              {
                title: "使用border-radius实现花瓣加载效果",
                path: "/inspiration/border/water.html",
              },
              {
                title: "使用border-radius实现QQ音乐LOGO",
                path: "/inspiration/border/QQ.html",
              },
            ],
          },

        ],
      },
      {
        title:"CSS Advanced",
        collapsable:false,
        children:[
          {
            title: "阴影",
            children: [
              {
                title: "使用box-shadow实现3D按钮",
                path: "/advanced/boxshadow/3dbutton.html",
              },
              {
                title: "使用animation实现各种加载样式",
                path: "/advanced/border/loading.html",
              }
            ],
          },
          {
            title: "边框",
            children: [
              {
                title: "使用border-style实现各种加载样式",
                path: "/advanced/border/loading.html",
              }
            ],
          },{
            title: "渐变色",
            children: [
              {
                title: "使用渐变色实现按钮各种样式",
                path: "/advanced/gradient/btn.html",
              },
              {
                title: "渐变色实现霓虹灯按钮样式",
                path: "/advanced/gradient/neon.html",
              }
            ],
          },
        ]
      }
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
