[官网](http://nginx.org/en/docs/http/load_balancing.html)

Default load balancing configuration：

The simplest configuration for load balancing with nginx may look like the following:
```
http {
    upstream myapp1 {
        server srv1.example.com;
        server srv2.example.com;
        server srv3.example.com;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://myapp1;
        }
    }
}
```