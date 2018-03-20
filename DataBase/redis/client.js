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

const client = RedisClient(config);


/**************test******************/

const ctoken = '5a571794895754e248000001';
const code = '123456';
const mobile = '18231088765';

// client.multi()
//         .hset(ctoken, 'captcha', code)
//         .hset(ctoken, 'mobile', mobile)
//         .expire(ctoken, 10 * 60)    // 过期时间10分钟
//         .execAsync();
// key是ctoken ，field是captcha，value是code


const times = client.multi().incr(ctoken).execAsync();

// (async () => {
// 	const value = await client.multi().hmget(ctoken, ['mobile', 'captcha']).execAsync();
// 	console.log(value);
// })();

(async () => {
	const value = await client.multi().get(ctoken).execAsync();
	console.log(value);
})();

// =>
// [ [ '18231088765', '123456' ] ]

/*

*/











