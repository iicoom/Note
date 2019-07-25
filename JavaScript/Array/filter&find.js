

// ### filter 方法会创建一个新的 array，接受一个函数作为参数，新的array中的每个元素都满足 参数函数的筛选条件
// 
// 参数函数 过滤数组中足够大的数
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]


// ES6 way Arrow Function 写法
const isBigEnough = value => value >= 10;

let [...spraed]= [12, 5, 8, 130, 44];      //数组的解构
let filtered = spraed.filter(isBigEnough);
// filtered is [12, 130, 44]


// 选择 array中 length 足够长的 element

// ES6 version
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];
let longWords = words.filter(word => word.length > 6);
// Filtered array longWords is ["exuberant", "destruction", "present"]



// #### filter 操作 collection ####
// 
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
//{ id: 2, userName: 'laowang' }


/**********************************************************************

            **********find 和 filter 的区别
**********************************************************************/
// find()只返回集合中匹配到的第一个对象  filter()返回所有匹配到的对象




















