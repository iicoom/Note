//for in 操作对象的，for of 、forEach操作数组

/**
1. for in
*/
const obj = {
   'a': '1',
   'b': '2'
}
for ( const prop in obj) {
	console.log("obj." + prop + " = " + obj[prop])
}


/**
2. for of
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

// for in 与 for of 操作数组的差异
let ar = [ 1, 2, 3, 4, 5 ]
for(let item in ar) {console.log(item)}
// 0
// 1
// 2
// 3
// 4

for(let item of ar) {console.log(item)}
// 1
// 2
// 3
// 4
// 5


/**
3. for
*/
for (let i = 0; i < arr.length; i ++) {
   console.log(arr[i].a)
}
// 1
// 2
