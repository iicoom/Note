> How nginx processes a request
http://nginx.org/en/docs/http/request_processing.html

```
nginx first decides which server should process the request. Let’s start with a simple configuration where all three virtual servers listen on port *:80:

server {
    listen      80;
    server_name example.org www.example.org;
    ...
}

server {
    listen      80;
    server_name example.net www.example.net;
    ...
}

server {
    listen      80;
    server_name example.com www.example.com;
    ...
}

In this configuration nginx tests only the request’s header field “Host” to determine which server the request should be routed to. 

```









