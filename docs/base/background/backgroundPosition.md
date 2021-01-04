### background-position

#### 定义
background-position属性为背景图像设置位置

---

#### 注意点
1. background-position设置背景图像的位置，如果背景要重复，将从这个点开始重复
2. 定位的三种度量单位：
   + 关键字定位：关键字定位运用的是对齐规则而不是坐标规则。对齐规则表示图像的顶部与背景区域的顶部对齐，图像的左边与背景区域的左边对齐，图像的中心与背景区域的中心对齐。
   + 百分比定位：是将图像本身x% y%与背景区域x% y%的那个点重合（可以粗略的认为背景图像的左上角到背景区域左上角的偏移量），最终得到起始位置计算公式为
      + x=（对象的宽度-背景图像的宽度）*x%
      + y=（对象的高度-背景图像的高度）*y%
   + 数值定位：粗略的指背景图像的左上角距背景区域左上角的偏移量


---

#### 取值
属性 | 描述 
--- |:--|--:
0% 0% | 默认值，背景区域的左上角
top left 、top center 、top right、center left、center center、center right、bottom left、bottom center、bottom right| 关键字定位，如果只定义了一个值，那么第二值将会是center
x% y% | 百分比定位，第一个值是水平位置，第二个值是垂直位置，如果只规定了一个值，那么第二个值将会是50%
xpos ypos| 第一个值是水平位置，第二个值是垂直位置，单位可以是像素或者其他值，xy定义的是背景图像左上角相对于背景区域左上角的偏移量


#### 示例
<iframe width="90%" height="550" src="https://codepen.io/superwtt/embed/OJMdeQM?height=450&theme-id=default&default-tab=result"></iframe>

---

#### 参考链接
[度量单位](https://blog.csdn.net/ixygj197875/article/details/79333151)

[度量如何取值](https://blog.csdn.net/qq_39207948/article/details/80172332)
