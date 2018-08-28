## check
```
router.post('/:order_sn/pay',function(req,res,next){

    req.check('order_sn','订单编号不能为空').notEmpty();
    req.check('uid','支付用户id不能为空').notEmpty();
    req.check('payer_ip','支付终端的ip不能为空').notEmpty();
    req.check('client_ua','支付终端的ua不能为空').notEmpty();
    req.check('goodsPay','订单商品信息不能为空').notEmpty();

}

req.check = function(param, failMsg) {
  if (_.isPlainObject(param)) {
    return validateSchema(param, req, 'any', options);
  }
  return new ValidatorChain(param, failMsg, req, locate(req, param), options);
}

function locate(req, name) {
  if (_.get(req.params, name)) {
    return 'params';
  } else if (_.has(req.query, name)) {
    return 'query';
  } else if (_.has(req.body, name)) {
    return 'body';
  }

  return undefined;
}

param: order_sn
1
param: uid
undefined
param: payer_ip
undefined
param: client_ua
undefined
param: goodsPay
undefined


function ValidatorChain(param, failMsg, req, location, options) {
  this.errorFormatter = options.errorFormatter;
  this.param = param;
  this.value = location ? _.get(req[location], param) : undefined;
  this.validationErrors = [];
  this.failMsg = failMsg;
  this.req = req;
  this.lastError = null; // used by withMessage to get the values of the last error
  return this;
}

```
