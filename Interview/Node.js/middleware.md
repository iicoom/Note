[How Node JS middleware Works?](https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113)

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 

## What can Middleware do?

1. As name suggests it comes in middle of something and that is request and response cycle

2. Middleware has access to request and response object

3. Middleware has access to next function of request-response life cycle

Middleware functions can perform the following tasks:

* Execute any code.

* Make changes to the request and the response objects.

* End the request-response cycle.

* Call the next middleware in the stack.

## What is this next()?

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging


https://medium.com/@jamischarles/what-is-middleware-a-simple-explanation-bb22d6b41d01
1. Middleware functions usually have 3 standard params req, res, and next. The first two are objects, the last is a function that will call the next middleware function, if there is one.

2. Usually there is a middleware chain, meaning a chain of functions that are called one after the other, with the last function sending the response back to the browser. So we get the request from the browser, make any modifications and data additions, and then send a response back.

3. You must call next() (unless it’s the last function in the chain) or the request will just hang and eventually timeout. In the browser this will manifest as a really long spinner before a message of “connection timed out” or similar.

4. Any changes you make to req or res will be available in the next middleware function.

5. req and res are unique for each request. Meaning that a user from USA result in a different req object than a user from a European country.

In conclusion
Middleware functions are a really great way to run code on each request, or on each request for a certain route, and to take action on request or response data. Middleware is a crucial piece of any modern web server, and is incredibly useful.

## Express middleware
https://expressjs.com/en/resources/middleware.html

The Express middleware modules listed here are maintained by the Expressjs team.

### body-parser
