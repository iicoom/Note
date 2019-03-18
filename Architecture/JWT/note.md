[JSON Web Token 入门教程](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案，本文介绍它的原理和用法。

## koa中的使用
```
'use strict';

const jwt  = require('jsonwebtoken');
const auth = require('../config').auth;

module.exports = {
    sign  : (data) => jwt.sign(data, auth.secret),
    decode: jwt.decode,
    verify: jwt.verify
};
```
放到middleware中验证
```
module.exports = function () {
    return compose([
        require('./accessLog')(),
        require('./responseJson')(),
        require('./tokenValidate')(),
        require('./internalError')(),
    ]);
};


// tokenValidate
async verifyToken(token){
    if (token){
        try {
            let {user_id}  = await jwt.verify(token, config.auth.secret);
            let token_info = await redis.hgetall(format(token_key, user_id));

            if (token_info && token_info.token === token){
                return {user_id};
            }

        } catch (e) {
            logger.error(e);
        }
    }

    return null;
}
```

设置白名单，使某些接口不验证token