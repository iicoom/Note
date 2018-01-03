var _ = require('lodash');

function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
Foo.prototype.b = 2;
Bar.prototype.d = 4;

// Arguments

// object (Object): The destination object.
// [sources] (...Object): The source objects. 

console.log( 'assign'+JSON.stringify(_.assign({ 'a': 0 }, new Foo, new Bar)) );
// => { 'a': 1, 'c': 3 }

console.log( 'assignIn'+JSON.stringify(_.assignIn({ 'a': 0 }, new Foo, new Bar)) );