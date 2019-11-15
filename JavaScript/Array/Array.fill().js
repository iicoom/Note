/**
 * fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
 * arr.fill(value[, start[, end]])
 *  value
    用来填充数组元素的值。
    start 可选
    起始索引，默认值为0。
    end 可选
    终止索引，默认值为 this.length。
 */
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]


// 用于生成一个连续数组
new Array(10).fill()
// [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const arr = new Array(10).fill().map((item, index) => index + 1)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]