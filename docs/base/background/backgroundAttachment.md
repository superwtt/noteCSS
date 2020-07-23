### background-attachment

#### 定义
background-attachment 如果文档比较长，那么当文档向下滚动时，背景图像也会随之滚动，当文档滚动到超过背景图像高度时，背景图像就会看不到

---

#### 注意点
1. 通过这个属性可以设置背景图像是否固定
2. 当背景区域设置了overflow:hidden之后，再设置背景图像的固定模式为scroll和fixed时，那么背景图像将不会滚动
3. 可以设置背景图像固定不滚动的只有fixed一个属性
4. local不管什么情况下，不会控制元素的滚动与否

---

#### 取值
属性 | 描述 
--- |:--|--:
scroll|默认值，背景图像相对于元素固定，背景图像会随着页面的滚动而滚动
fixed|背景图像相对于视口固定，随着页面的滚动而不滚动，可以看作背景被设置在了body上
local|背景图像相对于内容固定，会随着页面的滚动而滚动

---

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/oNbmKvv?height=450&theme-id=default&default-tab=result"></iframe>

