
/**
 * A base class is defined using the new reserved 'class' keyword
 * 使用保留关键字 class定义一个 Polygon 的类
 */
class Polygon {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead: constructor() { }
  // 最开始使用constructor构造器（这个是非必须的）- 参数是该函数实例接受的参数
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // 接下来可以声明实例的方法
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }

  sayHistory() {
    console.log('"Polygon" is derived from the Greek polus (many) ' +
      'and gonia (angle).');
  }

  // 探讨this指向问题
  get to() {
    let container = {};
    let self = this;    // Polygon { name: 'Polygon', height: 300, width: 400 }
    return {
      category: function(category) {
        container.category = category;
        return this;   // { category: [Function: category], group: [Function: group] }
      },
      group: function(group) {
        container.group = group;
        return this;
      },
      request: async function() {
        let args = arguments;
        let client = await self.getClient(container);
        return client.request(...args);
      },
    };
  }

}

// Classes are used just like ES5 constructor functions:
// 实例化
// let p = new Polygon(300, 400);
// p.sayName();
// Hi, I am a  Polygon.
// console.log('The width of this polygon is ' + p.width);
// The width of this polygon is 400


// 探讨this指向问题
let p = new Polygon(300, 400);
const what = p.to.category('gate')
// what: { category: [Function: category], group: [Function: group] }

// export default Polygon;
module.exports = Polygon;