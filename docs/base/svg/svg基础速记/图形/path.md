### SVG路径 path

`<path>`元素是用来定义形状的通用元素，所有的基本形状都可以用`<path>`元素来创建。<br/>



---

#### path和polygon的区别：

1. polygon和折现很像，它们都是由连接一组点集的直线构成，不同的是，polygon的路径在最后一个点自动回到第一个点。
2. path只需要设置很少的点，就可以创建平滑的直线或曲线，polygon元素也能实现类似的效果，但是必须设置大量密集的点，点越密集，越接近连续，看起来越平滑流畅

---

#### 直线命令
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
<svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
   <path d="M150 0 L75 200 L225 200 Z" />
</svg>
```
代码解析：
+ 坐标先移动到（150,0）的位置
+ 接着画线到（75,200）的位置，再画线到（225,200）的位置
+ 闭合图像