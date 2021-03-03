console.log('script start');

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

setImmediate(function() {
    console.log('setImmediate')
})

setTimeout(function() {
    console.log('setTimeout 0')
}, 0)

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