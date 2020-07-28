### border制作三角形

#### 原理
div的border是有宽度和颜色的，当边框足够大时，浏览器会将边框渲染成上下左右四个三角形。三角形的分隔，是由 上下左右四个边框，重叠部分的对角线划分而成。

---

#### 注意点
1. 我们可以通过控制四个方向上边框的粗细，从而控制三角形的大小
2. 多个三角形的拼接、旋转，可以形成不同的图案

---

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/ZEQNper?height=450&theme-id=default&default-tab=result"></iframe>
