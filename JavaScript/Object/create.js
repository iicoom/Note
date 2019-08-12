// 1. person
const person = {
	isHuman: false,
	printIntroduction: function() {
		console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
	}
}

const me = Object.create(person);

me.name = "Matthew";  // "name" is a property set on "me", but ont on "person"
me.isHuman = true;    // inherited properties can b overwritten

me.printIntroduction()



// 2. Shape - superclass
function Shape() {
	this.x = 0;
	this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
	this.x += x;
	this.y += y;
	console.info('Shape moved.')
}

// Rectangle - subclass
function Rectangle() {
	// body...
	console.log('Rectangle-this:', this);
	Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
// if you don't set Object.prototype.constructor to Rectangle,
// it will take prototype.constructor of Shape (parent)
// To avoid that, we set the prototype.constructor to Rectangle (child)

let rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);
console.log('Is rect an instance of Shape?', rect instanceof Shape);
rect.move(1, 1)









