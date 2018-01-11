[ioredis-github](https://github.com/luin/ioredis)

## 常用命令
1. await redis.multi().hmget(ctoken, ['mobile', 'captcha']).execAsync();

2. await redis.multi()
                    .hset(ctoken, 'captcha', code)
                    .hset(ctoken, 'mobile', mobile)
                    .expire(ctoken, extend_param.expire * 60)
                    .execAsync();

3. 