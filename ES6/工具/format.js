const url = '//m.yunfarm.cn/api/announcement/{0}';

const _id = '12345';
const newurl = format(url, _id);

console.log(newurl);

/**
   * 格式化
   * @example
   * format('{0} is dead, but {1} is alive! {0} {2}', 'ASP', 'ASP.NET');
   * ASP is dead, but ASP.NET is alive! ASP {2}
   * @param format
   * @returns {*}
   */
  function format(format) {
    const args = Array.prototype.slice.call(arguments, 1);  
    // 传进来的arguments：[ '//m.yunfarm.cn/api/announcement/{0}', '12345' ]
    // 从1的位置截取 => [ '12345' ]
    return format.replace(/{(\d+)}/g, (match, number) => {
      console.log(args)
      console.log(match)
      console.log(number)
      return typeof args[number] !== 'undefined'
        ? args[number] : match;
    });
    // replace 的第二个参数 => 用来替换的值
  }

/*
[ '//m.yunfarm.cn/api/announcement/{0}', '12345' ]
args => [ '12345' ]
match => {0}
number => 0

newurl => //m.yunfarm.cn/api/announcement/12345
*/

// function format(format, id) {
//     return format.replace(/{(\d+)}/g, id);
//   }
