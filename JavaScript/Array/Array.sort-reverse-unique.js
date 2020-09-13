/**
 * 去重 https://segmentfault.com/a/1190000016418021
 */
// 1. 使用Set
let arr = [1,2,2,3,4]
arr = [...new Set(arr)]
console.log(arr)
// [1, 2, 3, 4]

function unique (arr) {
  return Array.from(new Set(arr))
}

// 2. 使用include
function unique(arr) {
  if (!Array.isArray(arr)) {
      console.log('type error!')
      return
  }
  var array =[];
  for(var i = 0; i < arr.length; i++) {
          if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                  array.push(arr[i]);
            }
  }
  return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重

// 3. 使用indexOf
function unique(arr) {
  if (!Array.isArray(arr)) {
      console.log('type error!')
      return
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
      if (array .indexOf(arr[i]) === -1) {
          array .push(arr[i])
      }
  }
  return array;
}


/**
 * sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
   由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
 * 元素为number或string的默认比较方法
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
/*************************************************
 * // 1. 字母顺序排序
 *************************************************/
const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort());
// ["Dec", "Feb", "Jan", "March"]


/*************************************************
 * // 2. 数字排序需要特殊处理
 *************************************************/
const array1 = [1, 30, 4, 21, 100000];
console.log(array1.sort());
// [1, 100000, 21, 30, 4]

// 所以
[1, 30, 4, 21, 100000].sort((a, b) => a - b)
// [1, 4, 21, 30, 100000]


// 同样可以给集合排序
let arr = [
  { key: 'ups', fee: '45.95' },
  { key: 'usps', fee: '39.40' },
  { key: 'Fedex', fee: '43.20' }
]

function sortNumber(a,b)
{
  // console.log(a, b)
  // { key: 'usps', fee: '39.40' } { key: 'ups', fee: '45.95' }
  // { key: 'Fedex', fee: '43.20' } { key: 'usps', fee: '39.40' }
  // { key: 'Fedex', fee: '43.20' } { key: 'ups', fee: '45.95' }
  // { key: 'Fedex', fee: '43.20' } { key: 'usps', fee: '39.40' }
  return a.fee - b.fee 
  // return b.fee - a.fee 从大到小
}
console.log(arr.sort(sortNumber))
// [
//   { key: 'usps', fee: '39.40' },
//   { key: 'Fedex', fee: '43.20' },
//   { key: 'ups', fee: '45.95' }
// ]

console.log(arr.reverse())
// [
//   { key: 'ups', fee: '45.95' },
//   { key: 'Fedex', fee: '43.20' },
//   { key: 'usps', fee: '39.40' }
// ]

// ES6 箭头函数写法
arr.sort((a, b) => a.fee - b.fee)



/*************************************************
 * // 3. 汉字排序需要特殊处理
 *************************************************/
var arr = ['南京', '北京', '上海', '杭州', '深圳'];
function sortChinese (arr) { // 参数： 排序的数组
  arr.sort((item1, item2) => item1.localeCompare(item2, 'zh-CN'))
}
sortChinese(arr)
console.log(arr); //  ["北京", "杭州", "南京", "上海", "深圳"]

let arr1 = ["a1a", "a3y", "s1", "啊", "毛", "陈"]
sortChinese(arr1)
console.log(arr1); //  ["啊", "陈", "毛", "a1a", "a3y", "s1"]



let arr1 = ['zad', 'cdd', 'acc']
arr1.sort()
// ["acc", "cdd", "zad"]

// 字符串的默认比较方法
function compare(a, b) {
  if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

arr.sort(function(a, b) {
  var keyA = a.key.toUpperCase(); // ignore upper and lowercase
  var keyB = b.key.toUpperCase(); // ignore upper and lowercase
  if (keyA < keyB) {
    return -1;
  }
  if (keyA > keyB) {
    return 1;
  }
  // names must be equal
  return 0;
});
// [
//   {key: "Fedex", fee: "43.20"},
//   {key: "ups", fee: "45.95"},
//   {key: "usps", fee: "39.40"}
// ]



/**
 * // 反转
 */
// > reverse 方法颠倒数组中元素的位置，改变了数组，并返回该数组的引用。
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse(); 

console.log(a); // [3, 2, 1]


/**
 * uniq
 */
const b = [1, 2, 2, 3]
const c = [...new Set(b)]  //[1, 2, 3]

// lodash
_.uniq([2, 1, 2]);
// => [2, 1]
_.sortedUniq([1, 1, 2]);
// => [1, 2]