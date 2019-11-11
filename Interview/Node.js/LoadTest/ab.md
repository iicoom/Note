> 根据wiki百科解释: benchmark问题就是基准测试问题.

许多业内比较出名的工具都提供benchmark 功能

1. Apache Benchmark 简称(ab)
他是apache 组织下的一款web压力测试工具, 因使用方便简单而著称.

Mac下自带：
➜  ~ ab -h
Usage: ab [options] [http[s]://]hostname[:port]/path
Options are:
    -n requests     Number of requests to perform
    -c concurrency  Number of multiple requests to make at a time
    -t timelimit    Seconds to max. to spend on benchmarking
                    This implies -n 50000
    -s timeout      Seconds to max. wait for each response
                    Default is 30 seconds
    -b windowsize   Size of TCP send/receive buffer, in bytes
    -B address      Address to bind to when making outgoing connections
    -p postfile     File containing data to POST. Remember also to set -T
    -u putfile      File containing data to PUT. Remember also to set -T
    -T content-type Content-type header to use for POST/PUT data, eg.
                    'application/x-www-form-urlencoded'
                    Default is 'text/plain'
    -v verbosity    How much troubleshooting info to print

用例：
ab [get] 请求

ab -n 10 -c 3 https://www.baidu.com/

发送10个请求, 模拟3个并发数
➜  ~ ab -n 10 -c 3 https://www.baidu.com/
This is ApacheBench, Version 2.3 <$Revision: 1826891 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking www.baidu.com (be patient).....done


Server Software:        BWS/1.1
Server Hostname:        www.baidu.com
Server Port:            443
SSL/TLS Protocol:       TLSv1.2,ECDHE-RSA-AES128-GCM-SHA256,2048,128
TLS Server Name:        www.baidu.com

Document Path:          /
Document Length:        227 bytes

Concurrency Level:      3
Time taken for tests:   0.881 seconds
Complete requests:      10
Failed requests:        0
Total transferred:      10818 bytes
HTML transferred:       2270 bytes
Requests per second:    11.35 [#/sec] (mean)
Time per request:       264.289 [ms] (mean)
Time per request:       88.096 [ms] (mean, across all concurrent requests)
Transfer rate:          11.99 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       59   86  31.0     83     164
Processing:    10   24  15.0     20      64
Waiting:        9   21  12.4     18      51
Total:         70  110  35.9    101     181

Percentage of the requests served within a certain time (ms)
  50%    101
  66%    105
  75%    112
  80%    165
  90%    181
  95%    181
  98%    181
  99%    181
 100%    181 (longest request)