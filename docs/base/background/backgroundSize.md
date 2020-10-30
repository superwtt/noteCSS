### background-size

#### 定义
background-size属性规定了背景图像的尺寸

---

#### 取值
属性 | 描述 
--- |:--|--:
length|设置背景图像的宽度和高度，如果只设置了一个值，那么第二个值将会是auto
percentage|以百分比设置背景图像的宽度和高度
cover|图片的宽高比不变，铺满整个容器的宽高，多出的部分则会被截掉，这个值可以让背景图像铺满整个背景区域，但是图片可能会显示不全.（遮罩、塞满）
contain|图片自身的宽高比不变，缩放至图片自身能够完全显示出来，所以容器会有留白区域，这个值是把背景图片等比缩放，尽量铺满全屏.（包含）
100% 100%|可以使得背景铺满整个屏幕并且显示完全

---

#### 示例
<iframe width="90%" height="450" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/pogGMwO?height=450&theme-id=default&default-tab=result"></iframe>
