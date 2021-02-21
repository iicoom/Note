## 虚拟DOM
虚拟DOM (VDOM)是一个编程概念,并通过ReactDOM等库与“真实”DOM同步.

与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

### reconciliation调和
在state或props更新时，render()函数将返回不同的React元素树。然后，React需要弄清楚如何有效地更新UI以匹配最新的树.

Trees are among the most common and well-studied combinatorial structures in computer science.
在计算机科学中树是最常见的被广泛研究的复合结构。

特别地，比较树的问题出现在几个地方不同的领域，如计算生物学，结构化文本数据库，图像分析、自动定理证明和编译器优化。

1. [state of the art algorithms](https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf) have a complexity in the order of O(n3) where n is the number of elements in the tree
2. 上面的算法开销过大，相反，React基于两个假设实现了启发式O(n)算法:

### The Diffing Algorithm
When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.
当比较两个树时，React首先比较两个root元素。根据root元素的type采取不同的比较方式。
1. Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch.
2. When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.

After handling the DOM node, React then recurses on the children.
处理完DOM节点后，React会递归到子节点上。

Recursing On Children：
1. Keys
```
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

因为React依赖于启发式，如果不满足它们背后的假设，性能就会受到影响。


## React JSX - Vue template
### JSX
```js
const element = <h1>Hello, world!</h1>;
```
它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式

想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## 类组件和函数组件之间有什么区别？
1. 类组件（Class components）
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
2. 函数组件（functional component）
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

区别：
```
区别	        函数组件	类组件
是否有this	     没有	    有
是否有生命周期	  没有	     有
是否有状态state	  没有	     有
```

函数组件的性能比类组件的性能要高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。

但是有状态的组件就可能会涉及到生命周期的就必须使用类组件
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

## props vs state
React 非常灵活，但它也有一个严格的规则：

所有 React 组件都必须像纯函数一样保护它们的 props 不被更改,是一个从外部传进组件的参数，主要作为就是从父组件向子组件传递数据，它具有可读性和不变性，只能通过外部组件主动传入新的props来重新渲染子组件

在不违反上述规则的情况下，state 允许 React 组件随用户操作、网络响应或者其他变化而动态更改输出内容。它只能在constructor中初始化，它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的this.setState来修改，修改state属性会导致组件的重新渲染


## [Hook](https://zh-hans.reactjs.org/docs/hooks-intro.html)
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

### useState useRef

### useEffect
useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API

当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。

### useReducer


## fetch data with React Hooks
[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

### CUSTOM DATA FETCHING HOOK


## React中的refs作用是什么？
Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。

[如何创建refs？](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper)

实际使用：antd-Form/pro4/page/student
```
createFormRef = React.createRef();
this.createFormRef.current.resetFields();
```

[more](https://www.html.cn/interview/19355.html)

db.order.insertOne({
  platform: "school",
  bu: "fakao",
  studentName: "无",
  userId: "5cc1d7bb156f51a2883fe6d3",
  salesman: {
		"no" : 10182,
		"name" : "赵天翼",
		"department" : {
			"no" : 136,
			"name" : "用户运营部"
		}
	},
  productId: "5f84308c27ce46747a5a83c7",
  tradeNo: "ZH5f8d83f7235146307024c56e",
  class: {
      _id: "5f84308c27ce46747a5a83c7",
      title: "2021年法考旗舰全程班",
      type: "wangshou",
      specInfo: {
          _id: "5f84308c27ce46747a5a83c6",
          title: "法考旗舰全程班",
          price: 828000,
          onsalesInfo: {
            "startTime" : "2020-10-18T16:00:00.000Z",
            "endTime" : "2020-10-19T15:59:59.000Z",
            "price" : 808000,
            "labelPrice" : 1680000
          },
      }
  },
  productPrice: 808000,
  status: "claim",
  reviewStatus: "pending",
  totalFee: 808000,
  totalPaidFee: 808000,
  totalReceivedFee: 808000,
  fullyPaidAt: ISODate("2020-10-19T12:18:07.464Z"),
  createdAt: ISODate("2020-10-19T12:18:07.464Z"),
  originalUsOrder: "",
  note: "",
  images: ""
});