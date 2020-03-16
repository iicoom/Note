// net 模块用于创建基于流的 TCP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）。
var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   connection.on('end', function() {
      console.log('客户端关闭连接');
   });
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});
server.listen(8080, function() { 
  console.log('server is listening');
});

var client = net.connect({port: 8080}, function() {
	console.log('连接到服务器！');  
});
client.on('data', function(data) {
	console.log(data.toString());
	client.end();
});
client.on('end', function() { 
	console.log('断开与服务器的连接');
});