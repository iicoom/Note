/**
for in
*/
const obj = {
	'a': '1',
	'b': '2'
}

for ( const prop in obj) {
	console.log("obj." + prop + " = " + obj[prop])
}


/**
for of
*/
const arr = [{'a':'1'},{'a':'2'}]
for ( const index of arr) {
	index.b = '3'
	console.log(index)
}
/*
=>
obj.a = 1
obj.b = 2
{ a: '1', b: '3' }
{ a: '2', b: '3' }
*/
//for in 操作对象的，for of 、forEach操作数组

/**
for
*/
for (let i = 0; i < arr.length; i ++) {
   console.log(arr[i].a)
}
// 1
// 2
