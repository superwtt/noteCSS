### 渐变色实现按钮各种样式

#### 注意点
1. 按钮3：当鼠标hover上去时，想要宽高慢慢变化而不是直接就变成宽度100%,需要添加`transition`过渡样式
2. 按钮4：box-shadow效果的叠加是为了制作出雾面的button效果.分别设置宽度和高度为0.1px和0，当鼠标hover上去的时候，再设置宽/高为100%
3. 在实现多线条的hover效果时，如果伪类不够用，可以再增加标签，给标签的伪类添加hover样式
4. 按钮6中多个box-shadow的效果叠加，可以看成是多个模糊玻璃片的重叠
5. 按钮11，想要将高度从0到100%变化，如果利用transition想要从0-100的渐变效果，那么就要注意初始化高度为0，否则没有渐变的效果

---

#### 示例
<iframe width="90%" height="550" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/MWywPoa?height=450&theme-id=default&default-tab=result"></iframe>
