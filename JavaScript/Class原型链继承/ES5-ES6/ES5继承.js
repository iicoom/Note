/*
[Classical inheritance in JavaScript ES5](https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5)

the following code defines a parent class named Shape with a constructor and a method, and a derived class named Circle that has its own method:
*/

/**
 * 下面的代码定义了一个叫 Shape的父类。
 * @param {*} x 
 * @param {*} y 
 */
function Shape(x, y) {
  this.x = x;
  this.y = y;
}

// Superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
}


/**
 * 一个叫 Circle的衍生类 // Circle - subclass
 * @param {*} x 
 * @param {*} y 
 * @param {*} r 
 */
function Circle(x, y, r) {
  // Call constructor of superclass to initialize superclass-derived members.
  Shape.call(this, x, y);

  // Initialize subclass's own members
  this.r = r;
}

// Circle derives from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Subclass methods. Add them after Circle.prototype is created with
// Object.create
Circle.prototype.area = function() {
  return this.r * 2 * Math.PI;
}

// The most interesting part here, the one that actually performs the feat of inheritance is these two lines,
// so I'll explain them a bit:
// 真正实现继承的是下边的两行
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
