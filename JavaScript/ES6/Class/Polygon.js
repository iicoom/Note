console.log('================Example 1===================')
// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword
class Polygon {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  // constructor 中的参数是该函数实例接受的参数
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    console.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

  // We will look at static and subclassed methods shortly
}

// Classes are used just like ES5 constructor functions:
let p = new Polygon(300, 400);
p.sayName();
console.log('The width of this polygon is ' + p.width);

// =>
// Hi, I am a  Polygon.
// The width of this polygon is 400


console.log('================Example 2===================')
// Example 2: Creating a new class (expression-form)
// ===============================================================

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class. For example:
const MyPoly = class Poly {
  getPolyName() {
    console.log('Hi. I was created with a Class expression. My name is ' +
      Poly.name);
  }
};

let inst = new MyPoly();
inst.getPolyName();
// =>
// Hi. I was created with a Class expression. My name is Poly



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


console.log('================Example 5===========三角形========')
// Example 5: Defining static methods
// ===============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {
  // Using the 'static' keyword creates a method which is associated
  // with a class, but not with an instance of the class.
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends Triple {
  static triple(n) {
    // 把BiggerTriple.triple(3)接到的参数n 提供给Triple使用
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());
console.log(Triple.triple(6));
console.log(BiggerTriple.triple(3));
// var tp = new Triple();
// ChromeSamples.log(tp.triple()); tp.triple is not a function
// =>
// 3
// 18
// 81


console.log('================Example 6===========继承自built-in========')
// Example 6: Subclassing built-in classes and DOM
// ===============================================================

// Extend Date built-in
class MyDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'];
    return this.getDate() + '-' + months[this.getMonth()] + '-' +
      this.getFullYear();
  }
}

var aDate = new MyDate();
console.log(aDate.getTime());
console.log(aDate.getFormattedDate());
// 1515639561884
// 11-Jan-2018

// Extend Uint8Array
class ExtendedUint8Array extends Uint8Array {
  constructor() {
    super(10);
    this[0] = 255;
    this[1] = 0xFFA;
  }
}

var eua = new ExtendedUint8Array();
console.log(eua.byteLength);

/*
// Extend DOM Audio element
class MyAudio extends Audio {
  constructor() {
    super();
    this._lyrics = '';
  }

  get lyrics() {
    return this._lyrics;
  }

  set lyrics(str) {
    this._lyrics = str;
  }
}

var player = new MyAudio();
player.controls = true;
player.lyrics = 'Never gonna give you up';
document.querySelector('body').appendChild(player);
console.log(player.lyrics);

// Note: The V8 in Chrome 42 supports subclassing built-ins but Arrays.
// Subclassing arrays supported in Chrome 43.

class Stack extends Array {
  constructor() {
    super();
  }

  top() {
    return this[this.length - 1];
  }
}

var stack = new Stack();
stack.push('world');
stack.push('hello');
console.log(stack.top());
console.log(stack.length);
*/


