### transform

#### 定义
transform属性向元素应用2D或者3D转换，该属性允许我们对元素进行旋转rotate、缩放scale、移动translate、倾斜skew以及矩阵变形matrix。旋转、平移、放大 都可以在xyz三个轴上进行

---

#### 取值
属性 | 属性取值列表 | 描述
--- |:--|---
rotate | rotateX、rotateY、rotateZ、rotate3d(x,y,z,angle) | 旋转元素
scale | scaleX、scaleY、scaleZ、scale3d(x,y,z) | 缩放元素
translate | translateX、translateY、translateZ、translate3d(x,y,z) | 平移元素
skew | skewX(angle)、skewY(angle) | 2D倾斜
matrix | matrix(n,n,n,n,n,n)、matrix(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) | 矩阵转换
perspective | perspective:600px | 透视

---

#### transform-origin
元素旋转的基点位置，也就是该元素围绕哪个点进行transform的变形，默认的是元素的中心位置。
旋转的参考点可以在元素内，元素上，元素外

属性 | 属性取值列表 | 描述
--- |:--|---
x | left、center、right、length、px、%、0 | x轴取值
y | top、center、bottom、length、px、%、0 | y轴取值
z | length、px、0 | z轴取值

---

#### 



#### 参考链接
[transform](https://blog.csdn.net/qq_24189933/article/details/79293870)

