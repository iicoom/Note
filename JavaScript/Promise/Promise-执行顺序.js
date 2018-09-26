// 看Promise的执行顺序
new Promise(resolve => {
    console.log(1);
    resolve(3);
})
.then(num => {
    console.log(num)
});
console.log(2)

// 这道题的输出是123


// 如果在promise里面再加一个promise：

new Promise(resolve => {
    console.log(1);
    resolve(3);
    Promise.resolve().then(()=> console.log(4))
}).then(num => {
    console.log(num)
});
console.log(2)

// 执行顺序是1243，第二个Promise的顺序会比第一个的早，所以直观来看也是比较奇怪，这是为什么呢？







