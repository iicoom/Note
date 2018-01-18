// import redis from 'redis';
// import bluebird from 'bluebird';
const redis = require('redis');
const bluebird = require('bluebird');

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

exports.redisService = RedisClient(config);