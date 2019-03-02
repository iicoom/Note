ip=::ffff:192.168.1.42

或者可以在前面放一个nginx反向代理，通过
proxy_set_header X-Real-IP $remote_addr;

将客户端真实ip地址放到header的x-real-ip字段，然后直接从这个字段来取客户端的ip地址。