# 异步迭代

## [异步迭代器](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)

## 模拟一个异步耗时操作

```text
function doSomething(i) {
    setTimeout(function() {console.log(i)}, 2000)
}

进行异步迭代操作
async function process(arr) {
    for (let i of arr) {
        await doSomething(i)
    }
}
或者
async function process(arr) {
    arr.forEach(async i => {
        await doSomething(i)
    })
}
或者
async function process2(arr) {
    for await (let i of arr) {
        doSomething(i)
    }
}
都会使迭代异步以同步的方式调用，2000后一起打印了迭代结果


ES2018引入了异步迭代器（asynchronous iterators）next() 方法返回一个Promise
可以await 和 for...of 循环一起使用
```

