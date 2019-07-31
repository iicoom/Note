module.exports = Router;

/**
 * [Router description]
 * @param {[type]} opts [description]
 */
function Router(opts) {
  if (!(this instanceof Router)) {
    return new Router(opts);
  }

  this.opts = opts || {};
  this.methods = this.opts.methods || [
    'HEAD',
    'OPTIONS',
    'GET',
    'PUT',
    'PATCH',
    'POST',
    'DELETE'
  ];

  this.params = {};
  this.stack = [];
};


/**
 * [prefix description]
 * @param  {[type]} prefix [description]
 * @return {[type]}        [description]
 */
Router.prototype.prefix = function (prefix) {
  prefix = prefix.replace(/\/$/, '');

  this.opts.prefix = prefix;

  this.stack.forEach(function (route) {
    route.setPrefix(prefix);
  });

  return this;
};

/**
 * [middleware description]
 * @return {[type]} [description]
 */
Router.prototype.routes = Router.prototype.middleware = function () {
  var router = this;

  var dispatch = function dispatch(ctx, next) {
    debug('%s %s', ctx.method, ctx.path);

    var path = router.opts.routerPath || ctx.routerPath || ctx.path;
    var matched = router.match(path, ctx.method);
    var layerChain, layer, i;

    if (ctx.matched) {
      ctx.matched.push.apply(ctx.matched, matched.path);
    } else {
      ctx.matched = matched.path;
    }

    ctx.router = router;

    if (!matched.route) return next();

    var matchedLayers = matched.pathAndMethod
    var mostSpecificLayer = matchedLayers[matchedLayers.length - 1]
    ctx._matchedRoute = mostSpecificLayer.path;
    if (mostSpecificLayer.name) {
      ctx._matchedRouteName = mostSpecificLayer.name;
    }

    layerChain = matchedLayers.reduce(function(memo, layer) {
      memo.push(function(ctx, next) {
        ctx.captures = layer.captures(path, ctx.captures);
        ctx.params = layer.params(path, ctx.captures, ctx.params);
        ctx.routerName = layer.name;
        return next();
      });
      return memo.concat(layer.stack);
    }, []);

    return compose(layerChain)(ctx, next);
  };

  dispatch.router = this;

  return dispatch;
};