## 删除JS 对象属性（元素）
```js
var a={"id":1,"name":"danlis"};
//添加属性
a.age=18;
console.log(a);
//结果：Object { id: 1, name: "danlis", age: 18 }
//修改属性
a.age="我怎么知道";
//结果：Object { id: 1, name: "danlis", age: "我怎么知道" }
 
delete a.age;
//结果：Object { id: 1, name: "danlis" }


// 尝试删除不存在的属性
const oo = {ll: 12, pp: 33}
// {ll: 12, pp: 33}
delete oo.ll
true
// {pp: 33}
delete oo.kk
true
// {pp: 33}
```
