// axio参数传递
import axios from '../utils/axios';

export const addComments = async params => axios.post('/snippets/comments/create', params);
export const getCommentsList = async params =>
  axios.get('/snippets/comments', { params });

/*
console.log('ctx.query', ctx.query)
getList-param { snippet_id: '8', page: 1, limit: 20 }
*/

//axios POST提交数据的三种请求方式写法
// https://segmentfault.com/a/1190000015261229

1. Content-Type: application/json

2. Content-Type: multipart/form-data
https://www.npmjs.com/package/form-data

multipart/form-data 以下是form-data的拼接方式

这又是一个常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 <form> 表单的 enctype 等于 multipart/form-data。

直接来看一个请求示例：

form表单：
<form action="/upload" enctype="multipart/form-data" method="post">
    Username: <input type="text" name="username">
    Password: <input type="password" name="password">
    File: <input type="file" name="file">
    <input type="submit">
</form>

Http协议请求：
POST http://www.example.com HTTP/1.1
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA
 
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="text"
 
title
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="file"; filename="chrome.png"
Content-Type: image/png
 
PNG ... content of chrome.png ...
------WebKitFormBoundaryrGKCBY7qhFd3TrwA--

Node.js 以及Python模拟表单上传
// let boundaryKey = Math.random().toString(16);
    // let formParams = (function (obj) {
    //   let rslt = [];
    //   Object.keys(obj).forEach(function (key) {
    //     let arr = ['\r\n----' + boundaryKey + '----\r\n'];
    //     arr.push(`Content-Disposition: form-data; name="${key}"\r\n\r\n`);
    //     arr.push(obj[key]);
    //     rslt.push(arr.join(''));
    //     console.log('rslt', rslt)
    //   });
    //   return rslt.join('');
    // })(params);
    // formParams += '----' + boundaryKey +
    //   'Content-Disposition: form-data; name="file"\r\n\r\n'+content+
    //   'Content-Type: application/octet-stream' +
    //   'Content-Transfer-Encoding: binary';
    // var form = new FormData();
    // form.append('task_id', params.task_id);
    // form.append('slice_id', params.slice_id);

3. Content-Type: application/x-www-form-urlencoded
