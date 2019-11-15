// 递归的概念
// 在程序中函数直接或间接调用自己
// https://www.cnblogs.com/huangshikun/p/6677916.html
// 递归的步骤(技巧)
// 1. 假设递归函数已经写好
// 2. 寻找递推关系
// 3. 将递推关系的结构转换为递归体
// 4. 将临界条件加入到递归体中

/**
 * 递归-例1：求1-100的和
 */
// 1. 最简单的for循环
var total = 0;
for(var i=1;i<=100;i++){
	total += i;
}

// 2. 递归
// 假设递归函数已经写好为sum,既sum(100),就是求1-100的和
// 寻找递推关系: 就是 n 与 n-1 ,或 n-2 之间的关系
// 寻找递推关系: 就是 结果等于 第n项 与 第n-1项之前的和
/*
sum(n) == sum(n-1) + n

var res = sum(100);
var res = sum(99) + 100;

// 将递归结构转换成递归体
function sum(n){
    return sum(n-1) + n;
}
*/
// 将临界条件加入到递归中
function sum(n){
    if(n==1) return 1;
    return sum(n-1) + n;
}
sum(100)
// 5050

// 3. array.reduce()
var array =  new Array(100).fill().map((item,index)=>index+1);
console.time()
var total = array .reduce((total,cur)=>total+cur,0)
console.timeEnd()
// default: 0.050048828125ms

/**
 * 递归-例2：将嵌套数组展开
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

// 使用lodash
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]


/**
 * 递归-例3：阶乘
 */
// 非递归实现
function factorialize(num) {
    var result = 1;
    if(num < 0) return -1;
    if(num == 0 || num == 1) return 1;
    while(num>1) {
        result *= num--;
    }
    return result;
}

// 递归实现
function factorialize(num) {
    var result = 1;
    if(num < 0) return -1;
    if(num == 0 || num == 1) return 1;
    if(num > 1) return num*factorialize(num-1);
}


/*
递归-例4：生成菲波那切数列
斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）
以兔子繁殖为例子而引入，故又称为“兔子数列”，
指的是这样一个数列: 1, 1, 2, 3, 5, 8, 13, 21, 34, ……在数学上，
                 0  1  2  3  4
斐波纳契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(3)=2,F(n)=F(n-1)+F(n-2)（n>=4，n∈N*）
在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用
*/
// 简约非递归实现
function getFibonacci(n) {
    var fibarr = [];
    var i = 0;
    while(i < n) {
      if(i <= 1) {
        fibarr.push(i);
      } else {
        fibarr.push(fibarr[i - 1] + fibarr[i - 2])
      }
      i++;
    }
    return fibarr;
  }
  

// 强行递归实现 计算出第n位的值
function getfib(n){
    if(n == 0 || n == 1) return 1;
    if(n > 1) return getfib(n-1) + getfib(n-2);
}
// 输出n 位数列
function fibo(len){
    var fibo = [];
    for(var i = 0; i < len; i++){
        fibo.push(getfib(i));
    }
    return fibo;
}
/*
ibo(5) 输出数列的前5项
(5) [1, 1, 2, 3, 5]
*/


