var sleep = function (time){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			resolve();
		},time);
	});
};

var start = async function(){
	for (var i = 0; i < 10; i++) {
		console.log(`当前是第${i}次等待...`)
		await sleep(1000);
	}
}

start();

//值得注意的是，await必须在async函数的上下文中的。