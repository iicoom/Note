var numbers = [1, 2, 3];
numbers.push(4);
 
console.log(numbers);
// [1, 2, 3, 4]
 
numbers.push(5, 6, 7);
 
console.log(numbers);
// [1, 2, 3, 4, 5, 6, 7]

numbers.push(3, 4);
// (5) [1, 2, 3, 3, 4]



var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");
 
console.log(sports);
// ["soccer", "baseball", "football", "swimming"]
 
console.log(total); 
// 4


// 合并2个数组
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