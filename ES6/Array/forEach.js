// 例子1
var fields = 'avatar,gender,age,nickname,breed'.split(','); //split用于把有规律的字符串拆成数组
console.log(fields);
fields.forEach(function(index){
	console.log(index)
})

// 例子2
var numbers = [4, 9, 16, 25];

function fun1(item, index) {
	console.log( "index[" + index + "]: " + item )
}
// 遍历方法1
numbers.forEach(fun1)

// 遍历方法2
for(var item of numbers){
	console.log(item)
}