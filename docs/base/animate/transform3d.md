### transform3d
允许我们向元素添加3D转换。想使得我们的3D转换有效果，必须明白几个css属性的使用方式：
+ <code>perspective</code>
+ <code>transform:perspective(600px) rotateY(45deg)</code>
+ <code>transform-style:preserve-3d</code>

---

#### perspective
1. 定义

这个属性定义对象与用户的距离，perspective的存在与否决定了你所看到的元素是2次元还是3次元的，有透视才会有立方体效果
有两种为元素添加perspective的方式：

    + `perspective:900px` ：多个元素统一加透视，例如一个统一的立方体、按钮。只会对它的子元素生效，本身不生效，影响它所有的子元素
    + `transform: perspective(900px) rotateY(45deg)` ：为每一个元素添加透视，只会影响这个元素，perspective一定要在rotate前面，否则无效

两者的区别是：直接在父元素上设置透视，子元素的透视效果会不一样；而在每个元素上设置一样的透视，透视效果一样；

2. 注意点
    + 透视是在元素旋转或者倾斜时发生的，所以直接加透视是看不到效果的，必须配合旋转或者倾斜才能看到效果
    + 个人理解，透视类似于我们想在一个屏幕上看一个立方体的多面，但是不能转动我们的屏幕，那么就只能通过一些属性转动这个立方体了去观察我们想要看到的那一面（也可以使用perspective-origin设置人动立方体不动）
    + perspective设置透视，我想从某个角度看这个立方体，赋予我观察某个角度的能力；transform-style:preserve-3d，我想从三维空间观察这个立方体，赋予我看整个立方体的能力；可以把perspective看成一个flag，我准备从3D的角度来观察这个立方体了

    + perspective的取值，相当于我们在看一座高山，数值小一点相当于站在山脚下，看到的高山会很大；数值大一点相当于站的很远，看到的高山会很小（近大远小）


3. perspective-origin

我们想看一个立方体，要么立方体动人不动；要么人动，立方体不动，perspective-origin就是用来设置人动立方体不动的属性

---

#### 三维空间
1. 定义
有Z轴参与的空间，就称为三维空间。Z轴是纵深，穿过屏幕的那条轴，Z轴的偏移只能用px设置。

2. rotateX/Y/Z 与 translateX/Y/Z的区别

前者是在三维空间上旋转，后者是在三维空间上移动。例如：rotateZ是围绕Z轴旋转，而translateZ是沿着Z轴平移。

3. 注意点
    + translateZ可以帮我们实现类似于两张玻璃片产生距离的立体效果
    + <font color="red">直接设置transform:translateZ(200px)是看不出来的，如上所述，想要看出立方体效果，需要先加perspective透视的标识，再加transform-style:preserve-3d绘制三维空间；类似于 perspective将电影设置成3D，transform-style:preserve-3d给你一个3D眼镜才能看出来3D，缺一不可以</font>

---

#### backface-visibility:hidden
1. 定义
背面不可见

2. 用途
    + 卡片翻转

---

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/abZNmbo?height=450&theme-id=default&default-tab=result"></iframe>


