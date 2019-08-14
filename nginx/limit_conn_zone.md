# limit\_conn\_zone

[http://nginx.org/en/docs/http/ngx\_http\_limit\_conn\_module.html](http://nginx.org/en/docs/http/ngx_http_limit_conn_module.html)

```text
http {
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    limit_conn_zone $server_name zone=perserver:10m;

    ...

    server {

        ...

        limit_conn perip 10;
        limit_conn perserver 100;
    }

}
```

For example, the following configuration will limit the number of connections to the server per a client IP and, at the same time, the total number of connections to the virtual host

[https://stackoverflow.com/questions/32851858/explain-limit-conn-zone-server-name-in-nginx](https://stackoverflow.com/questions/32851858/explain-limit-conn-zone-server-name-in-nginx) I am configuring nginx for basic DDoS protection.

Yes, the second rule means that you're going to allow no more than 100 simultaneous connections to that specific domain. However, considering you have also limited max connections per ip, the attacker will need to use different ip's to success with the attack.

I must add that limit\_conn is just a way to mitigate an attack, but it won't be enough to mitigate a real DDoS attack.

This article will show you that there is more to do in order to mitigate a DDoS attack: [https://www.nginx.com/blog/mitigating-ddos-attacks-with-nginx-and-nginx-plus/](https://www.nginx.com/blog/mitigating-ddos-attacks-with-nginx-and-nginx-plus/)

Also, this article will point you to some configuration tips: [https://www.nginx.com/blog/tuning-nginx/](https://www.nginx.com/blog/tuning-nginx/)

