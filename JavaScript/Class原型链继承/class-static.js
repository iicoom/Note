// static
/*The static keyword defines a static method for a class. 
Static methods are called without instantiating their class and cannot be called through a class instance. 
Static methods are often used to create utility functions for an application.

Static 不能通过 class的实例调用， 经常用于定义一些内部方法
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








