## parseInt parseFloat
```js
typeof 0.333344
// "number"

// toFixed() 是对number的操作
'0.44444'.toFixed(2)
// VM111894:1 Uncaught TypeError: "0.44444".toFixed is not a function
//     at <anonymous>:1:11

// 而且只能是float类型的
0.toFixed(2)
// Uncaught SyntaxError: Invalid or unexpected token

1234.toFixed(2)
// VM111961:1 Uncaught SyntaxError: Invalid or unexpected token

1.23423432.toFixed(2)
// "1.23"

0.28.toFixed(2)
"0.28"
parseInt("0.28")
0
parseFloat("0.28")
0.28

// 处理后的结果是string类型 如果0.28.toFixed(2)*100 会在*100之前parseFloat

0.000342.toFixed(2)
// "0.00"   这里显示有点奇怪 应该显示"0"


// 遇到多位小数精度问题
const progressAvg=0.28168316831683166

progressAvg.toFixed(2)
// '0.28'

progressAvg.toFixed(2)*100
// 28.000000000000004

parseFloat(progressAvg.toFixed(2))*100
// 28.000000000000004

progressAvg.toFixed(2).slice(2)+'%'
// "28%"

0.0033.toFixed(2).slice(2)+'%'   // 这种情况展示也不正常
// "00%"

// 改变一下处理顺序
(progressAvg*100).toFixed()+'%'
"28%"

(progressAvg*100).toFixed(0)+'%'
"28%"

(progressAvg*100).toFixed(1)+'%'
"28.2%"
```

## JavaScript float 精度问题 - toFixed(n)方法可以用来修正不必要的位数
```js
console.log(0.1+0.2)
0.3
console.log(0.1+0.2 == 0.3)
false

console.log(0.1 + 0.2)=0.30000000000000004 & console.log(0.1 + 0.2 == 0.3)=false


// https://stackoverflow.com/questions/25925284/javascript-floating-point-number-confusion

var a = 0.1;
var b = 0.2;
var c = 0.3;

console.log(a); // 0.1
console.log(b); // 0.2
console.log(c); // 0.3

But
consolo.log(a+b+c) // 0.6000000000000001.

While
console.log(a+(b+c)) // 0.6


Well, in the first case you are doing (0.1 + 0.2) + 0.3 = 0.3 + 0.3 and in the second case you do 0.1 + (0.2 + 0.3) = 0.1 + 0.5. I guess the rounding error in the first case larger than in the second case.

Lets have a closer look at the actual values in this computation:

var a = 0.1;
var b = 0.2;
var c = 0.3;

console.log('          a:', a.toPrecision(21));
console.log('          b:', b.toPrecision(21));
console.log('          c:', c.toPrecision(21));

console.log('      a + b:', (a + b).toPrecision(21));
console.log('      b + c:', (b + c).toPrecision(21));

console.log('  a + b + c:', (a + b + c).toPrecision(21));
console.log('a + (b + c):', (a + (b + c)).toPrecision(21));

The output is

a: 0.100000000000000005551
b: 0.200000000000000011102
c: 0.299999999999999988898

a + b: 0.300000000000000044409
b + c: 0.500000000000000000000

a + b + c: 0.600000000000000088818
a + (b + c): 0.599999999999999977796 
```

So, it's clear that both computations have rounding errors, but the errors are different because you are performing the additions in a different order. It just happens that a + b + c produces a larger error.