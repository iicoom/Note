> How do I get the current server time in shell script on Linux or Unix-like operating systems? 
How do I store the current time in the shell variable and use in my scripts?

date +%FORMAT
date +"%FORMAT"
var=$(date +"%FORMAT")

## date
```
[doraemon@mxj-s ~]$ date
Thu  2 Jan 11:48:49 CST 2020
```
https://tecadmin.net/get-current-date-and-time-in-bash/

## Show current time
```
[doraemon@mxj-s ~]$ now=$(date +"%T")
[doraemon@mxj-s ~]$ echo $now
11:45:21
```

## 自定义格式
```
[doraemon@mxj-s ~]$ time=$(date "+_%Y_%m_%d")
[doraemon@mxj-s ~]$ echo time
time
[doraemon@mxj-s ~]$ echo $time
_2020_01_02
```

