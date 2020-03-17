const RedisLock = require('./lib/RedisLock');

let maxTask = 100;
let taskCount = 0;
let taskHead = null;
let taskTail = null;

/**
 * @description 看门狗
 * 每个任务超时时间30m
 * @return {Promise<any>}
 */
function watchdog(ms = 30000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let e = new Error();
      e.code = 6000;
      e.msg = 'server exception';
      reject(e);
    }, ms);
  });
}

/**
 * @description
 * 1、任务计数++
 * 2、未达到最大数量，计数并行执行
 * 3、达到最大数量开始排队
 * @param {function} func
 */
function runTask(func) {
  ++taskCount;
  if (taskCount <= maxTask) {
    return func();
  }
  if (taskHead) {
    taskTail.next = func;
    taskTail = func;
  } else {
    taskHead = func;
    taskTail = func;
  }
}

/**
 * @description 任务结束
 * 1、任务计数--
 * 1、若有排队的则执行后续的任务
 * 2、无排队的未完成的
 */
function endTask() {
  if (taskCount <= 0) {
    taskCount = 0;
  } else {
    --taskCount;
  }
  if (taskHead) {
    let func = taskHead;
    taskHead = taskHead.next;
    process.nextTick(func);
  }
}

function handleMsg(next, func) {

  let lock = RedisLock.createLock();

  /**
   * @description
   * 1、任务结束先解锁
   * 2、无错误直接返回
   * 3、有错误不是重试报错返回
   * 4、锁初始化，重试
   * @param {*} e
   * @param {object} ret
   */
  function myNext(e, ret) {
    lock.free();
    if (!e) {
      next(null, ret);
      return endTask();
    }
    if (e.code !== LOCK_RETRY) {
      next(e);
      return endTask();
    }
    lock.reset();
    process.nextTick(myTry);
  }

  let myTry = function () {
    //捕捉Promise错误以及看门狗
    try {
      return Promise.race([func(lock, myNext), watchdog()]).catch(myNext);
    } catch (e) {
      return myNext(e);
    }
  };

  runTask(myTry);
};

module.exports = handleMsg;