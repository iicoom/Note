// break 语句用于跳出结束循环。
for (let i = 0; i < 10; i ++) {
  if (i === 3)
    {
	break;
    }
  console.log("The number is " + i );
}

/*
The number is 0
The number is 1
The number is 2
*/

// continue 用于跳过循环中的一个迭代。
for (let i = 0; i < 5; i ++) {
  if (i === 3)
    {
	continue;
    }
  console.log("The number is " + i );
}
/*
The number is 0
The number is 1
The number is 2
The number is 4
*/

// 案例：遍历一个数组 跳过某次迭代
const list = [{id: 1, count: 0}, {id: 2, count: 1}, {id: 3, count: 0}, {id: 4, count: 1}]
for (let i = 0; i < list.length; i ++) {
   console.log(i)
   if (list[i].count <= 0) {
	list.splice(i, 1);
	i --;
	continue;
   }
   // continue 会跳出循环 本次迭代下面的代码不会执行
   console.log(list[i])
}
console.log(list)
// 0
// 0
// { id: 2, count: 1 }
// 1
// 1
// { id: 4, count: 1 }
// [{ id: 2, count: 1 }, { id: 4, count: 1 }]


// forEach 跳过某次迭代
var arr = [1,2,3,4,5,6,7,8,9];
var newArr = [];

arr.forEach((item) => {
   if (item < 5) {
	return;
   } else {
	newArr.push(item);
   }
})

console.log('newArr:', newArr)
// newArr: [ 5, 6, 7, 8, 9 ]

// forEach()无法在所有元素都传递给调用的函数之前终止遍历，


/**
 * for 语句 内执行 与 for 外执行的关系
 */
const arr = [{i: 1, n: 0, r: 1}, {i: 2, n: 0, r: 0}, {i: 3, n: 0, r: 0}, {i:4, n: 0, r: 0}]

for(let j = 0; j < arr.length; j ++) {
	if(arr[j].r > 0) {
		continue
	}
	if(arr[j].i === 3) {
		arr[j].r = 1
		break
	}
	console.log("current j:", j)
}
console.log("final arr:", arr)

// 没有break
/*
current j: 1
current j: 2
current j: 3
final arr: [
  { i: 1, n: 0, r: 1 },
  { i: 2, n: 0, r: 0 },
  { i: 3, n: 0, r: 1 },
  { i: 4, n: 0, r: 0 }
]
*/

// 有break
/*
current j: 1
final arr: [
  { i: 1, n: 0, r: 1 },
  { i: 2, n: 0, r: 0 },
  { i: 3, n: 0, r: 1 },
  { i: 4, n: 0, r: 0 }
]
*/


/**
 * for 语句 与函数 return 的关系
 */
const arr = [1, -1, 2, 3, 4]
function getResult() {
  for(let j = 0; j < arr.length; j ++) {
    if(arr[j] < 0) {
      continue
    }
    if(arr[j] === 3) {
      return arr[j]
      // break 这里的break是执行不到的
    }
    console.log("current j:", j)
  }
}

// current j: 0
// current j: 2
// 3

