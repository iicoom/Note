var kue = require('kue');
var redis = require('./redisService');

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
const jobs = kue.createQueue({
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

// 任务是否进行中检验
const checkTaskProceed = async (key) => {
  return new Promise((resolve, reject) => {
    redis.getAsync(key)
        .then(data => {
          logger.debug(`checkTaskProceed::getAsync::${key}::${data}`);
          if (data) {
            return resolve(true);
          } else {
            redis.multi().incr(key).expire(key, 12 * 60 * 60 * 1000).execAsync()
              .then(data => {
                logger.info(`checkTaskProceed::incr::${key}::${data}`);
                resolve(data > 1);
              });
          }
        });
  });
};

/**
 * 购买羊消费（订单的状态）
 */
jobs.process('task_consume_buySheep', 2, async(job, done) => {
  logger.debug('===task_consume_buySheep===');
  logger.debug(job.data);
  const taskKey = `task_consume_buySheep:${digest(JSON.stringify(job.data))}`;
  try {
    const isProceed = await checkTaskProceed(taskKey);
    logger.debug('task_consume_buySheep：：isProceed', isProceed);
    if (isProceed) {
      return done(JSON.stringify({isProceed: isProceed}));
    }
    const result = await finishOrderPayReward(job.data.orderId);
    logger.debug('===task_consume_buySheep===result===');
    logger.debug(result);
    done(null, JSON.stringify(result));
    job.remove((err) => {
      if (err) throw err;
      logger.debug('removed completed task_consume_buySheep #%d', job.id);
    });
  } catch (err) {
    logger.error('===task_consume_buySheep===err===');
    logger.error(err);
    done(JSON.stringify(err));
    await killTaskProceed(taskKey);
  }
});