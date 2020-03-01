// break 语句用于跳出循环。
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
