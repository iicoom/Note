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