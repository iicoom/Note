// const rawArr = [-5, 1, 4, 7, 10, 9];

// console.log(`rawArr.length: ${rawArr.length}`)
// for(let i = 0; i < rawArr.length; i ++) {
//     console.log(`print rawArr[${i}]: ${rawArr[i]}`);
// }
// rawArr.length: 6
// print rawArr[0]: -5
// print rawArr[1]: 1
// print rawArr[2]: 4
// print rawArr[3]: 7
// print rawArr[4]: 10
// print rawArr[5]: 3

/*
冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，
一次比较两个元素，如果他们的顺序错误就把他们交换过来。
*/
// const rawArr = [-5, 1, 4, 7, 10, 9];
const rawArr = [1, 4, 7, 10, 9, 8];

function bubbleSort(arr) {

    for(let i = 0; i < arr.length - 1; i ++) {
        for(let j = 0; j < arr.length - 1 - i; j ++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
            console.log('inner for:', arr)
        }
        console.log('【outter for】:', arr)
    }
    console.log('【Sorted arr】:', arr);
}

bubbleSort(rawArr)

/*
inner for: [ 1, 4, 7, 10, 9, 8 ]
inner for: [ 1, 4, 7, 10, 9, 8 ]
inner for: [ 1, 4, 7, 10, 9, 8 ]
inner for: [ 1, 4, 7, 9, 10, 8 ]
inner for: [ 1, 4, 7, 9, 8, 10 ]
【outter for】: [ 1, 4, 7, 9, 8, 10 ]
inner for: [ 1, 4, 7, 9, 8, 10 ]
inner for: [ 1, 4, 7, 9, 8, 10 ]
inner for: [ 1, 4, 7, 9, 8, 10 ]
inner for: [ 1, 4, 7, 8, 9, 10 ]
【outter for】: [ 1, 4, 7, 8, 9, 10 ]
inner for: [ 1, 4, 7, 8, 9, 10 ]
inner for: [ 1, 4, 7, 8, 9, 10 ]
inner for: [ 1, 4, 7, 8, 9, 10 ]
【outter for】: [ 1, 4, 7, 8, 9, 10 ]
inner for: [ 1, 4, 7, 8, 9, 10 ]
inner for: [ 1, 4, 7, 8, 9, 10 ]
【outter for】: [ 1, 4, 7, 8, 9, 10 ]
inner for: [ 1, 4, 7, 8, 9, 10 ]
【outter for】: [ 1, 4, 7, 8, 9, 10 ]
【Sorted arr】: [ 1, 4, 7, 8, 9, 10 ]
*/