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
