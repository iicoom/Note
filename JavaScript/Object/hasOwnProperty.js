const o = new Object();
o.prop = 'exists';

function changeO() {
	o.newprop = o.prop;
	delete o.prop;
}

console.log('o:', o)

console.log('1:', o.hasOwnProperty('prop'))
changeO()
console.log('2:', o.hasOwnProperty('prop'))
console.log('3:', o.hasOwnProperty('newprop'))

/*
➜  Object git:(master) ✗ node hasOwnProperty.js
o: { prop: 'exists' }
1: true
2: false
3: true
*/


o.origin = (request) => {
	return request.get('Origin')
}

function test(option) {

	if (typeof option.origin === 'function') {
		let origin = option.origin(myrequest)
		console.log('typeof origin', typeof origin)
		console.log('option.origin after exec', origin)
	}
}

const myrequest = {}
myrequest.get = function (param) {
	return 'url';
}

test(o)

/*
typeof origin string
option.origin after exec url
 */

