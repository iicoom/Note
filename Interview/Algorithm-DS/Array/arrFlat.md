## Array.prototype.flat
```js
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

arr4.flat(1);
[ 1, 2, 3, 4, [ 5, 6, [ 7, 8, [Array] ] ] ]

arr4.flat(Infinity);
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
```

## 自己实现
```js
function flat(arr, depth) {
    let dep = 0
    let result = []
    if(depth > 0) {
        dep = depth
    }

    for(let i = 0; i<arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i])
        } else {
            // flat
            result.push(this.justFlat(arr[i]))
        }
    }

    this.justFlat = function (ele) {
        if(!Array.isArray(ele)) {
            return ele
        }
        for(let j=0;j<ele.length;j++) {
            // 递归调用
            return this.justFlat(ele[j])
        }
    }
    console.log('final arr', result)
}
```