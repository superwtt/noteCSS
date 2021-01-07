### SVG实现加载小动画

用SVG的方式实现[loading合集](https://superwtt.github.io/noteCSS/general/loading%E5%90%88%E9%9B%86.html)中的一些加载小动画

---

#### 关键点
1. 在元素内部使用`<animate>`标签或者`<animateTransform>`标签实现动画
2. values确定动画的关键位置，keyTimes确定到这个关键点需要的时间 跟values的值对应，keySplines确定的每个时间点段之间的贝塞尔曲线，也就是具体的缓动表现，总是比keyTimes少一组值
3. from to 可以取简单值`from="0" to="360"`，也可以取多个值，比如动画类型为rotate，`from="30 35 35" to="120 70 70"`就表示，旋转角度从30-120，xy的旋转值是从（35,35）到（70,70）
4. stroke-dasharray为一个参数时： 其实是表示虚线长度和每段虚线之间的间距
　　如：stroke-dasharray = '10' 表示：虚线长10，间距10，然后重复 虚线长10，间距10

两个参数或者多个参数时：一个表示长度，一个表示间距
　　如：stroke-dasharray = '10, 5' 表示：虚线长10，间距5，然后重复 虚线长10，间距5
　　如：stroke-dasharray = '20, 10, 5' 表示：虚线长20，间距10，虚线长5，接着是间距20，虚线10，间距5，之后开始如此循环
https://www.cnblogs.com/daisygogogo/p/11044353.html
我们可以设置stroke-dashoffset与stroke-dasharray相同的值实现“画线”的效果：https://blog.csdn.net/u014291497/article/details/78409350
---

#### 示例
<iframe width="90%" height="550" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/MWjOjWW?height=450&theme-id=default&default-tab=result"></iframe>