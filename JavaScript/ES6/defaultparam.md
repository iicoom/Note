## 函数的默认参数
```
function abc(opts={}) {console.log(opts)}

abc()
=> {}

abc({name: 'jack', age: 28})
=> {name: "jack", age: 28}
```
