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
