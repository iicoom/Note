var simpleStr = "This is a simple string"; 
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, 检查原型链会找到 undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({})  instanceof Object;    // returns true, 同上

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false



function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car("Honda", "Accord", 1998);
var a = mycar instanceof Car;    // 返回 true
var b = mycar instanceof Object; // 返回 true