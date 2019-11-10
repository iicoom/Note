https://github.com/mcollina/autocannon

## install
npm i autocannon -g

## Usage
Usage: autocannon [opts] URL

Running 10s test @ http://localhost:3000
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max      │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 1 ms │ 0.02 ms │ 0.16 ms │ 16.45 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 20623   │ 20623   │ 25583   │ 26271   │ 25131.2 │ 1540.94 │ 20615   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 2.29 MB │ 2.29 MB │ 2.84 MB │ 2.92 MB │ 2.79 MB │ 171 kB  │ 2.29 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

251k requests in 10.05s, 27.9 MB read

There are two tables: one for the request latency, and one for the request volume.
测试结果会有2个表，一个是延时情况，另一个请求的数据量

The latency table lists the request times at the 2.5% percentile, the fast outliers; at 50%, the median; at 97.5%, the slow outliers; at 99%, the very slowest outliers. Here, lower means faster.

延时表的表头指示了请求时间的进度百分百，在10秒的测试范围的2.5%，50%，97.5%，99% 延时分别为0ms 0ms 0ms 1ms
越低表示响应越快

The request volume table lists the amount of requests sent and the amount of bytes downloaded. These values are sampled once per second.
第二个表指示了 请求发送的数据量和下载的数据量，每秒钟取样一次

### autocannon(opts[, cb])
- url: The given target. Can be http or https. REQUIRED.
- connections: The number of concurrent connections. OPTIONAL default: 10.
- duration: The number of seconds to run the autocannon. Can be a timestring. OPTIONAL default: 10.
- timeout: The number of seconds to wait for a response before . OPTIONAL default: 10.
- method: The http method to use. OPTIONAL default: 'GET'.

## 两种调用方式
1. 命令行 autocannon -c 100 -d 5 -p 2 http://127.0.0.1:3000/test 简单快速
2. api调用 autocannon(opts[, cb]) 便于编写脚本

-c/--connections NUM 并发连接的数量，默认10
-p/--pipelining NUM 每个连接的流水线请求请求数。默认1
-d/--duration SEC 执行的时间，单位秒
-m/--method METHOD 请求类型 默认GET
-b/--body BODY 请求报文体


[参考文章](https://juejin.im/post/5b827cbbe51d4538c021f2da)

### 压力测试评论列表接口
➜  ~ autocannon -c 100 -d 10 -p 2 https://www.iwanne.xyz/api/comments
Running 10s test @ https://www.iwanne.xyz/api/comments
100 connections with 2 pipelining factor

┌─────────┬─────────┬─────────┬─────────┬─────────┬────────────┬───────────┬─────────┐
│ Stat    │ 2.5%    │ 50%     │ 97.5%   │ 99%     │ Avg        │ Stdev     │ Max     │
├─────────┼─────────┼─────────┼─────────┼─────────┼────────────┼───────────┼─────────┤
│ Latency │ 1902 ms │ 2644 ms │ 8403 ms │ 8522 ms │ 3269.46 ms │ 1553.4 ms │ 9246 ms │
└─────────┴─────────┴─────────┴─────────┴─────────┴────────────┴───────────┴─────────┘
┌───────────┬─────┬──────┬────────┬─────────┬────────┬────────┬────────┐
│ Stat      │ 1%  │ 2.5% │ 50%    │ 97.5%   │ Avg    │ Stdev  │ Min    │
├───────────┼─────┼──────┼────────┼─────────┼────────┼────────┼────────┤
│ Req/Sec   │ 0   │ 0    │ 21     │ 35      │ 21.5   │ 12.38  │ 19     │
├───────────┼─────┼──────┼────────┼─────────┼────────┼────────┼────────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 935 kB │ 1.56 MB │ 957 kB │ 551 kB │ 846 kB │
└───────────┴─────┴──────┴────────┴─────────┴────────┴────────┴────────┘

Req/Bytes counts sampled once per second.

215 requests in 10.18s, 9.57 MB read
42 errors (42 timeouts)