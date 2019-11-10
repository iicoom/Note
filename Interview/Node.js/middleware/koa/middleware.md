> Middleware functions are functions that have access to the context object and the next middleware function in the application’s request-response cycle. These functions are used to modify the request and response objects for tasks such as parsing request bodies, adding response headers, etc. Koa goes a step further by yielding 'downstream', then flowing the control back 'upstream'. This effect is called cascading.

## middleware接收的参数
koa中的middleware函数接收俩个参数，第一个是ctx,第二个next。在middleware中可以获取到context对象,而且可以在一个request-response周期内获取到next middleware 的内容。

这些middleware方法用于修改request和response对象上的值，如：
- 解析request bodies
- 添加response headers

koa的设计又更近了一步，在它的middleware中可以yield到下一个middleware中，这个过程叫做downstream，然后如果没有遇到next,又可以upstream回之前的middleware，这种效果被称为cascading. 也就是那个洋葱模型表达的意思，request从左到右，从外到内，再从内到外。

## Order of Middleware Calls
One of the most important things about middleware in Koa is that the order in which they are written/included in your file, are the order in which they are executed downstream. As soon as we hit a yield statement in a middleware, it switches to the next middleware in line, till we reach the last. Then again we start moving back up and resuming functions from yield statements.

koa中middleware的执行顺序就是他们被use的顺序，只要在一个middleware中遇到next，就会跳转到下一个中执行，知道没有next才会跳转回调用它的地方去继续执行。