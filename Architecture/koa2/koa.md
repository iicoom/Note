[koa官网](http://koajs.com/)

> Koa requires node v7.6.0 or higher for ES2015 and async function support.
To use async functions in Koa in versions of node < 7.6, we recommend using babel's require hook.

> A Koa application is an object containing an array of middleware functions which are composed and executed in a stack-like manner upon request. 

```
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

## app.use(function)
Add the given middleware function to this application. See Middleware for more information.

## app.keys=
Set signed cookie keys.

## app.context
app.context is the prototype from which ctx is created from. You may add additional properties to ctx by editing app.context. This is useful for adding properties or methods to ctx to be used across your entire app
```
app.context.db = db();

app.use(async ctx => {
  console.log(ctx.db);
});
```

Error Handling
## app.on
```
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});
```

## API
Context specific methods and accessors.

ctx.req
Node's request object.

ctx.res
Node's response object.

ctx.request
A koa Request object.

ctx.response
A koa Response object.

ctx.state
The recommended namespace for passing information through middleware and to your frontend views.


