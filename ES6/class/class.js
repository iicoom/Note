/**
 * 构造函数定义 生成对象
 * @param x
 * @param y
 * @constructor
 */
function Point(x,y){
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function (){
    return '(' + this.x +','+this.y + ')';
}

/**
 * ES6更接近传统语言的写法
 */
class Point {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

/************************************
 ES5 的构造函数 等同于ES6类的构造方法
 *********************************************/

//类的实例上调用方法，其实就是调用原型上的方法
class B {}
let b = new B()

b.constructor === B.prototype.constructor  //true

//所以类的方法可以添加到prototype对象上
Object.assign(Point.prototype,{
    toString(){},
    toValue(){}
})

//constructor方法是类的默认方法，通过new命令生成实例对象是自动调用该方法，
//一个类必须有constructor方法，如果没有显示定义，一个空的constructor方法会被默认添加
//constructor方法默认返回实例对象 this

var point = new Point(2,3);

point.toString() //(2,3)

point.hasOwnProperty('x') //true
point.hasOwnProperty('y') //true
point.hasOwnProperty('toString') //false

point.__proto__.hasOwnProperty('toString') //true
//x,y都是实力对象的自身属性，以为定义在this变量上，而toString是原型对象的属性定义在Point类上

/*Class表达式*/
const MyClass = class Me {
    getClassName(){
        return Me.name;
    }
}

//上边定义了一个类，类的名字是MyClass而不是Me,Me仅可以在Class内部的代码使用
let inst = new MyClass()
inst.getClassName() //Me

//立即执行Class
let person = new class {
    constuctor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name)
    }
}("张三");

person.sayName(); //'张三'