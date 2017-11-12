//类相当于实例的原型，所有在类中定义的方法都会被实例继承
//如果在方法前加上一个static关键字，就表示该方法不会被实例继承，只能通过类直接调用
class Foo {
    static classMethod() {
        return 'hello'
    }
}

Foo.classMethod() //'hello

var foo = new Foo();
foo.classMethod() //TypeError

//静态方法也可以通过子类调用
class Bar extends Foo {

}

Bar.classMethod();//'hello