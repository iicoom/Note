// 例1
function foo() {console.log(this.a)}

var obj = {a:2,foo:foo}

obj.foo()
// 2

// 例2
// 指向全局的this
function foo() {
	console.log(this.a)
}

var a = 2;
foo()
// 2

// 例3
function foo() {console.log(this.a)}
function doFoo(fn) {
	this.a = 4;
	fn();
}
var obj = {
	a: 2,
	foo: foo
}
var a = 3;
doFoo( obj.foo )
// 4

// 例4
function foo() {
	this.a = 1;
	console.log(this.a)
}
function doFoo(fn) {
	this.a = 4;
	fn();
}
var obj = {
	a: 2,
	foo: foo
}
var a = 3;
doFoo( obj.foo )
// 1