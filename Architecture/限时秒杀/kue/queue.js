const kue = require('kue');
const Job = kue.Job;

const express = require('express');
// const nodeExcel = require('excel-export');
const app = express();
const Q = require('q');
const log = require('./log');
const logger = log.getLogger();
logger.level = 'debug';

const redis = require('./redisService');
const config = {
            port: 6379,
            host: '127.0.0.1',
            // auth_pass: "xcfjliQeWP"
            queueDB: 5
        };
const rcc = redis;


// 消息队列
const queue = kue.createQueue({
    //prefix: 'queue',
    redis: {
        // db: config.queueDB,
        port: config.port,
        host: config.host,
        // auth: rcc.auth_pass
    }
});
//  1) "queue:job:3:log"


// 创建生产线
const orderLines = [];
for (let i = 0; i < 20; i++) {
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

/****************
  job create
  ********************/
// POST method route
app.post('/job', function (req, res) {
  const deferred = Q.defer();
  根据hashCode重算通道
	const lineIndex = Math.abs(hashCode('' + mobile)) % orderLineNum;
	const lineIndex = Math.abs(hashCode('' + Date.now())) % orderLineNum;
  const line = orderLines[0];

  const job = queue.create(line, {
                user_id: 'uid',
                wannerf_id: 'biebibi_id',
                product_num: 'sheep_num',
                addInfo: {}
            }).attempts(3).backoff(true).ttl(5 * 1000).save(function(err) {
                if (err) return deferred.reject(Util.generateErr(ErrorCode.CreateOrderFail, '下单失败，请重新下单'));
                deferred.resolve(job);
                res.send({jobId: job.id})   
            });

    //res.send('hello');
});

//获取任务
app.get('/job/:id', /*auth.loginRequire(RoleType.User),*/ function(req, res, next) {
    const id = req.params.id;

    Job.get(id, function(err, job) {
        if (err) return res.json();
        const state = job.state();
        const result = job.result;
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


/******************
  job process
  ********************/
const checkQueueState = function (key, cb) {
    logger.debug('===========')
    return redis.getObject(key, function(err, data) {
        if (err) {
            return cb(err);
        }
        console.log(data)
        cb(null, data)
    });
};

const createOrder = function (orderInfo, cb) {
  if (orderInfo) { 
    logger.debug('order has been created!');
    cb(null, orderInfo)
  } else {
    cb(null)
  }
};

queue.process('order/line-0', function(job, done) {
  logger.debug('order/line-0');
  const key = `q:job:${job.id}`;
  logger.debug(key);

  checkQueueState(key, function(err, data) {
    logger.debug(data)
    if (err) {
        throw new Error( 'bad things happen' );
    } else if (data && data.state === 'finish') {
        console.log('====job=='+ job.id +'==state::>', job.state());
        console.log('====job=='+ job.id +'==result::>', job.result);
        return done(null, data.result)
    }

      // 创建订单
    createOrder(data.data, function (err, order) {
        let result = null;
        if (err) {
            logger.error(err);
            if (isResultError(err) || isInternalError(err)) {
                result = {
                    errcode: err.errcode,
                    errmsg: err.errmsg
                };
            } else if (isUserDefinedError(err)) {
                result = {
                    errcode: err.code,
                    errmsg: err.message
                };
            } else {
                result = {
                    errcode: '400001',
                    errmsg: '服务器忙，请稍后再试'
                };
            }
        } else {
            result = {orderId: 'order._id'}
        }

        redis.setObject(key, {state: 'finish', result: result}, 24 * 3600, function(err,data) {
          done(null, data)
        })
        // Q.nfcall(redis.setObject, key, {state: 'finish', result: result}, 24 * 3600)
        //   .then(function () {
        //       done(null, result);
        //   });
    })
  })
})


// kue.app.listen(3000);
const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


