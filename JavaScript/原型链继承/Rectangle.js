// import Polygon from './Polygon';
const Polygon = require('./Polygon');

class Rectangle extends Polygon {
    constructor(height, width) {
      super(height, width);
      this.name = 'Rectangle';
    }
    // Here, sayName() is a subclassed method which
    // overrides their superclass method of the same name.
    sayName() {
      console.log('Sup! My name is ', this.name + '.');
    //   super.sayHistory();
    }
}

let r = new Rectangle(50, 60);
r.sayName();
r.sayHistory();
// Sup! My name is  Rectangle.
// "Polygon" is derived from the Greek polus (many) and gonia (angle).