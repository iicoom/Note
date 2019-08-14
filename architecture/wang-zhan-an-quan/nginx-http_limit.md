# nginx http\_limit

> The ngx\_http\_limit\_req\_module module \(0.7.21\) is used to limit the request processing rate per a defined key, in particular, the processing rate of requests coming from a single IP address.

[http://nginx.org/en/docs/http/ngx\_http\_limit\_req\_module.html\#limit\_req\_status](http://nginx.org/en/docs/http/ngx_http_limit_req_module.html#limit_req_status)

## ngx\_http\_limit\_req\_module

```text
http {
    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;

    ...

    server {

        ...

        location /search/ {
            limit_req zone=one burst=5;
        }
```

There could be several limit\_req directives. For example, the following configuration will limit the processing rate of requests coming from a single IP address and, at the same time, the request processing rate by the virtual server:

```text
limit_req_zone $binary_remote_addr zone=perip:10m rate=1r/s;
limit_req_zone $server_name zone=perserver:10m rate=10r/s;

server {
    ...
    limit_req zone=perip burst=5 nodelay;
    limit_req zone=perserver burst=10;
}
```

## HTTP DoS Protection with nginx

[https://www.unixteacher.org/blog/http-dos-protection-with-nginx/](https://www.unixteacher.org/blog/http-dos-protection-with-nginx/)

