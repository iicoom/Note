# 信息的收集参数校验

## 收集登录信息

* 获取客户端IP  =&gt; 用于做什么？
* 获取user-agent

## redis

* setUserTokens  

  ```text
    const token = ctx.sessionId || userInfo.token;
    const key = 'uid:'+userInfo._id;
    await redis.sadd(key,token);
  ```

* removeUserTokens
* deleteUserTokens

## 参数校验

```text
import koaValidate from 'koa-validate';
koaValidate(app);
```

### 常用验证方法

* ctx.checkBody\('mobile'\)
* ctx.checkQuery\(\)

### 常用校验规则

* notEmpty\('tip'\).trim\(\).value
* empty\(\)
* isNumber\('tip'\)
* isFloat\('tip'\)
* isMobilePhone\('tip'\)
* isIn\(\[\]\)
* len\(6, 6\)

### 保存登录信息到session

## session信息如何挂载到ctx?

## 请求返回

* 通过登录信息查询数据库，做用户信息验证
* 验证通过后，把token 即sessionId 、expire、userInfo组装作为登录请求的返回数据

## 登录方式

* mobile pass
* mobile code
* 微信登录 uid unionId
* wechat app login 小程序登录
* 开放平台 app登录

