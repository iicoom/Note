var sleep = function (time){
	return new Promise((resolve, reject) => {
		setTimeout(function(){
			resolve();
		},time);
	});
};

// var start = async function () {
//     let numbers = [1,2,3,4,5,6,7,8,9,10];

//     for(var v of numbers){
// 		console.log(`当前是第${v}次等待..`);
//     	await sleep(1000); // 正确, for循环的上下文还在async函数中   	
// 	}

// 	/*numbers.forEach(function(v){
// 		console.log(`当前是第${v}次等待..`);
//     	await sleep(1000); // 错误!! await只能在async函数中运行
// 	})*/
// }
// start();


(async () => {
	let numbers = [1,2,3,4,5,6,7,8,9,10];

    for(var v of numbers){
		console.log(`当前是第${v}次等待..`);
    	await sleep(1000); // 正确, for循环的上下文还在async函数中   	
	}
})()





