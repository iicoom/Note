/**
 * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
 * Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
 * 该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter。
 * String类型和 Symbol 类型的属性都会被拷贝。
 * 
 * 语法：Object.assign(target, ...sources)
 */
// 1. 复制一个对象
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// 2. 合并对象，重复值覆盖
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。

// 复制Symbol属性
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };
const obj = Object.assign({}, o1, o2);
console.log(obj);                  // { a : 1, [Symbol("foo")]: 2 } 
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]


// 3. 深拷贝问题
// 详见 ./Object.deepCopy.js


