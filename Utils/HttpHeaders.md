[CDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)

## Content-Type
Content-Type 实体头部用于指示资源的MIME类型 media type 。

在请求中 (如POST 或 PUT)，客户端告诉服务器实际发送的数据类型。

在响应中，Content-Type标头告诉客户端实际返回的内容的内容类型。

```
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
Content-Type: text/plain 
```

## Content-Disposition
[Content-Disposition](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Disposition)
在常规的HTTP应答中，Content-Disposition 响应头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。

```
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"


Content-Disposition: form-data; name="myFile"; filename="foo.txt" 

res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent('kk导出')}.csv"`);
```

## Cookie

## Host
