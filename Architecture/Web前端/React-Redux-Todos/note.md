## src/index 入口
* 引入react、reactDOM
* import { createStore } from 'redux'  创建出todoApp 的store
* import { Provider } from 'react-redux'  把创建的store提供给app
```
<Provider store={store}>
    <App />
</Provider>
```

### reducer
```
import todoApp from './reducers'

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

### component/App
```
<Provider store={store}>
    <App />
</Provider>
```
在App中切分组件
```
const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
```

#### import AddTodo from '../containers/AddTodo'
```
import { connect } from 'react-redux'
import { addTodo } from '../actions'
```

### actions
```
let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
```
返回的是个纯对象 必须有type 属性，且与reducer中的值对应





