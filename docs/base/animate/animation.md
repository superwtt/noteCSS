### animation

#### 定义
animation是css3动画的一个进阶，它配合@keyframes，可以实现更加复杂的动画行为。animation是一个简写属性，用于设置七个动画属性

---

#### 取值
属性 | 描述 
--- |:--|--:
animation-name|规定动画的名称
animation-duration|规定完成动画需要的时间，以秒或者毫秒计算
animation-timing-function|规定动画的速度曲线
animation-delay|规定动画的延迟时间，如果取值为负表示页面刷新立即进入动画
animation-iteration-count|规定动画播放的次数
animation-direction|规定动画是否应该轮流反向播放
animation-play-state|规定动画运行还是暂停

---

#### 属性取值
**animation-timing-function**
规定动画的速度曲线，取值有：
1. linear: 动画从头到尾的速度都是相同的
2. ease: 默认，动画以低速开始，然后加快，在结束前变慢
3. ease-in: 动画以慢速开始
4. ease-out: 动画以慢速结束
5. ease-in-out: 动画以慢速开始和结束
6. cubic-bezier(n,n,n,n): 在贝塞尔中定义自己的值

---

**animation-iteration-count**
规定动画的播放次数，取值有：
1.  n: 定义动画播放次数的数值
2. infinite: 规定动画循环播放

---

**animation-play-state**
规定动画开始开始暂停，取值有：
1. running
2. paused

---