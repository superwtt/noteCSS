### background-repeat

#### 定义
background-repeat 设置背景图像的平铺模式，即背景图像是否重复

---

#### 注意点
1. 默认地，背景图像会在水平和垂直方向上重复
2. 背景图像开始重复的位置是background-position定义的，如果未设置background-position的位置，则默认从左上角开始

---

#### 取值
属性 | 描述 
--- |:--|--:
repeat|默认值，水平和垂直方向都重复
repeat-x|水平方向重复
repeat-y|垂直方向重复
no-repeat|不重复,背景图像不重复，只会显示一次
space|当容器尺寸大于背景图片尺寸时，space会在不重复的情况下尽可能多的重复图片；当容器尺寸小于背景图像尺寸时，space会使得背景图像裁剪
round|当容器尺寸大于背景图片尺寸时，round会充分利用容器空间，重复n次之后，如果剩余的空间大于imgWidth*50%，那么会继续进行n+1次的重复；当容器尺寸小于背景图像时，round会缩放背景图像至容器大小，并非等比缩放

---

#### 示例
<iframe width="90%" height="550" allowfullscreen="allowfullscreen" src="https://codepen.io/superwtt/embed/ExPrzZN?height=450&theme-id=default&default-tab=result"></iframe>

