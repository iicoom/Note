// 1. substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
// stringObject.substr(start,length)

var str="Hello world!"
console.log(str.substr(3))
console.log(str.substr(3,7))
console.log(str.substr(-3))

/*
=>
lo world!
lo worl
ld!
*/


//2. slice() method returns a shallow copy of a portion of an array into a new array object 
//selected from begin to end (end not included). The original array will not be modified.

var string2 = 'abcdefg';
var ctx3 = string2.slice(2,-2);
console.log(ctx3);

var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);

console.log(str2); // OUTPUT: morning is upon u

str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'


//3. substring 重要事项：与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数。
var str="Hello world!"
document.write(str.substring(3,7))
// lo w