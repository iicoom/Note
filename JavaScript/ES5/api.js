const Router = require('./router.js');
// const routes = importDir('./routes');

const prefix = 'api/v2';

function api() {
  const router = new Router({ prefix });

  Object.keys(routes).forEach(name => routes[name](router));

  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}

module.exports = api;
/*
console.log(routes)
{
  announcement: [Function],
  index: [Function],
  messageTpl: [Function],
  order: [Function],
  reply: {},
  session: [Function],
  topic: [Function],
  users: [Function]
}
*/

// 调用Router
console.log(Router())

/*
Router {
  opts: {},
  methods:
   [ 'HEAD', 'OPTIONS', 'GET', 'PUT', 'PATCH', 'POST', 'DELETE' ],
  params: {},
  stack: [] }
*/

const router = new Router();

console.log(router.prefix('//\abc/123/'))

/**
Router {
  opts: { prefix: '//abc/123' },
  methods:
   [ 'HEAD', 'OPTIONS', 'GET', 'PUT', 'PATCH', 'POST', 'DELETE' ],
  params: {},
  stack: [] }
*/







