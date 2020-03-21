/**
 * Rest parameter
 */

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }


function fun1(...theArgs) {
  alert(theArgs.length);
}
 
fun1();  // 弹出 "0", 因为theArgs没有元素
fun1(5); // 弹出 "1", 因为theArgs只有一个元素
fun1(5, 6, 7); // 弹出 "3", 因为theArgs有三个元素



/**
 * 展开语法(Spread syntax)
 */
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction.apply(null, args);

// With spread syntax the above can be written as:
function myFunction(x, y, z) { }
const args = [0, 1, 2];
myFunction(...args);

