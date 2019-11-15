// JavaScript splice() 方法
// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
// 注释：该方法会改变原始数组。
// 语法：var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var removed = myFish.splice(2, 0, 'drum');

console.log(myFish)
// [ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]
console.log(removed)
// []

myFish.splice(2, 0, 'funcky', 'guitar');

console.log(myFish)
[ 'angel', 'clown', 'funcky', 'guitar', 'drum', 'mandarin', 'sturgeon']

var removed = myFish.splice(2, 3, 'trumpet');

console.log(myFish)
// [ 'angel', 'clown', 'trumpet', 'mandarin', 'sturgeon' ]

console.log(removed)
// [ 'funcky', 'guitar', 'drum' ]

