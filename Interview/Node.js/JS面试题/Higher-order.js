/**
 * 高阶函数：英文叫Higher-order function
 * 一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数
 */

/**
 * 调用方式 minus(8)(3) 
 * @param {*} m 
 */
function minus(m) {
    return function(n) {
        return m - n;
    }
}
console.log(minus(8)(3))
// => 3


/**
 * 1. 最简单的形式
 */
function add(m, n, f) {
    return f(m) + f(n);
}

console.log(add(-5, 5, Math.abs))
// => 10


/**
 * 2. Array.map()
 */
function pow(m) {
    return m*m;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(pow))
// => [1, 4, 9, 16, 25, 36, 49, 64, 81]

// 不使用map, 使用for循环实现
var f = function (x) {
    return x * x;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i=0; i<arr.length; i++) {
    result.push(f(arr[i]));
}

// map()作为高阶函数，事实上它把运算规则抽象了
arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']


/**
 * 3. reduce()
 * Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，
 * 这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算
 * 
 * [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
 */
var arr1 = [1, 3, 5, 7, 9];
arr1.reduce(function (x, y) {
    return x + y;
}); // 25

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

var b = array1.reduce(function(last, now, index, arr) {
    console.log(last, now, index, arr);
    return last + now;
}, 10)
console.log(b);
/*
10 1 0 (4) [1, 2, 3, 4]
11 2 1 (4) [1, 2, 3, 4]
13 3 2 (4) [1, 2, 3, 4]
16 4 3 (4) [1, 2, 3, 4]
20
*/


/**
 * 4. filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
 */
//例如，在一个Array中，删掉偶数，只保留奇数，可以这么写：
var arr2 = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr2.filter(function (x) {
    return x % 2 !== 0;
});

// 或者
var s = arr2.filter(x => x % 2 !== 0)
r; // [1, 5, 9, 15]
s; // [1, 5, 9, 15]

//把一个Array中的空字符串删掉，可以这么写：
var arr3 = ['A', '', 'B', null, undefined, 'C', '  '];
var res = arr3.filter(i => i && i.trim());
res; // ['A', 'B', 'C']


/**
 * 5. sort()
 */
var arr4 = ['Google', 'apple', 'Microsoft'];
var p = arr4.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    console.log(x1, x2)
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']
console.log(p)
/*
APPLE GOOGLE
MICROSOFT APPLE
MICROSOFT GOOGLE
*/

//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1和a2是同一对象 


// Higher-order functions in Javascript
// https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b