https://oychao.github.io/2016/12/03/react/07_html_to_string/

## 将字符串转换成HTML节点
原生的做法很简单，就是使用innerHTML属性就可以实现了。
```
const html = "<p>Some HTML</p>";
let div = document.getElementById('yourDOMId');
div.innerHTML = html;
```

## React中将字符串转换为DOM节点
React不支持直接将字符串放到render返回值中，这样放入的字符串会被当做一般字符串处理。
```
const App = () => {
  const str = '<div>test</div>';
  return (
    <div>
      {str}
    </div>
  );
};
```
该组件中的str会被当做字符串处理，直接在页面中显示出来。

React有一个专门的属性叫dangerouslySetInnerHTML是用于处理这种情况的。
```
const App = () => {
  const str = '<div>test</div>';
  return (
    <div dangerouslySetInnerHTML={str}>
    </div>
  );
};
```
像上面这种处理方式就能正确完成在React组件中渲染字符串了，不过从这个属性名就可以看出，在进行这个操作之前一定要十分清楚自己传进去的字符串是可以被转换成正确的HTML的字符串。

以上方法还会报错

下面官网的例子OK
https://reactjs.org/docs/dom-elements.html
```
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```
