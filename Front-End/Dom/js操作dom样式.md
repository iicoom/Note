[JS 操作样式 style](https://www.cnblogs.com/zhanglw456/p/10538111.html)

任何支持 style 特性的 HTML 元素在 JavaScript 中都对应着有一个 style 属性，指向一个 CSSStyleDeclaration 的一个实例对象，包含该元素的内嵌style样式（直接定义在HTML元素上的style）。

对于使用短线分割的CSS属性，在JavaScript中转为驼峰式。

几个常见的属性：
```
CSS属性	            JavaScript属性
background-image	style.backgroundImage
color	            style.color
display	            style.display
font-family	        style.fontFamily
height	            style.height
width	            style.width
```

```js
var testDiv = document.getElementById("test");
testDiv.style.backgroundColor = "red";  //所有浏览器都支持属性赋值
//testDiv.style.cssFloat = "right"; // IE9+，Firefox、Safari、Opera、Chrome
testDiv.style.styleFloat = "right"; // IE 所有
testDiv.style.border = "1px solid red";
console.log(testDiv.style.backgroundColor); // red

style.cssText   // 获取整个行内样式（字符串形式），注：赋值时是以覆盖这种形式的。
style.length     // 行内样式的个数 （IE9+）
style.removeProperty('background-color')  // 移除css属性（IE9+）
style.setProperty('background-color','blue') // 设置css属性（IE9+）
```
以上改变样式，会直接自动更新元素的表现。在标准模式下所有度量值都必须指定一个度量单位，如果没有设置会被忽略。

## 参考
https://www.jb51.cc/webfrontend/454454.html