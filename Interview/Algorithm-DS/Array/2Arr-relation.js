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
    // 或者 return arr1.filter(item => arr2.includes(item))
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
 * 求2个数组 【2个数组自己独有的元素的集合】的补集
 * @param {*} arr1 
 * @param {*} arr2 
 */
function complement(arr1, arr2) {
    // return arr1.filter((item) => arr2.indexOf(item) == -1)  // [ 1, 3, 5 ]
    // return arr2.filter((item) => arr1.indexOf(item) == -1)  // [ 6, 8, 10 ]
    return arr1.filter((item) => arr2.indexOf(item) == -1)
    .concat(arr2.filter((item) => arr1.indexOf(item) == -1)) 
}
// console.log(complement(a, b))
// [ 1, 3, 5, 6, 8, 10 ]


/**
 * 求2个数组的 并集
 * @param {*} arr1 
 * @param {*} arr2 
 */
function union(arr1, arr2) {
    return arr1.concat(arr2.filter(item => arr1.indexOf(item) == -1))
}
// console.log(union(a, b))
// [ 1, 2, 3, 4, 5, 6, 8, 10 ]

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 上面这些运算前提都是 a 和 b 中各自都没有重复元素，考虑下面有重复的情况
 */
let c = [1, 2, 2, 3]
let d = [1, 2, 3, 5]
// 求一下交集
function inter(arr1, arr2) {
    let result = []
    for(let i =0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    return result;
}
// inter(c,d)
// [1, 2, 2, 3]
// inter(d,c)
// [1, 2, 3]
// 传入参数的顺序不同导致得到的结果不同，c d 的交集应该是[1, 2, 3]，因c中有重复元素，导致出现了[1, 2, 2, 3]结果

/**
 * 借助扩展运算符（...）以及 Set 的特性实现相关计算
 */
var sa = new Set(a);
var sb = new Set(b);

const intersection1 = a.filter(item => sb.has(item))
const minus1 = a.filter(item => !sb.has(item))
const complement1 = [...a.filter(item => !sb.has(item)), ...b.filter(item => !sa.has(item))]
const union1 = Array.from([...sa, ...sb])

console.log(complement1)
