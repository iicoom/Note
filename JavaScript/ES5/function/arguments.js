// arguments 是一个对应于传递给函数的参数的类数组对象。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments

function testArg() {
	console.log(arguments)
}

testArg('qq',123,[4,5,6],{'key':'value'})

/**
Arguments(4) ["qq", 123, Array(3), {…}, callee: ƒ, Symbol(Symbol.iterator): ƒ]

0: "qq"
1: 123
2: (3) [4, 5, 6]
3: {key: "value"}
*/