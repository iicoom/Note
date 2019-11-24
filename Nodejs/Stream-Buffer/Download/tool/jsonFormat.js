const fs = require('fs');
const path = require('path');
const request = require('request');
const jsonFormat = require('json-format');
const uglyJson = require('../json/ugly1.json');
// console.log(uglyJson)

// 格式化json
function Format (uglyJson) {
    /* using config default, indent with tabs */
    const config = {
        type: 'space',
        size: 2
    };
    fs.writeFile('json/beauty1.json', jsonFormat(uglyJson,config), function(err){
        if (err) throw err;
        console.log('saved');
    });
}
Format(uglyJson);

// node.js中，在任何模块文件内部，可以使用__filename变量获取当前模块文件的带有完整绝对路径的文件名。
// console.log(__dirname);
// => E:\Work\Download\tool
// console.log(path.join(__dirname,'json'));
// => E:\Work\Download\tool\json


/*
* url 网络文件地址
* filename 文件名
* callback 回调函数
*/
function downloadFile(uri,filename,callback){
    const stream = fs.createWriteStream(`json/${filename}`);
    request(uri).pipe(stream).on('close',callback);
}

// URL decoded  https://www.urldecoder.org/
// 小贝教你弹钢琴  http://www.tan8.com/codeindex.php?d=classroom&c=classRoom&m=getChapterInfo&id=108&muban_data_ver=10&instrumentType=1&apptype=3&isInReview=0&device=android
// 小贝教你弹即兴  http://www.tan8.com/codeindex.php?d=classroom&c=classRoom&m=getChapterInfo&id=9&muban_data_ver=10&instrumentType=1&apptype=3&isInReview=0&device=android
const getUglyJson = () => {
    const fileUrl = 'http://www.tan8.com/codeindex.php?d=classroom&c=classRoom&m=getChapterInfo&id=9&muban_data_ver=10&instrumentType=1&apptype=3&isInReview=0&device=android';
    const filename = 'ugly1.json';
    downloadFile(fileUrl,filename,function(){
        console.log(filename+'下载完成');
    })
};
// 下载ugly json
// getUglyJson();






