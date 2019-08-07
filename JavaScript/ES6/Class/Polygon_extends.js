// Example 3: Extending an existing class
// ===============================================================

// Classes support extending other classes, but can also extend
// other objects. Whatever you extend must be a constructor.
//
// Let's extend the Polygon class to create a new derived class
// called Square.
console.log('================Example 3=============正方形======')
class Square extends Polygon {
  constructor(length) {
    // The reserved 'super' keyword is for making super-constructor
    // calls and allows access to parent methods.
    //
    // Here, it will call the parent class' constructor with lengths
    // provided for the Polygon's width and height
    // 调用super 把Square的constructor接受的参数length 提供给基类Polygon 作为width和height使用
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
    // 此处的this 指代基类的this，如果没猜错 Square实例的this.name已经由Polygon => Square
  }

  // Getter/setter methods are supported in classes,
  // similar to their ES5 equivalents
  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

let s = new Square(5);

s.sayName();  // 继承自基类的sayName方法this.name已经由Polygon => Square
console.log('The area of this square is ' + s.area);
// =>
// Hi, I am a  Square.
// The area of this square is 25


console.log('================Example 4===========长方形========')
// Example 4: Subclassing methods of a parent class
// ===============================================================

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }
  // Here, sayName() is a subclassed method which
  // overrides their superclass method of the same name.
  sayName() {
    console.log('Sup! My name is ', this.name + '.');
    super.sayHistory();
  }
}

let r = new Rectangle(50, 60);
r.sayName();
// =>
// Sup! My name is  Rectangle.
// "Polygon" is derived from the Greek polus (many) and gonia (angle).

