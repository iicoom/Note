/**
 * 实现一个字符串压缩算法
 * 给定 "aaabbbbcdd"  得出 "a3b4c1d2"
 * @param {*} str 
 */
/*
function compress(str) {
    const strArr = str.split("");
    // var result; 或者 let result; 都会把undefined拼接在前面
    let result = '';
    let count = 0;
    for(let i = 0; i < strArr.length; i ++) {
        if(strArr[i] == strArr[i+1]) {
            count ++;
        } else {
            result += strArr[i] + (count+1)
            count = 0;
        }
    }
    return result;
}
*/
// console.log(compress("aaabbbbcdd"));
// console.log(compress("aaa1bbbbcdd"));
// a311b4c1d2 只要输入有数字，输出结果就会有歧义。所以只需要对数字作特殊区分即可

function isNumber(char) {
    const num = char.charCodeAt();
    if (num >= 48 && num <= 57) {
        return true;
    } else {
        return false;
    }
}

// 修改compress 使其可以优化数字的展示
function compress(str) {
    const strArr = str.split("");
    // var result; 或者 let result; 都会把undefined拼接在前面
    let result = '';
    let count = 0;
    for(let i = 0; i < strArr.length; i ++) {
        if(strArr[i] == strArr[i+1]) {
            count ++;
        } else if(isNumber(strArr[i])) {
            result += " " + strArr[i] + (count+1)
            count = 0;
        } else {
            result += strArr[i] + (count+1)
            count = 0;
        }
    }
    return result;
}
// console.log(compress("aaa1bbbbcdd"));
// a3 11b4c1d2

console.log(compress("aaa1133666666666666666bbbb444cdd"));
// a3 12 32 615b4 43c1d2