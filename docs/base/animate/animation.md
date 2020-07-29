### animation

#### 定义
animation是css3动画的一个进阶，它配合@keyframes，可以实现更加复杂的动画行为。animation是一个简写属性，用于设置八个动画属性

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
animation-fill-mode|规定动画在播放之前或之后，其动画效果是否可见
animation-play-state|规定动画运行还是暂停

---

#### 属性取值
1. **animation-timing-function**

规定动画的速度曲线，取值有：
属性 | 描述 
--- |:--|--:
linear|动画从头到尾的速度都是相同的
ease| 默认，动画以低速开始，然后加快，在结束前变慢
ease-in| 动画以慢速开始
ease-out| 动画以慢速结束
ease-in-out| 动画以慢速开始和结束
cubic-bezier(n,n,n,n)| 在贝塞尔中定义自己的值
step-start| 逐帧动画，会忽略第一帧从第二帧开始执行
step-end| 逐帧动画，从第一帧开始执行，会忽略最后一帧
steps(4,end)| 逐帧动画，动画分为4步执行
---

2. **animation-iteration-count**

规定动画的播放次数，取值有：
属性 | 描述 
--- |:--|--:
n| 定义动画播放次数的数值
infinite| 规定动画循环播放

---

3. **animation-direction**

规定动画是否应该轮流反向播放，取值有：
属性 | 描述 
--- |:--|--:
normal|默认值，动画应该正常播放
reverse| 动画反向播放
alternate| 动画应该轮流反向播放
alternate-reverse| 动画反向播放并且轮流
---

4. **animation-fill-mode**

规定动画在播放之前或之后，其动画效果是否可见，取值有：
属性 | 描述 
--- |:--|--:
none| 默认值，动画在执行之前和之后不会应用任何样式到目标元素 
forwards| 动画结束后，元素将保留动画的最终状态
backwards| 在animation-delay所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）
both| 向前和向后填充模式都会被应用

---

5. **animation-play-state**

规定动画开始开始暂停，取值有：
属性 | 描述 
--- |:--|--:
running|播放
paused|暂停

---

