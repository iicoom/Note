> 为什么要使用vue,React这些前端框架？

## React 和 Vue 有许多相似之处，它们都有：

- 使用 Virtual DOM
- 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。

### 传统的网页开发
- 大量的重复代码,如果用过类似于ejs, jade这样的模板引擎,就会发现他们在尝试解决这种重复性的问题，因为他们可以提取出header footer这些公共部分，而且他们支持一些语句来完成条件判断或者列表渲染
- 但是上面的改进还是只处于页面加载环节，但是如果涉及到页面的交互，还是需要直接操作DOM。如果用过原生DOM(getElementById,getElementByTagName)或者用过Jquery,就会发现这种DOM操作并不方便【例如：你的页面上有一个表格，里边有若干条数据，表格最后一列是操作按钮。现在加入要删除表格中的某一行，你可能需要确定要删除的是table中的那个tr,找到button的父级, 拿到父级的属性id,请求服务器的删除接口, 然后需要刷新浏览器,看到表格中的那一行消失了】

### React Vue

使用这种框架的的好处：
- 组件化，在模板引擎的基础上进一步升级，大大提高代码复用
- 不用再去操作DOM,只管修改这个组件维护的data,data变化是他会帮你自动渲染

## [install](https://cli.vuejs.org/zh/)
```
npm install -g @vue/cli
```