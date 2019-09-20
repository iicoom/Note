## 比较好的组织方式
➜  nginx pwd
/etc/nginx
➜  nginx ls
cert    default.d     fastcgi.conf.default  fastcgi_params.default  koi-win     mime.types.default  nginx.conf.default conf.d  fastcgi.conf  fastcgi_params   mime.types  nginx.conf   scgi_params 

➜  nginx ls conf.d
docs.xy.net.cn.conf  git.xy.net.cn.conf  redirect.xy.net.cn.conf    upstream.xy.net.cn.conf  wildcard.xy.net.cn.conf

➜  nginx cat nginx.conf
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user root;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       8080 default_server;
        listen       [::]:8080 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
		}

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
}

## wildcard
➜  conf.d cat wildcard.xy.net.cn.conf
server {
	listen 80;
	listen 443 ssl http2;

	server_name .xyz.net.cn;

	gzip on;
	gzip_min_length  1k;
	gzip_buffers     4 16k;
	gzip_http_version 1.0;
	gzip_comp_level 2;
	gzip_types       text/plain application/x-javascript text/css application/xml application/json;
	gzip_vary on;

	access_log /var/log/nginx/wildcard.xy.net.cn-access.log;

	client_max_body_size 1024m;

	location ~ {
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header Host $host;
		proxy_pass http://$host;
	}

	ssl_certificate     cert/xyz.net.cn.crt;
	ssl_certificate_key cert/xyz.net.cn.key;
}

## redirect
➜  conf.d cat redirect.xy.net.cn.conf
server {
	listen 80;
	server_name
		test-pro.xy.net.cn
		git.xy.net.cn
		pro.xy.net.cn;

	charset      utf-8;

	access_log /var/log/nginx/nginx-redirect.access.log combined;

	add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

	return 301 https://$host;
}
上边这个处理http请求重定向到https

## upstream
➜  conf.d cat upstream.xy.net.cn.conf
upstream test-api.xy.net.cn {
    server 127.0.0.1:5555;
}

upstream test-yasuo.xy.net.cn {
    server 127.0.0.1:5566;
}

upstream yapi.xy.net.cn {
    server 127.0.0.1:3000;
}

upstream docker.xy.net.cn {
    server 172.17.0.3:9000;
}

upstream grafana.xy.net.cn {
	server 172.20.0.2:3000;
}


## Vultr
现在Blog 使用的Nginx 配置：
```
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    limit_conn_zone $binary_remote_addr zone=addr:10m;
    limit_conn_zone $server_name zone=perserver:10m;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

    server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  www.iwarfuck.xyz;
        root         /data/iicoompp.github.io/;

        ssl_certificate     "/etc/nginx/ssl/.xyz.crt";
        ssl_certificate_key "/etc/nginx/ssl/.xyz.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        # limit_conn perip 1;
        # limit_conn perserver 10; 这两项会有问题 影响 X-Real-IP

        location /api/ {
                proxy_pass http://127.0.0.1:30900;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }

    }
}
```

## example
// nginx.conf
```
user root;
worker_processes 4;

error_log  /mnt/nginx_log/logs/error.log;

events {
  worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    client_max_body_size 20m;
    sendfile on;
    keepalive_timeout  600;

        upstream pay.webserver.yunfarm.cn {
                server 127.0.0.1:8090;
        }

        upstream pay_center.webserver.yunfarm.net {
                server 127.0.0.1:3010;
        }
        upstream farm.webserver.yunfarm.cn {
                server 127.0.0.1:8070;
        }
        upstream activity.webserver.yunfarm.cn {
                server 127.0.0.1:3002;
        }

    gzip on;
    gzip_http_version 1.0;
    gzip_disable "MSIE [1-6].";
    gzip_types text/plain application/x-javascript application/javascript text/css text/javascript;


        server {
                listen          80;
                server_name     admin.erp.yunfarm.cn;

                location ^~ / {
                        index index.html;
                        alias /mnt/projects/farm-erp-admin/dist/;
                        try_files $uri /index.html;
                }
        }

        server {
                listen          80;
                server_name     erp.yunfarm.cn;

                proxy_set_header Host $host;
                proxy_set_header REMOTE-HOST $remote_addr;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

                access_log      /mnt/nginx_log/logs/access_erp_test_yunfarm.cn.log;
                error_log       /mnt/nginx_log/logs/error_erp_test_yunfarm.cn.log;

                location / {
                        proxy_pass http://server.erp.yunfarm.cn/;
                }
        }
        
        server {
                listen          80;
                server_name     www.yunfarm.cn;
                proxy_set_header Host $host;
                proxy_set_header  X-Real-IP        $remote_addr;
                proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;

                access_log      /mnt/nginx_log/logs/access_www_yunfarm.cn.log;
                error_log       /mnt/nginx_log/logs/error_www_yunfarm.cn.log;

                location / {
                        proxy_pass http://127.0.0.1:3040;
                }

                location ^~ /console {
                        index index.html;
                        alias /mnt/projects/farm_www/public/admin/;
                }
        }

        server {
                listen 80;
                server_name pay.yunfarm.cn;
                proxy_set_header  Host             $host;
                proxy_set_header  X-Real-IP        $remote_addr;
                proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;

                access_log      /mnt/nginx_log/logs/access_pay_yunfarm.cn.log;
                error_log       /mnt/nginx_log/logs/error_pay_yunfarm.cn.log;

                location  /api/{
                        proxy_pass http://pay.webserver.yunfarm.cn/api/;
                }

                location  /myfarm/api/ {
                        proxy_pass http://pay.webserver.yunfarm.cn/api/;
                }

                location ^~ /api/wxpay/ {
                        proxy_pass http://pay.webserver.yunfarm.cn/api/wxpay/;
                }

                location ^~ /api/unionpay/ {
                        proxy_pass http://pay.webserver.yunfarm.cn/api/unionpay/;
                }
        }

        server {
                listen 443 ssl;
                server_name     admin.yunfarm.cn;

                ssl on;
                ssl_certificate      cert/213973045610657.pem;
                ssl_certificate_key  cert/213973045610657.key;
                ssl_session_timeout 5m;
                ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
                ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
                ssl_prefer_server_ciphers on;

                proxy_set_header  Host             $host;
                proxy_set_header  X-Real-IP        $remote_addr;
                proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;

                location / {
                        index index.html;
                        alias /mnt/projects/cloud-ranch-admin/dist/;
                        try_files $uri /index.html;
                }

        }

｝
```

## 多个二级域名使用一个ssl配置
