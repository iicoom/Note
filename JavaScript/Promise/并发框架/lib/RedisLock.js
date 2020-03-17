/**
 * Redlock：全名叫做 Redis Distributed Lock;即使用redis实现的分布式锁
 * 使用场景：多个服务间保证同一时刻同一时间段内同一用户只能有一个请求(防止关键业务出现并发攻击)
 * 基于Redis的分布式锁
 */
// "lockRedisConfig": {
// 	"host": "127.0.0.1",
// 	"port": 6379,
// 	"password": "3E=2DR?bem7n1"
// }
const RedLock = require('redlock');
const client1 = require('ioredis').createClient(6379, 'redis1.example.com');
// const client2 = require('redis').createClient(6379, 'redis2.example.com');
// const client3 = require('redis').createClient(6379, 'redis3.example.com');

let redlock = new Redlock(
	// [client1, client2, client3],
	[client1],
	{
		driftFactor: 0.01, // time in ms
		retryCount:  10,
		retryDelay:  200, // time in ms
		retryJitter:  200 // time in ms
	}
);

redlock.on('clientError', function(err) {
	console.error('A redis error has occurred:', err);
});

class RedisLock {
  constructor() {}

  static createLock() {
    return redlock
  }
}

module.exports = RedisLock;