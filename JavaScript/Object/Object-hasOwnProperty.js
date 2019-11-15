/**
 * 对象自身属性的添加、删除
 */
const o = new Object();
o.prop = 'exists';

function changeO() {
	o.newprop = o.prop;
	delete o.prop;
}

console.log('o:', o)
// o: { prop: 'exists' }

console.log('1:', o.hasOwnProperty('prop'))
// 1: true

changeO()
console.log('2:', o.hasOwnProperty('prop'))
// 2: false

console.log('3:', o.hasOwnProperty('newprop'))
// 3: true



