var kue = require('kue');
var Job = kue.Job;

var express = require('express');
// var nodeExcel = require('excel-export');
var router = express.Router();
var app = express();
var Q = require('q');

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
//console.log(orderLines)
/*
[ 'order/line-0',
  'order/line-1',
  'order/line-2',
  'order/line-3',
  'order/line-4',
  'order/line-5',
  'order/line-6',
  'order/line-7',
  'order/line-8',
  'order/line-9',
  'order/line-10',
  'order/line-11',
  'order/line-12',
  'order/line-13',
  'order/line-14',
  'order/line-15',
  'order/line-16',
  'order/line-17',
  'order/line-18',
  'order/line-19' ]
  */

// POST method route
app.post('/job', function (req, res) {
  var deferred = Q.defer();
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
                deferred.resolve(job);
                res.send({jobId: job.id})   
            });

    //res.send('hello');
});

//获取任务
app.get('/job/:id', /*auth.loginRequire(RoleType.User),*/ function(req, res, next) {
    var id = req.params.id;

    Job.get(id, function(err, job) {
        if (err) return res.json();
        var state = job.state();
        var result = job.result;
        //logger.info('====job==' + id + '====::' + state + '====::' + JSON.stringify(result || ""));
        res.send({
            'state': state,
            'result': result || {},
            'job': job
        });
    });

/*
"job": {
        "id": "21",
        "type": "order/line-0",
        "data": {
            "user_id": "uid",
            "batch_id": "batch_id",
            "sheep_num": "sheep_num",
            "presentInfo": {}
        },
        "priority": 0,
        "progress": 0,
        "state": "inactive",
        "created_at": "1516260737851",
        "promote_at": "1516260737851",
        "updated_at": "1516260737852",
        "ttl": "5000",
        "attempts": {
            "made": 0,
            "remaining": 3,
            "max": 3
        }
    }
*/

})

// kue.app.listen(3000);
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});





