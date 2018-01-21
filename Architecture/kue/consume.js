var kue = require('kue');
var redis = require('./redisService');
var q = require('q');

var express = require('express');
// var nodeExcel = require('excel-export');
const log = require('./log');

const config = {
            port: 6379,
            host: '127.0.0.1',
            // auth_pass: "xcfjliQeWP"
            taskConsumeDB: 5
        };

// 消息队列
const queue = kue.createQueue({
  prefix: 'task_consume',
  redis: {
    db: config.taskConsumeDB,
    port: config.port,
    host: config.host
    //auth: config.redis.auth_pass
  }
});

// const interval = 5 * 1000; // 工作卡住5s主动获取
// jobs.watchStuckJobs(interval);

const logger = log.getLogger();
logger.level = 'debug';

logger.debug(config);

var checkQueueState = function (key, cb) {
    return redis.getObject(key, function(err, data) {
        if (err) {
            return cb(err);
        }
        cb(null, data)
    });
};


(function(){
  logger.debug('order/line-0')
  logger.debug(queue)
  queue.process('order/line-0', function(job, done) {
  console.log('order/line-0', job.id);
  logger.debug('order/line-0')
  var key = job.id + "::" + job.data.batch_id;

  q.nfcall(checkQueueState, key)
    .then(function (data) {
      if (data && data.state === 'finish') {
          console.log('====job=='+ job.id +'==state::>', job.state());
          console.log('====job=='+ job.id +'==result::>', job.result);
          return done(null, data.result)
      }
      // 创建订单
      createOrder(job.data, function (err, order) {
          var result = null;
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
              result = {orderId: order._id}
          }
          q.nfcall(redis.setObject, key, {state: 'finish', result: result}, 24 * 3600)
              .then(function () {
                  done(null, result);
              });
      })
    })
})
})()

function createOrder(orderInfo) {
  logger.debug('creating oder...')
  return job.id;
}