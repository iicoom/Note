# Decorators

> Similar to Annotations in Java but unlike Java annotations, decorators are functions which are applied at runtime.
>
> ES7的Decorators让我们能够在设计时对类、属性等进行标注和修改成为了可能。Decorators利用了ES5的

```text
Object.defineProperty(target, name, descriptor);
```

首先我们来考虑一个普通的ES6类：

```text
class Person {
  name() { return `${this.first} ${this.last}` }
}
```

执行这一段class，给Person.prototype注册一个name属性，粗略的和如下代码相似：

```text
Object.defineProperty(Person.prototype, 'name', {
  value: specifiedFunction,
  enumerable: false,
  configurable: true,
  writable: true
});
```

## 作用域类上

同样Decorators也可以为class装潢，如下对类是否annotated的标注：

```text
// A simple decorator
@annotation
class MyClass { }

function annotation(target) {
   // Add a property on target
   target.annotated = true;
}
```

在很多框架和库中看到它的身影，尤其是React和Redux，还有mobx中，那什么是装饰器呢。

修饰器（Decorator）是一个函数，用来修改类的行为。不是很理解这种抽象概念，还是看代码讲解实际些。

```text
//定义一个函数，也就是定义一个Decorator，target参数就是传进来的Class。
//这里是为类添加了一个静态属性
function addAge(target) {
  target.age = 2;
}

//在Decorator后面跟着Class，Decorator是函数的话，怎么不是addAge(MyGeekjcProject)这样写呢？
//我只能这样理解：因为语法就这样，只要Decorator后面是Class，默认就已经把Class当成参数隐形传进Decorator了(就是所谓的语法糖)。
@addAge
class MyGeekjcProject {}

console.log(MyGeekjcProject.age) // 2
```

