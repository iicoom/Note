/*
Promise的三种状态：

pending、fulfilled、rejected(未决定，履行，拒绝)，同一时间只能存在一种状态,且状态一旦改变就不能再变。
promise是一个构造函数，promise对象代表一项有两种可能结果（成功或失败）的任务，它还持有多个回调，出现不同结果时分别发出相应回调。

1.初始化，状态：pending
​
2.当调用resolve(成功)，状态：pengding=>fulfilled
​
3.当调用reject(失败)，状态：pending=>rejected
*/