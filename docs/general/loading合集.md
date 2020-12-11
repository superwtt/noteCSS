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
8. Animation19Border-22：border-style的切换
9. Animation23Opacity：动画缓动配合scale可以有抖动效果
10. .g-queue2 .c-loading13，两个伪类before和after分开看，after轮流反向执行动画，before反向执行动画
11. .g-queue3 .c-loading15, 渐变色作为背景能够填充满整个div，动态移动背景位置
12. Animation38BorderRadius:Y轴位移配合rotate旋转
13. Animation43Scale:动画的连贯性
14. Animation47Scale：需要设置动画的容器，让动画的空间足够大，否则圆点不能撑开。动态设置margin让圆点有拉伸效果
15. Animation49TranslateLeft和Animation50TranslateRight：设置动画节点交错，Animation49TranslateLeft动画，0-25%的时候向左移动18px的距离，其余节点为0。Animation50TranslateRight动画在75%的时候向右移动18px的距离，其余时间为0
16. Animation68Height：设置父容器为flex，并且子元素垂直居中对齐的原因是，子元素在高度动画时会有抖动，将它们固定在一个位置，另外需要加个固定高速30px，因为子元素是从5px开始动画的，如果没有高度固定，将父元素撑开，动画依旧会抖动

99. 遵循的规律不过是动画元素的组合、拆分，容器的组合、拆分，四种情况排列组合，就可以形成不同的加载动画

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/GRqPqmb?height=450&theme-id=default&default-tab=result"></iframe>