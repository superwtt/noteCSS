### Loading合集

在这里收集好看的loading样式~

---

#### 关键点
1. Animation1ShapeWrap1：借助坐标轴来看怎么translate，X轴正方向是平移坐标轴的正方向；Y轴的负方向是平移的正方向（与数学里的直角坐标系相反）
2. Animation2ShapeWrap1：shape1,2,3,4外围的容器越小，shape元素平移的空间越小，就会重叠在一起
3. Animation7ShapeWrap1: 左右两个圆点的移动除了可以translate以外还可以用定位实现，但是定位在这里css样式过于复杂
4. Animation9ShapeWrap1: clip-path裁剪小人头像
5. Animation7Scale: 动画缓动是关键，ease动画以低速开始，然后加快，在结束前变慢；ease-in是低速开始；ease-out低速结束；ease-in-out低速开始和结束；参考[这里](https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation_speed)
6. Animation12Translate：两个伪类元素，分别从（0,0）和（-40px,-40px）的位置向中心移动
7. Animation13BoxShadow:box-shadow的颜色是根据color变化的

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/GRqPqmb?height=450&theme-id=default&default-tab=result"></iframe>