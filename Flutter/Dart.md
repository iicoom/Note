https://codelabs.developers.google.com/codelabs/from-java-to-dart/#1

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

