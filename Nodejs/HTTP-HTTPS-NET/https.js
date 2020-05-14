// https.createServer([options][, requestListener])

// curl -k https://localhost:8000/
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('certificate/server.key'),
  cert: fs.readFileSync('certificate/kart_com.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8900);



// https.get('https://www.baidu.com/', (res) => {
//   console.log('状态码:', res.statusCode);
//   console.log('请求头:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
// });