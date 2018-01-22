// import redis from 'redis';
// import bluebird from 'bluebird';
const redis = require('redis');
const bluebird = require('bluebird');
const _ = require('lodash');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const config = {
        port: 6379,
        host: '127.0.0.1',
        // auth_pass: 'xcfjli'
    };

function RedisClient (opt) {
  var rc = redis.createClient(opt.port, opt.host,opt);
  rc.on('error', function(err) {
    console.error('Redis Error: %s, %s', opt.host, err);
  });

  rc.on('end', function(err) {
    console.log('Redis end: %s, %s', opt.host, err);
  });

  rc.on('ready', function(err) {
    console.log('Redis ready: %s, %s', opt.host, err);
  });

  return rc;
}

const rc = exports.redisService = RedisClient(config);

exports.get = function(key, cb) {
    if (!cb) cb = noop;
    rc.get(key, cb);
}

exports.getObject = function(key, cb) {
    if (!cb) cb = noop;
    rc.hgetall(key, function(err, data) {
        if (err) return cb(err);
        if (data) {
            cb(null, data);
        } else {
            cb();
        }
    })
}


/**
 * [put description]
 * @param  {[type]}   key    [description]
 * @param  {[type]}   data   [description]
 * @param  {[type]}   expire [有效期，单位秒]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
exports.set = exports.put = function(key, data, expire, cb) {
    if (!expire) {
        cb = noop;
    } else if (_.isFunction(expire)) {
        cb = expire;
        expire = null;
    }

    rc.set(key, data, function(err) {
        if (err) return cb(err);
        if (expire) {
            rc.expire(key, expire, cb);
        } else {
            cb();
        }
    });
}

exports.setObject = exports.putObject = function(key, data, expire, cb) {
    if (!expire) {
        cb = noop;
    } else if (_.isFunction(expire)) {
        cb = expire;
        expire = null;
    }

    try {
        data = JSON.stringify(data);
    } catch (e) {
        return cb(e);
    }
    console.log(data)

    rc.hset(key, data, expire, function(err) {
        if (err) return cb(err);
        if (expire) {
            rc.expire(key, expire, cb);
        } else {
            cb();
        }
    });
};


exports.del = function(key, cb) {
    rc.del(key, cb || noop);
};
//key [set]
exports.sadd = function (key, data, expire, cb) {
    console.log("redis.sadd");
    if (!expire) {
        cb = noop;
    } else if (_.isFunction(expire)) {
        cb = expire;
        expire = null;
    }
    rc.sadd(key,data,function (err) {
        if (err) return cb(err);
        if (expire) {
            rc.expire(key, expire, cb);
        } else {
            cb(null, data);
        }
    });
};
exports.srem = function (key, values, cb) {
    rc.srem(key,values, cb || noop)
};
//读取set
exports.smembers = function (key, cb) {
    console.log("redis.smember :",key);
    if (!cb) cb = noop;
    rc.smembers(key, function (err,data) {
       if(err) return cb(err);
       cb (null,data);
    });
};
exports.publish = function (channel, message) {
    rc.publish(channel, message);
};