var sleep = function (time){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			// 模拟出错了，返回 ‘error’
            reject('error');
			resolve();
		},time);
	});
};

var havefun = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 返回 ‘ok’
            resolve('ok');
        }, time);
    })
};


var start = async function(){
	// 在这里使用起来就像同步代码那样直观
	try{
		console.log('start');
		await sleep(3000); // 这里得到了一个返回错误
		
		// 所以以下代码不会被执行了
		let result = await havefun(4000);
		console.log(result);
    	console.log('end');
    	
	}catch(err){
		console.log(err); // 这里捕捉到错误 `error`
	}	
	
}

start();
/*async 表示这是一个async函数，await只能用在这个函数里面。

await 表示在这里等待promise返回结果了，再继续执行。

await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）*/