# koa

[koa官网](http://koajs.com/)

> Koa requires node v7.6.0 or higher for ES2015 and async function support. To use async functions in Koa in versions of node &lt; 7.6, we recommend using babel's require hook.
>
> A Koa application is an object containing an array of middleware functions which are composed and executed in a stack-like manner upon request.

```text
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

## app.use\(function\)

Add the given middleware function to this application. See Middleware for more information.

## app.keys=

Set signed cookie keys.

## app.context

app.context is the prototype from which ctx is created from. You may add additional properties to ctx by editing app.context. This is useful for adding properties or methods to ctx to be used across your entire app

```text
app.context.db = db();

app.use(async ctx => {
  console.log(ctx.db);
});
```

Error Handling

## app.on

```text
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});
```

## API

koa的ctx对象

```text
{ 
  request:
   { method: 'GET',
     url: '/',
     header:
      { host: 'localhost:3004',
        connection: 'keep-alive',
        'cache-control': 'no-cache',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
        'postman-token': '7978a45f-0565-eaef-4a6a-f30c244d943a',
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8' } },
  response:
   { status: 404,
     message: 'Not Found',
     header:
      { 'x-dns-prefetch-control': 'off',
        'x-frame-options': 'SAMEORIGIN',
        'x-download-options': 'noopen',
        'x-content-type-options': 'nosniff',
        'x-xss-protection': '1; mode=block',
        'access-control-allow-origin': 'https://m.yunfarm.cn',
        'access-control-allow-methods': 'GET,HEAD,PUT,POST,DELETE' } },
  app: { subdomainOffset: 2, proxy: false, env: 'development' },
  originalUrl: '/',
  req: '<original node req>',
  res: '<original node res>',
  socket: '<original node socket>' 
}
```

Context specific methods and accessors.

ctx.req Node's request object.

ctx.res Node's response object.

ctx.request A koa Request object.

ctx.response A koa Response object.

ctx.state The recommended namespace for passing information through middleware and to your frontend views.

