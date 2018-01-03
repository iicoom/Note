" ============================================================================
bin  etc  games  include  java  lib  lib64  libexec  local  man  my.cnf  sbin  share  src  tmp
[xiaomao@iZ258wvzn92Z usr]$ ls local
aegis         etc      lib         libexec      mongodb26  nginx       phantomjs-2.1.1-linux-x86_64  share
bin           games    lib64       man          mongodb32  nginx_back  redis32                       src
cloudmonitor  include  libevent12  memcached12  n          phantomjs   sbin                          ssl
[xiaomao@iZ258wvzn92Z usr]$ ks nginx
-bash: ks: command not found

                location /contract/api/ {
                        proxy_pass http://contract.webserver.yunfarm.cn/api/;
                }

                location ^~ /ranch/api/ {
                        proxy_pass http://ranch-api.webserver.yunfarm.cn;
                }

                location ^~ /ucenter/ {
                        proxy_pass http://ucenter.webserver.yunfarm.cn/;
                }

                location /camera/api/ {
                        access_log      /mnt/nginx_log/logs/access_camera_api.log;
                        error_log       /mnt/nginx_log/logs/error_camera_api.log;
                        proxy_pass http://camera.webserver.yunfarm.cn/api/;
                }

                location /pay_center/api/ {
                        access_log      /mnt/nginx_log/logs/access_pay-center_api.log;
                        error_log       /mnt/nginx_log/logs/error_pay-center_api.log;
                        proxy_pass http://pay_center.webserver.yunfarm.net/api/;
                }

                location /message/api/ {
                        proxy_pass http://msgcenter.yunfarm.cn/message/api/;
                                                                                            616,0-1       95%

                location /contract/api/ {
                        proxy_pass http://contract.webserver.yunfarm.cn/api/;
                }

                location ^~ /ranch/api/ {
                        proxy_pass http://ranch-api.webserver.yunfarm.cn;
                }

                location ^~ /ucenter/ {
                        proxy_pass http://ucenter.webserver.yunfarm.cn/;
                }

                location /camera/api/ {
                        access_log      /mnt/nginx_log/logs/access_camera_api.log;
                        error_log       /mnt/nginx_log/logs/error_camera_api.log;
                        proxy_pass http://camera.webserver.yunfarm.cn/api/;
                }

                location /pay_center/api/ {
                        access_log      /mnt/nginx_log/logs/access_pay-center_api.log;
                        error_log       /mnt/nginx_log/logs/error_pay-center_api.log;
                        proxy_pass http://pay_center.webserver.yunfarm.net/api/;
                }

                location /message/api/ {
                        proxy_pass http://msgcenter.yunfarm.cn/message/api/;
                                                                                           616,0-1       95%

                location /contract/api/ {
                        proxy_pass http://contract.webserver.yunfarm.cn/api/;
                }

                location ^~ /ranch/api/ {
                        proxy_pass http://ranch-api.webserver.yunfarm.cn;
                }

                location ^~ /ucenter/ {
                        proxy_pass http://ucenter.webserver.yunfarm.cn/;
                }

                location /camera/api/ {
                        access_log      /mnt/nginx_log/logs/access_camera_api.log;
                        error_log       /mnt/nginx_log/logs/error_camera_api.log;
                        proxy_pass http://camera.webserver.yunfarm.cn/api/;
                }

                location /pay_center/api/ {
                        access_log      /mnt/nginx_log/logs/access_pay-center_api.log;
                        error_log       /mnt/nginx_log/logs/error_pay-center_api.log;
                        proxy_pass http://pay_center.webserver.yunfarm.net/api/;
                }

                location /message/api/ {
                        proxy_pass http://msgcenter.yunfarm.cn/message/api/;
                                                                                            616,0-1       95%
                        proxy_set_header X-Real-IP $remote_addr;
                        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                }

                location /sina_pay/api/ {
                        proxy_pass http://sina_pay.webserver.yunfarm.cn/sina_pay/api/;
                        proxy_set_header Host $host;
                        proxy_set_header REMOTE-HOST $remote_addr;
                        proxy_set_header X-Real-IP $remote_addr;
                        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                }

                # 电商
                location /shopapi/ {
                        access_log      /mnt/nginx_log/logs/access_shopapi.log;
                        proxy_set_header  Host             $host;
                        proxy_set_header  X-Real-IP        $remote_addr;
                        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
                        proxy_pass http://shop-api.webserver.yunfarm.net/;
                }

                location /shop/api/ {
                        access_log      /mnt/nginx_log/logs/access_shopapi.log;
                        proxy_set_header  Host             $host;
                        proxy_set_header  X-Real-IP        $remote_addr;
                        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
                        proxy_pass http://shop-api.webserver.yunfarm.net/;