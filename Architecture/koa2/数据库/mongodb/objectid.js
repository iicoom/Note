// https://github.com/js-n/objectid
var objectid = require('objectid')

var id = objectid()

console.log(id)

objectid.isValid(id)
// => true

objectid.isValid('4frsdef43wzx')
// => false

console.log(typeof id)


const ctoken = objectid().toString();

console.log(typeof ctoken)

console.log(ctoken)

// =>
/*
5a571794895754e248000001
object
string
5a571794895754e248000002
*/