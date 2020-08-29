// https://github.com/js-n/objectid
var objectid = require('objectid')

var id = objectid()
console.log(id)
// 5a571794895754e248000001

objectid.isValid(id)
// => true
objectid.isValid('4frsdef43wzx')
// => false

console.log(typeof id)
// object

const ctoken = objectid().toString();
console.log(typeof ctoken)
// string
console.log(ctoken)
/*
5a571794895754e248000002
*/

// ## 18"ObjectID"有哪些部分组成
// 一共有四部分组成:时间戳、客户端ID、客户进程ID、三个字节的增量计数器

ObjectId("507c7f79bcf86cd7994f6c0e").getTimestamp()
// This will return the following output:
ISODate("2012-10-15T21:26:17Z")

ObjectId("507c7f79bcf86cd7994f6c0e").valueOf()
// This will return the following string:
// 507c7f79bcf86cd7994f6c0e