// JavaScript splice() 方法

// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

// 注释：该方法会改变原始数组。


// var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 
/*

> var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
undefined
> var removed = myFish.splice(2, 0, 'drum');
undefined
> console.log(myFish)
[ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]
undefined
> console.log(removed)
[]
undefined
> myFish.splice(2, 0, 'funcky', 'guitar');
[]
> console.log(myFish)
[ 'angel',
  'clown',
  'funcky',
  'guitar',
  'drum',
  'mandarin',
  'sturgeon' ]
undefined
> var removed = myFish.splice(2, 3, 'trumpet');
undefined
> console.log(myFish)
[ 'angel', 'clown', 'trumpet', 'mandarin', 'sturgeon' ]
undefined
> console.log(removed)
[ 'funcky', 'guitar', 'drum' ]
undefined

 */
