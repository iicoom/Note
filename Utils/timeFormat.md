## JS Date() 对象
```js
/**********************************************
获取当前时间、时间戳
***************************************************/
new Date()
// Sat Dec 14 2019 11:01:33 GMT+0800 (中国标准时间)
Date.now()
// 1576292590340           // 获取当前时间13位时间戳
new Date().getTime()
// 1576292635410	   // 使用实例出的Date getTime() 方法

new Date('2018-01-05').getTime()  // 默认是 08:00:00
// 1515110400000

/**********************************************
给定的YYYY-MM-DD HH:mm:ss 字符串转换为 时间戳
***************************************************/
new Date('2018-09-12 23:34:20').getTime()
// => 1536766460000

new Date(1600099200000)
Tue Sep 15 2020 00:00:00 GMT+0800 (中国标准时间)


Zhong@LAPTOP-S26GFGQ7 MINGW64 /
$ node
Welcome to Node.js v12.18.3.
Type ".help" for more information.
> new Date()
2020-10-14T07:21:19.342Z

Date.parse('2020-10-14T07:21:19.342Z')
1602518400000
```

## 时间戳格式化
```js
/**********************************************
给定的时间戳转换为  YYYY-MM-DD HH:mm:ss 字符串
***************************************************/
moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
// "2018-03-23 09:46:01"
moment().format('YYYY-MM-DD HH:mm:ss')
// "2019-12-14 11:19:45"
moment(1515110400000).format('YYYY-MM-DD HH:mm:ss')
// "2018-01-05 08:00:00"
```
### startOf endOf (day,month)获得时间戳
```js
// 拿到本日初的时间及时间戳
moment().startOf('day').valueOf()
1537804800000
// 拿到本日末的时间及时间戳
moment().endOf('day').valueOf()
1531151999999
// 接受某天的参数
moment(1537866023000).startOf('day').valueOf()
moment(1531301950772).endOf('day').format('YYYY-MM-DD HH:mm:ss')
"2018-07-11 23:59:59"


// 拿到本月初的时间及时间戳
moment().startOf('month').toDate()
Sun Apr 01 2018 00:00:00 GMT+0800 (CST)
moment().startOf('month').toDate().getTime()
1522512000000

moment().startOf('day').toDate()
Mon Jul 09 2018 00:00:00 GMT+0800 (中国标准时间)


// 获取当天某时的时间
moment({hour: 5});  // today, 5:00:00.000
moment({hour: 5}).format('YYYY-MM-DD HH:mm:ss')
"2018-07-09 05:00:00"
moment({hour: 5, minute: 10, seconds: 20, milliseconds: 300});  // today, 5:10.20.300

// 自定义时间格式
moment().format('YYYYMMDDHHmmss')
"20200831200405"
```
### 增减时间区间 day hour
```js
moment().add(48, 'h').format()
"2020-09-02T20:21:06+08:00"
moment().add(7, 'd');
moment().add(-1, 'd');

moment().add(7, 'days').add(1, 'months'); // 链式
moment().add({days:7,months:1}); // 对象字面量
```

### [查询](http://momentjs.cn/docs/#/query/)
isBetween,isAfter

### humanize & 国际化

## ISODate 处理
```js
/**********************************************
	Supported ISO 8601 strings  "create_at" : ISODate("2018-02-25T13:31:09.645Z"),
***************************************************/
new Date()
moment().toDate()

// 存入到mongodb 就是ISODate 格式
"updatedAt" : ISODate("2020-09-04T09:12:50.850Z")


// 解析 ISODate
Date.parse('2017-12-15T08:30:50.913Z')
// => 1513326650913
moment('2018-02-25T13:31:09.645Z').format('YYYY-MM-DD HH:mm:ss')
"2018-02-25 21:31:09"


/**********************************************
给定的Unix时间戳
***************************************************/
moment(Date.now()).unix()
// 1576232051     // 10位
Date.now().toString().substr(0,10);
//  生成10位时间戳

moment("1970-01-01 08:00:00").unix()
// 0
```


## 其他注意问题
```js
// 不写03竟然是12点
new Date('2018-3-19').getTime()
1521388800000
new Date('2018-03-19').getTime()
1521417600000

// 大于12点的就他妈不一样了。。。！！！ 注意HH与hh 的写法 24小时制与12小时制
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
```