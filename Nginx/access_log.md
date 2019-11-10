## 默认log位置
/var/log/nginx/access.log

跟踪查看日志命令
```
tail -100f /var/log/nginx/access.log

39.155.215.1xx - - [10/Nov/2019:11:43:51 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:51 +0000] "GET /api/comments HTTP/1.1" 200 44041 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 499 0 "-" "-" "-"
39.155.215.1xx - - [10/Nov/2019:11:43:52 +0000] "GET /api/comments HTTP/1.1" 200 44041 "-" "-" "-"
```