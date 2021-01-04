### border制作三角形

#### 原理
div的border是有宽度和颜色的，当边框足够大时，浏览器会将边框渲染成上下左右四个三角形。三角形的分隔，是由 上下左右四个边框，重叠部分的对角线划分而成。

---

#### 注意点
1. 我们可以通过控制四个方向上边框的粗细，从而控制三角形的大小
2. 多个三角形的拼接、旋转，可以形成不同的图案

---

### border-style
属性 | 描述 
--- |:--|--:
dotted|点状边框
dashend|虚线边框
solid|实线边框
double|双线边框
groove|3D凹槽边框，显示为有雕刻效果的边框，样式与ridge相反
ridge|3D垄状边框，显示为有浮雕效果的边框，样式与groove相反
inset|3D inset边框，显示为有陷入效果的边框，样式与outset相反
outset|3D outset边框，显示为有突出效果的边框，样式与inset相反

---

#### 示例
<iframe width="90%" height="550" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/ZEQNper?height=450&theme-id=default&default-tab=result"></iframe>
