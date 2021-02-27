/**
 * 自己封装一个Promise类
 */
// class MyPromise {
    
//     constructor(callback) {
//         callback(this.resolve, this.reject)
//     }

//     status = "pending" // 成功 => fulfilled 失败 => rejected
        
//     // fulfilled 后的值
//     value = null

//     // rejected 的原因
//     reason = null

//     resolve = val => {
//         // 1. 先判断当前状态是否为“pending”, 说明状态已经发生改变不能再修改状态
//         if (this.status !== "pending") return;
//         // 2. 更新status 和 value
//         this.status = "fulfilled";
//         this.value = val;
//     }

//     reject = reason => {
//         // 1. 先判断当前状态是否为“pending”, 说明状态已经发生改变不能再修改状态
//         if (this.status !== "pending") return;
//         // 2. 更新status 和 reason
//         this.status = "rejected";
//         this.reason = reason;
//     }

//     /**
//      * 判断当前状态，传入回调函数
//      * @param {*} successCallback 
//      * @param {*} failCallback 
//      */
//     then = (successCallback, failCallback) => {
        
//         if (this.status === "fulfilled") {
//             successCallback(this.value)
//         }

//         if (this.status === "rejected") {
//             failCallback(this.reason)
//         }
//     }
// }


// ES6 Promise 用法
// new Promise((resolve, reject) => {
//     reject("error")
// }).then(() =>{}, reason => {
//     console.log(reason)
// })

// new MyPromise((resolve, reject) => {
//     // resolve("ok")
//     reject("error")
// }).then(res => {}, reason => {
//     console.log(reason)
// })
// 到此实现了最基本的Promise，现在还不能处理异步


// 在then中加异步处理,同时优化then中的回调参数可选(提现在resolve 和 reject中)
// class MyPromise {
    
//     constructor(callback) {
//         callback(this.resolve, this.reject)
//     }

//     status = "pending" // 成功 => fulfilled 失败 => rejected
//     // fulfilled 后的值
//     value = null

//     // rejected 的原因
//     reason = null

//     successCallback = null
//     failCallback = null

//     resolve = val => {
//         // 1. 先判断当前状态是否为“pending”, 说明状态已经发生改变不能再修改状态
//         if (this.status !== "pending") return;
//         // 2. 更新status 和 value
//         this.status = "fulfilled";
//         this.value = val;
//         // 3. 判断成功回调是否存在 如果存在则调用
//         this.successCallback && this.successCallback(this.value);
//     }

//     reject = reason => {
//         // 1. 先判断当前状态是否为“pending”, 说明状态已经发生改变不能再修改状态
//         if (this.status !== "pending") return;
//         // 2. 更新status 和 reason
//         this.status = "rejected";
//         this.reason = reason;
//         // 3. 判断失败回调是否存在 如果存在则调用
//         this.failCallback && this.failCallback(this.reason);
//     }

//     /**
//      * 判断当前状态，传入回调函数
//      * @param {*} successCallback 
//      * @param {*} failCallback 
//      */
//     then = (successCallback, failCallback) => {
        
//         if (this.status === "fulfilled") {
//             successCallback(this.value)
//         } else if (this.status === "rejected") {
//             failCallback(this.reason)
//         } else {
//             // pending 状态
//             this.successCallback = successCallback
//             this.failCallback = failCallback
//         }
//     }
// }

// new MyPromise((resolve, reject) => {
//     // resolve("ok")
//     // reject("error")
//     setTimeout(() => {resolve("ok")}, 1000)
// }).then(res => {
//     console.log(res)
// })


// 上边只实现了一次异步调用，改造successCallback，failCallback为数组
class MyPromise {
    
    constructor(callback) {
        callback(this.resolve, this.reject)
    }

    status = "pending" // 成功 => fulfilled 失败 => rejected
    // fulfilled 后的值
    value = null

    // rejected 的原因
    reason = null

    successCallback = []
    failCallback = []

    resolve = val => {
        // 1. 先判断当前状态是否为“pending”, 说明状态已经发生改变不能再修改状态
        if (this.status !== "pending") return;
        // 2. 更新status 和 value
        this.status = "fulfilled";
        this.value = val;
        // 3. 判断成功回调是否存在 如果存在则调用
        // this.successCallback && this.successCallback(this.value);

        // 4. 以数组的长度作为条件，将前面的回调函数弹出并调用 shift()方法的返回值就是我们需要的函数
        // 每当执行一次数组就会删除一个，数组长度为零时就不再执行
        while (this.successCallback.length) this.successCallback.shift()(this.value)
    }

    reject = reason => {
        // 1. 先判断当前状态是否为“pending”, 说明状态已经发生改变不能再修改状态
        if (this.status !== "pending") return;
        // 2. 更新status 和 reason
        this.status = "rejected";
        this.reason = reason;
        // 3. 判断失败回调是否存在 如果存在则调用
        // this.failCallback && this.failCallback(this.reason);

        // 4. 以数组的长度作为条件，将前面的回调函数弹出并调用 shift()方法的返回值就是我们需要的函数
        // 每当执行一次数组就会删除一个，数组长度为零时就不再执行
        while (this.failCallback.length) this.failCallback.shift()(this.reason)
    }

    /**
     * 判断当前状态，传入回调函数
     * @param {*} successCallback 
     * @param {*} failCallback 
     */
    then = (successCallback, failCallback) => {
        
        // 创建一个新的promise对象 并返回
        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if (this.status === "fulfilled") {
                // 将回调的结果传给下一个then方法
                const x = successCallback(this.value)
                resolve(x)
            } else if (this.status === "rejected") {
                // 将回调的结果传给下一个then方法
                failCallback(this.reason)
            } else {
                // 等待状态 
                // 将成功回调和失败回调保存起来
                this.successCallback.push(successCallback);
                this.failCallback.push(failCallback);
            }
        });
        return promise2
    }
}

new MyPromise((resolve, reject) => {
    // resolve("ok")
    // reject("error")
    setTimeout(() => {resolve("ok1")}, 1000)
}).then(res => {
    console.log(res)
}).then(res => {
    console.log(res)
})

// todo catch finally..

module.exports = MyPromise;