console.log('a')
var p1 = new Promise((resolve, reject) => {
    console.log('c')
    setTimeout(() => {
        console.log('d')
        resolve()
        reject('here is an error')  // 这里的代码不会被调用，因为Promise的状态已经resolve 不会再发生改变
        resolve()
    }, 10)
    setTimeout(() => { console.log('h')})
})

p1.then((res) => {
    console.log('e')
})

p1.then((res) => {
    console.log('f')
})

p1.catch((e) => console.log(e))    // 此处也不能捕获到上边reject的错误，因为reject没有执行

console.log('b')

// 输出顺序如下：
// a
// c
// b
// h
// d
// e
// f