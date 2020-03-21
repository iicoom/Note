// 全局变量 __dirname 文件的绝对路径
console.log(__dirname)
// /Users/guitar/Work/yasuo/models

// 取当前目录的上级目录
console.log(path.join(__dirname, '../'))
// /Users/guitar/Work/yasuo/

/*
// express res.sendFile() 需要传入一个文件的绝对路径
// 项目目录结构如下
public/index.html
route/chatRoom.js
*/
// chatRoom.js
router.get('/chatRoom', function(req, res){
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
