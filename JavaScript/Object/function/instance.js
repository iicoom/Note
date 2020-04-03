// function F() { if (!(this instanceof F)) { return new F() }; … }

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
 * var router = Router() will be same as  new Router() 其实就是个单例模式
 */