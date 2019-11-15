let arr = [2, 4, 434, 43]
let arr1 = arr;

arr1 == arr   // true
arr1 === arr  // true
// arr1 与 arr 是相同的引用，不算数组copy
arr[0] = "changed!";
console.log(arr, arr1)
// ["changed!", 4, 434, 43] (4) ["changed!", 4, 434, 43]

// 常用的数组拷贝方法
/**
 * 1. Array.slice()
 * arrayObject.slice(start,end)
 * 请注意，该方法【并不会修改数组】，而是返回一个子数组。
 * 如果想删除数组中的一段元素，应该使用方法 Array.splice()。
 */
// 例1：
let arr2= arr.slice()
arr2 == arr   // false

// 例2：
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
fruits.slice();
// => ["Banana", "Orange", "Lemon", "Apple", "Mango"]


console.log(fruits.slice(1, 3))
console.log(fruits.slice(2))
console.log(fruits.slice(-2))
console.log(fruits.slice(-2,-1))

/* =>
[ 'Orange', 'Lemon' ]
[ 'Lemon', 'Apple', 'Mango' ]
[ 'Apple', 'Mango' ]
[ 'Apple' ]
*/

/**
 * ES6 方法
 * 2. Object.assign() 浅复制，也可以实现数组的克隆
 */
let arr = ['sdsd',123,123,123]
let arr1 = []
Object.assign(arr1,arr)
arr[1] = 'aaaa'
console.log(arr,arr1)
// ["sdsd", "aaaa", 123, 123]，["sdsd", 123, 123, 123]
// arr1的arr1[1]并没有随着arr[1]重新赋值而改变 


/**
 * ES6 方法
 * 扩展运算符
 */
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
a1[0] = 'aaa'
console.log(a1,a2)
// ["aaa", 2],  [1, 2]


/**
 * 3. 自己写一些方法 [].concat
 */
function clone(source){ 
    return [].concat(source); 
    //或者 return this.concat();
}
let arr = ['aaa','asss']
let arr1 = clone(arr)
arr[0] = 123
console.log(arr,arr1)
// [123, "asss"], ["aaa", "asss"]

/**
 * 4. 遍历数组
 */
function forclone(source) {
    let result = [];
    source.forEach(item => {
        result.push(item)
    })
    return result;
}
let sou = ['123', 1, 2]
const target = forclone(sou);
sou[1] = 'changed！'
console.log(sou, target)
//  ["123", "changed！", 2], ["123", 1, 2]





