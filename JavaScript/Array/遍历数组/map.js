// map 参数说明
const array1 = [1, 4, 9, 16];
array1.map((cur, index, self) => {
  console.log(cur, index, self); 
  return cur+1
})
// 1 0  [1, 4, 9, 16]
// 4 1  [1, 4, 9, 16]
// 9 2  [1, 4, 9, 16]
// 16 3  [1, 4, 9, 16]
// return
// [2, 5, 10, 17]


/**
 * map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
 */
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]

// 结合Math.max 或Math.min   const arr = [2, 4, 8]   Math.max(2, 4, 8) 返回8    Math.max(...arr) 返回8
// 处理二维数组 const twoDim = [[-1, 3, -5], [-9, 1, 4]]
const twoDim = [[-1, 3, -5], [-9, 1, 4]]
twoDim.map(arrItem => Math.max(...arrItem))  // [ 3, 4 ]
twoDim.map(arrItem => Math.min(...arrItem))  // [ -5, -9 ]

// 结合数组的pop shift 方法
twoDim.map(arrItem => arrItem.pop()) // [ -5, 4 ]
twoDim.map(arrItem => arrItem.shift()) // [ -1, -9 ]



/**
 * 对collection的遍历
 */
const tags = [{id: 12, type_id: 9, value: 12, label: "A-积极心理学"}, {id: 21, type_id: 9, value: 12, label: "A-积极心理学"}];
// {id: 21, type_id: 4, value: 21, label: "Addd"}]

tags.map(tag => tag.id)
// [12, 21]


var userArr = [
    { id:1,userName:"laozhang"},
    { id:2,userName:"laowang" },
    { id:3,userName:"laoliu" },
]

userArr.map(item => item.id)
[1, 2, 3]

userArr.map(item => item.userName)
["laozhang", "laowang", "laoliu"]

userArr.map(item => item.id === 2)
[false, true, false]


console.log('==========例2输出===========')
//例2
var ary = [12,23,24,42,1];
var res = ary.map(function (item,index) {
     return item*10;
})
console.log(res);//-->[120,230,240,420,10];
console.log(ary);//-->[12,23,24,42,1];


var ary = [12,23,24,42,1];
var res = ary.forEach(function (item,index,input) {
     input[index] = item*10;
})
console.log(res);//-->undefined;
console.log(ary);//-->会对原来的数组产生改变；
// =>
// undefined
// [ 120, 230, 240, 420, 10 ]


console.log('==========例3输出===========')
ary.map((item,index) => {
	console.log(item)
	console.log(index)
})
/* =>
120
0
230
1
240
2
420
3
10
4
*/

console.log('==========例4输出===========')
const kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

var reformattedArray = kvArray.map((obj) => { 
   return {
     param: obj.value
   }
});
console.log(reformattedArray)

// reformattedArray 数组为： [ { param: 10 }, { param: 20 }, { param: 30 } ], 

// kvArray 数组未被修改: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

console.log('==========例5输出===========')
function returnInt(element) {
  return parseInt(element, 10);
}

// const intArr = ['1', '2', '3'].map(returnInt); // [1, 2, 3]
// const intArr = ['1', '2', '3'].map( str => returnInt(str)); // [1, 2, 3]
const intArr = ['1', '2', '3'].map(Number); // [1, 2, 3]
console.log(intArr)




