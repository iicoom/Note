## Vue 全家桶
vue-cli + vue2.0 + vuex + vue-router + axios + element-ui

### vue-cli
vue-cli：是vue官方提供的快速搭建项目的工具，react，anguer也有类似的工具

CLI 服务是构建于 webpack 和 webpack-dev-server 之上的。它包含了：
- 加载其它 CLI 插件的核心服务；
- 一个针对绝大部分应用优化过的内部的 webpack 配置；
项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令

如果你熟悉 create-react-app 的话，@vue/cli-service 实际上大致等价于 react-scripts，尽管功能集合不一样。

### vuex
vuex:是vue提供的状态管理工具，简单解释就是vue各个组件直接的变量是不能直接共享的，组件直接的参数传递才多层的时候变得异常复杂，所以就诞生了vuex的状态管理工具，保证了状态的统一和可追踪

### vue-router
vue-router:是vue生态里面的路由工具，采用路由能轻松实现单页面程序

vue两个核心：数据驱动和组件化

## MVVM
![Model-View-ViewModel](https://upload-images.jianshu.io/upload_images/15932532-2b985ed5ebaed386.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

```js
<body>
<input id="in"/>
<span id="sp"></span>
<script type="text/javascript">
    let obj = {}
    let value = "hello"
    Object.defineProperty(obj,"inputValue",{
        get: function() {
                return value
        },
        set: function(val) {
            console.log('obj.inputValue propery changed', val)
            document.getElementById("sp").innerText = val
        }
    })
    
    // 监听input输入事件，赋值给事先监听的obj.inputValue属性，在set方法中可以获取到当前赋值，进而可以赋值给其他dom元素，完成数据绑定
    document.getElementById("in").oninput = function () {
        obj.inputValue = this.value
    }
</script>
</body>
```
MVVM模式是通过以下三个核心组件组成，每个都有它自己独特的角色：

- Model - 包含了业务和验证逻辑的数据模型

- View - 定义屏幕中View的结构，布局和外观

- ViewModel - 扮演“View”和“Model”之间的使者，帮忙处理 View 的全部业务逻辑

> 每个 Vue 应用都是通过用 createApp 函数创建一个新的应用实例开始的：一个应用需要被挂载到一个 DOM 元素中。例如，如果我们想把一个 Vue 应用挂载到 <div id="app"></div>，我们应该传递 #app：
```js
// 官方例子
const RootComponent = { /* 选项 */ }
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')

// 因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示组件实例。


// 项目实例
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 上面的App.vue
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App',
    created () {
      this.$store.commit('initAuth')
    },
    methods: {
      handleMessage (event) {
        
      }
    }
  }

</script>

// <router-view/>

```

### Observer
```js
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
```

### Dep
```js
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};
Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (process.env.NODE_ENV !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};
```

## vue-router
### vue-router跳转和location.href有什么区别
答：使用location.href='/url'来跳转，简单方便，但是刷新了页面；
使用history.pushState('/url')，无刷新页面，静态跳转；
引进router，然后使用router.push('/url')来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。
其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了history.pushState()，尤其是在history模式下


## Vue组件的参数传递
1. 父组件与子组件传值
父组件传给子组件：子组件通过props方法接受数据; 子组件传给父组件：$emit方法传递参数
```
1.父组件调用子组件的时候动态绑定属性
 <parent :dataList='dataList'></parent>
2.子组件定义props接收动态绑定的属性props: ['dataList']     
3.子组件使用数据
```

2. 非父子组件间的数据传递，兄弟组件传值
eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。

3. vue页面级组件之间传值
```
1.使用vue-router通过跳转链接带参数传参。

2.使用本地缓存localStorge。

3.使用vuex数据管理传值。
```

## Vue生命周期
Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。

1. beforeCreate（创建前） 在数据观测和初始化事件还未开始
2. created（创建后） 完成数据观测，属性和方法的运算，初始化事件
3. beforeMount（载入前） 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html
4. mounted（载入后） 在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用

### 第一次页面加载会触发哪几个钩子？
会触发 下面这几个beforeCreate, created, beforeMount, mounted 

### DOM 渲染在 哪个周期中就已经完成？
DOM 渲染在 mounted 中就已经完成了。

## 计算属性computed和 监听watch 的区别
计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。 所以区别来源于用法，只是需要动态值，那就用计算属性；需要知道值的改变后执行业务逻辑，才用 watch

### computed 是一个对象时，它有哪些选项？
有get和set两个选项

### computed 和 methods 有什么区别？
methods是一个方法，它可以接受参数，而computed不能，computed是可以缓存的，methods不会

## Vue的路由实现：hash模式 和 history模式
hash模式：在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取； 特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。

history模式：history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。 history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致

### $route 和 $router 的区别
答：$router是VueRouter的实例，在script标签中想要导航到不同的URL,使用$router.push方法。返回上一个历史history用$router.to(-1)
$route为当前router跳转对象。里面可以获取当前路由的name,path,query,parmas等。

## keep-alive内置组件的作用
可以让当前组件或者路由不经历创建和销毁，而是进行缓存，凡是被keep-alive组件包裹的组件，除了第一次以外。不会经历创建和销毁阶段的。第一次创建后就会缓存到缓存

## 指令
1. 共同点：都能控制元素的显示和隐藏；不同点：实现本质方法不同，v-show本质就是通过控制css中的display设置为none，控制隐藏，只会编译一次；v-if是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。而且v-if不停的销毁和创建比较消耗性能。总结：如果要频繁切换某节点，使用v-show(切换开销比较小，初始开销较大)。

2. v-model双向数据绑定；
3. v-for循环；
4. v-bind绑定一个value属性
5. v-on指令给当前元素绑定input事件
6. v-for 具有比 v-if 更高的优先级，如果v-if和v-for一起用的话，vue中的的会自动提示v-if应该放到外层去。

7. v-on事件；v-once: 只绑定一次。

8. 如何让CSS只在当前组件中起作用？
答：在组件中的style前面加上scoped

6. 如何获取dom?
答：ref="domName" 用法：this.$refs.domName

7 .为什么使用key?
答：需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。
作用主要是为了高效的更新虚拟DOM。

## vuex
### Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？
答：如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。
如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用。

### Vue.use(Vuex)
使用 Vuex 只需执行 Vue.use(Vuex)，并在 Vue 的配置中传入一个 store 对象的示例，store 是如何实现注入的？美团
Vue.use(Vuex) 方法执行的是 install 方法，它实现了 Vue 实例对象的 init 方法封装和注入，使传入的 store 对象被设置到 Vue 上下文环境的store中。因此在VueComponent任意地方都能够通过this.store 访问到该 store。

## Vue与Angular以及React的区别？

## 28.SPA首屏加载慢如何解决
答：安装动态懒加载所需插件；使用CDN资源

