## Array.prototype.flat
```js
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

arr4.flat(1);
[ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [Array] ] ] ]
arr4.flat() // 不传参数默认是1
arr4.flat(-1) // 传入负数或0 都会取0
// [1, 2, Array(3)]

arr4.flat(Infinity);
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
```

## 自己实现
```js
/**
 * 数组flat
 * @param {*} arr 
 * @param {*} depth 
 */
function flat(arr, depth) {
    let dep = 1
    let result = []
    if(depth >= 0) {
        dep = depth
    }
    if(depth === "Infinity") {
        dep = "Infinity"
    }

    for(let i = 0; i<arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i])
        } else {
            // flat
            justFlat(arr[i])
        }
    }

    function justFlat(ele) {
        console.log('dep-head', dep)
        if (dep === 0) return result.push(ele)
        for(let j=0;j<ele.length;j++) {
            if (!Array.isArray(ele[j])) {
                result.push(ele[j]) 
            } else {
                // 递归调用
                dep !== "Infinity" && dep --
                justFlat(ele[j])
            }
        }
    }

    return result;
}
```