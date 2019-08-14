# toString\(\)

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global\_Objects/Number/toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

toString\(\) 方法返回指定 Number 对象的字符串表示形式。

numObj.toString\(\[radix\]\)

radix 指定要用于数字到字符串的转换的基数\(从2到36\)。如果未指定 radix 参数，则默认值为 10。

如果转换的基数大于10，则会使用字母来表示大于9的数字，比如基数为16的情况，则使用a到f的字母来表示10到15。

var count = 10;

console.log\(count.toString\(\)\); // 输出 '10' console.log\(\(17\).toString\(\)\); // 输出 '17' console.log\(\(17.2\).toString\(\)\); // 输出 '17.2's

