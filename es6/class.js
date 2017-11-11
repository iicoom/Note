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