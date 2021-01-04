### 纯 CSS 实现白天黑夜切换效果

纯 CSS 实现白天黑夜切换效果，灵感来源于 codepen。codepen 使用 js 实现，本例完全使用纯 css 伪类实现。

---

#### 关键点

1. 点击效果，使用 input checked 属性，mask 白天的实现使用 css 兄弟选择器~ 模拟父类选择器（暂无这个属性）的效果，需要配合调整 html 结构 
2. 太阳光芒的实现方式有两种：
   + 多个 div 小白块移动位置 
   + border-radius 制作半圆+路径裁剪+放大宽度截取，本例使用方法 2
3. 月亮的实现有两种：
   + 设置 border-bottom 为 30px，再设置 div 的 border-radius 
   + 两个圆片覆盖出月亮造型，本例使用方法 2，圆弧效果更加逼真


---

#### 示例

<iframe width="90%" height="550" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/KKzJLxy?height=450&theme-id=default&default-tab=result"></iframe>
