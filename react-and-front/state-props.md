# state props

## 组件的 state 和 setState

```text
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

## state vs props

* state 的主要作用是用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。你可以认为 state 是一个局部的、只能被组件自身控制的数据源。state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。
* props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。

但是它们的职责其实非常明晰分明：state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。

如果你觉得还是搞不清 state 和 props 的使用场景，那么请记住一个简单的规则：尽量少地用 state，尽量多地用 props。

没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。

> 没有 state 的组件叫无状态组件（stateless component\) React.js 非常鼓励无状态组件

```text
class HelloWorld extends Component {
  constructor() {
    super()
  }

  sayHi () {
    alert('Hello World')
  }

  render () {
    return (
      <div onClick={this.sayHi.bind(this)}>Hello World</div>
    )
  }
}
```

用函数式组件的编写方式就是：

```text
const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
```

## render

react setState后render没有更新

```text
遇到问题后解决的方法
React.Component 把PureComponent 改成Component
备注：React.PureComponent 通过prop和state的浅对比来实现 如果使用了PureComponent 请确保子组件也是PureComponent
```

## 问题描述：如何动态修改一个元素的CSS样式呢？

1. jquery：如果只是写一个简单的页面，用jquery是最方便的方法。只要用jquery中的选择器就可以便捷地选中任何一个页面元素，对其style进行修改十分简单。
2. 原生JS：就算是用原生的JavaScript，也可以通过document.getElementById\(""\)来选中该元素，从而修改样式。
3. react：在react中，因为核心思想是将页面元素组件化，把组件看成是一个状态机，因此需要通过控制状态的变化来实现。

下面贴上我的组件代码，实现了鼠标滑入div元素时，元素出现红色的底部边框；鼠标移出时，底部边框消失。

```text
import React, { Component } from 'react';
import { Input } from 'antd';

class SwitchBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      border1:true,
      border2:true
    };
  }
  switchBorder1(){
    this.setState({border1:!this.state.border1});
    console.log(this.state);
  }
  switchBorder2(){
    this.setState({border2:!this.state.border2});
    console.log(this.state);
  }
  render() {
    const divStyle = {
      height: '100px',padding: '20px 0',margin: '0 0 30px 0'
    };
    const btnStyle1 = {
      fontSize:'30px',width: '50%',textAlign:'center',float: 'left',
      borderBottom:this.state.border1?'':'2px solid red'
    };
    const btnStyle2 = {
      fontSize:'30px',width: '50%',textAlign:'center',float: 'left',
      borderBottom:this.state.border2?'':'2px solid red'
    };
    return (            
            <div style={divStyle}>
                <div id="LoginBtn" style={btnStyle1}  onMouseOver={this.switchBorder1.bind(this)} onMouseOut={this.switchBorder1.bind(this)}>
                    <p>登录</p>
                </div>
                <div id="RegisterBtn" style={btnStyle2}  onMouseOver={this.switchBorder2.bind(this)} onMouseOut={this.switchBorder2.bind(this)}>
                    <p>注册</p>
                </div>
           </div>
    );
  }
}

export default SwitchBtn;
```

## 与上面思路类似，封装一个slideContainer组价

```text
/**
 * Created by guitar on 2019/3/13.
 */
import React, { Component } from 'react';
import { Button } from 'antd';

class SliderContainer extends Component {
  state = {
    mini: true,
  };

  changeSize = () => {
    const { mini } = this.state;
    this.setState({ mini: !mini });
  };

  render() {
    const { mini } = this.state;
    const { children } = this.props;
    const fakeLayer = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0px',
      bottom: '0px',
    };
    const divStyle = {
      position: 'absolute',
      height: '500px',
      width: '100%',
      backgroundColor: '#fff',
      left: '0px',
      bottom: mini ? '-480px' : '0px',
      zIndex: '2',
    };
    const floatBtn = {
      position: 'absolute',
      right: '15px',
      top: '-24px',
      zIndex: '5',
    };
    const masker = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0px',
      bottom: '0px',
      backgroundColor: 'rgba(0,0,0,0.2)',
      display: mini ? 'none' : 'block',
      zIndex: '2',
    };
    console.log(this.props)

    return (
      <React.Fragment>
        <div style={fakeLayer}>
          <div style={masker} onClick={this.changeSize} />
          <div style={divStyle}>
            <Button size="small" type="primary" style={floatBtn} onClick={this.changeSize}>
              {mini ? '评论' : '收起'}
            </Button>
            {children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SliderContainer;
```

组件本身可以正常工作，但是无法做状态初始化，所以考虑父组件传递父组件给slideContainer，并且传递一个function props给 它，在父组件中维护它的状态。修改为如下：

```text
/**
 * Created by guitar on 2019/3/13.
 */
import React, { Component } from 'react';
import { Button } from 'antd';

class SliderContainer extends Component {

  changeSize = () => {
    const { changeState } = this.props;
    changeState()
  };

  render() {
    const { children, mini } = this.props;
    const fakeLayer = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0px',
      bottom: '0px',
    };
    const divStyle = {
      position: 'absolute',
      height: '500px',
      width: '100%',
      backgroundColor: '#fff',
      left: '0px',
      bottom: mini ? '-480px' : '0px',
      zIndex: '2',
    };
    const floatBtn = {
      position: 'absolute',
      right: '15px',
      top: '-24px',
      zIndex: '5',
    };
    const masker = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0px',
      bottom: '0px',
      backgroundColor: 'rgba(0,0,0,0.2)',
      display: mini ? 'none' : 'block',
      zIndex: '2',
    };
    console.log(this.props)

    return (
      <React.Fragment>
        <div style={fakeLayer}>
          <div style={masker} onClick={this.changeSize} />
          <div style={divStyle}>
            <Button size="small" type="primary" style={floatBtn} onClick={this.changeSize}>
              {mini ? '评论' : '收起'}
            </Button>
            {children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SliderContainer;
```

在父组件中调用

```text
changeState = () => {
  const { mini } = this.state;
  this.setState({mini: !mini})
};

render() {
  <SlideContainer
    changeState={this.changeState}
    mini={mini}
  >
    <div className={styles.repostEditor}>
      <BraftEditor
        value={editorState}
        onChange={this.onEditorStateChange}
        controls={editorControls}
        onBlur={this.onBlur}
      />
    </div>
    <Button
      type="primary"
      className={styles.submit}
      htmlType="submit"
      onClick={this.handleSubmit}
    >
      回复
    </Button>
  </SlideContainer>
}
```

