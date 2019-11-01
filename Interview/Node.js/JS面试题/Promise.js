/**
 * Promise catch的作用
 */
// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error!')})
//     .catch(() => 1)
//     .then((x) => x + 1)
//     .then((x) => console.log(x))
//     .catch(console.error)

// 输出结果为 2

/**
 * .catch(() => 2) 这样的catch 只会把结果返回给下一个then
 */
// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error!')})
//     .catch(() => 2)
//     .then((x) => x + 1)
//     .then((x) => console.log(x))
//     .catch(console.error)

// 输出为 3


// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error!')})
//     .catch((err) => err)
//     .then((x) => x + 1)
//     .then((x) => console.log(x))  // 此处的then 没有返回值 下边的catch不会执行
//     .catch(console.error)

// 输出结果 Error: My Error!1


// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error!')})
//     .catch((err) => err)
//     .then((x) => x + 1)
//     .catch(console.error)
// 不会打印出任何内容


Promise.resolve(1)
    .then((x) => x + 1)
    .then((x) => { throw new Error('My Error!')})
    .catch((e) => console.log(e))
    .then((x) => x + 1)
    .catch((e) => console.log(e))

// Error: My Error!
// at Promise.resolve.then.then (/Users/mxj/Repo/Note/Interview/Node.js/JS面试题/Promise.js:50:26)
// at process._tickCallback (internal/process/next_tick.js:68:7)
// at Function.Module.runMain (internal/modules/cjs/loader.js:745:11)
// at startup (internal/bootstrap/node.js:279:19)
// at bootstrapNodeJSCore (internal/bootstrap/node.js:752:3)