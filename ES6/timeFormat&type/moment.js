const moment = require('moment');


/**********************************************
	Supported ISO 8601 strings  "create_at" : ISODate("2018-02-25T13:31:09.645Z"),
***************************************************/

console.log( Date.parse('2017-12-15T08:30:50.913Z'))
// => 1513326650913

// 浏览器控制台
new Date()
// Fri Mar 23 2018 09:47:52 GMT+0800 (CST)
console.log(new Date().getTime())
// => 1513907599685

Date.parse(2017-12-15)
631152000000

Date.now()
// 1521769579275
moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
"2018-03-23 09:46:01"
moment('2018-02-25T13:31:09.645Z').format('YYYY-MM-DD HH:mm:ss')
"2018-02-25 21:31:09"



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
new Date('2018-03-19').getTime()
1521417600000
moment(1521417600000).format('YYYY-MM-DD HH:mm:ss')
"2018-03-19 08:00:00"
moment(1521417600000).format('YYYY-MM-DD hh:mm:ss')
"2018-03-19 08:00:00"

// 大于12点的就他妈不一样了。。。！！！
moment(1521388800000).format('YYYY-MM-DD hh:mm:ss')
"2018-03-19 12:00:00"
moment(1521388800000).format('YYYY-MM-DD HH:mm:ss')
"2018-03-19 00:00:00"

moment(1521712085299).format('YYYY-MM-DD hh:mm:ss')
"2018-03-22 05:48:05"
moment(1521712085299).format('YYYY-MM-DD HH:mm:ss')
"2018-03-22 17:48:05"

moment().format('YYYY-MM-DD HH:mm:ss')
"2018-04-23 10:32:42"
moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')
"2018-04-22 10:32:16"
moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')
"2018-04-21 10:32:59"

moment("2018-04-22 10:32:16", 'YYYY-MM-DD HH:mm:ss').valueOf()
1524364336000
moment(1524364336000).format('YYYY-MM-DD HH:mm:ss')
"2018-04-22 10:32:16"
moment("2018-04-22 10:32:16", 'YYYY-MM-DD HH:mm:ss').add(1, 'days').valueOf()
1524450736000
moment(1524450736000).format('YYYY-MM-DD HH:mm:ss')
"2018-04-23 10:32:16"


// 拿到本月初的时间及时间戳
moment().startOf('month').toDate()
Sun Apr 01 2018 00:00:00 GMT+0800 (CST)

moment().startOf('month').toDate().getTime()
1522512000000




  