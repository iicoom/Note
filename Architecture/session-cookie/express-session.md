> http是一个无状态协议: 什么是无状态呢？就是说这一次请求和上一次请求是没有任何关系的，互不认识的，没有关联的。这种无状态的的好处是快速。坏处是假如我们想要把www.zhihu.com/login.html和www.zhihu.com/index.html关联起来，必须使用某些手段和工具

https://segmentfault.com/a/1190000017831088?utm_source=tag-newest
## cookie和session的工作原理
- 首先，客户端会发送一个http请求到服务器端。
- 服务器端接受客户端请求后，建立一个session，并发送一个http响应到客户端，这个响应头，其中就包含Set-Cookie头部。该头部包含了sessionId。Set-Cookie格式如下，具体请看Cookie详解
Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]
- 在客户端发起的第二次请求，假如服务器给了set-Cookie，浏览器会自动在请求头中添加cookie
- 服务器接收请求，分解cookie，验证信息，核对成功后返回response给客户端
![oo](https://segmentfault.com/img/bVbmYbQ?w=400&h=200)
简而言之, session 有如用户信息档案表, 里面包含了用户的认证信息和登录状态等信息. 而 cookie 就是用户通行证

## token
token 也称作令牌，由uid+time+sign[+固定参数]
token 的认证方式类似于临时的证书签名, 并且是一种服务端无状态的认证方式, 非常适合于 REST API 的场景. 所谓无状态就是服务端并不会保存身份认证相关的数据。

组成:
- uid: 用户唯一身份标识
- time: 当前时间的时间戳
- sign: 签名, 使用 hash/encrypt 压缩成定长的十六进制字符串，以防止第三方恶意拼接
- 固定参数(可选): 将一些常用的固定参数加入到 token 中是为了避免重复查库

存放:
token在客户端一般存放于localStorage，cookie，或sessionStorage中。在服务器一般存于数据库中

token认证流程: token 的认证流程与cookie很相似

- 用户登录，成功后服务器返回Token给客户端。
- 客户端收到数据后保存在客户端
- 客户端再次访问服务器，将token放入headers中
- 服务器端采用filter过滤器校验。校验成功则返回请求数据，校验失败则返回错误码

## 分布式情况下的session和token
我们已经知道session时有状态的，一般存于服务器内存或硬盘中，当服务器采用分布式或集群时，session就会面对负载均衡问题。

负载均衡多服务器的情况，不好确认当前用户是否登录，因为多服务器不共享session。这个问题也可以将session存在一个服务器中来解决，但是就不能完全达到负载均衡的效果。当今的几种解决session负载均衡的方法。
而token是无状态的，token字符串里就保存了所有的用户信息

客户端登陆传递信息给服务端，服务端收到后把用户信息加密（token）传给客户端，客户端将token存放于localStroage等容器中。客户端每次访问都传递token，服务端解密token，就知道这个用户是谁了。通过cpu加解密，服务端就不需要存储session占用存储空间，就很好的解决负载均衡多服务器的问题了。这个方法叫做JWT(Json Web Token)https://huanqiang.wang/2017/12/28/JWT%20%E4%BB%8B%E7%BB%8D/

[官网文档](https://www.expressjs.com.cn/en/resources/middleware/session.html)

> Note Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.

## cookie和session具体有什么用？
- 如何判断用户是否已经登录?

    如果是B/S应用，可以参考cookie和session机制，原理就是用户登录的时候在服务器端创建一个session，登录成功后，把用户信息放在session里，接下里，服务器会把sessionID返回给用户的浏览器，浏览器接收到这个cookie后，用户再访问网站的URL地址时，浏览器会顺带着把这个网站下的cookies全部发送给服务器，服务器检查cookies里有木有sessionID，如果有，会根据sessionID找到session，然后再判断session里有木有用户信息，有则用户已登录，反之就是没登录。

## express-session 配置项
```js
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 36000000 },
    store: new RedisStore({ client: RedisClient }),
}));
```

### cookie.maxAge
Specifies the number (in milliseconds) to use when calculating the Expires Set-Cookie attribute. This is done by taking the current server time and adding maxAge milliseconds to the value to calculate an Expires datetime. By default, no maximum age is set.

Note If both expires and maxAge are set in the options, then the last one defined in the object is what is used.

## cookie.secure
Specifies the boolean value for the Secure Set-Cookie attribute. When truthy, the Secure attribute is set, otherwise it is not. By default, the Secure attribute is not set.

Note be careful when setting this to true, as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection.

Please note that secure: true is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies. If secure is set, and you access your site over HTTP, the cookie will not be set. 

还提供了一个根据环境自动配置的方法：
For using secure cookies in production, but allowing for testing in development, the following is an example of enabling this setup based on NODE_ENV in express:
```js
var app = express()
var sess = {
  secret: 'keyboard cat',
  cookie: {}
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
```
所以说开发环境是使用cookie.secure = false 才能在http模式下给浏览器写入cookie

## rolling
Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown.

The default value is false.

## secret
Required option

This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests.


## express-session 源码分析
服务器中express-session中间件拿到浏览器请求中的cookie需要先解析，getcookie
```
var header = req.headers.cookie;

connect.sid=s%3AJghN5JSVw64vU8ieeucfu84uW0eX06f3.Py1xKu6Q9KBvbW%2Fv43ueApDIdUif3HcAUE8FctLf%2B7E
上边的解析为：
JghN5JSVw64vU8ieeucfu84uW0eX06f3
```