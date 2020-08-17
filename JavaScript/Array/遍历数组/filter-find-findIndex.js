/**
 * Array.prototype.filter()
 * 
 * filter() 方法创建一个新数组, 其包含通过 所提供函数实现的测试的 所有元素。
 * 所提供函数对当前元素的判断 返回的是布尔值 true-返回  当前元素 否则不返回
 * 如果没有任何数组元素通过测试，则返回空数组
 * 
 */
// 例1: 筛选数组中符合某个条件的元素出来 组成新的数组
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// 例2: 在数组中搜索匹配值
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function matchItem(condition_str) {
    // return fruits.filter(item => item.indexOf(condition_str) > -1)
    return fruits.filter(item => item.toLowerCase().indexOf(condition_str.toLowerCase()) > -1)
}
// console.log(matchItem('app'))
// [ 'apple' ]
// console.log(matchItem('An'))      // 如果没有做 toLowerCase 处理，返回为[]
// [ 'banana', 'mango', 'orange' ]


// 例3: 对数据集的过滤
var collection = [{ name: 'Jack', age: 25 }, { name: 'Tom', age: 28 }, { name: 'Harry', age: 18 }]
const bellow20 = collection.filter(item => item.age < 20)
console.log(bellow20)
// [ { name: 'Harry', age: 18 } ]
const bellow20 = collection.filter(item => item.age > 30)
// []

/**
 * Array.prototype.find()
 * 
 * find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
 */
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

// console.log(found);
// expected output: 12

var collection = [{ name: 'Jack', age: 25 }, { name: 'Tom', age: 28 }, { name: 'Harry', age: 18 }]
const bellow20 = collection.find(item => item.age > 20)
// { name: 'Jack', age: 25 }
const bellow20 = collection.find(item => item.age > 30)
// undefined


/**
 * Array.prototype.findIndex()
 * 
 * findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
 */
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3