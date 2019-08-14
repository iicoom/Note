# JS数据类型

## JavaScript 数据类型

值类型\(基本类型\)：字符串（String）、数字\(Number\)、布尔\(Boolean\)、对空（Null）、未定义（Undefined）、Symbol。

引用数据类型：对象\(Object\)、数组\(Array\)、函数\(Function\)。

注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

## typeof

typeof String "function"

typeof Number "function"

typeof Boolean "function"

typeof Null "undefined"

typeof null "object"

typeof Undefind "undefined"

typeof undefined "undefined"

typeof Symbol "function"

typeof Array "function"

typeof Object "function"

typeof Number "function

undefined == null true

## 数据类型判断

typeof 'safa' "string" typeof 234 "number" typeof true "boolean" typeof adfa "undefined" typeof {} "object" typeof \[\] "object"

所以 typeof 能检测出六种类型的值，但是，除此之外 Object 下还有很多细分的类型呐， 如 Array、Function、Date、RegExp、Error 等

自己封装方法：

```text
var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
    // 一箭双雕
    if (obj == null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}
```

class2type: { \[object Array\]: "array" \[object Boolean\]: "boolean" \[object Date\]: "date" \[object Error\]: "error" \[object Function\]: "function" \[object Number\]: "number" \[object Object\]: "object" \[object RegExp\]: "regexp" \[object String\]: "string" }

## 引用传递

> js 中什么类型是引用传递, 什么类型是值传递? 如何将值类型的变量以引用的方式传递?

简单点说, 对象是引用传递, 基础类型是值传递, 通过将基础类型包装 \(boxing\) 可以以引用的方式传递.

### == 的 === 的区别

简单来说： == 代表相同， ===代表严格相同, 为啥这么说呢，

这么理解： 当进行双等号比较时候： 先检查两个操作数数据类型，如果相同， 则进行===比较， 如果不同， 则愿意为你进行一次类型转换， 转换成相同类型后再进行比较， 而===比较时， 如果类型不同，直接就是false.

三等号===:

（1）如果类型不同，就一定不相等

（2）如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN\( \) 来判断）

（3）如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。

（4）如果两个值都是true，或是false，那么相等

（5）如果两个值都引用同一个对象或是函数，那么相等，否则不相等

（6）如果两个值都是null，或是undefined，那么相等

例子：

```text
number类型的比较：
var a = 1;
var b =1

a == b
true
a === b
true

string类型的比较：
var c = '123'
var d = '123'

c == d
true
c === d
true

Object类型的比较：
var arr = [1]
var d = arr
var e = arr

d == e
true
d === e
true
```

### 然后再问 \[1\] == \[1\] 是 true 还是 false

\[1\] == \[1\] false

原因是上边2个\[1\]指的不是一个物理内存地址

### C++中引用与指针的区别

[https://blog.csdn.net/zhengqijun\_/article/details/54980769](https://blog.csdn.net/zhengqijun_/article/details/54980769)

