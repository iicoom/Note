// JS计算两个数组的交集、差集、并集、补集（多种实现方式）
var a = [1, 2, 3, 4, 5]
var b = [2, 4, 6, 8, 10]

/**
 * 使用ES6 的 filter 求2个数组的交集
 * @param {*} arr1 
 * @param {*} arr2 
 */
function intersection(arr1, arr2) {
    return arr1.filter((item) => arr2.indexOf(item) > -1)
}
// console.log(intersection(a, b))
// [ 2, 4 ]


/**
 * 求2个给定数组【前一个有】【后一个没有】的差集，输入顺序不一样结果不一样 / 即 a有b没有 或 b有a没有
 * @param {*} arr1 
 * @param {*} arr2 
 */
function minus(arr1, arr2) {
    return arr1.filter((item) => arr2.indexOf(item) == -1)
}
// console.log(minus(a, b))
// [ 1, 3, 5 ]
// console.log(minus(b, a))
// [ 6, 8, 10 ]


/**
 * 求2个数组 的补集
 * @param {*} arr1 
 * @param {*} arr2 
 */
function complement(arr1, arr2) {
    return arr1.filter((item) => arr2.indexOf(item) > -1)
}

console.log(__filename)
console.log(__dirname)