// https://www.cnblogs.com/xiaoyucoding/p/7834448.html
const ws = require('nodejs-websocket');
console.log('开始建立连接...');
const server = ws.createServer(function(conn) {
  conn.on('text', function(str) {
    console.log('收到的信息为:' + str);
    conn.send(str);
  });
  conn.on('close', function(code, reason) {
    console.log('关闭连接');
  });
  conn.on('error', function(code, reason) {
    console.log('异常关闭');
  });
}).listen(8001);
console.log('WebSocket建立完毕');

// 客户端
var ws = new WebSocket('ws://localhost:8001');
ws.onopen = function() {
  console.log('open');
  ws.send('hello');
};
ws.onmessage = function(evt) {
  console.log('message:', evt.data)
};
ws.onclose = function(evt) {
  console.log('close');
};

// websocket的连接建立过程:
// 1、客户端发送GET 请求， upgrade
// 2、服务器给客户端 switching protocol
// 3、就进行了webSocket的通信了

// 1、发送一个GET请求
// 关键:
// Upgrade: websocket
// Connection: Upgrade

// 这两个就告诉服务器，我要发起websocket协议，我不是HTTP。

// 服务器收到了协议，返回一个 Switching Protocol， 这样就连接成功了

// 接下来的通信都是websocket， 这样就很好的连接了



// https://timefly.cn/learn-websocket-protocol-1/
// 建立TCP连接之后，开始建立WebSocket连接，上文说过WebSocket连接只需一次成功握手即可建立。

//index.js
var net = require('net');

net.createServer(function(socket) {
    console.info('tcp client connected');

    socket.on('data', function(data) {

    }); 

    socket.on('end', function() {
        console.info('client disconnected');
    }); 
}).listen(7002);

// 在浏览器中执行如下代码：
var ws = new WebSocket("ws://localhost:7002");


// 首先客户端会发送一个握手包。这里就体现出了WebSocket与Http协议的联系，握手包的报文格式必须符合HTTP报文格式的规范。其中：
/**
 * TODO:
 * FIXME:
 */