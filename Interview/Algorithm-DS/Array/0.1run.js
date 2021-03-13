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

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flat(arr4))


/**
 * JS 列出数组中所有重复的元素
 */
// var arr = [1, 1, 1, 2, 2, ,0]
// function print(array) {
//     let obj = {}
//     let res = []
//     let res1 = []
//     // 第一步：找出重复元素 
//     for(let i=0; i<array.length; i++) {
//         // if (!obj[array[i]]) {
//         //     res.push(array[i])
//         //     obj[array[i]] = true
//         // }
//         // res [ 1, 2, undefined, 0 ]

//         if (obj[array[i]] && !res.includes(array[i])) {
//             res.push(array[i])
//         }
//         obj[array[i]] = true
//     }
//     console.log('res', res)
//     for(let i=0; i<array.length; i++) {
//         if(res.includes(array[i])){
//             res1.push(array[i])
//         }
//     }
//     return res1.join(",")
// }
// console.log(print(arr))
// 1,1,1,2,2