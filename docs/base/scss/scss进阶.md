### Scss高级用法

#### @if,@else if ,@else条件判断语句
```javascript
@mixin blockOrHide($bool:true){
    @if $bool{
        display:block;
    }
    @else{
        display:none
    }
}
// 调用
.show{
    @include blockOrHide; // block
}
.hide{
    @include blockOrHide(false); // none
}
```

---

#### for循环
for循环通常用来生成很多相同类的元素样式，分为两种:
`@for $i from <start> through <end>`
`@for $i from <start> to <end>`

1. through 包含end这个数
2. to 不包含end这个数

```javascript
@for &i from 1 through 3{
    .item#{$i}{ width:2rem; }
}
// 编译
.item1{}
.item2{}
.item3{}
```

3. for循环复杂实例，编写样式中生成一系列相似样式
```javascript
$grid-prefix:span !default;
$grid-width:60px !default;
$grid-gutter:10px !default;

%grid{
    loat:left;
    margin-left:$grid-gutter/2;
    margin-right:$grid-gutter/2;
}

@for $i from 1 through 12{
    .#{$grid-prefix}#{$i}{
        width:#{$grid-width}*$i;
        @extend %grid;
    }
}
// 编译出来的css
.span1,.span2,.span3,.span4,.span5,.span6,.span7,.span8,.span9,.span10,.span11,.span12{
    float:left;
    margin-left:10px;
    margin-right:10px;
}
.span1{
    width:60px;
}
...

```

---

#### while语句
```javascript
$types:4;
@while $types>0{
    ...
} 
```

---

#### @each
@each就是去遍历一个列表，从列表里取出对应的值
```javascript
$list:admin john jerry mason;

@mixin set-value{
    @each $pep in $list{
        .photo-#{$pep}{
            //...
        }
    }
}
// 编译
.photo-admin{}
.photo-john{}
.photo-jerry{}
.photo-mason{}

```

---

#### Sass中的函数-字符串函数
在Sass中除了可以定义变量，还自备了一系列函数。

1. unquote() 删除引号函数，只能用来删除字符串最前和最后的双引号或单引号，不能删除字符串中间的引号
2. quote() 添加引号函数

---

#### Sass中的函数-字母大小写转换函数

1. To-upper-case()
2. To-lower-case()

---

#### Sass中的函数-数字函数

1. percentage()
2. round()
3. ceil()
4. floor()
5. abs()
6. max()
7. min()
8. random()

---

#### Sass中的函数-列表函数

1. length($list)：返回一个列表的长度值
2. nth($list,$n)：返回列表中指定的某个标签值
3. join($list,$list2,[$separator])：连接两个列表，其中separator参数指定列表参数中间的分隔符，取值为comma将会以逗号分割，取值为space将会以空格分割
4. append($list,$val,[$separator])：将某个值追加到列表元素中
5. index($list,$val)：返回指定元素在列表中的索引

---

#### Sass中的函数-Introspection函数
1. type-of()：类型判断
2. unit()：单位判断
3. unitless()：是否有单位
4. comparable()：是否可以进行计算
5. miscellaneous：三元条件函数
```javascript
if(true,1px,2px); // 1px
if(false,1px,2px); // 2px
```

---

#### map
Sass中map常常被称为数据地图，可以方便的用来进行数据管理，用一个$加上命名空间声明map，后面再跟上一对小括号。
```javascript
// 简单的变量声明
$primary-color:#333;
$default-color:#000;

// map的方式声明变量
$color:(
    bgColor:#f00;
    textColor:#000;
)

// map的方式管理复杂变量
$color:(
    default:(
      bgColor:#f00;
      textColor:#000;
    ),
     primary:(
        bgColor：#f36,
        textColor:#f00;
    )
)

```

---

#### 借助map函数对map做更多的操作
在Sass中，如果想要获取map变量，需要使用map提供的函授对map做更多的操作
1. map-get($map,$key)：根据给定的key值返回map中的相关值
2. map-merge($map,$map2)：将两个map合并成一个map
3. map-remove($map,$key)：从map中删除一个key，返回新的map
4. map-keys($social-colors)：返回map中所有的key
5. map-has-key($map,$key)：根据给定的key判断是否有对应的value 