https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms

## location
### ~
~ 开头表示区分大小写的正则匹配

### ~*
~*  开头表示不区分大小写的正则匹配

### ^~
^~ 开头表示uri以某个常规字符串开头

### 匹配静态文件
One of the frequent uses of nginx is setting it up as a proxy server, which means a server that receives requests, passes them to the proxied servers, retrieves responses from them, and sends them to the clients.

The resulting configuration of a proxy server will look like this:
```
server {
    location / {
        proxy_pass http://localhost:8080/;
    }

    location ~ \.(gif|jpg|png)$ {
        root /data/images;
    }
}
```
The parameter is a regular expression matching all URIs ending with .gif, .jpg, or .png. A regular expression should be preceded with ~. The corresponding requests will be mapped to the /data/images directory.

### location 匹配规则
```
nginx配置location [=|~|~*|^~] /uri/ { … }用法

= 严格匹配。如果这个查询匹配，那么将停止搜索并立即处理此请求。
~ 为区分大小写匹配(可用正则表达式)
!~为区分大小写不匹配
~* 为不区分大小写匹配(可用正则表达式)
!~*为不区分大小写不匹配
^~ 如果把这个前缀用于一个常规字符串,那么告诉nginx 如果路径匹配那么不测试正则表达式。
```
实例：
location = / {
 # 只匹配 / 查询。
}
location / {
 # 匹配任何查询，因为所有请求都已 / 开头。但是正则表达式规则和长的块规则将被优先和查询匹配。
}
location ^~ /images/ {
 # 匹配任何已 /images/ 开头的任何查询并且停止搜索。任何正则表达式将不会被测试。
}
location ~*.(gif|jpg|jpeg)$ {
 # 匹配任何已 gif、jpg 或 jpeg 结尾的请求。
}
location ~*.(gif|jpg|swf)$ {
  valid_referers none blocked start.igrow.cn sta.igrow.cn;
  if ($invalid_referer) {
  #防盗链
  rewrite ^/ http://$host/logo.png;
  }
}