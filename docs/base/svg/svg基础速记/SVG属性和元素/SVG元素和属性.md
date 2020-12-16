### SVG 元素和属性

这里汇总了SVG的元素和属性属性，全部内容参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element)

---

#### SVG元素
属性 | 描述 
--- |:--|--:
`<animate>`|动画元素，用来定义一个元素在指定时间内的某个属性如何踩点变化
`<animateTransform>`|变动目标元素上的一个变形属性，从而允许动画控制转换、缩放、旋转或者倾斜
`<circle>`|用于创建SVG的基本图形-圆形
`<clipPath>`|剪切路径
`<defs>`|建议把所有需要再次使用的引用元素定义在`defs`元素里面，增加了SVG内容的易读性和可访问性
`<ellipse>`|用于创建SVG的基本图形-椭圆
`<fe-xxx>`|SVG滤镜
`<line>`|用于创建SVVG基本图形-直线
`<path>`|用来定义形状的通用元素，所有的基本形状都可以用path元素来创建
`<marker>`|在特定的`<path>`元素、`<line>`元素、`<polyline>`元素、`<polygon>`元素上绘制箭头或多边标记图形
其他元素|参见MDN
---

#### SVG属性

属性 | 描述 
--- |:--|--:
fill|填充SVG图形，相当于background-color
fill-opacity|定义填充色的透明度，合法的范围是0-1,相当于background-color设置rgba/hsla
opacity|定义整个元素的不透明度
stroke|定义元素边框的颜色，相当于border-color
stroke-width|定义元素边框的宽度，相当于border-thickness
stroke-opacity|定义元素边框的透明度，相当于border-color设置rgba
rx,ry|定义元素的圆角，相当于border-radius
其他属性|参见MDN
