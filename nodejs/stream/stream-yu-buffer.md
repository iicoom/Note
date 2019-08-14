# Stream与Buffer

> Buffer模式会将来自资源的所有数据收集到Buffer区中; 一旦读取完整个资源，就会把结果传递给回调函数 Streams允许你在数据到达时立即处理数据。 首先，Streams允许我们做一些看起来不可能的事情，通过缓冲数据并一次性处理。 例如，考虑一下我们必须读取一个非常大的文件，比如说数百MB甚至千MB。 显然，等待完全读取文件时返回大Buffer的API不是一个好主意。 想象一下，如果并发读取一些大文件， 我们的应用程序很容易耗尽内存。 除此之外，V8中的Buffer不能大于0x3FFFFFFF字节（小于1GB）。 所以，在耗尽物理内存之前，我们可能会碰壁。

[原文地址](https://zhuanlan.zhihu.com/p/32532984)

## 使用Streams进行压缩文件

```text
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('File successfully compressed'));
```

## 时间效率

现在让我们考虑一个压缩文件并将其上传到远程HTTP服务器的应用程序的例子，该远程HTTP服务器进而将其解压缩并保存到文件系统中。 我们创建一个叫做gzipReceive.js的模块，代码如下： const http = require\('http'\); const fs = require\('fs'\); const zlib = require\('zlib'\);

```text
const server = http.createServer((req, res) => {
    const filename = req.headers.filename;
    console.log('File request received: ' + filename);
    req
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(filename))
        .on('finish', () => {
            res.writeHead(201, {
                'Content-Type': 'text/plain'
            });
            res.end('That\'s it\n');
              console.log(`File saved: ${filename}`);
        });
});

server.listen(3000, () => console.log('Listening'));
```

服务器从网络接收数据块，将其解压缩，并在接收到数据块后立即保存，这要归功于Node.js的Streams。

