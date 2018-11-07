//*****************针对数组的算法*******************************//
// 排序算法
// 1. 冒泡排序
function bubbleSort(arr){
  var i = 0,
      j = 0;
  for(i=1; i<arr.length; i++){
    for(j=0; j<=arr.length-i; j++){
      var temp = 0;
      // ">" 从小到大排序
      // "<" 从大到小排序
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

// 2、快速排序
function quickSort(arr,l,r){
  if(l < r){
    var i = l, j = r, x = arr[i];
    while(i<j){
      while(i<j && arr[j]>x)
        j--;
      
      if(i<j)
        //这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
        arr[i++] = arr[j];
      
      while(i<j && arr[i]<x)
        i++;
      
      if(i<j)
        //这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
        arr[j--] = arr[i];
    }
    arr[i] = x;
    
    quickSort(arr, l, i-1);
    quickSort(arr, i+1, r);
  }
}

// 3. 数组去重
function unique(arr){
  var obj = {}
  var result = []
  for(var i in arr){
    if(!obj[arr[i]]){
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

// 4. 阶乘
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
斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）
以兔子繁殖为例子而引入，故又称为“兔子数列”，
指的是这样一个数列：1、1、2、3、5、8、13、21、34、……在数学上，
斐波纳契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(3)=2,F(n)=F(n-1)+F(n-2)（n>=4，n∈N*）
在现代物理、准晶体结构、化学等领域，斐波纳契数列都有直接的应用
*/
// 5.生成菲波那切数列
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

/*
getFibonacci(5)
(5) [0, 1, 1, 2, 3]
*/

// 强行递归实现
function getfib(n){
  if(n == 0) return 0;
  if(n == 1) return 1;
  if(n > 1) return getfib(n-1) + getfib(n-2);
}
function fibo(len){
    var fibo = [];
    for(var i = 0; i < len; i++){
      fibo.push(getfib(i));
    }
    return fibo;
}

/*
ibo(5)
(5) [0, 1, 1, 2, 3]
*/


