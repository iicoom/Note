// 质数（素数）是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。

/**
 * 输出1-100间的质数
 */
function getPrime() {
    var count = 0;
    var result = [];
    for(var i = 2; i < 100; i++){
        for(var j = 1; j <= Math.sqrt(i); j++){    // 用到把自身开方的技巧
            if(i % j == 0){
                count++;
            }
        }
        if(count == 1){
            // document.write(i + " ");
            result.push(i)
        }
        count = 0;
    }
    return result;
}
console.log(getPrime())

/*
1. 需要一个循环来遍历给定范围内的数字
2. 需要一个条件判断是否只能被1和本身整除：反向考虑 如果还可以被1和本身之外的数整除那就不符合
3. 需要一个变量记录
i = 4  4%1 == 0; 4%2 == 0; count=2
i = 6  6%1 == 0; 6%2 == 0; count=2

*/

// [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]