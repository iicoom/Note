var fs = require('fs');
var filepath = '126.txt';
fs.unlink(filepath, function(err){
 if(err){
  throw err;
 }
 console.log('文件:'+filepath+'删除成功！');
})