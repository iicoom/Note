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

        upstream contract.webserver.yunfarm.cn {
                server 127.0.0.1:3009;
        }

         upstream ucenter.v2.webserver.yunfarm.cn {
                server 127.0.0.1:3004;
        }

        upstream ucenter.webserver.yunfarm.cn {
                server 127.0.0.1:3003;
        }

        upstream ranch-api.webserver.yunfarm.cn {
                server 127.0.0.1:3005;
        }

        upstream ranch-v2-api.webserver.yunfarm.cn {
                server 127.0.0.1:3011;
        }

        upstream farm-erp.webserver.yunfarm.cn {
                server 127.0.0.1:3033;
        }

        upstream shop-api.webserver.yunfarm.net {
                server 127.0.0.1:3000;
        }

        upstream food.webserver.yunfarm.net {
                server 127.0.0.1:8060;
        }

        upstream sina_pay.webserver.yunfarm.cn {
                server 127.0.0.1:3007;
        }

        upstream camera.webserver.yunfarm.cn {
                server 127.0.0.1:3050;
        }

        upstream server.erp.yunfarm.cn {
                server 127.0.0.1:8000;
        }

        upstream msgcenter.yunfarm.cn {
                server 127.0.0.1:3030;
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
                server_name     client.erp.yunfarm.cn;

                location ^~ / {
                        index index.html;
                        alias /mnt/projects/farm-erp-client-demo/dist/;
                        try_files $uri /index.html;
                }
        }
        
         server {
                listen          80;
                server_name     enterprise.erp.yunfarm.cn;

                location ^~ / {
                        index index.html;
                        alias /mnt/projects/farm-erp-enterprise/dist/;
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
          server_name pay.test.yunfarm.cn;

          proxy_set_header Host $host;
          proxy_set_header REMOTE-HOST $remote_addr;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

          access_log      /mnt/nginx_log/logs/access_pay_test_yunfarm.cn.log;
          error_log       /mnt/nginx_log/logs/error_pay_test_yunfarm.cn.log;

          location / {
                  proxy_pass http://pay_center.webserver.yunfarm.net/;
          }
   }

   server {
                listen 80;
                server_name pay.yunfarm.cn;
                proxy_set_header Host $host;
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

                location ^~ /api/pay/ {
                        proxy_pass http://pay_center.webserver.yunfarm.net/api/pay/;
                }

        }

         server {
                listen 443 ssl;
                server_name     admin.yunfarm.cn;

                ssl on;
                ssl_certificate   cert/213973045610657.pem;
                ssl_certificate_key  cert/213973045610657.key;
                ssl_session_timeout 5m;
                ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
                ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
                ssl_prefer_server_ciphers on;

                proxy_set_header Host $host;
                proxy_set_header  X-Real-IP        $remote_addr;
                proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;

                location / {
                        index index.html;
                        alias /mnt/projects/cloud-ranch-admin/dist/;
                        try_files $uri /index.html;
                 }

        }

｝


