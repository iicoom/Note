const moment = require('moment');

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

moment().valueOf()
// 1531123057095


/**********************************************
给定的YYYY-MM-DD HH:mm:ss 字符串转换为 时间戳
***************************************************/
new Date('2018-09-12 23:34:20').getTime()
// => 1536766460000


/**********************************************
给定的时间戳转换为  YYYY-MM-DD HH:mm:ss 字符串
***************************************************/
moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
// "2018-03-23 09:46:01"
moment().format('YYYY-MM-DD HH:mm:ss')
// "2019-12-14 11:19:45"
moment(1515110400000).format('YYYY-MM-DD HH:mm:ss')
// "2018-01-05 08:00:00"


/**********************************************
	Supported ISO 8601 strings  "create_at" : ISODate("2018-02-25T13:31:09.645Z"),
***************************************************/
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


// 拿到本月初的时间及时间戳
moment().startOf('month').toDate()
Sun Apr 01 2018 00:00:00 GMT+0800 (CST)

moment().startOf('month').toDate().getTime()
1522512000000
// 拿到本日初的时间及时间戳
moment().startOf('day').toDate()
Mon Jul 09 2018 00:00:00 GMT+0800 (中国标准时间)
moment().endOf('day').toDate()
Mon Jul 09 2018 23:59:59 GMT+0800 (中国标准时间)

moment().endOf('day').toDate().getTime()
1531151999999

moment().endOf('day').valueOf()
1531151999999

moment(1537866023000).endOf('day').valueOf()
1537891199999

moment(1537866023000).startOf('day').valueOf()
1537804800000


moment({hour: 5});  // today, 5:00:00.000
moment({hour: 5}).format('YYYY-MM-DD HH:mm:ss')
"2018-07-09 05:00:00"
moment({hour: 5, minute: 10, seconds: 20, milliseconds: 300});  // today, 5:10.20.300

moment(1531301950772).endOf('day').format('YYYY-MM-DD HH:mm:ss')
"2018-07-11 23:59:59"

moment(1531301950772).get('hour', 8).format('YYYY-MM-DD HH:mm:ss')
"2018-07-11 08:39:10"

moment(1531301950772).hour(8).format('YYYY-MM-DD HH:mm:ss')
"2018-07-11 08:39:10"
moment(1531301950772).hour(8).minute(0).second(0).millisecond(0).format('YYYY-MM-DD HH:mm:ss')
"2018-07-11 08:00:00"

// Mongodb 的ISO date 比较
localhost:3011/cloud_ranch/v2/api/userStorage?userName=张三&mobile=&startTime=2018-07-02&endTime=2018-07-29

startTime && endTime && (condition.update_at = { $gt: new Date(`${startTime}`), $lt: new Date(`${endTime}`) });

{ user_name: '张三',
  update_at:
   { '$gt': 2018-07-02T00:00:00.000Z,
     '$lt': 2018-07-29T00:00:00.000Z } }

moment.duration(32432234455).humanize();
"a year"

const create_time = 1558857293103;
undefined
moment.duration(Date.now()-create_time).humanize();
"a minute"

moment 国际化设置中文语言 (全局) 及使用示例
moment.locale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY年MM月DD日',
        LLL: 'YYYY年MM月DD日Ah点mm分',
        LLLL: 'YYYY年MM月DD日ddddAh点mm分',
        l: 'YYYY-M-D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        } else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        const hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        } else if (hm < 900) {
            return '早上';
        } else if (hm < 1130) {
            return '上午';
        } else if (hm < 1230) {
            return '中午';
        } else if (hm < 1800) {
            return '下午';
        } else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function (number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '日';
            case 'M':
                return number + '月';
            case 'w':
            case 'W':
                return number + '周';
            default:
                return number;
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d秒',
        m: '1分钟',
        mm: '%d分钟',
        h: '1小时',
        hh: '%d小时',
        d: '1天',
        dd: '%d天',
        M: '1个月',
        MM: '%d个月',
        y: '1年',
        yy: '%d年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
})


moment.locale('zh-cn', {relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d秒',
        m: '1分钟',
        mm: '%d分钟',
        h: '1小时',
        hh: '%d小时',
        d: '1天',
        dd: '%d天',
        M: '1个月',
        MM: '%d个月',
        y: '1年',
        yy: '%d年'
    },})
"zh-cn"
moment.duration(Date.now()-create_time).humanize();
"10分钟"

******Moment格式化时间默认格式为当地时区的时间。********
如果格式化的结果与当地时间有差值，一般原因是：要格式化的时间带有时间标志，如：UTC 、GMT等。

例如，要格式的时间中带有GMT标志（GMT是零时区），要格式化为北京时间

moment(date).utcOffset(480).format('YYYY-MM-DD HH:mm:ss');
北京时间东八区时间，比零时区早8个小时（480分钟），所以应该加上480分钟



  
