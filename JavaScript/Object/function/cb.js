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
let result = {}
parse('text file', function(err, data) {
	if(err) {
		console.log(err)
	} else {
    result.data = data
	}
})
console.log('result', result)
// result { data: 'text file parsed!' }


// 2. 调用parse函数
let result = {}
parse('text file', function(err, data) {
	if(err) {
		console.log(err)
	} else {
    setTimeout(() => {
			result.data = data
		}, 2000)
	}
})
console.log('result', result)
// result {}

// 总结：可见parse外变量result只有在执行同步代码时可以被赋值


