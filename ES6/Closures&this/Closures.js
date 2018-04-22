function sayHello(name) {
    let str = `Hello,${name}`;
    function say() {
        console.log(str);
    }
    return say;
}

let myHello = sayHello('abby');
myHello(); // Hello,abby

/*
上面这段代码，其实就形成了一个闭包，其中在 sayHello 这个函数里面定义的函数 say 和其声明它的词法环境就形成了一个闭包，
因为它引用了sayHello 里面定义的一个变量 str，并且将 say 这个函数 return 了出去，
这样在 sayHello 这个函数的外面也能访问它里面定义的变量 str，就好像 say 这个函数和这个变量绑定了一样。
*/

/*
看到这里可能会疑问为什么在外部还能访问到这个变量呢，因为在有些语言中，
一般认为函数的局部变量只在函数的执行期间可访问。说到这里又不得不说到执行环境
 */

/*
其实当执行到let myHello = sayHello('abby');这段代码的时候按理会销毁掉 sayHello()的执行环境，但是这里却没有，
原因是因为 sayHello() 返回的是一个函数，这个函数里面的 str 引用了外部的变量 str,
如果销毁了就找不到了，因此 sayHello() 这个函数的执行环境会一直在内存中，所以会有闭包会增加内存开销balabala之类的。
 */

// 栗子1: 闭包并不是一定需要 return 某个函数
let say;
function sayHello(name) {
    let str = `Hello,${name}`;
    say = function() {
        console.log(str);
    }
}
let myHello = sayHello('abby');
say(); // Hello,abby

// 栗子2: 同一个调用函数生成同一个闭包环境，在里面声明的所有函数同时具有这个环境里面自由变量的引用。
let get, up, down
function setUp() {
    let number = 20
    get = function() {
        console.log(number);
    }
    up = function() {
        number += 3
    }
    down = function() {
        number -=2;
    }
}
setUp();
get(); // 20
up();
down();
get(); // 21

// 栗子3: 每一个调用函数都会创建不同的闭包环境。
function newClosure() {
    let array = [1, 2];
    return function(num) {
        array.push(num);
        console.log(`array:${array}`);
    }
}
let myClosure = newClosure();
let yourClosure = newClosure();
myClosure(3); // array:1,2,3
yourClosure(4); // array:1,2,4
myClosure(5); // array:1,2,3,5

// 上面这个例子里面， myClosure 和 yourClosure 的赋值语句，也就是 newClosure 这个函数被调用了两次，
// 因此创建了两个不同的闭包环境，因此里面的变量是互不影响的。

// 栗子4: 在循环里面创建闭包
// 在 let 被引入之前，一个常见的错误就是在循环中创建闭包，例如：
function newClosure() {
    for(var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        })
    }
}
newClosure(); // 5个5
// 打印的结果大家也知道是5个5，因为 setTimeout 里面的函数保持对 i 的引用，在setTimeout的回调函数被执行的时候这个循环早已经执行完成，
// 这里我之前在另一篇文章里面做过更深入的介绍：深入浅出Javascript事件循环机制(上)。

function log(i) {
    return function() {
        console.log(i);
    }
}

function newClosure() {
    for(var i = 0; i < 5; i++) {
        setTimeout(log(i));
    }
}
newClosure(); // 0 1 2 3 4

// 另一种做法就是使用自执行函数，外部的匿名函数会立即执行，并把 i 作为它的参数，此时函数内 e 变量就拥有了 i 的一个拷贝。
// 当传递给 setTimeout 的匿名函数执行时，它就拥有了对 e 的引用，而这个值是不会被循环改变的。写法如下：
function newClosure() {
    for(var i = 0; i < 5; i++) {
        (function(e) {
            setTimeout(function() {
                console.log(e);
            })
        })(i)
    }
}
newClosure(); // 0 1 2 3 4


/*
A Note on Closures
JavaScript’s support for closures allow you to register callbacks that, 
when executed, maintain access to the environment in which they were created even though the execution of 
the callback creates a new call stack entirely. 
This is particularly of interest knowing that our callbacks are called as part of a different message 
than the one in which they were created. Consider the following example:
*/
function changeHeaderDeferred() {
  var header = document.getElementById("header");
  
  setTimeout(function changeHeader() {
    header.style.color = "red";

    return false;
  }, 100);

  return false;
}

changeHeaderDeferred();
/*
In this example, the changeHeaderDeferred function is executed which includes variable header. 
The function setTimeout is invoked, which causes a message (plus the changeHeader callback) 
to be added to the message queue approximately 100 milliseconds in the future. 
The changeHeaderDeferred function then returns false, ending the processing of the 
first message – but the header variable is still referenced via a closure and is not garbage collected.
 When the second message is processed (the changeHeader function) it maintains access to the header 
 variable declared in the outer function’s scope. 
 Once the second message (the changeHeader function) is processed, 
 the header variable can be garbage collected.
 */


for(var i=1; i<10;i++) {
    setTimeout(function(){console.log(i)})
}
/*
9个10
*/

for(var i=1; i<10;i++) {
    setTimeout(console.log(i))
}

/*
1
2
3
4
5
6
7
8
9
*/

for(var i=1; i<10;i++) {
    (function(i){
        console.log(i)
    })(i)
}
/*
1
2
3
4
5
6
7
8
9
*/




