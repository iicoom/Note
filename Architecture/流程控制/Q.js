var q = require('q');

var checkQueueState = function (key, cb) {
    return redis.getObject(key, function(err, data) {
        if (err) {
            return cb(err);
        }
        cb(null, data)
    });
};

q.nfcall(checkQueueState, key)
    .then(function (data) {
    	console.log(data)
    	// 要对data进行一些操作
    	
    }）
    .catch(fucntion(e) {
    	console.log(e)
    })
    .finally(function(){

    })


checkQueueState(key, function(err, data){
	if (err) {
		console.log(err)
	}
	console.log(data)
})