# 单点登录

> 每一条请求都会经过app.use\(middleware\(\)\)

## access\_token中间件

```text
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

```text
import session from 'koa-generic-session';

convert(session({
      prefix: 'sid:',
      store: redisStore({ client: redisClient }),
    })),
```

调用ctx.session.userInfo = result;后，会把cookie和user都保存在redis中

```text
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

## user-agent

1、web-win

User-Agent: Mozilla/5.0 \(Windows NT 6.1; WOW64\) AppleWebKit/537.36 \(KHTML, like Gecko\) Chrome/31.0.1650.57 Safari/537.36 2、web-mac User-Agent: Mozilla/5.0 \(Macintosh; Intel Mac OS X 10\_9\_0\) AppleWebKit/537.36 \(KHTML, like Gecko\) Chrome/31.0.1650.63 Safari/537.36 3、web-ipad User-Agent: Mozilla/5.0 \(iPad; CPU OS 7\_0\_4 like Mac OS X\) AppleWebKit/537.51.1 \(KHTML, like Gecko\) Version/7.0 Mobile/11B554a Safari/9537.53 4、wap-ios User-Agent: Mozilla/5.0 \(iPhone; CPU iPhone OS 7\_0\_4 like Mac OS X\) AppleWebKit/537.51.1 \(KHTML, like Gecko\) Version/7.0 Mobile/11B554a Safari/9537.53 5、wap-android User-Agent: Mozilla/5.0 \(Linux; U; Android 4.1.2; zh-CN; SCH-R530U Build/JZO54K\) AppleWebKit/534.31 \(KHTML, like Gecko\) UCBrowser/9.3.2.349 U3/0.8.0 Mobile Safari/534.31 6、weixin User-Agent: Mozilla/5.0 \(iPhone; CPU iPhone OS 7\_0\_4 like Mac OS X\) AppleWebKit/537.51.1 \(KHTML, like Gecko\) Mobile/11B554aMicroMessenger/5.0.3

