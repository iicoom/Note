/**
 * 1. push()
 * push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
 * 语法：arr.push(element1, ..., elementN)
 */
var numbers = [1, 2, 3];
console.log("Array push result:", numbers.push(4));  //Array push result: 4
 
console.log(numbers);
// [1, 2, 3, 4]
 
numbers.push(5, 6, 7);
 
console.log(numbers);
// [1, 2, 3, 4, 5, 6, 7]

numbers.push([7, 8 ,9])  // => (5) [1, 2, 3, 4, Array(3)]


/**
 * 2. pop()
 * pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
 */
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

[].pop()  // => undefined

/**
 * 3. shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
 */
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

/**
 * 4. unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
 * 语法：arr.unshift(element1, ..., elementN)
 */
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

