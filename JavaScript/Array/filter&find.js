// 例1
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

// ES6 way
const isBigEnough = value => value >= 10;

let [...spraed]= [12, 5, 8, 130, 44]; //数组的解构
let filtered = spraed.filter(isBigEnough);
// filtered is [12, 130, 44]


// 例2
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// ES6 version
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
let longWords = words.filter(word => word.length > 6);
// Filtered array longWords is ["exuberant", "destruction", "present"]


// The following example uses filter() to create a filtered json of all elements with non-zero, numeric id.
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  } 
}

var arrByID = arr.filter(filterByID);
console.log('Filtered Array\n', arrByID); 
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

/* ==============================================================================================*/
// ES6，Array.find()和findIndex()函数的用法
/*
find()函数用来查找目标元素，找到就返回该元素，找不到返回undefined。

findIndex()函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。*/
[1, 2, 3, 4].find((value, index, arr) => {
  
})
/*
查找函数有三个参数。

value：每一次迭代查找的数组元素。

index：每一次迭代查找的数组元素索引。

arr：被查找的数组。
*/

var userArr = [
    { id:1,userName:"laozhang"},
    { id:2,userName:"laowang" },
    { id:3,userName:"laoliu" },
]
userArr.find(item => item.id > 1);
//[ { id: 2, userName: 'laowang' },{ id: 3, userName: 'laoliu' } ]

// 数组去重
var myArr = [1,3,4,5,6,3,7,4];
console.log(myArr.find((value,index,arr)=>arr.indexOf(value)===index));
//[ 1, 3, 4, 5, 6, 7 ]

userArr.map(item => item.id)
[1, 2, 3]

userArr.map(item => item.userName)
["laozhang", "laowang", "laoliu"]

userArr.map(item => item.id === 2)
[false, true, false]

/**********************************************************************

            **********find 和 filter 的区别
**********************************************************************/
find()只返回集合中匹配到的第一个对象  filter()返回所有匹配到的对象




















