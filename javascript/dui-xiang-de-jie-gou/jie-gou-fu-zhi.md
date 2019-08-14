# 解构赋值

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

给新的变量名赋值 var o = {p: 42, q: true}; var {p: foo, q: bar} = o;

console.log\(foo\); // 42 console.log\(bar\); // true

默认值-可以避免解构对象不存在是报错 var {a = 10, b = 5} = {a: 3};

console.log\(a\); // 3 console.log\(b\); // 5

```text
const {
      teacher: { snippetDetail = {} },
    } = this.props;

<div dangerouslySetInnerHTML={createMarkup(snippetDetail.content)} />
```

给新的变量命名并提供默认值 var {a:aa = 10, b:bb = 5} = {a: 3};

console.log\(aa\); // 3 console.log\(bb\); // 5

函数参数默认值 ES5版本

```text
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

ES2015版本

```text
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) 
{
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

解构嵌套对象和数组

```text
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

