/**
 * 1. function中的 this
 */
const message = "Hello World";

function printMessage(){
    const innerMsg = "Hello, from inner"
    console.log(this.message);
    console.log(this.innerMsg);
};
// printMessage();    
// undefined
// undefined  
// 一项结果是在nodejs环境下测试，在浏览器环境下  使用const let 声明message都都在函数内部打印undefined
// 使用var 声明则会挂到Window对象上  并可以打印出 this.message 为Window.message      

/**
 * 2. 对象中的 this 在浏览器中测试: Window; node 测试this指向: {}
 */
var obj2 = {
    id: 2333,
    test: () => console.log(this)
}
obj2.test(); 
// Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}


/**
 * 3. 对象中的
 */
var jsObject = {
    message: "print in jsObject",
    printMessageES5:function (){
        console.log('printMessageES5', this.message);
    },
    printMessageES6:() => {
        const es6Inner = "es6Inner blcok!";
        console.log('printMessageES6', this.message);
        console.log('printMessageES6-es6Inner', this.es6Inner);
        console.log('printMessageES6-this', this)
    },
    printDelayES5: function (){
        setTimeout(function(){console.log('printDelayES5', this.message)}, 0)
    },
    printDelayES6: function (){
        setTimeout(() => { console.log('printDelayES6', this.message)}, 0)
    }
};
// jsObject.printMessageES5();      // printMessageES5 print in jsObject
// jsObject.printMessageES6();      
// printMessageES6 undefined   
// printMessageES6-es6Inner undefined  
// printMessageES6-this {}
// jsObject.printDelayES5();        // printDelayES5 undefined
// jsObject.printDelayES6();        // printDelayES6 print in jsObject

/**
 * 4.
 */
let sayColor = () => {
　　return this.color;
};
console.log("arrow-function sayColor", sayColor())
// arrow-function sayColor undefined  
// 这样的写法 this同样指向{}

// 总结：
/**
 * 1. 对象内部属性的箭头函数 指向对象外围 nodejs环境执行时一个{} 浏览器环境指向 Window
 * 2. 对象内部属性函数中的setTimeout中的箭头函数 指向对象本身
 * 3. 箭头函数无法使用 call（）或 apply（）来改变其运行的作用域
 */

// 箭头函数的优缺点
/**
 * 1. 优点：
 * - 书写简洁，箭头函数与包围它的代码共享同一个this
 * - 适合用在Array.map() Array.filter() 等方法中
 * 
 * 2. 缺点：
 * - 匿名，不容易定位错误
 * - 不要在对象属性上使用，因为不能指向对象的其他属性
 */
