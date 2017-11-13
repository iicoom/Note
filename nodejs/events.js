//大多数 Node.js 核心 API 都采用惯用的异步事件驱动架构，其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器）
//所有能触发事件的对象都是 EventEmitter 类的实例,这些对象开放了一个 eventEmitter.on() 函数

//eventEmitter.on() 方法用于注册监听器，eventEmitter.emit() 方法用于触发事件
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
	console.log('触发了一个事件！')
})

myEmitter.emit('event')


//也可以使用 ES6 的箭头函数作为监听器。但是这样 this 关键词就不再指向 EventEmitter 实例：
/*
const youEmitter = new MyEmitter()
youEmitter.on('beat', (a, b) => {
	console.log(a,b, this);
	//打印 a b {}
})
youEmitter.emit('beat', 'a','b')
*/


// EventListener 会按照监听器注册的顺序同步地调用所有监听器。 
// 所以需要确保事件的正确排序且避免竞争条件或逻辑错误。 
// 监听器函数可以使用 setImmediate() 或 process.nextTick() 方法切换到异步操作模式：

//使用 eventEmitter.once() 方法时可以注册一个对于特定事件最多被调用一次的监听器。
const hisEmitter = new MyEmitter()
let m = 0;
hisEmitter.once('walk', () => {
	console.log(++m)
})
hisEmitter.emit('walk');// 打印: 1

hisEmitter.emit('walk');// 忽略


//作为最佳实践，应该始终为 'error' 事件注册监听器
const errEmitter = new MyEmitter()
errEmitter.on('error', (err) => {
  console.error('有错误');
});
errEmitter.emit('error', new Error('whoops!'));
// 打印: 有错误










