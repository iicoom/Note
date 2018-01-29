const { EventEmitter } = require('events');

const event = new EventEmitter();


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

export default RouterConfig;