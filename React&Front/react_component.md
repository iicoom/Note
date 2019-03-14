## 问题描述：如何动态修改一个元素的CSS样式呢？

1. jquery：如果只是写一个简单的页面，用jquery是最方便的方法。只要用jquery中的选择器就可以便捷地选中任何一个页面元素，对其style进行修改十分简单。
2. 原生JS：就算是用原生的JavaScript，也可以通过document.getElementById("")来选中该元素，从而修改样式。
3. react：在react中，因为核心思想是将页面元素组件化，把组件看成是一个状态机，因此需要通过控制状态的变化来实现。

下面贴上我的组件代码，实现了鼠标滑入div元素时，元素出现红色的底部边框；鼠标移出时，底部边框消失。

```
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
