const myObject = {
	foo: 'bar',
	myFunc: function() {
		let self = this;
		console.log(`methord outter this.foo: ${this.foo}`);
		console.log(`methord outter self.foo: ${self.foo}`);
		(function() {
			console.log(`methord inner this.foo: ${this.foo}`)
			console.log(`methord inner self.foo: ${self.foo}`)
		})()
	}
}

myObject.myFunc()

/*
➜  ~ node test.js
methord outter this.foo: bar
methord outter self.foo: bar
methord inner this.foo: undefined
methord inner self.foo: bar

立即执行里边的this指向的是myFunc, 这个作用域中的 this的foo属性为 undefined
*/

/**
 * call/bind/apply 的异同及使用方法
 */
function greet () {
	console.log(`Hello, my name is ${this.name}`)
}
  
const user = {
	name: 'Tyler',
	age: 27,
}

greet()
// Hello, my name is undefined

greet.call(user)
// Hello, my name is Tyler

function greet1 (lang1, lang2, lang3) {
  console.log(`Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet1.call(user, languages[0], languages[1], languages[2])

greet1.apply(user, languages)

// .bind 和 .call 完全相同，除了不会立刻调用函数，而是返回一个能以后调用的新函数。
const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() 

// output: "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"

