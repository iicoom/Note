## JavaScript 数据类型
值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

引用数据类型：对象(Object)、数组(Array)、函数(Function)。

注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

## typeof
typeof String
"function"

typeof Number
"function"

typeof Boolean
"function"

typeof Null
"undefined"

typeof null
"object"

typeof Undefind
"undefined"

typeof undefined
"undefined"

typeof Symbol
"function"

typeof Array
"function"

typeof Object
"function"

typeof Number
"function

undefined == null
true

## 数据类型判断
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

所以 typeof 能检测出六种类型的值，但是，除此之外 Object 下还有很多细分的类型呐，
如 Array、Function、Date、RegExp、Error 等

自己封装方法：
```
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
class2type:
{
	[object Array]: "array"
	[object Boolean]: "boolean"
	[object Date]: "date"
	[object Error]: "error"
	[object Function]: "function"
	[object Number]: "number"
	[object Object]: "object"
	[object RegExp]: "regexp"
	[object String]: "string"
}


