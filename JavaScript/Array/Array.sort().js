/**
 * sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
   由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
 * 元素为number或string的默认比较方法
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort());
// ["Dec", "Feb", "Jan", "March"]

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

