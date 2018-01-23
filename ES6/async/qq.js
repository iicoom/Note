var q = require('q');

function sendSystemMsg(type,userId,content,cb) {
	console.log(`SystemMsg sending...:type:${type} userId:${userId} content:${content}`)
	const msgId = Date.now();
	cb(null, msgId);
}

function sendMessage(message){
    
	// sendSystemMsg(message.type, message.userId, message.content, function(err, result) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log(result);
	// 	}
	// })

    // q.nfcall(sendSystemMsg, message.type, message.userId, message.content)
    //     .then(function(result){
    //         console.log('send msg save success', result);
    //     })
    //     .catch(function(err){
    //         console.log(err);
    //     });

    return new Promise((resolve, reject) => {
    	sendSystemMsg(message.type, message.userId, message.content, function(err, result) {
    		if (err) {
    			reject(err);
    		} else {
    			resolve(result);
    		}
    	})
    });
};
/*
sendMessage({ type: 'SMS', userId: 'wtf', content: 'i just wanner say fuck' })
*/

// =>
// SystemMsg sending...:type:SMS userId:wtf content:i just wanner say fuck
// 1516674723634


// q.nfcall
// =>
// SystemMsg sending...:type:SMS userId:wtf content:i just wanner say fuck
// send msg save success 1516675002280


// Promise
// SystemMsg sending...:type:SMS userId:wtf content:i just wanner say fuck
function asyncTask1(result) {
	return `Welcome:${result}`;
}
sendMessage({ type: 'SMS', userId: 'wtf', content: 'i just wanner say fuck' })
	.then(function(result) {
		console.log('result is a timestamp',result);
		return asyncTask1(result);
	})
	.then(function(result) {
		console.log('are result still here?',result);
		// are result still here? undefined

		console.log('It should be result1',result);
		// return asyncTask2(result)
	})
	.catch()
// =>
// SystemMsg sending...:type:SMS userId:wtf content:i just wanner say fuck
// result is a timestamp 1516678150649
// are result still here? Welcome:1516678150649
// It should be result1 Welcome:1516678150649

/*****************************************************************
Promise的前世今生和妙用技巧
//https://www.cnblogs.com/whitewolf/archive/2015/10/22/4902570.html
********************************************************************/
/*
Promise将原来回调地狱中的回调函数，从横向式增加巧妙的变为了纵向增长。以链式的风格，纵向的书写，使得代码更加的可读和易于维护。
Promise在JavaScript的世界中逐渐的被大家所接受，所以在ES6的标准版中已经引入了Promise的规范了。
现在通过Babel，可以完全放心的引入产品环境之中了。

另外，对于解决这类异步任务的方式，在ES7中将会引入async、await两个关键字，以同步的方式来书写异步的任务，
它被誉为”JavaScript异步处理的终极方案“。
*/

/*
多个异步任务的并行处理
在有些场景下，我们所要处理的多个异步任务之间并没有像上例中的那么强的依赖关系，
只需要在这一系列的异步任务全部完成的时候执行一些特定逻辑。这个时候为了性能的考虑等，
我们不需要将它们都串行起来执行，并行执行它们将是一个最优的选择。如果仍然采用回调函数，则这是一个非常恼人的问题。
利用Promise则同样可以优雅的解决它：
*/
$q.all([$http.get('/demo1'),
        $http.get('/demo2'),
        $http.get('/demo3')
])
.then(function(results){
    console.log('result 1', results[0]);
    console.log('result 2', results[1]);
    console.log('result 3', results[2]);
});
