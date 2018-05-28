var rc = require('./redis').rc;
var RedLock = require('./index');

var redlock = new RedLock(rc);

// 锁定\释放库存
exports.inventory = function(activityId, num, times, cb) {
  console.log('activity.inventory');
  if (_.isFunction(times)) {
    cb = times;
    times = 60; // default times;
  }
  async.retry({
    times: times,
    interval: 500,
    errorFilter: function (err) {
      return err.message !== 'Beach_lock';
    }
  }, function (callback) {
    redlock.lock('lock-Beach' + BeachId, 10, function (err, lock) {
      if (lock) {
        logger.info('锁定/释放库存。[' + BeachId + '_' + num + ']');
        logger.info('====lock-Beach====::>lock');
        Beach.findByIdAndUpdate(BeachId, {$inc: {sell_num: num}}, {'new': true}, function (err, Beach) {
          if (err) {
            logger.info('====lock-Beach====::>unlock::err1');
            redlock.unlock(lock);
            return callback(err);
          }
          if (Beach.sell_num > Beach.total_num) {
            // 卖超了，原数回滚。保证最终一致
            Beach.findByIdAndUpdate(BeachId, {$inc: {sell_num: (0 - num)}}, {'new': true}, function (err, result) {
              if (err) logger.warn('回滚库存失败(1)。数量[' + (0 - num) + ']');
              logger.info('====lock-Beach====::>unlock::roll', result.sell_num);
              redlock.unlock(lock);
              return callback(new Error('', '库存不足。'));
            });
          } else if (Beach.sell_num < 0) {
            // 取消多了，原数回滚。
            Beach.findByIdAndUpdate(BeachId, {$inc: {sell_num: (0 - num)}}, {'new': true}, function (err, result) {
              if (err) logger.warn('回滚库存失败(2)。数量[' + +']');
              logger.info('====lock-Beach====::>unlock::cancel', Beach.sell_num);
              redlock.unlock(lock);
              return callback(new YunFarmError('', '订单取消失败。'));
            });
          } else {
            logger.info('====lock-Beach====::>unlock::success', Beach.sell_num);
            redlock.unlock(lock);
            callback();
          }
        })
      } else {
        callback && callback('Beach_lock')
      }
    });
  }, function (err, result) {
    cb(err, result)
  });
};