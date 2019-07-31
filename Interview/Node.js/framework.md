## Express
```
// Express
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```

优点：线性逻辑，通过中间件形式把业务逻辑细分、简化，一个请求进来经过一系列中间件处理后再响应给用户，清晰明了。 
缺点：基于 callback 组合业务逻辑，业务逻辑复杂时嵌套过多，异常捕获困难。


## Koa
```
// Koa
var koa = require('koa')
var route = require('koa-router')

var app = koa()

app.use(route.get('/', async (ctx) => {
	ctx.body = 'Hello World!'
}))

app.listen(3000)
```

优点：首先，借助 co 和 generator，很好地解决了异步流程控制和异常捕获问题。其次，Koa 把 Express 中内置的 router、view 等功能都移除了，使得框架本身更轻量。 

## Koa next() & Koa compose
https://github.com/koajs/koa/blob/master/docs/guide.md

## Express&Koa不同

Express 采用 callback 来处理异步, Koa v1 采用 generator，Koa v2 采用 async/await

generator 和 async/await 使用同步的写法来处理异步，明显好于 callback 和 promise，

async/await 在语义化上又要比 generator 更强。


## Sail


## Egg