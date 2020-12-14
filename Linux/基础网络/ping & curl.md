## 快速检测网络
### ping 域名
PING （Packet Internet Groper），因特网包探索器，用于测试网络连接量的程序。Ping发送一个ICMP（Internet Control Messages Protocol）即因特网信报控制协议；回声请求消息给目的地并报告是否收到所希望的ICMPecho （ICMP回声应答）。它是用来检查网络是否通畅或者网络连接速度的命令。

➜  ~ ping baidu.com
PING baidu.com (123.125.115.110): 56 data bytes
64 bytes from 123.125.115.110: icmp_seq=0 ttl=53 time=3.200 ms
64 bytes from 123.125.115.110: icmp_seq=1 ttl=53 time=4.468 ms
64 bytes from 123.125.115.110: icmp_seq=2 ttl=53 time=2.792 ms
64 bytes from 123.125.115.110: icmp_seq=3 ttl=53 time=6.274 ms
64 bytes from 123.125.115.110: icmp_seq=4 ttl=53 time=10.121 ms
64 bytes from 123.125.115.110: icmp_seq=5 ttl=53 time=9.911 ms

ttl:
TTL是 Time To Live的缩写，TTL是生存时间的意思。表示该字段指定IP包被路由器丢弃之前允许通过的最大网段数量。
TTL由IP数据包的发送者设置，在IP数据包从源到目的的整个转发路径上，每经过一个路由器，则把该TTL的值减1，然后再将IP包转发出去。如果在IP包到达目的IP之前，TTL减少为0，路由器将会丢弃收到的TTL=0的IP包，并向IP包的发送者发送 ICMP time exceeded消息，以防止数据包不断在IP互联网络上永不终止地循环。

time: 延迟响应时间，这个值的单位是毫秒
通常情况下，只要这个值在100以内，说明网络状况相当良好（相当于你做了一个操作，0。1秒后就得到了执行
<10 极快...局域网
10-50 快. 快速服务器
50-100 中.普通服务器.
100-300 慢.国外服务器.
300-1000 极慢.
1000+  很有可能断.


### curl
curl api测试接口返回

➜ curl http://m.yunfarm.cn/shopapi/activity/gift-boxs/page\?count\=5\&hideLoading\=true\&start\=0
{"start":0,"data":[],"count":0,"total":0}%

使用linux的重定向功能保存
➜  ~ curl https://www.baidu.com/ >> baidu1.html
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2443  100  2443    0     0  46841      0 --:--:-- --:--:-- --:--:-- 46980

可以使用curl的内置option:-o(小写)保存网页
➜  ~ curl -o linux.html https://www.linux.com

指定proxy服务器以及其端口
很多时候上网需要用到代理服务器(比如是使用代理服务器上网或者因为使用curl别人网站而被别人屏蔽IP地址的时候)，幸运的是curl通过使用内置option：-x来支持设置代理
➜  ~ curl -x 192.168.100.100:1080 http://www.linux.com

利用curl下载文件
使用内置option：-o(小写)

循环下载
有时候下载图片可以能是前面的部分名称是一样的，就最后的后缀名不一样
curl -O http://www.linux.com/dodo[1-5].JPG

[Linux curl命令详解](https://www.cnblogs.com/duhuo/p/5695256.html)

接口测试：
```bash
$ curl --request POST \
  --url http://localhost:8000/test \
  --header 'content-type: application/json' \
  --data '{
	"msg": "testing"
}'

{"code":"success","payload":[{"msg":"testing","id":"31f23305-f5d0-4b4f-a16f-6f4c8ec93cf1","createDate":"2020-08-28T21:53:07.157Z"}]}


$ curl http://localhost:8000/test
{"code":"success","meta":{"total":1,"count":1},"payload":[{"msg":"testing","id":"31f23305-f5d0-4b4f-a16f-6f4c8ec93cf1","createDate":"2020-08-28T21:53:07.157Z"}]}
```

### wget
#### Mac 需要先安装
➜  ~ brew install wget

#### wget url
➜  ~ wget https://www.baidu.com/
--2019-02-13 11:22:33--  https://www.baidu.com/
正在解析主机 www.baidu.com (www.baidu.com)... 220.181.112.244
正在连接 www.baidu.com (www.baidu.com)|220.181.112.244|:443... 已连接。
已发出 HTTP 请求，正在等待回应... 200 OK
长度：2443 (2.4K) [text/html]
正在保存至: “index.html”

index.html.1                                                100%[=========================================================================================================================================>]   2.39K  --.-KB/s  用时 0s

2019-02-13 11:22:33 (46.6 MB/s) - 已保存 “index.html.1” [2443/2443])

#### wget options
wget -S -O - https://www.baidu.com/
会将请求的数据，输出到屏幕






