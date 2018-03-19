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

/* Chrome 控制台可以用moment */
new Date('2018-01-05').getTime()  // 默认是 08:00:00
1515110400000


moment(1513326650913).format('YYYY-MM-DD HH-mm-ss')
"2017-12-15 16-30-50"
moment(1513326650913).format('YYYY-MM-DD HH:mm:ss')
"2017-12-15 16:30:50"
moment(1515110400000).format('YYYY-MM-DD HH:mm:ss')
"2018-01-05 08:00:00"

// 不写03竟然是12点
new Date('2018-3-19').getTime()
1521388800000
moment(1521388800000).format('YYYY-MM-DD hh:mm:ss')
"2018-03-19 12:00:00"


  