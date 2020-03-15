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


/**
 * 4. 抽象工厂
 * 做出任何一道菜的步骤都可分为：1、食材处理（洗切砍） 2、烹饪 (煎炸烤)
 */
//一个抽象类来约定做菜的基本流程：
class CookingFactory {

  //食材处理
  handleIngredients () {
      throw new Error("抽象工厂方法不能直接调用，请重写！");
  }

  //烹饪方式
  cookingMethod () {
      throw new Error("抽象工厂方法不能直接调用，请重写！");
  }

}

// 抽象工厂是流程规范，不具体做其他事，所以需要再创建一个具体工厂来做相应的事。
// 比如烹饪一道简单的炒土豆丝，步骤应该为 1、切土豆 2、炒土豆：
// 具体工厂继承自抽象工厂
class fryPotatoFactory extends CookingFactory {
  //食材处理
  handleIngredients () {
      //切丝
      return new CutIntoShreds() 
  }

  //烹饪方式
  cookingMethod () {
      //爆炒
      return new QuicklyFried()
  }
}
// 这里把土豆切成丝的切丝 其实只是切的一种，还有切块，切条

// 所以具体切成啥样（丝儿，块儿）叫具体产品类，切则是抽象产品类

// 那我们就用一个抽象产品类来声明这一类产品应该具有的基本功能：
// 定义 切 这类产品的抽象产品类
class Cut {
  cut() {
     throw new Error('抽象产品方法不能直接调用，请重写！');
  }
}

// 定义具体 切丝 切块 的具体产品类
class CutIntoShreds extends Cut {
  cut() {
      console.log('食材切丝')
  }
}

class Dice extends Cut {
  cut() {
      console.log('食材切块')
  }
}


// 炒 同理，有爆炒、 小炒
// 定义 炒 这类产品的抽象产品类
class Fry {
  fry() {
     throw new Error('抽象产品方法不能直接调用，请重写！');
 }
}

// 定义具体 爆炒 小炒 的具体产品类
class QuicklyFried extends Fry {
  fry() {
      console.log('爆炒')
  }
}

class ExquisiteFry extends Fry {
  fry() {
      console.log('小炒')
  }
}

// 好了，终于可开始炒一盘土豆丝了：
// 这是我的炒土豆
const myFryPotato = new fryPotatoFactory()

// 选择处理食材的方式
const myHandle = myFryPotato.handleIngredients()
// 选择烹饪方式
const myMethod= myFryPotato.cookingMethod()

// 土豆切丝
myHandle.cut()
// 爆炒土豆丝
myMethod.fry()


// 当我们不想炒土豆丝，改成炒萝卜丁
// 不需要对抽象工厂CookingFactory做任何修改，只需要拓展它的种类：
class fryRadishFactory extends CookingFactory {
  //食材处理
  handleIngredients () {
      //切丁
      //把 切 增加一个具体产品类 切丁即可
      return new Dice()
  }

  //烹饪方式
  cookingMethod () {
      //小炒
      return new ExquisiteFry()
  }
}
// 小炒萝卜丁来了
const myRadish =  new fryRadishFactory()

// 萝卜切丁
myRadish.handleIngredients().cut()
// 起锅烧油 小炒
myRadish.cookingMethod().fry()

// 这里可以看到就算增加了切丁操作，我们并没有修改原Cut类，只是新增。
// 这也是开放封闭原则的核心：（类、模块、函数）可以扩展，但是不可修改。
/*
总结：
抽象工厂和简单工厂
场景的复杂度决定了我们使用抽象工厂还是简单工厂

抽象工厂其实是为了解决复杂场景下，各个业务模块的解耦合。当某一环节需要改变的时候不会影响到其他环。

在实际的前端业务中，最常用的简单工厂模式。如果不是超大型的项目，是很难有机会使用到抽象工厂方法模式。
但是作为一名合格的 Coder 不是只学有用的，无用即是有用，一起拓展自己的知识面吧。
*/