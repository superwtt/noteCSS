### 径向渐变
#### 定义
径向渐变由它的中心定义

---

#### 语法
`background:radial-gradient(shape size at position),start-color,...,last-color;`

---

#### 注意点
1. 需要指定至少两个颜色
2. 也可以指定渐变的中心，渐变的形状，大小
3. 默认情况下，径向渐变的中心是中心点，渐变的形状是椭圆，渐变的大小是渐变到最远的角落

---

#### 设置形状
`shape`参数定义了形状，可以是`circle`表示圆形 或者`ellipse`表示椭圆

---

#### 设置大小
`size`参数定义了大小，可以取值：
属性 | 描述 
--- |:--|--:
closest-side|径向渐变的半径长度为圆心到离圆心最近的边
closest-corner|径向渐变的半径长度为圆心到离圆心最近的角
farthest-side|径向渐变的半径长度为圆心到离圆心最远的边
farthest-corner|径向渐变的半径长度为圆心到离圆心最远的角

---

#### 重复的径向渐变
1. 我们可以使用`repeat-radial-gradient`这样的语法创建多个重复的渐变
2. 也可以使用逗号分隔的形势在同一个元素里创建不同的渐变，拼接出各种复杂的渐变效果，例如波卡尔圆点

---

#### 示例

<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/bGEZYap?height=450&theme-id=default&default-tab=result"></iframe>

---

#### 参考链接
[知识点参考](https://blog.csdn.net/huantuo4908/article/details/70209224?utm_source=blogxgwz8)

[优秀的渐变示例](https://leaverou.github.io/css3patterns/)

