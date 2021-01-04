### box-shadow

#### 定义

用于向元素添加阴影

---

#### 语法

`box-shadow:h-shadow,v-shadow,blur,spread,color,inset`

---

#### 取值
属性 | 描述 
--- |:--|--:
h-shadow|必须，水平阴影，允许负值
v-shadow|必须，垂直阴影，允许负值
blur|可选，模糊距离，也称模糊半径
spread|可选，阴影大小，也称扩张半径
color|可选，阴影颜色
inset|可选，将外部阴影设置为内部阴影

---

#### 注意点
1. 如果想要相邻两边的阴影投影更加自然，可以将水平位置和垂直位移设置大于等于模糊距离（半径）的一半，将扩张半径设为模糊半径的一半
2. 模糊距离的本质表示，在阴影边缘发生阴影色与纯色之间的颜色过渡长度，比如模糊半径为4px，那么阴影尺寸就比原来的尺寸大了8px，即使用模糊半径4px意味着投影的尺寸会比原来的尺寸大8px
3. 阴影大小也称扩张半径，这个参数会根据指定的值去放大或者缩小（负值）投影尺寸

---

#### 重复的阴影
我们可以设置多个阴影，使用逗号分隔，来达到阴影叠加的效果

---

#### 示例
<iframe width="90%" height="550" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/mdVoXeq?height=450&theme-id=default&default-tab=result"></iframe>



