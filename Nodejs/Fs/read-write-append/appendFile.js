var fs = require('fs');
var path = require('path');

// 插入内容到文件最后一行
fs.appendFile(path.resolve(__dirname, '../config/config.txt'), '\nappended: "this is append content"', () => {})