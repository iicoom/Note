## try catch
```js
const fileName = url.split('/')[url.split('/').length - 1];
const filePath = path.resolve(__dirname, '../../uploads/images');
const unlinkP = util.promisify(fs.unlink);

try {
    const res = await unlinkP(`${filePath}/${fileName}`);
    console.log('==============', res);
} catch (e) {
    console.error(JSON.stringify(e))
    // {"errno":-2,"code":"ENOENT","syscall":"unlink","path":"/Users/mxj/Repo/s-server/app/uploads/images/1602062754556.jpg"}
    throw e;
}


// 抛给
app.context.onerror = function (err) {
  console.error('server error:', err);
  if (err == null) {
    return;
  }

  const message = err.message ? err.message : JSON.stringify(err);
  const code = err.status;

  this.body = {
    message,
    code,
  };

  if (err.status >= 400 || err.status <= 499) {
    this.body.errors = err.errors;
  }

  this.status = err.status;
  this.res.end(JSON.stringify(this.body));
};


// 接着就会出现
/*
server error: [Error: ENOENT: no such file or directory, unlink '/Users/mxj/Repo/s-server/app/uploads/images/1602062754556.jpg'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'unlink',
  path: '/Users/mxj/Repo/s-server/app/uploads/images/1602062754556.jpg'
}
Unhandled Rejection at: Promise  Promise {
  <rejected> AssertionError [ERR_ASSERTION] [ERR_ASSERTION]: status code must be a number
      at Object.set status [as status] (/Users/mxj/Repo/s-server/node_modules/koa/lib/response.js:86:5)
      at Object.status (/Users/mxj/Repo/s-server/node_modules/delegates/index.js:92:31)
      at Object.app.context.onerror (/Users/mxj/Repo/s-server/app/index.js:65:3)
      at onerror (/Users/mxj/Repo/s-server/node_modules/koa/lib/application.js:163:32) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: false,
    expected: true,
    operator: '=='
  } reason:  AssertionError [ERR_ASSERTION] [ERR_ASSERTION]: status code must be a number
    at Object.set status [as status] (/Users/mxj/Repo/s-server/node_modules/koa/lib/response.js:86:5)
    at Object.status (/Users/mxj/Repo/s-server/node_modules/delegates/index.js:92:31)
    at Object.app.context.onerror (/Users/mxj/Repo/s-server/app/index.js:65:3)
    at onerror (/Users/mxj/Repo/s-server/node_modules/koa/lib/application.js:163:32) {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '=='
}
*/
// 这是因为http的连接中断了
```

会被进程的事件监听捕获
```js
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
  /* application specific logging, throwing an error, or other logic here */
});
```
换一种形式, 可以捕获到, 但是会抛给koa处理
```js
const res = await unlinkP(`${filePath}/${fileName}`).catch((err) => { throw err; });

await unlinkP(`${filePath}/${fileName}`).catch(err => console.error(JSON.stringify(err)));

```