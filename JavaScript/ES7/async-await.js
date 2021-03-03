/*
Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. 
Let me repeat: async/await is built on promises.

They were good primitives around which a better syntax could be exposed to the developers, so when the time was right we got async functions.

They make the code look like it's synchronous, but it's asynchronous and non-blocking behind the scenes.
async 成了首选的方案给出了更简洁的语法，它使异步方法看起来像是同步的形式，而且是异步非阻塞的。

Easier debugging 优点
Debugging promises is hard because the debugger will not step over asynchronous code.

Async/await makes this very easy because to the compiler it's just like synchronous code.
*/

async function oo() {
	console.log("log: 1")
}
// oo()
// 1
// Promise {<resolved>: undefined}

async function kk() {
	return 1;
}
// kk()
// Promise {<resolved>: 1}

function pp() {
    return Promise.resolve(2)
}

async function getResult() {
    console.log(await oo())
    console.log(await kk())
    console.log(await pp())
}
getResult()
// log: 1
// undefined
// 1
// 2