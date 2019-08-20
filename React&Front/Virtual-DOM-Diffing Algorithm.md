> How Virtual-DOM and diffing works in React

[The Diffing Algorithm](https://reactjs.org/docs/reconciliation.html)

## Motivation
When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

render() function 创建出 React elements tree, 在下一次State or props更新后, render()方法就要返回一个不同的React elements tree。

react需要一套高效的算法来更新UI

## The Diffing Algorithm
