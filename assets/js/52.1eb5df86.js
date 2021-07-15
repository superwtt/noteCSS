(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{196:function(t,s,a){"use strict";a.r(s);var r=a(6),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"巧用随机数实现闪烁的星空"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#巧用随机数实现闪烁的星空"}},[t._v("#")]),t._v(" 巧用随机数实现闪烁的星空")]),t._v(" "),a("p",[t._v("巧用随机数实现闪烁的星空，给几百个粒子添加随机交错动画，模拟星星的闪烁效果。")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"只有一个星星"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只有一个星星"}},[t._v("#")]),t._v(" 只有一个星星")]),t._v(" "),a("p",[t._v("我们试着写一个闪烁的星星：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// css")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  border"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此时的星星还是原始的样式，我们需要加点模糊效果，让星星的更加逼真。选择在body元素上加上filter滤镜，能给body元素里面每个星星元素都添加上模糊的滤镜效果")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// css")]),t._v("\nbody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" radial"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ellipse at bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("b2735 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" #"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("090")]),t._v("a0f "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  overflow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" drop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("px white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此时的效果是这样的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/superwtt/MyFileRepository/main/image/d8VPCdxD.png",alt:""}})]),t._v(" "),a("p",[t._v("很像一个月亮~")]),t._v(" "),a("p",[t._v("我们调整下宽高，差不多就是一个小星星的样子了。")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"多个星星"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个星星"}},[t._v("#")]),t._v(" 多个星星")]),t._v(" "),a("p",[t._v("接下来我们需要生成多个星星，并且散乱排布在天空中。我们需要考量两个问题：")]),t._v(" "),a("ol",[a("li",[t._v("如何生成多个星星？")]),t._v(" "),a("li",[t._v("“散乱”的效果应该怎么实现？")])]),t._v(" "),a("h5",{attrs:{id:"如何生成多个星星"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何生成多个星星"}},[t._v("#")]),t._v(" 如何生成多个星星")]),t._v(" "),a("p",[t._v("其实对于如何生成多个星星，我们要思考的是，如何简单快速的生成多个div容器，而不是傻瓜式的写几百个div标签。两行pug语法就可以实现：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("star\n")])])]),a("p",[t._v("这样就生成了400个样式为star的div容器。")]),t._v(" "),a("p",[t._v("其实pug语法的使用是多种多样的，"),a("a",{attrs:{href:"https://www.dazhuanlan.com/2019/11/05/5dc184064e7b5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("说的很详细，我就不赘述了")]),t._v(" "),a("h5",{attrs:{id:"散乱-的效果应该怎么实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#散乱-的效果应该怎么实现"}},[t._v("#")]),t._v(" “散乱”的效果应该怎么实现？")]),t._v(" "),a("p",[t._v("说到“散乱”，蹦到脑海里的第一个词当然是“随机”。那么哪些地方要“随机”生成呢？")]),t._v(" "),a("p",[t._v("我们来罗列一下：")]),t._v(" "),a("ul",[a("li",[t._v("星星的位置，包括x轴和y轴上的位置")]),t._v(" "),a("li",[t._v("星星的大小")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// css")]),t._v("\n$scale"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.0001~1")]),t._v("\n$x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.01vw~100vw")]),t._v("\n$y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("vh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.01vh~100vh")]),t._v("\n\n")])])]),a("p",[t._v("我们将random里的number设置的那么大，无非是想多生成一些随机数，让效果更加逼真罢了。")]),t._v(" "),a("p",[t._v("此时效果是这样的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/superwtt/MyFileRepository/main/image/%E9%9D%99%E6%80%81%E6%98%9F%E6%98%9F.png",alt:""}})]),t._v(" "),a("p",[t._v("好像快实现了！")]),t._v(" "),a("h4",{attrs:{id:"星星的闪烁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星星的闪烁"}},[t._v("#")]),t._v(" 星星的闪烁")]),t._v(" "),a("p",[t._v("星星的闪烁，我这边用到是animation动画配合filter滤镜的brightless效果，其实还有很多实现方式，比如opacity。但是opacity的闪亮效果没有brightless那么明显。")]),t._v(" "),a("p",[t._v("animation动画的话差不多这个亚子：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// css")]),t._v("\n@keyframes star"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("brightness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("brightness")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("550")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("为了让闪烁的效果逼真一点，我们最好将动画的时间和延迟时间也变成随机数，总之，随机的越多，效果越真实！")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"完整示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整示例"}},[t._v("#")]),t._v(" 完整示例")]),t._v(" "),a("iframe",{attrs:{width:"90%",height:"550",allowfullscreen:"allowfullscreen",src:"https://codepen.io/superwtt/embed/abmebgV?height=450&theme-id=default&default-tab=result"}})])}),[],!1,null,null,null);s.default=n.exports}}]);