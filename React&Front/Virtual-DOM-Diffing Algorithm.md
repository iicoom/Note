> How Virtual-DOM and diffing works in React

[The Diffing Algorithm](https://reactjs.org/docs/reconciliation.html)

React的”diff"算法有一些不同的处理方式，由此才能保证在构建高性能应用时 组件的更新是可预测的并且速度足够的快。

## Motivation
When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

render() function 创建出 React elements tree, 在下一次State or props更新后, render()方法就要返回一个不同的React elements tree。

react需要一套高效的算法来更新UI

通常把一个树形结构转换为另一个 算法的复杂度是O(n^3)  n是树形结构中元素的个数

如果用这样的算法，展示1000个元素，比较树形结构的变化将需要十亿次的比较运算。

这太昂贵了，React在这个基础上做了探索，他们把算法的复杂度降到了O(n), 是基于下面的2个假设：

1. 不同类型的2个元素将会产生不同的树

2. 开发者可以在元素上做出标记 也就是属性 key 来给React暗示，哪些元素在不同的render周期里可能是稳定的。

## The Diffing Algorithm

当比较2个树形结构时，React首先比较2个root节点元素，基于root节点的类型算法会表现出不同的行为。

1. Elements Of Different Types 根节点元素的类型不同
React will tear down the old tree and build the new tree from scratch. 

When tearing down a tree, old DOM nodes are destroyed. 
Component instances receive componentWillUnmount(). 
When building up a new tree, new DOM nodes are inserted into the DOM. 
Component instances receive componentWillMount() and then componentDidMount(). 
Any state associated with the old tree is lost.

<div>
  <Counter />
</div>

<span>
  <Counter />
</span>

This will destroy the old Counter and remount a new one.

2. DOM Elements Of The Same Type 节点元素相同
比较相同类型的节点，React只会查看2者的 attribute

<div className="before" title="stuff" />

<div className="after" title="stuff" />


3. Component Elements Of The Same Type 

When a component updates, the instance stays the same, so that state is maintained across renders.

React会更新props 给新的and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance.