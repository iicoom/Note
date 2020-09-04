// Note: You call this method directly on the Object constructor rather than on an instance of type Object.

// JavaScript Demo: Object.defineProperty()
// Object.defineProperty(obj, prop, descriptor)

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





















