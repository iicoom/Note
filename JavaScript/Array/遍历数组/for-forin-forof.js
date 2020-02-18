//for in 操作对象的，for of 、forEach操作数组

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
for (const item of arr) {
	item.b = '3'
	console.log(item)
}
// { a: '1', b: '3' }
// { a: '2', b: '3' }
// 结合数组解构
const arr3 = [['astr', 'bstr'], ['cstr', 'dstr']]
for (let [a, b] of arr3) {
    console.log(a, b)
}
// astr bstr
// cstr dstr


/**
for
*/
for (let i = 0; i < arr.length; i ++) {
   console.log(arr[i].a)
}
// 1
// 2
