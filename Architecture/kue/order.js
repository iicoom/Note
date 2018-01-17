var kue = require('kue');
var Job = kue.Job;

var express = require('express');
// var nodeExcel = require('excel-export');
var router = express.Router();
var app = express();

const redis = {
            port: 6379,
            host: '127.0.0.1',
            // auth_pass: "xcfjliQeWP"
            queueDB: 5
        };
var rcc = redis;


// 消息队列
var queue = kue.createQueue({
    prefix: 'queue',
    redis: {
        db: rcc.queueDB,
        port: rcc.port,
        host: rcc.host,
        // auth: rcc.auth_pass
    }
});


// 创建生产线
var orderLines = [];
for (var i = 0; i < 20; i++) {
    orderLines.push('order/line-' + i); // line: order/line-1
}


// POST method route
app.post('/job', function (req, res) {
  
  // 根据hashCode重算通道
	// var lineIndex = Math.abs(hashCode('' + mobile)) % orderLineNum;
	// var lineIndex = Math.abs(hashCode('' + Date.now())) % orderLineNum;
	var line = orderLines[0];

  const job = queue.create(line, {
                user_id: 'uid',
                batch_id: 'batch_id',
                sheep_num: 'sheep_num',
                presentInfo: {}
            }).attempts(3).backoff(true).ttl(5 * 1000).save(function(err) {
                if (err) return deferred.reject(ranchUtil.generateErr(ErrorCode.CreateOrderFail, '下单失败，请重新下单'));
                // deferred.resolve(job);
            });

    job.on('complete', function(result){
      console.log('Job completed with data ', result);

    }).on('failed attempt', function(errorMessage, doneAttempts){
      console.log('Job failed');

    }).on('failed', function(errorMessage){
      console.log('Job failed');

    }).on('progress', function(progress, data){
      console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data );

    });
  res.send('POST request to the homepage');
});


// kue.app.listen(3000);
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});





