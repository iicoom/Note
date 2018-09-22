const exdate = require('exdate');

/**
 * 转换时间
 * @param str
 * @returns {*}
 */
function getTime(str, pattern) {
    if (str) {
        return exdate.stringToDate(str, pattern).getTime();
    } else {
        return NaN;
    }
}

/**
 * 格式化时间
 * @param date
 * @param patten
 * @returns {String}
 */
exports.formatTime = function(date, patten) {
    return exdate.format(date, patten);
}

const start_time = '2017-12-31 17:59:59';

start_time_string = getTime(start_time,"yyyy-MM-dd HH:mm:ss");

console.log(start_time_string)
// => 1514714399000