> 每一条请求都会经过app.use(middleware())

## access_token中间件
```
accessToken({
      name: 'token',
      secret: config.session_secret,
    })

=>
accessToken()
// 先获取 ctx.query.access_token
// 获取到后 里边会设置cookie 挂到ctx.sessionId = accessToken;
return async function (ctx, next) {
    let accessToken = ctx.query.access_token;
    const authorization = ctx.get('Authorization');
    console.log('authorization')
    console.log(authorization)
    if (!accessToken && !!authorization && authorization.indexOf('token') !== -1) {
      const tokenBeginIndex = authorization.indexOf('token');
      accessToken = authorization.substr(tokenBeginIndex + 6);
    }

    if (!!accessToken) {
      ctx.sessionId = accessToken;
      console.log(ctx.sessionId)
      setcookie(ctx, option.name, accessToken, option.secret, {});
    }
    await next();
  };
```

## session中间件
```
import session from 'koa-generic-session';

convert(session({
      prefix: 'sid:',
      store: redisStore({ client: redisClient }),
    })),
```
调用ctx.session.userInfo = result;后，会把cookie和user都保存在redis中
```
{ cookie:
   { httpOnly: true,
     path: '/',
     overwrite: true,
     signed: true,
     maxage: 86400000 }, // 默认过期时间86400000ms一天
  ip: '::1',
  'user-agent': 'PostmanRuntime/7.1.1',
  userInfo:
   { update_at: 2018-04-17T07:20:35.744Z,
     create_at: 2018-04-17T07:20:35.744Z,
     username: 'Leo',
     modify_mobile: false,
     is_set_pay_password: false,
     is_binding_verify: false,
     is_real_name: false,
     is_activate: false,
     need_upgrade: false,
     verified: false,
     idcard2: undefined,
     id: '5ad5a04354f0e4ed1b2f4406',
     token: 'U7FOIfhxzkmIiqwIOqDOe8KOSvTB9rcH',
     expire: 864000000 } }
 ```

## loginRequire中间件

