# note

[分布式与集群的区别是什么？](https://www.zhihu.com/question/20004877) [学习分布式系统需要怎样的知识？](https://www.zhihu.com/question/23645117)

[Node.js 分布式架构](https://cnodejs.org/topic/56ab1eb524b0c1ec628ff084)

## 单台服务器上，如何让 Node.js 充分利用多核心 cpu

```text
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}
```

