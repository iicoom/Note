## 特殊的函数参数
```js
function frm() {}

// 方法定义 函数的参数都为 函数
frm.handleMsg = function(next, func) {
	let lock = "Redis lock";
	let someData = "DATA: jjjskjl"
	next(null, someData)
	func(lock)
}

// 方法调用 
frm.handleMsg((err, data) => {console.log(`first func params ${data}`)}, (lock) => {
	console.log("wtf lock", lock)
})

// $ node uglyparam.js
// first func params DATA: jjjskjl
// wtf lock Redis lock
```

## 高阶函数
```js
function higherFunc(firParam) {
	console.log(`Got firParam ${firParam}`)
	return function(secParam) {
		console.log(`Got secParam ${secParam}`)
	}
}

higherFunc(123)(456)
// Got firParam 123
// Got secParam 456
```
