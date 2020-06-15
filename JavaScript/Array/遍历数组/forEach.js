/* forEach 不像map, 没有返回值 */

// 例子1
var fields = 'avatar,gender,age,nickname,breed'.split(','); //split用于把有规律的字符串拆成数组
console.log(fields);          // ["avatar", "gender", "age", "nickname", "breed"]
fields.forEach(function(index){
	console.log(index)
})
// avatar
// gender
// age
// nickname
// breed

// 例子2
var numbers = [4, 9, 16, 25];

function fun1(item, index) {
	console.log( "index[" + index + "]: " + item )
}
// 遍历方法1
numbers.forEach(fun1)
// index[0]: 4
// index[1]: 9
// index[2]: 16
// index[3]: 25

// forEach的参数
[4,2,3].forEach((item, index) => {console.log(item,index)})
// 4 0
// 2 1
// 3 2


// 遍历方法2
for(var item of numbers){
	console.log(item)
}
// 4
// 9
// 16
// 25


// 利用数组重新构造新的对象
var result = {};

[ false, false, false, false, true, true, false ].forEach(function(item,index){
  if(item == false) {
    return result[index] = false;
  } else {
    return result[index] = true;
  }
})
/*
{ '0': false,
  '1': false,
  '2': false,
  '3': false,
  '4': true,
  '5': true,
  '6': false }
*/

// 使用return提前退出循环 类似于for的break 但是没有continue
[ false, false, false, false, true, true, '@@' ].forEach(function(item,index){
    if(item == false) {
      result[0] = false;
      return false;
    } else {
      return result[0] = true;
    }
  })
// { '0': true }


let arr2 = [ undefined, false, false, false, true, true, '@@' ];
for(var i = 0; i < arr2.length; i++){
    if(arr2[i] === false){
      result[0] = false;
      break;
    } else {
      result[0] = true;
    }
  }
// { '0': true }


for(var i = 0; i < arr2.length; i++){
    if(arr2[i] === false){
      return result[0] = false;  // 加return，就直接跳出进程不返回结果 
      break;
    } else {
      return result[0] = true;
    }
  }

// { '0': false }
console.log(result)
// nothing


