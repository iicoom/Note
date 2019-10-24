// Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

// 中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 
// 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

// http://www.expressjs.com.cn/guide/using-middleware.html

// 应用级中间件
var app = express();

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function(err, req, res, next) {
    if (isUserDefinedError(err)) {
        var message = Messages[err.code];
        res.status((message && message.status_code) || 400);

        return res.json({
            name: err.name,
            errmsg: err.message,
            errcode: err.code,
            cause: err.cause
        });
    } else {
        console.error(err);
        logger.error(err);
        res.status(err.status || 500);
        res.json({
            errcode: '999',
            errmsg: '服务器忙，请稍后再试。'
        });
    }
});

// 路由级中间件
// 路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()。
var app = express();
var router = express.Router();

router.use('/flocks',auth.methodNotAllowed, flocks);

// 禁止访问
exports.methodNotAllowed = function(req, res, next) {
    res.status(405);
    res.send('Method not allowed');
}

// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});


// 第三方中间件
app.use(validator());
app.use(cookieParser());
