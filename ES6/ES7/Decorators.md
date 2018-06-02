> ES7的Decorators让我们能够在设计时对类、属性等进行标注和修改成为了可能。Decorators利用了ES5的

```
Object.defineProperty(target, name, descriptor);
```
首先我们来考虑一个普通的ES6类：
```
class Person {
  name() { return `${this.first} ${this.last}` }
}
```

执行这一段class，给Person.prototype注册一个name属性，粗略的和如下代码相似：

```
Object.defineProperty(Person.prototype, 'name', {
  value: specifiedFunction,
  enumerable: false,
  configurable: true,
  writable: true
});
```

## 作用域类上
同样Decorators也可以为class装潢，如下对类是否annotated的标注：
```
// A simple decorator
@annotation
class MyClass { }

function annotation(target) {
   // Add a property on target
   target.annotated = true;
}
```
