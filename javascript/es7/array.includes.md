# Array.includes

判断一个数组中是否包含摸一个元素

## ES7 之前的做法

```text
let arr = ['react', 'vue', 'angular']

arr.indexOf('vue')
1
arr.indexOf('vu')
-1


var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

## ES7 includes

```text
arr.includes('vue')
true
arr.includes('vu')
false
```

语法： arr.includes\(valueToFind\[, fromIndex\]\)

从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。

```text
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

