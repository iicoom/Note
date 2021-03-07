console.log('script start');

Promise.resolve().then(function() {
  console.log('promise');
}).then(function() {
  console.log('promise-then');
});

setImmediate(function() {
    console.log('setImmediate')
})

setTimeout(function() {
    console.log('setTimeout 0')
}, 0)

setTimeout(function() {
    return new Promise(resolve => {
        console.log('setTimeout-delay 100ms promise')
        resolve()
    }).then(res => {
        console.log('setTimeout-delay 100ms promise.then')
    })
}, 100)

process.nextTick(function() {
    console.log('process.nextTick')
})

console.log('script end');

/*
script start
script end
process.nextTick
promise1
promise2
setTimeout 0
setImmediate
*/

