// 一个名为parse的函数
// 第一个参数 文件：类型字符串
// 第二个参数 回调函数
function parse(file, cb) {
	let err;
	let data;
	if(typeof file !== "string") {
		err = 'file type err';
	} else {
		data = file+' parsed!';
	}
	cb(err, data)
} 

// 1. 调用parse函数
// let result = {}
// parse('text file', function(err, data) {
// 	if(err) {
// 		console.log(err)
// 	} else {
//     result.data = data
// 	}
// })
// console.log('result', result)
// result { data: 'text file parsed!' }


// 2. 调用parse函数
let result = {}
parse('text file', function(err, data) {
	if(err) {
		console.log(err)
	} else {
    setTimeout(() => {
			result.data = data
			console.log("result in cb", result)
		}, 2000)
	}
})
console.log('result', result)               // 同步执行
// result {}
// result in cb { data: 'text file parsed!' } 在上面的输出后大概2秒后输出

// 总结：可见parse外变量result只有在执行同步代码时可以被赋值【20200622修正如下：parse外变量result是可以被内部cb获取并且赋值的】
setTimeout(() => {
	console.log("the final result:", result)
}, 3000)
// the final result: { data: 'text file parsed!' }  // 从程序执行大概3秒时输出

