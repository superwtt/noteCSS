### border-radius

#### 定义
border-radius用来像元素添加圆角边框

---

#### 语法
`border-radius:1-4 lenght|%  /  1-4 length|%`

---

#### 取值
语法 | 属性 |描述 
--- |:--|---
border-radius:10px|一个值|表示元素四个方向的圆角大小都是10px，即每个圆角的水平半径和垂直半径都是10px
border-radius:10px 20px|两个值|表示元素对角线方向上的两个圆角大小相同，第一个值表示左上和右下，第二个值表示右上和左下
border-radius:10px 20px 30px |三个值|第一个值表示元素左上部分圆角是10px，第二个值表示元素右上和左下的圆角是20px，第三个值表示元素右下的圆角是30px
border-radius:10px 20px 30px 40px|四个值|元素按照上右下左的顺序，依次设置圆角为10px,20px,30px,40px
border-radius:x / y|斜杠分隔两组值|第一组表示水平半径，第二组表示垂直半径，每组可以同时设置四个值，规则与上面相同。

---

#### 注意点
1. 按照语法顺序设置四个值，如果省略bottom-left，则与top-right相同；如果省略bottom-right,则与top-left相同；如果省略top-right则与top-left相同
2. `border-radius:100px/40px`表示四个角水平半径都是100px，垂直半径都是40px
3. 可以先画出正方形/矩形，在正方形/矩形里面切割出目标图形

---

#### 图像解析（图片来自baidu侵删）
![](https://oscimg.oschina.net/oscnet/up-fc1e4f3309a209085fb90b16a96d8609db9.png)

![](https://oscimg.oschina.net/oscnet/up-0ccb6b01630184d84b0f988bf085c845f2b.png)

<!-- ![](https://oscimg.oschina.net/oscnet/up-1b88b8d4ea78a18145c68756ff84874f78b.png) -->

---

#### 示例
我们可以用圆角做出许多不同的图案：
+ 半圆
+ 胶囊
+ 爱心
+ 花瓣
+ 椭圆
+ 扇形
+ ...

<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/KKVLgyX?height=450&theme-id=default&default-tab=result"></iframe>


