// import Polygon from './Polygon'
const Polygon = require('./Polygon');

/**
 * 正方形
 */
class Square extends Polygon {
  constructor(length) {
    // The reserved 'super' keyword is for making super-constructor
    // calls and allows access to parent methods.
    // 保留关键字 super 使得当前子类可以调用父级的方法

    // Here, it will call the parent class' constructor with lengths
    // provided for the Polygon's width and height
    // 调用super 把Square的constructor接受的参数length 提供给基类Polygon 作为width和height使用
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    // 在衍生类中使用this之前必须先调用super方法，否则会有衍生错误
    this.name = 'Square';
    // 此处的this 指代基类的this，如果没猜错 Square实例的this.name已经由Polygon => Square
  }

  // Getter/setter methods are supported in classes,
  // similar to their ES5 equivalents
  get area() {
    return this.height * this.width;
  }

  set area(value) {
		// this.area = value; // 自身递归调用,RangeError: Maximum call stack size exceeded
    this._area = value;
		console.log('set method', value)
    console.log('this._area', this._area)
  }
}

let s = new Square(5);

s.sayName();  // 继承自基类的sayName方法this.name已经由Polygon => Square
console.log('The area of this square is ' + s.area);
s.area = 36
console.log('The set area of this square is ' + s.area);
// Hi, I am a  Square.
// The area of this square is 25
// set method 36
// this._area 36
// The set area of this square is 25