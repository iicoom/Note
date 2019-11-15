/**
 * 数组去重
 * @param {*} arr 
 */
// 1. for loop 配合object key: true 数组去重
function unique(arr){
    var obj = {}
    var result = []
    for(var i in arr){              // 这里的i是 0, 1, 2, 3...
      if(!obj[arr[i]]){             // 一个for loop 借助一个对象实现去重  把arr的元素赋给 obj的key: true
        obj[arr[i]] = true;
        result.push(arr[i]);
      }
    }
    return result;
}

const arr = [1, 1, 'abc', 34, 'abc']
unique(arr)
// [1, "abc", 34]

const arr1 = [1, 1, 'abc', 34, 'abc', null, undefined, null, '', '']
unique(arr1)
// [1, "abc", 34, null, undefined, ""]



// 2. ES6 新增了 Set 这一数据结构，类似于数组，但 Set 的成员具有唯一性
Array.from(new Set(arr1))
// [1, "abc", 34, null, undefined, ""]