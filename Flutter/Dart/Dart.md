https://codelabs.developers.google.com/codelabs/from-java-to-dart/#1

基本特点

* 任何变量都是对象，包括基本类型，所有对象都继承自 Object 类
* 强类型，自带类型推断，但也可指定类型
* 有泛型
* 支持最外层函数定义，也支持类的静态方法与对象的实例方法，函数中可定义内部函数
* 支持最外层变量定义，也支持类的静态成员和对象字段
* 没有表示私有公用的关键字，以“_”开头的标识符表示库中私有
* 标识符以字母或“_”开头，后面可随意组合
* 语句末尾要加分号

## Create a simple Dart class

```
class Bicycle {
  int cadence;
  int _speed = 0;
  int get speed => _speed;
  int gear;

  Bicycle(this.cadence, this.gear);

  void applyBrake(int decrement) {
    _speed -= decrement;
  }

  void speedUp(int increment) {
    _speed += increment;
  }

  @override
  String toString() => 'Bicycle: $_speed mph';
}

void main() {
  var bike = Bicycle(2, 1);
  print(bike);
}
```
Neither main() nor Bicycle is declared as public, because all identifiers are public by default. Dart doesn't have keywords for public, private, or protected

### Define a Bicycle constructor

```
Bicycle(this.cadence, this.speed, this.gear);
```

The code above is equivalent to the following:

```
Bicycle(int cadence, int speed, int gear) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
}
```

### Instantiate and print a bicycle instance
Add the following code to the main() function:

```
void main() {
  var bike = new Bicycle(2, 0, 1);
  print(bike);
}
```
 Remove the optional new keyword:

```
var bike = Bicycle(2, 0, 1);
```

If you know that a variable's value won't change, you can use final instead of var

### Improve the output
While the output "Instance of ‘Bicycle'" is correct, it's not very informative. All Dart classes have a toString() method that you can override to provide more useful output.

```
@override
String toString() => 'Bicycle: $speed mph';
```

## Use optional parameters (instead of overloading)
```
import 'dart:math';

class Rectangle {
  int width;
  int height;
  Point origin;

  Rectangle({this.origin = const Point(0, 0), this.width = 0, this.height = 0});

  @override
  String toString() =>
      'Origin: (${origin.x}, ${origin.y}), width: $width, height: $height';
}

main() {
  print(Rectangle(origin: const Point(10, 20), width: 100, height: 200));
  print(Rectangle(origin: const Point(10, 10)));
  print(Rectangle(width: 200));
  print(Rectangle());
} // Included main() to suppress uncaught exception.
```

## Create a factory
Factories, a commonly used design pattern in Java, have several advantages over direct object instantiation, such as hiding the details of instantiation, providing the ability to return a subtype of the factory's return type, and optionally returning an existing object rather than a new object.

```
import 'dart:math';

abstract class Shape {
  num get area;
}

class Circle implements Shape {
  final num radius;
  Circle(this.radius);
  num get area => pi * pow(radius, 2);
}

class Square implements Shape {
  final num side;
  Square(this.side);
  num get area => pow(side, 2);
}

main() {
  final circle = Circle(2);
  final square = Square(2);
  print(circle.area);
  print(square.area);
}
```

### Create a factory constructor
```
import 'dart:math';

abstract class Shape {
  factory Shape(String type) {
    if (type == 'circle') return Circle(2);
    if (type == 'square') return Square(2);
    // To trigger exception, don't implement a check for 'triangle'.
    throw 'Can\'t create $type.';
  }
  num get area;
}

class Circle implements Shape {
  final num radius;
  Circle(this.radius);
  num get area => pi * pow(radius, 2);
}

class Square implements Shape {
  final num side;
  Square(this.side);
  num get area => pow(side, 2);
}

class Triangle implements Shape {
  final num side;
  Triangle(this.side);
  num get area => pow(side, 2) / 2;
}

main() {
  try {
    print(Shape('circle').area);
    print(Shape('square').area);
    print(Shape('triangle').area);
  } catch (err) {
    print(err);
  }
}
```

## Annotation 注解
> 对于 Java 程序员来说注解一定不陌生，对于 JavaScript 程序员来说，可能听说过装饰器(decorator)的提案

注解作为元数据(metadata)，是为了给代码提供额外的信息，提升编码体验，大部分时候并不会对代码产生实质性影响。它以@打头，后跟一个const常量或调用一个const构造函数，内置对象有 @required @deprecated 等。

An annotation is a form of representing syntactic metadata that can be added to our Dart code; in other words, a way of adding extra information to any component in our code, such as class or a method. Annotations are used everywhere in our Dart code: we use @required to specify that a named parameter is not optional, so our code won’t compile if the field annotated is not present, or we use @override to identify those APIs given by a parent class that are implemented in a child class. How do we know they are annotations? Well, they are easy to find, since they are prefixed by @.

https://blog.rsuitejs.com/2019/02/02/dart/

## 抽象类和抽象方法
https://xsfelvis.github.io/2019/01/13/Dart%E8%AF%AD%E6%B3%95%E5%9F%BA%E7%A1%80/

使用abstract修饰一个类，则这个类是抽象类，
抽象类中可以有抽象方法和非抽象方法，抽象方法没有方法体，需要子类去实现，如下代码：
```
abstract class Doer {
  // 抽象方法，没有方法体，需要子类去实现
  void doSomething();
  // 普通的方法
  void greet() {
    print("hello world!");
  }
}

class EffectiveDoer extends Doer {
  // 实现了父类的抽象方法
  void doSomething() {
    print("I'm doing something...");
  }
}
```

## Operators
https://dart.dev/guides/language/language-tour#operators

Cascade notation (..)


