### SVG路径 path

`<path>`元素是用来定义形状的通用元素，所有的基本形状都可以用`<path>`元素来创建<br/>

`<path>`命令均允许小写，大写表示绝对定位，小写表示相对定位，命令如下：
+ M = move to
+ L = line to
+ H = horizontal lineto
+ V = vertical lineto
+ C = curveto
+ S = smooth curveto
+ Q = quadratic Bézier curve
+ T = smooth quadratic Bézier curveto
+ A = elliptical Arc
+ Z = close path 

```javascript
<svg width="100%" height="100%" viewBox="0 0 400 400"
     xmlns="http://www.w3.org/2000/svg">
     <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```
代码解析：
+ 坐标先移动到（150,0）的位置
+ 接着画线到（75,200）的位置，再画线到（225,200）的位置
+ 闭合图像