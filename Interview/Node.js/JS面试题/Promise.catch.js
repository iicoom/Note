/***********************************************************************************
 * Promise catch的作用
 ************************************************************************************/
// 1.
// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error!')})
//     .catch(() => 1)                  // 此处的catch并不会捕获上边抛出的错误，而是返回了1
//     .then((x) => x + 1)
//     .then((x) => console.log(x))
//     .catch(console.error)            // 只要上面的catch没有捕获err,就会传到下面的catch输出

// 输出结果为 2

// 2. 
// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error!')})
//     .then((x) => x + 1)
//     .then((x) => console.log(x))
//     .catch(console.error)       // 错误会传递到最后的catch捕获，似乎中间的then没有执行

// Error: My Error!
// at Promise.resolve.then.then (/Users/mxj/Repo/Note/Interview/Node.js/JS面试题/Promise.js:16:26)
// at process._tickCallback (internal/process/next_tick.js:68:7)
// at Function.Module.runMain (internal/modules/cjs/loader.js:745:11)
// at startup (internal/bootstrap/node.js:279:19)
// at bootstrapNodeJSCore (internal/bootstrap/node.js:752:3)


// 3.
// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error!')})
//     .catch((err) => err)          // 此处会把err返回到下一个then
//     .then((x) => x + 1)
//     .then((x) => console.log(x))  // 此处的then 没有返回值 下边的catch不会执行
//     .catch(console.error)         // 错误已经被上面的catch捕获，此处的catch没有错误可以输出   

// 输出结果 Error: My Error!1


/************************************************************************************
 * throw new Error 与 Promise.reject('error')的区别
 ************************************************************************************/
/*
var p1 = new Promise(function(resolve, reject) {
    resolve('Success');
  });

p1.then((value) => {
    console.log(value);
    // throw new Error();                     // 没有message的err
    throw new Error('this is err message');
// }).catch(e => console.error(typeof e))  // object
// }).catch(console.error)                 // 这种为简写 err会出入console.err function
}).catch(e => console.error(e.message))    
*/
// 输出
// Success
// this is err message


// The following behaves the same as above
// p1.then(function(value) {
//     console.log(value); // "Success!"
//     return Promise.reject('oh, no!');
//   }).catch(function(e) {
//     console.error(e); // "oh, no!"
//   })

// 输出
// Success
// oh, no!


// Errors thrown inside asynchronous functions will act like uncaught errors
// var p2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       throw new Error('Uncaught Exception!');
//     }, 1000);
//   });
  
// p2.catch(function(e) {
//     console.error(e); // This is never called
// });


// Errors thrown after resolve is called will be silenced
var p3 = new Promise(function(resolve, reject) {
    resolve();
    throw new Error('Silenced Exception!');
  });
  
p3.catch(function(e) {
    console.error(e); // This is never called
});