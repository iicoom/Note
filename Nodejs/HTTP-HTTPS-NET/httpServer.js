const http = require('http');

// 创建 HTTP 服务器。
const srv = http.createServer((req, res) => {
  console.log('========================request coming========')
  req.on('close', () => {
      console.log('req.close')
  })
  res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent('线索导出')}.csv"`);
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  const header = ['学员姓名', '手机号', '性别'];
  res.write('\uFEFF'+header.join(',')+'\r\n');
  const row = ['1', '2', '3'];
  res.write(row.join(',')+'\r\n');
  res.flushHeaders();
//   res.end('响应内容');
  res.end();
});

srv.listen(3009, '127.0.0.1', (req, res) => {
    console.log('service listen on port 3009')
})