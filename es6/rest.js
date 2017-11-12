//rest参数用于获取函数多余的参数，这样就不需要arguments对象了

function add(...values) {
    let sum = 0;

    for(var val of values) {
        sum += val;
    }

    return sum;
}

add(2,3,5); //10
//rest 参数之后就不能其他参数了，否则报错

//扩展运算符...  他好比rest参数的逆运算
console.log(...[1,2,3]) //1 2 3

//由于扩展运算符可以展开数组，所以不需要apply方法将数组转换为函数的参数了
//ES5写法
function f(x,y,z){}
var args = [0,1,2];
f.apply(null,args);

//ES6的写法
Math.max(...[14,3,77])

/***************************************************
 扩展运算符提供了数组合并的新写法
 **************************************************/
var arr1 = ['a','b'];
var arr2 = ['c'];
var arr3 = ['d','e'];

//ES5 合并数组
arr1.concat(arr2,arr3)

//ES6
[...arr1, ...arr2, ...arr3]

//将字符串转换为真正的数组
[... "hello"] //["h", "e", "l", "l", "o"]
