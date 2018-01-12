[NodeRedis](https://github.com/NodeRedis/node_redis)


## 常用命令
1. await redis.multi().hmget(ctoken, ['mobile', 'captcha']).execAsync();

2. await redis.multi()
                    .hset(ctoken, 'captcha', code)
                    .hset(ctoken, 'mobile', mobile)
                    .expire(ctoken, extend_param.expire * 60)
                    .execAsync();

3. await redis.multi().get(key).execAsync();

4. await redis.multi().incr(key).execAsync();

5. redis.expire(key, rule.expire);