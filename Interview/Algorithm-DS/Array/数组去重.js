/**
 * 数组去重
 * @param {*} arr 
 */
// 方法1. for loop 配合object key: true 数组去重
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



// 方法2. ES6 新增了 Set 这一数据结构，类似于数组，但 Set 的成员具有唯一性
Array.from(new Set(arr1))
// [1, "abc", 34, null, undefined, ""]

// 或者
[...new Set(arr1)]

// 方法3. lodash
_.uniq([2, 1, 2]);
// => [2, 1]
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]


/**
 * 求数组并集
 */
_.union([2], [1, 2]);
// => [2, 1]