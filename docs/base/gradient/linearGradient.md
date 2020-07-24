### 渐变

CSS 渐变可以让我们在两个或多个指定的颜色之间显示平稳的过渡。CSS 定义了两种渐变的类型：线性渐变和径向渐变

---

### 线性渐变
#### 语法

1. `background:linear-gradient(方向，色1 止位，色2 起位，色2 止位，色3 起位，色3 止位，.... 色末 止位)`
2. `background:linear-gradient(方向，色1-stop，色2-stop，色3-stop，...)`，stop的位置也就是渐变开始的位置
   + stop位置 相同 - 将没有渐变
   + stop位置 不同 - 产生渐变
   + stop位置 为0 - 为0 表示渐变开始的位置与上一个相同

---

#### 起点和终点

渐变的起点和终点，是过中心的渐变线，与两边的垂直交点。渐变的起点和终点表示，渐变将从这两个位置开始和结束

---

#### 取值

1. 方向上的取值
   + angle：0deg指向上面，正角度代表顺时针旋转（图片来自网络侵删）

     ![](https://oscimg.oschina.net/oscnet/up-659104f08c416eb6c939c0eecbc34520ffd.png)
   + 关键词
      + left/right/bottom/right/top right...这些值会被转为角度0deg,45deg,90deg,180deg,270deg

2. 颜色上的取值
   + rgba
   + 十六进制
   + transparent

---

#### 重复的线性渐变
1. 我们可以使用`repeat-linear-gradient`这样的语法创建多个重复的渐变
2. 也可以使用逗号分隔的形势在同一个元素里创建不同的渐变，拼接出各种复杂的渐变效果

---

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/rNxRYyG?height=450&theme-id=default&default-tab=result"></iframe>

---

#### 参考链接
[知识点参考](https://blog.csdn.net/huantuo4908/article/details/70209224?utm_source=blogxgwz8)

[优秀的渐变示例](https://leaverou.github.io/css3patterns/)