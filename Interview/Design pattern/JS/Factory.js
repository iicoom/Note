/**
 * 我们不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。
 * 工厂模式根据抽象程度的不同可以分为：简单工厂，工厂方法和抽象工厂
 */

// 1. User类 
class User {
    //构造器
    constructor(opt) {
      this.name = opt.name;
      this.viewPage = opt.viewPage;
    }
  
    //静态方法
    static getInstance(role) {
      switch (role) {
        case 'superAdmin':
          return new User({ name: '超级管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据', '权限管理'] });
        case 'admin':
          return new User({ name: '管理员', viewPage: ['首页', '通讯录', '发现页', '应用数据'] });
        case 'user':
          return new User({ name: '普通用户', viewPage: ['首页', '通讯录', '发现页'] });
        default:
          throw new Error('参数错误, 可选参数:superAdmin、admin、user')
      }
    }
  }

// 调用
let superAdmin = User.getInstance('superAdmin');
let admin = User.getInstance('admin');
let normalUser = User.getInstance('user');

// https://juejin.im/post/5b69c699e51d45348a301ef4


// 2. shapeFactory- 简单工厂
function shapeFactory() {
  this.createShape = function (shapeType) {
      var shape;

      if (shapeType === 'rectangle') {
          shape = new Rectangle();
      } else if (shapeType === 'square') {
          shape = new Square();
      } else if (shapeType === 'triangle') {
          shape = new Triangle();
      } else if (shapeType === 'circle') {
          shape = new Circle();
      } else {
          shape = new Shape();
      }

      if (typeof shape.draw === 'undefined') {
          shape.draw = function () {
              // simple implementation
              console.log('This the default implementation, and the type is:', shapeType);
          }
      }

      return shape;
  }
}

var Shape = function () {};

var Rectangle = function () {
  this.draw = function () {
      console.log('This is a Rectangle');
  }
};

var Square = function () {
  this.draw = function () {
      console.log('This is a Square');
  }
};

var Triangle = function () {
  this.draw = function () {
      console.log('This is a Triangle');
  }
};

var Circle = function () {
  this.draw = function () {
      console.log('This is a Circle');
  }
};

var factory = new shapeFactory();

var rectangle = factory.createShape('rectangle');
var square = factory.createShape('square');
var triangle = factory.createShape('triangle');
var circle = factory.createShape('circle');
var hexagon = factory.createShape('hexagon');

rectangle.draw();
square.draw();
triangle.draw();
circle.draw();
hexagon.draw();
// This is a Rectangle
// This is a Square
// This is a Triangle
// This is a Circle
// This the default implementation, and the type is: hexagon



// 3. Addy Osmani's Learning JavaScript Design Patterns has a good example of the Factory pattern.
// Types.js - Constructors used behind the scenes
 
// A constructor for defining new cars
function Car( options ) {
 
  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
 
}
 
// A constructor for defining new trucks
function Truck( options){
 
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

// FactoryExample.js
 
// Define a skeleton vehicle factory
function VehicleFactory() {}
 
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;
 
// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {
 
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }
 
  return new this.vehicleClass( options );
 
};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );
 
// Test to confirm our car was created using the vehicleClass/prototype Car
 
// Outputs: true
console.log( car instanceof Car );
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );