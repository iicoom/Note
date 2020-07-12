/**
 * 前段时间偶然需要整理一个几百MB的文本文件，内容大概370W行，我要将每一行的数据简单格式化一下，并转存到一个新的文件中。
 * 
 * 使用fs.readFile()一次性将文件内容全部读取出来，考虑到可能将来会操作几G大的文件，所以放弃了这种方式；
 * 
 * 使用fs.createReadStream()创建一个读文件流，这种方式可不受限于文件的大小；
 * 
 * 自然在写文件时也使用对应的fs.createWriteStream()来做
 * 
 * https://cnodejs.org/topic/55a73038f73c01466cf931f2
 * 
 * 我们在使用fs.createReadStream()创建一个读文件流后，文件内容便源源不断地被读取出来，不断地触发data事件。
 * 然后在ReadStream的data事件里面处理，并写入到WriteStream中。然而，大多数情况下读文件的速度总比写文件的速度快，
 * 这样便导致大量的数据被积压在内存中，当要读取的文件很大时，甚至会导致因占用内存太多而导致整个Node.js进程崩溃。
 */


 // 官网的一个例子
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // The filename is simple the local directory and tacks on the requested url
  var filename = __dirname+req.url;

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream(filename);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(8080);