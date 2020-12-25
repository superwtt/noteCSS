### SVG实现按钮加载动画

SVG line元素沿着四个方向运动

示意图如下：

![](https://oscimg.oschina.net/oscnet/up-8eec91b7c555312436c5a38bdcc9f1ddc1a.png)

我们只需要控制`<line>`标签在四个方向的位置移动即可

---

#### 关键代码
```javascript
//html
<svg
   xmlns="http://www.w3.org/2000/svg" version="1.1" 
   width="200" height="200">
     <line class="top" x1="-200" y1="0" x2="400" y2="0"/>
     <line class="left" x1="0" y1="0" x2="0" y2="-400"/>
     <line class="right" x1="-200" y1="200" x2="0" y2="200"/>
     <line class="bottom" x1="200" y1="200" x2="200" y2="400"/>
</svg>

//css
@keyframes top{
   0%{
      transform: translate(0);
   }
   50%{
      transform: translate(-200px);
   }
   100%{
      transform: translate(-400px);
   } 
}

```

---

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/YzGEqNo?height=450&theme-id=default&default-tab=result"></iframe>