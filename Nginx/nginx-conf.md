## 比较好的组织方式
➜  nginx pwd
/etc/nginx
➜  nginx ls
cert    default.d     fastcgi.conf.default  fastcgi_params.default  koi-win     mime.types.default  nginx.conf.default conf.d  fastcgi.conf  fastcgi_params   mime.types  nginx.conf   scgi_params 

➜  nginx ls conf.d
docs.xy.net.cn.conf  git.xy.net.cn.conf  redirect.xy.net.cn.conf    upstream.xy.net.cn.conf  wildcard.xy.net.cn.conf

## wildcard
➜  conf.d cat wildcard.xy.net.cn.conf
```
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
```

## redirect
➜  conf.d cat redirect.xy.net.cn.conf
```
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
```
上边这个处理http请求重定向到https

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
