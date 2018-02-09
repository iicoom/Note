const moment = require('moment');

console.log('======new Date()========')
console.log( new Date() )
// => 2017-12-15T08:30:50.913Z

console.log('======Date.now()========')
console.log( Date.now() )

console.log(new Date().getTime())
// => 1513907599685

console.log("======Date.parse('2017-12-15T08:30:50.913Z')========")
console.log( Date.parse('2017-12-15T08:30:50.913Z'))
// => 1513326650913

Date.parse(2017-12-15)
631152000000

console.log("======moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')========")
console.log( moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') )
moment(record.create_at).format('YYYY-MM-DD HH:mm:ss')
// 2017-12-15T08:30:50.913Z =>
// 2018-02-01 10:16:24

console.log("======moment(1513326650913).format('YYYY-MM-DD')========")
console.log( moment(1513326650913).format('YYYY-MM-DD') )
  