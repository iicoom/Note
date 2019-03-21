// JavaScript splice() 方法

// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

// 注释：该方法会改变原始数组。

arrayObject.splice(index,howmany,item1,.....,itemX)
/*
参数	描述
index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, ..., itemX	可选。向数组添加的新项目。
*/

const arr = [{nimei: '66'}, {nidaye: 'oo'}]
arr.splice(1,1)
=> [{nidaye: 'oo'}]
-------------------------------------------
arr.splice(0,1)
=> [{nimei: '66'}]
返回值是被slice掉的部分，原数组变为
[{nidaye: 'oo'}]
