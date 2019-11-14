/**
 * https://www.freecodecamp.org/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/
 * 上面全面的解释的 js单线程，同步异步，var, let, event loop, call stack, Web API

 */


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
// 结果：每隔一秒输出一个 5 共输出5次


// for(var i = 0; i < 5; i ++) {
//     (function(i) {
//         setTimeout(function() {       // for循环为同步，setTimeout 为异步执行，所以打印i的时候值已经累计到5
//             console.log(i)
//         }, 1000*i)
//     })(i)
// }

// 结果 每个一秒输出一个
// 0
// 1
// 2
// 3
// 4

// function task(i) {
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000)
// }
// for(var i = 0; i < 5; i ++) {
//     task(i)
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


console.log("before for", i)
for(var i = 0; i < 5; i ++) {
    setTimeout(function() {
        console.log(i)
    })
}
console.log("after for:", i)

// before for undefined
// after for: 5
// 5
// 5
// 5
// 5
// 5

