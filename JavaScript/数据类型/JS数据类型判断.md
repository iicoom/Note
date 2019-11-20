https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures
> JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：


## NaN
全局属性 NaN 的值表示不是一个数字（Not-A-Number）。

编码中很少直接使用到 NaN。通常都是在计算失败时，作为 Math 的某个方法的返回值出现的（例如：Math.sqrt(-1)）或者尝试将一个字符串解析成数字但失败了的时候（例如：parseInt("blabla")）。

等号运算符（== 和 ===） 不能被用来判断一个值是否是 NaN。必须使用 Number.isNaN()或 isNaN() 函数。

NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

## typeof检测
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof

// 数值
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === 'number'; // Number 会尝试把参数解析成数值

typeof 42n === 'bigint';

// 字符串
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string';
typeof '1' === 'string'; // 注意内容为数字的字符串仍是字符串
typeof (typeof 1) === 'string'; // typeof 总是返回一个字符串
typeof String(1) === 'string'; // String 将任意值转换为字符串，比 toString 更安全

// 布尔值
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!(1) === 'boolean'; // 两次调用 ! (逻辑非) 操作符相当于 Boolean()

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 

// 对象
typeof {a: 1} === 'object';

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // 历史结果请参阅正则表达式部分


// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';


// 函数
typeof function() {} === 'function';
typeof class C {} === 'function'
typeof Math.sin === 'function';

// JavaScript 诞生以来便如此
typeof null === 'object';

## 封装一个准确判断数据类型的函数
```
function getType(obj){
  let type  = typeof obj;
  if(type != "object"){
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}
```
getType({})
"Object"
getType([])
"Array"
getType(Date)
"function"
getType(new Date())
"Date"
getType(Math)
"Math"
getType(/regex/)
"RegExp"

