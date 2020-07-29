### transition

#### 定义
transition用于设置动画的过渡效果。是一个简写属性，用于设置四个过渡属性。

---

#### 取值
属性 | 描述 
--- |:--|--:
transition-property|规定设置过渡效果的css属性的名称
transition-duration|规定完成动画需要多少秒或者毫秒
transition-delay|规定过渡效果什么时候开始
transition-timing-function|规定动画的速度曲线

---

#### 关于速度曲线
速度曲线属性transition-timing-function 规定了动画的表现形式，有以下几种情况：
1. linear: 规定以相同的速度从开始到结束
2. ease: 默认，规定慢速开始，然后变快，最后慢速结束的过渡效果  
3. ease-in:  规定以慢速开始的过渡效果
4. ease-out: 规定以慢速结束的过渡效果
5. ease-in-out: 规定以慢速开始和结束的过渡效果
6. cubic-bezier(n,n,n,n): 在贝塞尔中定义自己的值


---


