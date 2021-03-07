## Array.prototype.reduce(reducer, currentValue)
```js
const reducer = (accumulator, currentValue) => accumulator + currentValue;


//reduce是一种数组运算，通常用于将数组的所有成员"累积"为一个值
var arr = [1, 2, 3, 4];
var sum = (a, b) => a + b; // reducer
arr.reduce(sum, 0) // 10


//累积变量必须有一个初始值，上例是reduce函数的第二个参数0。如果省略该参数，那么初始值默认是数组的第一个成员
var arr = [1, 2, 3, 4];
var sum = function (a, b) {
  console.log(a, b);
  return a + b;
};
arr.reduce(sum) // => 10
// 1 2
// 3 3
// 6 4

//总之，reduce方法提供了一种遍历手段，对数组所有成员进行"累积"处理
//map 是 reduce 的特例
var arr = [1, 2, 3, 4];

var handler = function (newArr, x) {
  newArr.push(x + 1);
  console.log('newArr:', newArr)
  return newArr;
};

arr.reduce(handler, [])
// newArr: [2]
// newArr: (2) [2, 3]
// newArr: (3) [2, 3, 4]
// newArr: (4) [2, 3, 4, 5]
// [2, 3, 4, 5]

// 下面是使用map改写上面的例子
var arr = [1, 2, 3, 4];
var plusOne = x => x + 1;
arr.map(plusOne) // [2, 3, 4, 5]


// 例 2018-07-30
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
	console.log(total, num);
    return total + num;
}
numbers.reduce(getSum)
65 44
109 12
121 4
125
```

## Array.reduceRight
The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
```js
numbers.reduceRight(getSum)
4 12
16 44
60 65
125
```













