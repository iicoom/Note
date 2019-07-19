function sayHello(person: string) {
	return 'Hello, ' + person;
}

// let user = 'Tom';
let user = [0, 1, 2];
console.log(sayHello(user));

console.log(5 == '5')

console.log(0 == '')
// This condition will always return 'false' since the types '5' and '"5"' have no overlap.
