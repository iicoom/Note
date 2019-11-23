/** 题目一 */
// What does setTimeout with a 0ms delay do? 
// What setTimeout does is it schedules a function to run later. 

// So using setTimeout(..., 0) will basically make your code run after the current event loop tick. 

// This means that if your code is very timing sensitive, you may run into problems. 
// Use postMessage to ensure immediate execution in the next event loop tick.

setTimeout(function(){
    console.log(-1);
}, 0)

for(var i = 0; i< 5; i++) {
    (function() {
        console.log(i);
    })()
}

setTimeout(function() {
    console.log(-2);
}, 0)

/* 输出结果如下
0
1
2
3
4

-1
-2
*/

// http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/

/** 题目二 */
// test.js
(function() {
	console.log('1');
	setTimeout(function(){console.log('2')}, 1000);
	setTimeout(function(){console.log('3')}, 0);
	console.log('4');
})()

// ➜  ~ node test.js
// 1
// 4
// 3
// 2
// 不用立即表达式包裹也是这个结果
// console.log() 为同步执行，setTimeout 为异步，会被event loop放到 nextTick 中执行

/** 题目三 */
// test.js 一个循环内顺序输出i
for(var i=0; i<5; i++) {
	setTimeout(function(){console.log(i)}, i*1000)
}
// ➜  ~ node test.js
// 5
// 5
// 5
// 5
// 5
// setTimeout 为异步执行 而for循环为同步 等setTimeout 执行时i已经累计到5

// 改写如下
for(var i=0; i<5; i++) {
	(function(j) {
        setTimeout(function(){console.log(j)}, j*1000)
        // setTimeout(function(){console.log(i)}, i*1000) // 在这里是可以拿到i的，只不过它的值都是5
	})(i)
}
// ➜  ~ node test.js
// 0
// 1
// 2
// 3
// 4

// 或者更简单的方式 把var 改为let
for(let i=0; i<5; i++) {
	setTimeout(function(){console.log(i)}, i*1000)
}
// ➜  ~ node test.js
// 0
// 1
// 2
// 3
// 4

/**
 * 题目四
 */
var i = 0;
while(i<5) {
    setTimeout(function() {console.log('1')}, 0)
    i++;
}
// 1
// 1
// 1
// 1
// 1

// while(true) {
//     setTimeout(function() {console.log('1')}, 0)
// }
// 这种就不会有任何输出，因为while 为同步代码，而setTimeout为异步，不再一个周期内
// 只是会不停的创建出异步任务