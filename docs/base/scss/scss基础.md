### Scss基础知识

#### 什么是CSS预处理器
CSS预处理器定义了一种新的语言，其基本思想就是，用一种专门的编程语言，为CSS增加编程特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。你可以在CSS中使用变量、简单的逻辑程序、函数等等一些编程语言中的基本特性，可以让我们的CSS更加简洁、适应性更强、可读性更强、更易于代码维护等等好处（编程特性）。

---

#### Sass和Scss有什么区别
1. 文件扩展名不同，Sass是以.sass后缀为扩展名，而Scss是以.scss为扩展名
2. 语法书写不同，Sass是以严格的缩进式语法规则来书写，不带大括号和分号，而Scss语法书写和我们的CSS语法方式非常类似，把现有的.css改成.scss都可以使用
3. Scss是Sass3引入的新语法，是CSS3语法的超集，也就是说有效的CSS3样式也同样适用于Sass，说白了Scss是Sass的升级版，其语法完全兼容CSS3，并且继承了Sass的强大功能
4. 示例
```javascript
// 1. Sass
$font-family:Helvetica, sans-serif;
$primary-color:#333;
body
  font:100% $font-family
  color:$primary-color

// 2. Scss
$font-family:Helvetica, sans-serif;
$primary-color:#333;
body{
   font:100% $font-family
   color:$primary-color
}
```

---

#### 变量
+ 声明变量
  + 声明变量的符号$
  + 变量名称
  + 赋予变量的值

```javascript
$brand-primary-color:#333;
$btn-primary-bg:$brand-primary;
```

+ 普通变量
  + 定义之后可以在全局范围内使用
```javascript
$fontSize:12px;
body{
    font-size:$fontSize;
}
```

+ 默认变量
  + Sass的默认变量是在值的后面添加`!default`即可。默认变量一般用来设置默认值，然后根据需求来覆盖，覆盖的方式也很简单，只需要在默认变量`之前`重新申明下变量即可
```javascript
// 默认值
$baseLineHeight:1.5 !default;
body{
    line-height:$baseLineHeight; // 1.5
}

// 默认值覆盖
$baseLineHeight:2;
$baseLineHeight:1.5 !default;
body{
    line-height:$baseLineHeight; // 2
}
```

+ 全局变量和局部变量
```javascript
$color:orange !default; // 定义全局变量
.block{
    color:$color; // 调用全局变量
}
em{
    $color:red; // 定义局部变量
    a{
        color:$color; // 调用局部变量
    }
}
span{
    color:$color; // 调用全局变量
}
```

+ 什么时候声明变量
  + 创建变量只适用于感觉有必要的情况下
    + 该值至少重复出现了两次
    + 该值至少可能会被更新一次
    + 该值所有的表现都与变量有关

---

#### 嵌套

1. 定义：Sass中还提供了选择题嵌套的功能，但这并不意味着我们在Sass中的嵌套是无节制的，因为嵌套的层级越深，编译出来的CSS代码的选择器层级将会越深。

2. Sass的嵌套分为三种：
  + 选择器嵌套
  + 属性嵌套：有些css的前缀属性相同，就可以使用选择器嵌套，类似有margin/padding/font/border等
  + 伪类嵌套：与属性嵌套类似，只不过需要&来连接
3. 示例
```javascript
// 选择器嵌套
nav{
    a{
        color:red;
    }
}

// 属性嵌套
.box{
    border-top:1px solid red;
    border-bottom:1px solid green;
}
.box{
    border:{
        top:1px solid red;
        bottom:1px solid green;
    }
}

// 伪类嵌套
.box{
    &::after,
    &::before{
        // ...
    }
}
```

---

#### 混合宏-声明混合宏
如果我们整个网站有几处小样式类似，比如颜色、字体等等，在Sass中可以使用变量来统一解决。但当我们的样式变得越来越复杂，需要使用大段的样式时，使用变量就无法达到我们目的了，这个时候Sass混合宏就会变得非常有意义。在Sass中，使用@mixin来声明一个混合宏，大括号里是复用的样式代码

