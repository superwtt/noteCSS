### SVG实现加载小动画

用SVG的方式实现[loading合集](https://superwtt.github.io/noteCSS/general/loading%E5%90%88%E9%9B%86.html)中的一些加载小动画

---

#### 关键点
1. 在元素内部使用`<animate>`标签或者`<animateTransform>`标签实现动画
2. values确定动画的关键位置，keyTimes确定到这个关键点需要的时间 跟values的值对应，keySplines确定的每个时间点段之间的贝塞尔曲线，也就是具体的缓动表现，总是比keyTimes少一组值
3. from to 可以取简单值`from="0" to="360"`，也可以取多个值，比如动画类型为rotate，`from="30 35 35" to="120 70 70"`就表示，旋转角度从30-120，xy的旋转值是从（35,35）到（70,70）

---

#### 示例
<iframe width="90%" height="550" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/MWjOjWW?height=450&theme-id=default&default-tab=result"></iframe>