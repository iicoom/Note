/*
concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 
原始数组的元素将复制到新数组中

注意和push()的区别，push会改变原数组
*/
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
console.log(array1)
// ["a", "b", "c"]

var a = [1,2,3];
var b = [3,4,5,6];

console.log(a.concat(4,5))
console.log(a.concat(b))
/*
=>
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 3, 4, 5, 6 ]
*/

// 合并2个数组, 原数组 vegetables被改变
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
 
// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
 
console.log(vegetables); 
// ['parsnip', 'potato', 'celery', 'beetroot']

console.log(moreVegs)
// ["celery", "beetroot"]

// 若是 var moreVegs = ['potato', 'celery', 'beetroot'];
console.log(vegetables);
// 不会去重["parsnip", "potato", "potato", "celery", "beetroot"]