1. 声明混合宏：在Sass中，使用@mixin来声明一个混合宏
```javascript
// 不带参数的混合宏
@mixin border-radius{
    border-radius:5px;
}

// 带参数的混合宏
@mixin border-radius($radius:5px){
    border-radius:$radius;
}

// 复杂的混合宏 ...表示当混合宏传递过多参数时，可以用这个参数替代
@mixin box-shadow($shadow...){
    @if length($shadow)>=1{
        @include prefix(box-shadow,$shadow)
    }@else{
        $shadow: 0 0 4px rgba(0,0,0,.3);
        @include prefix(box-shadow,$shadow)
    }
}
```

2. 调用混合宏: 在Sass中，使用关键词@include来调用声明好的混合宏
```javascript
// 声明
@mixin border-radius{
    border-radius:3px;
}
// 调用
button{
    @include border-radius
}
// 编译出来的css
button{
    border-radius:3px;
}
```

---

#### 混合宏传参
1. 传一个不带值的参数
```javascript
@mixin border-radius($radius){
    border-radius:$radius;
}
// 调用
button{
    @include border-radius(3px);
}
// 编译
button{
    border-radius:3px;
}
```

2. 传一个带值的参数
```javascript
@mixin border-radius($radius:3px){
    border-radius:$radius;
}
// 调用
button{
    @include border-radius; // 3px
}
button{
    @include border-radius(50%); // 50%
}
```

3. 传多个参数
```javascript
@mixin center($width,$height){
    width:$width;
    height:$height;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-($width)/2;
    margin-left:-($height)/2;
}
body{
    @include center(500px,300px);
}
```

---

#### 继承
在Sass中也具有继承一说，也是继承类中样式的代码块，通过关键词@extend来继承已经存在的类样式块，从而实现代码的继承
```javascript
.btn{
    border:1px solid #ccc;
    padding:6px 10px;
    font-size:14px;
}
.btn-primary{
    background-color:#f36;
    @extend .btn
}
.btn-second{
    background-color:#fff;
    @extend .btn
}
// 编译过后的
.btn,.btn-primary,.btn-second{
    border:1px solid #ccc;
    padding:6px 10px;
    font-size:14px;
}
.btn-primary{
    background-color:#f36;
}
.btn-second{
    background-color:#fff;
}
```

---

#### 占位符
Sass中的占位符%placeholder是个很强大实用的功能，%placeholder是声明的代码，如果不被@extend调用的话，不会产生任何代码
```javascript
%mt5{
    margin-top:5px;
}
%pt5{
    padding-top:5px;
}
.btn{
    @extend %mt5;
    @extend %pt5;
}
.block{
    @extend %mt5;
    span{
        @extend %pt5;
    }
}
// 编译出来的css
.btn,.block{
    margin-top:5px;
}
.btn,.block span{
    padding-top:5px;
}
```

---

#### 混合宏 VS 继承 VS 占位符
![](https://oscimg.oschina.net/oscnet/up-750fa2d78729510a4d2f11f74d9ee867c7f.png)

---

#### 插值
使用CSS预处理器语言的一个主要原因是想使用Sass获得一个更好的结构体系，如果我们想写的更加干净、高效和面向对象的CSS，Sass中的插值是很重要的一部分
```javascript
$properties:(margin,padding);
@mixin set-value($side,$value){
    @each $prop in $properties{
        #{$prop}-#{$side}:$value
    }
}
.login-box{
    @include set-value(top,14px);
}
// 编译过后
.login-box{
    margin-top:14px;
    padding-top:14px;
}


// 生成class
@mixin generate-class($class,$small,$medium,$big){
    .#{$class}-small { font-size:$small },
    .#{$class}-medium { font-size:$medium },
    .#{$class}-big { font-size:$big }
}
```

---

#### 数据类型
Sass和javascript语言类似，也具有自己的数据类型，在Sass中包含了以下几种数据类型：
1. 数字：1、 2、 13、 10px
2. 字符串：
  + 有引号的字符串：“foo” "baz"
  + 无引号的字符串：bar
3. 颜色：blue、#fff、rgba(0,0,0,0.5)
4. 布尔值：true false
5. 空值：null

值列表是指用逗号或者空格分开的，`margin:1.5rem 1rem 1rem 0`或者`font-face:Helvetica, Arial, sans-serif`