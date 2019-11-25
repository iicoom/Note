## 函数作用域
The arrow function has resolved one very confusing aspect of JavaScript — the one I like to call the this pointer uncertainty.
箭头函数解决了一个令人困扰的问题，就是this指向问题。

```JavaScript
const message = "Hello World";

function printMessage(){
    const innerMsg = "Hello, from inner"
    console.log(this.message);
    console.log(this.innerMsg);
};
printMessage();    
// undefined
// undefined             


var jsObject = {
    message: "print in jsObject",
    printMessageES5:function (){
     console.log('printMessageES5', this.message);
    },
    printMessageES6:() => {
     console.log('printMessageES6', this.message);
    },
    printDelayES5: function (){
        setTimeout(function(){console.log('printDelayES5', this.message)}, 0)
    },
    printDelayES6: function (){
        setTimeout(() => { console.log('printDelayES6', this.message)}, 0)
    }
};
jsObject.printMessageES5();      // printMessageES5 print in jsObject
jsObject.printMessageES6();      // printMessageES6 undefined
jsObject.printDelayES5();        // printDelayES5 undefined
jsObject.printDelayES6();        // printDelayES6 print in jsObject
```

### => 和 function的区别
=>不只是关键字function的简写，它还带来了其它好处。箭头函数与包围它的代码共享同一个this,能帮你很好的解决this的指向问题。有经验的JavaScript开发者都熟悉诸如
var self = this;
或var that = this这种引用外围this的模式。但借助=>，就不需要这种模式了。

语法：
箭头函数的几种变型
() => { … }           // no argument
 x => { … }           // one argument
(x, y) => { … }       // several arguments

x => { return x * x } // block
x => x * x            // expression, same as above

Lambda expressions in JavaScript! Cool!
So instead of writing:
[3, 4, 5].map(function (n) {
 return n * n;
});

.. you can write something like this:
[3, 4, 5].map(n => n * n);

### 箭头函数的特点
- Syntactically anonymous  匿名函数
带来的2个问题：
  1. Harder to debug：发生错误不容易定位
  2. No self-referencing：不能自我引用，如使用 递归，或者解除事件监听函数

- Main benefit: No binding of ‘this’ 最主要的好处 不用绑定this
In classic function expressions, the this keyword is bound to different values based on the context in which it is called. With arrow functions however, this is lexically bound. It means that it uses this from the code that contains the arrow function.
在传统的函数表达式中，this关键字随着被调用的上下文环境的不同会被绑定不同的值。箭头函数中的this则是指向包含的的地方。

ES5中解决this绑定的方法：
```JavaScript
var obj = {
    id: 42,
    counter: function counter() {
        setTimeout(function() {
            console.log(this.id);
        }, 1000)
    }
};
console.log(obj.counter())
// counter 没有this.id 属性，打印出的是undefined

// In the ES5 example, .bind(this) is required to help pass the this context into the function. Otherwise, by default this would be undefined.

var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};


// 可以用下面方法实现
var obj = {
    id: 42,
    counter: function counter() {
        var that = this;
        setTimeout(function() {
            console.log("this.id", this.id);
            console.log("that.id", that.id);
        }, 1000)
    }
};
console.log(obj.counter())
// that.id 42

// ES6 箭头函数
// ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, 
// and use the value of this in the scope in which it was defined.
// ES6 箭头函数中 this会自动到上级作用域中查找this
var obj = {
    id: 42,
    counter: function counter() {
        setTimeout(() => {
            console.log("this.id:", this.id);
        }, 1000)
    }
};
obj.counter()
// this.id: 42
```

- When you should not use Arrow Functions 什么时候不该用箭头函数
  1. Object methods
  ```JavaScript
  var cat = {
    lives: 9,
    jumps: () => {
      console.log(this.lives)
      this.lives--;
    }
  }
  <!-- 这里的this.lives是undefined, 因为他会指向cat对象的父级 -->

  <!-- 反而使用命名函数可以达到效果 -->
  var cat = {
    lives: 9,
    jumps: function () {
      console.log(this.lives)
      this.lives--;
    },
  }

  cat.jumps()
  console.log(cat.lives)
  9
  8
  ```

  2. Callback functions with dynamic context 前端dom元素的事件监听函数
  ```
  var button = document.getElementById('press');
  button.addEventListener('click', () => {
    this.classList.toggle('on');
  });  
  ```
  If we click the button, we would get a TypeError. It is because this is not bound to the button, but instead bound to its parent scope.

适合用在map 或reduce中时代码变得可读性更好
Despite the fact that they are anonymous, I also like using them with methods such as map and reduce, because I think it makes my code more readable. To me, the pros outweigh the cons.

### this 指向问题
见 JavaScript 根目录 ../JS-this-call-apply-bind.md



