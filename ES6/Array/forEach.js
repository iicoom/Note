/*

// 例子1
var fields = 'avatar,gender,age,nickname,breed'.split(','); //split用于把有规律的字符串拆成数组
console.log(fields);
fields.forEach(function(index){
	console.log(index)
})

// 例子2
var numbers = [4, 9, 16, 25];

function fun1(item, index) {
	console.log( "index[" + index + "]: " + item )
}
// 遍历方法1
numbers.forEach(fun1)

// 遍历方法2
for(var item of numbers){
	console.log(item)
}

// forEach的参数
[4,2,3].forEach((item, index) => {console.log(item,index)})
// 4 0
// 2 1
// 3 2

*/

var result = {};

// [ false, false, false, false, true, true, false ].forEach(function(item,index){
//             if(item == false) {
//               return result[index] = false;
//             } else {
//               return result[index] = true;
//             }
//           })
/*
{ '0': false,
  '1': false,
  '2': false,
  '3': false,
  '4': true,
  '5': true,
  '6': false }
*/

// [ false, false, false, false, true, true, '@@' ].forEach(function(item,index){
//             if(item == false) {
//               result[0] = false;
//               return false;
//             } else {
//               return result[0] = true;
//             }
//           })
// { '0': true }

arr = [ false, false, false, false, true, true, '@@' ];
arr1 = [ undefined, false, false, false, true, true, '@@' ];
arr2 = [ undefined, undefined ];
for(var i = 0; i < arr2.length; i++){
    if(arr2[i] === false){
      result[0] = false;
      break;
    } else {
      result[0] = true;
    }
  }
// { '0': false }
console.log(result)


