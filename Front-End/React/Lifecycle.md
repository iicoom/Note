## Adding Lifecycle Methods to a Class
In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.
当应用中存在很多组件，当组件被销毁时释放它所占用的资源是至关重要的。

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
在app中，当组件第一次被render到DOM中时（这个称作挂载）设置了一个timer。

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
同样，在Clock被从DOM中removed（卸载）后需要把定时器清除。

在这里用到React的两个生命周期函数：
```
componentDidMount() {

}

componentWillUnmount() {

}
```
These methods are called “lifecycle methods”.

## 16.3版本中加入了UNSAFE前缀作为别名
- UNSAFE_componentWillMount()
- UNSAFE_componentWillUpdate()
- UNSAFE_componentWillReceiveProps()

[16.3版本前后对比图](https://www.jianshu.com/p/ce5451287f1c)

React将生命周期定义为三个阶段，分别是
Mounting（挂载），
re-rendering（更新）和 Unmounting（卸载）。
其中卸载的过程很简单，都会调用componentWillUnmount（）方法

Mounting个过程是在组件初始化的流程，所以其中的生命周期只会执行一次。
re-rendering的过程会根据出发更新的条件不同，经历不同的生命周期。

### 执行顺序
旧生命周期在各个阶段的调用情况
挂载 
constructor
componentWillMount
render
componentDidMount

更新
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

卸载
componentWillUnmount

新生命周期在各个阶段的调用情况
挂载
constructor
getDerivedStateFromProps
render
componentDidMount

更新
getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate

卸载
componentWillUnmount

### Re-rendering过程 组件重新渲染的情况
1. Props Change

2. State Change

3. forceUpdate

接下来将重点介绍不同的方法的使用场景和注意事项：

constructor
- 用于初始化内部状态, 且是唯一一个可以直接修改state的地方 （this.state = , 其余地方都是直接this.setState() ）.
- 初始化component中的字段和 bind functions。
- 不要造成任何副作用 (如AJAX 请求等)

getDerivedStateFromProps(nextProps, prevState)
- 当state需要从props初始化时使用。
- 典型场景：表单控制获取默认值。

ComponentDidMount
- 在组件加载完毕之后立即执行， 且只在Mounting阶段执行一次。
- 典型场景： 获取外部资源， 如发送AJAX请求。
- 不要调用this.setState 方法，因为会导致re-render。

ComponentWillUnmount
- 组件移除时调用，可以移除创建的定时器，监听器等。
- 典型场景：释放资源，如定时器。

getSnapshotBeforeUpdate(prevProps, prevState)
- 在页面render之前调用， state已经更新。
- 典型场景：获取render之前的Dom状态。

shouldComponentUpdate(nextProps, nextState, nextContext)
- 决定Virtual Dom是否要重画
- 一般可以有PureComponent 自动实现（判断当前的props或state和之前的有什么变化，如果没有变化就不会重画）
- 典型场景：性能优化（自己可以决定什么时候需要更新）
- 不要造成任何副作用 (如AJAX 请求等)
- 不要 call this.setState()

