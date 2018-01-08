const obj = {
	'a': '1',
	'b': '2'
}

for ( const prop in obj) {
	console.log("obj." + prop + " = " + obj[prop])
}



function addProp (){
	const arr = [{'a':'1'},{'a':'2'}]
	for ( const index of arr) {
		index.b = '3'
		console.log(index)
	}
}
addProp ()

/*
=>
obj.a = 1
obj.b = 2
{ a: '1', b: '3' }
{ a: '2', b: '3' }
*/
//for in 操作对象的，for in 、forEach操作数组