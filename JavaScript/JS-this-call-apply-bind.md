> JavaScript 中最容易被误解的一点就是 this 关键字。在这篇文章中，你将会了解四种规则，弄清楚 this 关键字指的是什么。隐式绑定、显式绑定、new 绑定和 window 绑定。在介绍这些技术时，你还将学习一些 JavaScript 其他令人困惑的部分，例如 .call、.apply、.bind和 new 关键字。
https://juejin.im/post/5b9f176b6fb9a05d3827d03f

## 隐式绑定
```
const user = {
  name: 'Tyler',
  age: 27,
  greet() {
    alert(`Hello, my name is ${this.name}`)
  },
  mother: {
    name: 'Stacey',
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }
}
```
- user.greet() // Tyler
- user.mother.greet() // Stacey

每当判断 this 的引用时，我们都需要查看调用过程，并确认“点的左侧”是什么。第一个调用，user 在点左侧意味着 this 将引用 user。第二次调用中，mother 在点的左侧意味着 this 引用 mother。

但是，如果没有点呢?

## 显式绑定
如果 greet 函数不是 user 对象的函数，只是一个独立的函数。
```
function greet () {
  alert(`Hello, my name is ${this.name}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}
```
我们知道为了判断 this 的引用我们首先必须查看这个函数的调用位置。现在就引出了一个问题，我们怎样能让 greet 方法调用的时候将 this 指向 user 对象？。我们不能再像之前那样简单的使用 user.greet()，因为 user 并没有 greet 方法。在 JavaScript 中，每个函数都包含了一个能让你恰好解决这个问题的方法，这个方法的名字叫做 call。

> “call” 是每个函数都有的一个方法，它允许你在调用函数时为函数指定上下文。

考虑到这一点，用下面的代码可以在调用 greet 时用 user 做上下文。

```
greet.call(user)
```
再强调一遍，call 是每个函数都有的一个属性，并且传递给它的第一个参数会作为函数被调用时的上下文。换句话说，this 将会指向传递给 call 的第一个参数。

浏览器中调用 正常弹出Tyler
```
(function greet () {
  alert(`Hello, my name is ${this.name}`)
}).call(user)
```

在绑定的而上下文 后面传其他参数
```
function greet (lang1, lang2, lang3) {
  alert(`Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(user, languages[0], languages[1], languages[2])

```
结果如下
Hello, my name is Tyler and I know JavaScript, Ruby, and Python

方法奏效，它显示了如何将参数传递给使用 .call 调用的函数。不过你可能注意到，必须一个一个传递 languages 数组的元素，这样有些恼人。如果我们可以把整个数组作为第二个参数并让 JavaScript 为我们自动展开就好了。有个好消息，这就是 .apply 干的事情。.apply 和 .call 本质相同，但不是一个一个传递参数，你可以用数组传参而且 .apply 会在函数中为你自动展开。
那么现在用 .apply，我们的代码可以改为下面这个，其他一切都保持不变。

```
const languages = ['JavaScript', 'Ruby', 'Python']

// greet.call(user, languages[0], languages[1], languages[2])
greet.apply(user, languages)

```

到目前为止，我们学习了关于 .call 和 .apply 的“显式绑定”规则，用此规则调用的方法可以让你指定 this 在方法内的指向。关于这个规则的最后一个部分是 .bind。.bind 和 .call 完全相同，除了不会立刻调用函数，而是返回一个能以后调用的新函数。因此，如果我们看看之前所写的代码，换用 .bind，它看起来就像这样
```
function greet (lang1, lang2, lang3) {
  alert(`Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"

```

## new 绑定
第三条判断 this 引用的规则是 new 绑定。若你不熟悉 JavaScript 中的 new 关键字，其实每当用 new 调用函数时，JavaScript 解释器都会在底层创建一个全新的对象并把这个对象当做 this。如果用 new 调用一个函数，this 会自然地引用解释器创建的新对象。
```
function User (name, age) {
  /*
    JavaScript 会在底层创建一个新对象 `this`，它会代理不在 User 原型链上的属性。
    如果一个函数用 new 关键字调用，this 就会指向解释器创建的新对象。
  */

  this.name = name
  this.age = age
}

const me = new User('Tyler', 27)

```

## window 绑定
不出意外，你会得到 My name is undefined，因为 this.age 是 undefined。事情开始变得神奇了。实际上这是因为点的左侧没有任何东西，我们也没有用 .call、.apply、.bind 或者 new 关键字，JavaScript 会默认 this 指向 window 对象。这意味着如果我们向 window 对象添加 age 属性并再次调用 sayAge 方法，this.age 将不再是 undefined 并且变成 window 对象的 age 属性值。不相信？让我们运行这段代码

```
function sayAge () {
  console.log(`My age is ${this.age}`)
}

const user = {
  name: 'Tyler',
  age: 27
}

```
如前所述，如果你想用 user 做上下文调用 sayAge，你可以使用 .call、.apply 或 .bind。但如果我们没有用这些方法，而是直接和平时一样直接调用 sayAge 会发生什么呢？
```
sayAge() // My age is undefined



window.age = 27

function sayAge () {
  console.log(`My age is ${this.age}`)
}

非常神奇，不是吗？这就是第 4 条规则为什么是 window 绑定 的原因。如果其它规则都没满足，JavaScript就会默认 this 指向 window 对象。

```

> 在 ES5 添加的 严格模式 中，JavaScript 不会默认 this 指向 window 对象，而会正确地把 this 保持为 undefined。
```
'use strict'

window.age = 27

function sayAge () {
  console.log(`My age is ${this.age}`)
}

sayAge() // TypeError: Cannot read property 'age' of undefined
```






