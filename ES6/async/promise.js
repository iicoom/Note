//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
//Promise 对象用于一个异步操作的最终完成（或失败）及其结果值的表示。(简单点说就是处理异步请求。我们经常会做些承诺，如果我赢了你就嫁给我，如果输了我就嫁给你之类的诺言。这就是promise的中文含义：诺言，一个成功，一个失败。)
console.log('=================1====================')
// let t1 = Promise.resolve(3);
// let t2 = 1337;
// let t3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "foo");
// }); 

// Promise.all([t1, t2, t3]).then(values => { 
//     console.log(values); 
//     // [3, 1337, "foo"] 
// });

// //Promise.all的同步和异步
// // 我们为了尽快地触发 Promise.all 
// // 传递了已经被resolve的promise数组作为参数
// var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// var p = Promise.all(resolvedPromisesArray);
// // 立刻打印p的值
// console.log(p);

// // 使用setTimeout我们可以在stack为空时执行代码
// setTimeout(function(){
//     console.log('the stack is now empty');
//     console.log(p);
// });


//如果任意一个元素是rejected，那么Promise.all就是rejected。
//例如，如果你传递了五个参数，其中四个是经过一定时间间隔后执行resolve，另外一个立刻执行reject，那么Promise.all将会立刻执行reject。
console.log('=================2====================')
var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, 'one'); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, 'two'); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
// var p5 = new Promise((resolve, reject) => {
//   reject('reject');
// });


//You can also use .catch
Promise.all([p1, p2, p3, p4]).then(values => { 
  console.log(values);
}).catch(reason => { 
  console.log(reason)
});

//From console: 
//"reject"

console.log('=================3====================')
// [ 'one', 'two', 'three', 'four' ]




