// 想要顺序输出0-5
// for (var i = 0; i < 5; i ++) {
//     console.log(i)
// }
// 输出
// 0
// 1
// 2
// 3
// 4

// 想要每隔一秒顺序输出0-5
// for(var i = 0; i < 5; i ++) {
//     setTimeout(function() {       // for循环为同步，setTimeout 为异步执行，所以打印i的时候值已经累计到5
//         console.log(i)
//     }, 1000*i)
// }
// 结果：会在一秒后 一下子输出5个5


// for(var i = 0; i < 5; i ++) {
//     (function(j) {
//         setTimeout(function() {       // for循环为同步，setTimeout 为异步执行，所以打印i的时候值已经累计到5
//             console.log(j)
//         }, 1000*j)
//     })(i)
// }

// 结果 每个一秒输出一个
// 0
// 1
// 2
// 3
// 4

// for(let i = 0; i < 5; i ++) {
//     setTimeout(function() {       // i 用let声明 可以正常输出
//         console.log(i)
//     }, 1000*i)
// }

/**
 * 上面的问题包装了一层
 */
// function fn() {
// 	var arr = []
// 	for (let i = 0; i < 5; i++) {
// 		arr[i] = function() {
// 			return i;
// 		}
// 	}
// 	return arr;
// }

// var arr = fn()
// arr[4]()

// 用let声明才会输出对应的i，用var全是5

