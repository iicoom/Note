/**
应用级拦截 app.js
**/
// 请求限制
var limiter = require('./lib/express-limiter')(app, rc);
limiter({
    prefix: 'order_job_second',
    path: '/api/order/job',
    method: 'post',
    lookup: ['session.userInfo._id'],
    total: config.limiter.s_total,
    expire: config.limiter.s_expire,
    onRateLimited: function (req, res, next) {
        ranchUtil.doResult(res, ranchUtil.generateErr(ErrorCode.User_ErrorRequestLimit, "访问次数超过限制，请稍后再试"));
    }
});


/**
路由级拦截 order.js
**/
router.post('/job', auth.loginRequire(RoleType.User),auth.requestLimit(), function(req, res, next) {})

// auth.requestLimit()
//限制请求次数
exports.requestLimit = function(){
    console.log('auth.requestLimit');
    return function(req,res,next) {
        var last_time = req.query.last_time;
        //if ((req.method == 'POST') || (req.method == 'PUT')) {
            if (!last_time) {
                ranchUtil.doResult(res, ranchUtil.generateErr(ErrorCode.Request_LastTimeNotFind, "参数错误"));
            } else {
                if (!req.session.userInfo.last_time) {
                    req.session.userInfo.last_time = last_time;
                    next();
                } else {
                    if (last_time > req.session.userInfo.last_time) {
                        req.session.userInfo.last_time = last_time;
                        next();
                    } else {
                        ranchUtil.doResult(res, ranchUtil.generateErr(ErrorCode.User_ErrorRequestLimit, "访问次数超过限制，请稍后再试"));
                    }
                }
            }
        //} else {
        //    next();
        //}
    }
};