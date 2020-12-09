### CSS 背景

CSS 背景属性用于定义元素的背景效果，允许应用纯色作为背景，也允许使用背景图像来创建复杂的效果

### CSS 背景属性一览表

属性 | 描述 
--- |:--|--:
background-image |背景图像设置
background-repeat|如何重复背景图像
background-position|背景图像定位
background-size|背景图像大小
background-clip |背景图像绘制区域
background-attachment|背景图像是否固定
background-origin|背景图像原点位置
background-blend-mode|背景图像的混合模式
background-color|背景图像的颜色 background:currentColor=color

---

### 注意点
1. 在 background 里面加个斜杠 “/” ，斜杠前面部分是 background-position 属性的值，后面部分是 background-size 的值。
```javascript
background: @multi(@r(200, 240), (
    radial-gradient(@p(#fff) 15%,transparent 50%) 
    @r(100%) @r(100%) / @r(.3%, .1%, .1) @lr() no-repeat
));
```
`@r(100%) @r(100%) / @r(.3%, .1%, .1)`前面是position的值，后面是size的值
