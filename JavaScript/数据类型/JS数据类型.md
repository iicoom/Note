> JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：

```js
var foo = 42;    // foo is a Number now
foo = "bar"; // foo is a String now
foo = true;  // foo is a Boolean now
```

## JavaScript 数据类型
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

Primitive types 原始/基本 数据类型：（6种）
Number
String
Boolean
Symbol

And two special types:
null
undefined


引用数据类型：对象(Object)、数组(Array)、函数(Function)。

注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

## typeof
typeof String
"function"

typeof Number
"function"

typeof Boolean
"function"

typeof Null => "undefined"   --- ---    typeof null => "object"

typeof Undefind => "undefined"  --- ---  typeof undefined => "undefined"

typeof Symbol
"function"

typeof Array
"function"

typeof Object
"function"

typeof Number
"function

undefined == null => true   --- --- undefined === null => false

## 数据类型判断
```js
typeof 'safa'
"string"
typeof 234
"number"
typeof true
"boolean"
typeof adfa
"undefined"
typeof {}
"object"
typeof []
"object"
```

所以 typeof 能检测出六种类型的值，但是，除此之外 Object 下还有很多细分的类型呐，
如 Array、Function、Date、RegExp、Error 等

自己封装方法：
```js
let class2type = {};

// 生成class2type映射
let typeStr = "Boolean Function Array Date RegExp Object Error";

typeStr.split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

class2type:
{
	[object Array]: "array"
	[object Boolean]: "boolean"
	[object Date]: "date"
	[object Error]: "error"
	[object Function]: "function"
	[object Object]: "object"
	[object RegExp]: "regexp"
}
// Object.prototype.toString.call(123)
// "[object Number]"

function type(obj) {
    // 一箭双雕
    if (obj === null) {
        return obj + "";
		} else if (typeof obj === "number" || (typeof obj === "string") {
			  return typeof obj;
		} else if (typeof obj === "object" || typeof obj === "function") {
				return class2type[Object.prototype.toString.call(obj)]
		} else {
			return "Unknown Type"
		}
}
```


## 引用传递
> js 中什么类型是引用传递, 什么类型是值传递? 如何将值类型的变量以引用的方式传递?

简单点说, 对象是引用传递, 基础类型是值传递, 通过将基础类型包装 (boxing) 可以以引用的方式传递.

### == 的 === 的区别
简单来说： == 代表相同， ===代表严格相同, 为啥这么说呢， 

这么理解： 当进行双等号比较时候： 先检查两个操作数数据类型，如果相同， 则进行===比较， 如果不同， 则愿意为你进行一次类型转换， 转换成相同类型后再进行比较， 而===比较时， 如果类型不同，直接就是false.

三等号===:

　　（1）如果类型不同，就一定不相等

　　（2）如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN( ) 来判断）

　　（3）如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。

　　（4）如果两个值都是true，或是false，那么相等

　　（5）如果两个值都引用同一个对象或是函数，那么相等，否则不相等

　　（6）如果两个值都是null，或是undefined，那么相等

### 然后再问 [1] == [1] 是 true 还是 false
[1] == [1]
false

原因是上边2个[1]指的不是一个物理内存地址

### C++中引用与指针的区别
https://blog.csdn.net/zhengqijun_/article/details/54980769

