// import Polygon from './Polygon';
const Polygon = require('./Polygon');

class Rectangle extends Polygon {
    constructor(height, width) {
      super(height, width);
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.  见line 26
      this.name = 'Rectangle';
    }
    // Here, sayName() is a subclassed method which
    // overrides their superclass method of the same name.
    sayName() {
      console.log('Sup! My name is ', this.name + '.');
    // super.sayHistory();
    }
}

let r = new Rectangle(50, 60);
r.sayName();
r.sayHistory();
// Sup! My name is  Rectangle.
// "Polygon" is derived from the Greek polus (many) and gonia (angle).


// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor