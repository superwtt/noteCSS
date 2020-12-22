### 九宫格抽奖引发的absolute和relative的层级问题

同事W需要实现一个九宫格抽奖效果，要求如下：九宫格容器背景颜色为红色，同时需要加一层蒙层，奖品依次排列在四周，截图如下：

![](https://oscimg.oschina.net/oscnet/up-fb1e9879689b6678a3b81769ba74e54ab79.png)

---

#### 实现方式
```javascript
// html
<div class="container">
    <div class="mask"></div>
    <div class="lottry">
        <span class="item"></span>*9
    </div>
</div>

// css
.container{
     width: 100%;
     padding: 15px;
     box-sizing: border-box;
     position: relative;
     background-color: #f00;
 }
 .mask{
     position: absolute;
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     background-color: rgba(0,0,0,0.5);
 }
 .lottry{
     width: 100%;
     border: 1px solid #f00;
 }
 .item{
     display: inline-block;
     width: 100px;
     height: 100px;
     border: 1px solid green;
     background-color: #fff;
 }
```
结果如下，蒙层直接覆盖住了奖品容器：

![](https://oscimg.oschina.net/oscnet/up-53291df9016d61b1999eeb5bb1831eaf3bb.png)

---

#### 解释这个现象可以分为两步

1. 蒙层覆盖在奖品容器之上：默认情况下，元素应用了非static的position属性之后，就会产生一个隐晦的层级，居于普通元素之上，无需再设置z-index属性
2. 如果给某个元素设置了`position:relative`属性，那么这个元素就能层叠于其他元素之上。如果两个div都设置了absolute和relative，那么按照dom的优先级顺序，谁在后面谁就显示在上面

---

#### 解决
css加上一段样式即可

```javascript
.lottry{
     position: relative;
     width: 100%;
     border: 1px solid #f00;
 }
```

---

#### 参考链接

[CSS 相对/绝对(relative/absolute)定位系列（四）](https://www.zhangxinxu.com/wordpress/2011/08/css%e7%9b%b8%e5%af%b9%e5%ae%9a%e4%bd%8drelative%e7%bb%9d%e5%af%b9%e5%ae%9a%e4%bd%8dabsolute%e7%b3%bb%e5%88%97%ef%bc%88%e5%9b%9b%ef%bc%89/)























