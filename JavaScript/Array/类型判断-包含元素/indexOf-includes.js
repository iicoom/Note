/**
 * 判断给定元素在数组中是否存在
 * indexOf  => 返回元素在数组中的index，不存在则返回 -1
 * 
 * includes => 返回布尔值
 */

// 方法一
[1,2].indexOf(1)
// 0
[1,2].indexOf(3)
// -1


// 方法二
var array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// expected output: true
console.log(pets.includes('at'));
// expected output: false
