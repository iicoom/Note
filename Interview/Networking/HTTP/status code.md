https://www.checkupdown.com/status/E403.html

## HTTP Error 400 Bad request

The Web server (running the Web site) thinks that the data stream sent by the client (e.g. your Web browser or our CheckUpDown robot) was 'malformed' i.e. did not respect the HTTP protocol completely. So the Web server was unable to understand the request and process it.

Web服务器认为客户端发起的HTTP连接是不完整的。

## HTTP Error 401 Unauthorized

The Web server (running the Web site) thinks that the HTTP data stream sent by the client (e.g. your Web browser or our CheckUpDown robot) was correct, but access to the URL resource requires user authentication 1) which has not yet been provided or 2) which has been provided but failed authorization tests. 

Web服务器允许客户端连接，但是由于不能提供要求的用户权限，被认定为授权失败。


## HTTP Error 403 Forbidden

The Web server (running the Web site) thinks that the HTTP data stream sent by the client (e.g. your Web browser or our CheckUpDown robot) was correct, but access to the resource identified by the URL is forbidden for some reason.

Web服务器允许客户端连接，但是由于某些原因所请求的URL资源不被允许访问。


## HTTP Error 404 Not found

The Web server (running the Web site) thinks that the HTTP data stream sent by the client (e.g. your Web browser or our CheckUpDown robot) was correct, but simply can not provide the access to the resource specified by your URL. This is equivalent to the 'return to sender - address unknown' response for conventional postal mail services.

Web服务器认为客户端连接没有问题，但是没有找到URL请求的资源。


## HTTP Error 405 Method not allowed

The HTTP protocol defines methods to indicate the action to be performed on the Web server for the particular URL resource identified by the client (e.g. your Web browser or our CheckUpDown robot). The methods are as follows:

OPTIONS: Find out the communication options available for a particular URL resource. 

GET: Retrieve the information identified by the URL resource e.g. GET a particular Web page or image. The most common method by far.

HEAD: Identical to GET except that the server returns header information only, not the actual information identified by the URL resource. 

POST: Submit data to the Web server such as 1) post a message to a bulletin board

PUT: Set (place/replace) the data for a particular URL to the new data submitted by the client. 

DELETE: Remove the data associated with the URL resource. 


## HTTP Error 500 - Internal Server Error Explained

HTTP error 500 is a generic HTTP status code which occurs when the web server encounters a problem that prevents it from returning the requested web page. The web server is unable to be more specific about the cause of the HTTP 500 error. Also known as an Internal Server Error, the error 500 is reported by your browser but the problem is with the website itself.

服务器内部错误


## The HTTP 304
The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is safe, like a GET or a HEAD request, or when the request is conditional and uses a If-None-Match or a If-Modified-Since header.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304

