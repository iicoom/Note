//Class 可以通过extends关键字实现继承，这比ES5通过修改圆形脸实现继承要清晰和方便的多

class ColorPoint extends Point {

    constructor(x,y, color) {
        super(x,y) //调用父类的constructor(x,y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); //调用父类的toString()
    }
}

//cosntructor和toString方法中都出现了super关键字，它代表父类实例
//子类必须在constructor 方法中调用super方法，否则新建实例时会报错
//因为子类没有自己的this对象，而是继承了弗雷的this对象

class ExtendableError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.stack = (new.Error()).stack;
        this.name = this.constructor.name;
    }
}

class Myerror extends ExtendableError {
    constructor(m) {
        super(m)
    }
}

var myerror = new Myerror('ll');
myerror.message  // "ll"
myerror.name  //"Myerror