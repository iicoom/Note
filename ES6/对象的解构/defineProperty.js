// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

// 语法：Object.defineProperty(obj, prop, descriptor)

/*
obj
要在其上定义属性的对象。
prop
要定义或修改的属性的名称。
descriptor
将被定义或修改的属性描述符。
*/

// antd pro nav
// dva/dynamic

Object.defineProperty(exports, "__esModule", {
  value: true
});

function dynamic(config) {
  var app = config.app,
      resolveModels = config.models,
      resolveComponent = config.component;

  return asyncComponent((0, _extends3.default)({
    resolve: config.resolve || function () {
      var models = typeof resolveModels === 'function' ? resolveModels() : [];
      var component = resolveComponent();
      return new _promise2.default(function (resolve) {
        _promise2.default.all([].concat((0, _toConsumableArray3.default)(models), [component])).then(function (ret) {
          if (!models || !models.length) {
            return resolve(ret[0]);
          } else {
            var len = models.length;
            ret.slice(0, len).forEach(function (m) {
              registerModel(app, m);
            });
            resolve(ret[len]);
          }
        });
      });
    }
  }, config));
}


// nav 中调用
// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});


// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, [], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: '会员管理',
        // icon: 'user',
        path: '/user',
        children: [
          {
            name: '用户列表',
            path: '/user/list',
            component: dynamicWrapper(app, ['user'], () => import('../routes/User/UserList')),
          }, {
            name: '用户详情',
            path: '/user/userDetail/:userId',
            hide: true,
            component: dynamicWrapper(app, ['user'], () => import('../routes/User/UserDetail')),
          },
        ],
      }, {
        name: '订单管理',
        path: '/order',
        children: [
          {
            name: '批次列表',
            path: '/order/batchList',
            component: dynamicWrapper(app, [], () => import('../routes/Batch/BatchList')),
          },
          {
            name: '创建批次',
            path: '/order/createBatch',
            hide: true,
            showGoBack: true,
            component: dynamicWrapper(app, [], () => import('../routes/Batch/CreateBatch')),
          }，
      ]}
    ]
  },
  {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    path: '/auth',
    layout: 'UserLayout',
    children: [
      {
        name: '帐户',
        icon: 'user',
        path: 'auth',
        hide: true,
        children: [
          {
            name: '登录',
            path: 'login',
            component: dynamicWrapper(app, [], () => import('../routes/Auth/Login')),
          },
        ],
      },
    ],
  }
]


// src 的router中会用到getNavData
function RouterConfig({ history, app }) {
  const navData = getNavData(app);
  const UserLayout = getLayout(navData, 'UserLayout').component;
  const BasicLayout = getLayout(navData, 'BasicLayout').component;
  const passProps = {
    app,
    navData,
    getRouteData: (path) => {
      return getRouteData(navData, path);
    },
  };

  /**
   * 此处保存到一个全局变量dispatch({type...})
   * 主要是用于 Utility.onPutApi...四个方法用于发送接口请求使用的。
   */
  Utility.setContent(Utility.constItem.keyDispatch, app._store.dispatch);
  /**
   * 主要是用于，以后页面有按键点击根据不同的条件跳转到不同的页面。
   * Utility.toPage(url,params)，调用此方法完成页面跳转操作。
   */
  Utility.setContent(Utility.constItem.keyHistory, history);
  Utility.setContent(Utility.constItem.keyModal, Modal);
  Utility.setContent(Utility.constItem.keyEvent, event);
  Utility.setContent(Utility.constItem.keyNotification, notification);

  const listenEvent = () => {
    const { ErrorProcess, GoToLogin } = Utility.EventCollection;
    Utility.$on(ErrorProcess, (source, args) => {
      const { errcode } = args.response;
      if (errcode === 401001 || errcode === '401001') {
        setTimeout(() => {
          Utility.toPage(Utility.UrlItem.Login, { isGoBack: true });
        }, 500);
      }

    });
    Utility.$on(GoToLogin, (source, args) => {
      console.log(source, args);
    });
  };
  listenEvent();

  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/auth" render={props => <UserLayout {...props} {...passProps} />} />
          <Route path="/" render={props => <BasicLayout {...props} {...passProps} />} />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

