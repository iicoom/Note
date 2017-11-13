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



