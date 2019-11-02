// 质数（素数）是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。

/**
 * 输出1-100间的质数
 */
function getPrime() {
    var count = 0;
    var result = [];
    for(var i = 2; i < 100; i++){
        for(var j = 1; j <= Math.sqrt(i); j++){
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
i = 4  4%1 == 0; 4%2 == 0; count=2
i = 6  6%1 == 0; 6%2 == 0; count=2

*/

// [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]