//http://www.ruanyifeng.com/blog/2017/03/reduce_transduce.html
//reduce是一种数组运算，通常用于将数组的所有成员"累积"为一个值
var arr = [1, 2, 3, 4];

var sum = (a, b) => a + b;

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
  return newArr;
};

arr.reduce(handler, [])
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

numbers.reduceRight(getSum)
4 12
16 44
60 65
125

// lodash 中的reduce 可以扩展到collection使用
_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3


_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

result["1"] || result["1"] = [];
// => Uncaught ReferenceError: Invalid left-hand side in assignment
result["1"] || (result["1"] = []);
[]
console.log(result);
VM135:1 {1: Array(0)}1: []__proto__: Object















