/*
concat() 方法用于连接两个或多个数组。

该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
arrayObject.concat(arrayX,arrayX,......,arrayX)
*/

var a = [1,2,3];
var b = [3,4,5,6];

console.log(a.concat(4,5))
console.log(a.concat(b))
/*
=>
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 3, 4, 5, 6 ]
