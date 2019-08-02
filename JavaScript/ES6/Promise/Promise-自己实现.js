/*
2015年6月，ES2015（即ES6）正式发布后受到了非常多的关注。
其中很重要的一点是 Promise 被列为了正式规范。
在此之前很多库都对异步编程/回调地狱实现了类 Promise 的应对方案，
比如 bluebird、Angular 的 Q 和大名鼎鼎的 jQuery 的 deffered 等。

作者：blackandgray
链接：https://juejin.im/post/5afa8be66fb9a07ac162926e
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

// Promise A+ 规范规定，Promise 有三种状态，
// 分别是 pending（默认状态，代表等待）、fulfilled（代表成功）、rejected（代表失败）。

// Promise 类的实现
var Promise = function (executor) {
	// body...
	console.log('证明不是用的原生 Promise...');
	var self = this;
	this.status = 'pending';
	// 默认状态，可以转化为 resolved 和 rejected
	this.successVal = undefined;
    this.failVal = undefined;

    // 执行了成功或失败后，要将状态对应修改成成功和失败
    function resolve (val) {
    	if (self.status === 'pending') {
    		self.status = 'resolved';
    		self.successVal = val;
    	}
    }

    function reject (val) {
    	if (self.status === 'pending') {
    		self.status = 'rejected';
    		self.failVal = val;
    	}
    }

    try {
        // 应该还记得，Promise 的参数是一个函数吧，我们称之为 executor（执行器）
        // 同时这个函数接收2个参数，分别是成功和失败的回调函数
        executor(resolve, reject)
    } catch (e) {
        // 如果发生异常，直接reject捕获
        reject(e)
    }

}

// then 方法接收2个参数，分别是成功和失败的回调函数
Promise.prototype.then = function (onFulfilled, onRejected) {
	var self = this;
	// 显然要根据当前状态来执行成功或失败的回调了
    if ( self.status === 'resolved' ) {
        onFulfilled(self.successVal)
    }
    if ( self.status === 'rejected' ) {
        onFulfilled(self.failVal)
    }
}


// 试下效果
var fn = new Promise(function (resolve, reject) {
	resolve('Fuck you Baby!')
})

fn.then(function (data) {
	console.log('success: ', data);
},function(err) {
	console.log('err: ', err);
})

/*
➜  Promise git:(master) ✗ node Promise-实现.js
证明不是用的原生 Promise...
success:  Fuck you Baby!
*/




