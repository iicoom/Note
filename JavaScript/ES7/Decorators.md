> Similar to Annotations in Java but unlike Java annotations, decorators are functions which are applied at runtime.

## Python 中的装饰器
```py
def decorator(f):
    print "my decorator"
    return f

@decorator
def myfunc():
    print "my function"

myfunc()

# my decorator
# my function
```
通过代码我们也不难看出，装饰器 decorator 接收一个参数，也就是我们被装饰的目标方法，处理完扩展的内容以后再返回一个方法，供以后调用，同时也失去了对原方法对象的访问。

## [Javascript 中的装饰器](https://aotu.io/notes/2016/10/24/decorator/index.html)

> ES7的Decorators让我们能够在设计时对类、属性等进行标注和修改成为了可能。Decorators利用了ES5的

```
Object.defineProperty(target, name, descriptor);
```


首先我们来考虑一个普通的ES6类：
```
class Cat {
    say() {
        console.log("meow ~");
    }
}
```
执行这一段class，给Cat.prototype注册一个say属性，粗略的和如下代码相似：

```js
function Cat() {}

Object.defineProperty(Cat.prototype, "say", {
    value: function() { console.log("meow ~"); },
    enumerable: false,
    configurable: true,
    writable: true
});
```

## 作用在类上
同样Decorators也可以为class装潢，如下对类是否annotated的标注：
```js
function isAnimal(target) {
    target.isAnimal = true;
  	return target;
}

@isAnimal
class Cat {
    ...
}

console.log(Cat.isAnimal);    // true
```

在很多框架和库中看到它的身影，尤其是React和Redux，还有mobx中，那什么是装饰器呢。

修饰器（Decorator）是一个函数，用来修改类的行为。不是很理解这种抽象概念，还是看代码讲解实际些。
```js
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

## 作用于类属性的装饰器
比如有的时候，我们希望把我们的部分属性置成只读，以避免别人对其进行修改，如果使用装饰器的话，我们可以这样来做：
```js
function readonly(target, name, descriptor) {
    discriptor.writable = false;
    return discriptor;
}

class Cat {
    @readonly
    say() {
        console.log("meow ~");
    }
}

var kitty = new Cat();

kitty.say = function() {
    console.log("woof !");
}

kitty.say()    // meow ~
```
我们通过上面的代码把 say 方法设置成了只读，所以在我们后面再次对它赋值的时候就不会生效，调用的还是之前的方法。

在上面的代码中我们可以看到，我们在定义装饰器的时候，参数是有三个，target、name、descriptor 。

没错，就是我们上文提到过的关于类的定义那一块儿的 Object.defineProperty 的参数，所以其实装饰器在作用于属性的时候，实际上是通过 Object.defineProperty 来进行扩展和封装的。

我们可以看出，当装饰器作用于类本身的时候，我们操作的对象也是这个类本身，而当装饰器作用于类的某个具体的属性的时候，我们操作的对象既不是类本身，也不是类的属性，而是它的描述符（descriptor），而描述符里记录着我们对这个属性的全部信息，所以，我们可以对它自由的进行扩展和封装，最后达到的目的呢，就和之前说过的装饰器的作用是一样的。

当然，如果你喜欢的话，也可以直接在 target 上进行扩展和封装，比如
```js
function fast(target, name, descriptor) {
    target.speed = 20;

    let run = descriptor.value;
    descriptor.value = function() {
        run();
        console.log(`speed ${this.speed}`);
    }

    return descriptor;
}

class Rabbit {
    @fast
    run() {
        console.log("running~");
    }
}

var bunny = new Rabbit();

bunny.run();
// running~
// speed 20

console.log(bunny.speed);   // 20
```


