// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// Note: You call this method directly on the Object constructor rather than on an instance of type Object.

// JavaScript Demo: Object.defineProperty()
// Object.defineProperty(obj, prop, descriptor)

// 描述符默认值汇总
// 拥有布尔值的键 configurable、enumerable 和 writable 的默认值都是 false。
// 属性值和函数的键 value、get 和 set 字段的默认值为 undefined。

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42


// 一般情况使用点就可以赋值
object1['abc'] = {}
object1['abc']['cbd'] = '1234'

// 通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（for...in 或 Object.keys 方法），可以改变这些属性的值，
// 也可以删除这些属性。这个方法允许修改默认的额外选项（或配置）。
// 默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改（immutable）的。
console.log(object1)
// 42
// { abc: { cbd: '1234' } }

console.log(Object.keys(object1))
// [ 'abc' ]




















