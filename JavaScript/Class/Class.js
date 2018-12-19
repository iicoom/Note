// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
/*
JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over 
JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new 
object-oriented inheritance model to JavaScript.
*/

/*
// ## Class declarations
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// ## Class expressions A class expression is another way to define a class. Class expressions can be named or unnamed.
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
*/

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100


// static
/*The static keyword defines a static method for a class. 
Static methods are called without instantiating their class and cannot be called through a class instance. 
Static methods are often used to create utility functions for an application.
*/
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755








