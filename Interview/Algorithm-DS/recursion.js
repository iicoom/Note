// 递归
// 递归的概念
// 在程序中函数直接或间接调用自己
// https://www.cnblogs.com/huangshikun/p/6677916.html
// 递归的步骤(技巧)
// 1. 假设递归函数已经写好
// 2. 寻找递推关系
// 3. 将递推关系的结构转换为递归体
// 4. 将临界条件加入到递归体中

// 求1-100的和
// 1.假设递归函数已经写好为sum,既sum(100),就是求1-100的和
// 2.寻找递推关系: 就是 n 与 n-1 ,或 n-2 之间的关系

// 1 3	6 10 15				// 这个数列的第n项值 等于 下面数列前n项的和
// 1 2 3 4  5  6 ... 100

// 寻找递推关系: 就是 n 与 n-1 ,或 n-2 之间的关系
/*
sum(n) == sum(n-1) + n

var res = sum(100);
var res = sum(99) + 100;

// 将递归结构转换成递归体
function sum(n){
    return sum(n-1) + n;
}

// 将临界条件加入到递归中
function sum(n){
    if(n==1) return 1;
    return sum(n-1) + n;
}
*/


/**
 * 将数组展开
 */
let nestArr = [1, [12, 2,['abc', 888], 5], 6, 9]

function getSpread(arr) {
    var result = [];
    function spread(arr) {
        for(var i = 0; i < arr.length; i ++) {
            if(Array.isArray(arr[i])) {
                spread(arr[i])
            } else {
                result.push(arr[i])
            }
        }
        return result;
    }
    // console.log('result:', result)   // []
    console.log(spread(nestArr))
}

getSpread(nestArr)

