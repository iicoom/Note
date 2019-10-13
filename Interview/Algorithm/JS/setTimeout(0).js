// What does setTimeout with a 0ms delay do? 
// What setTimeout does is it schedules a function to run later. 

// So using setTimeout(..., 0) will basically make your code run after the current event loop tick. 

// This means that if your code is very timing sensitive, you may run into problems. 
// Use postMessage to ensure immediate execution in the next event loop tick.

setTimeout(function(){
    console.log(-1);
}, 0)

for(var i = 0; i< 5; i++) {
    (function() {
        console.log(i);
    })()
}

setTimeout(function() {
    console.log(-2);
}, 0)

/* 输出结果如下
0
1
2
3
4
342
-1
-2
*/

// http://voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/