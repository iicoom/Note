## git show -s
```
[root@vultr s-server]# git show -s
commit 5be152c0eccc1b10b0a0c233566058c53293f3ea
Author: 毛小杰 <maoxiaojie@yunfarm.cn>
Date:   Wed Feb 10 18:35:12 2021 +0800

    rename
```

## git show --stat
```
[root@vultr s-server]# git show --stat
commit 5be152c0eccc1b10b0a0c233566058c53293f3ea
Author: 毛小杰 <maoxiaojie@yunfarm.cn>
Date:   Wed Feb 10 18:35:12 2021 +0800

    rename

 app/util/log.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

## git show --s
```
[root@vultr s-server]# git show --s
commit 5be152c0eccc1b10b0a0c233566058c53293f3ea HEAD
Author: 毛小杰 <maoxiaojie@yunfarm.cn>
Date:   Wed Feb 10 18:35:12 2021 +0800

    rename

diff --git a/app/util/log.js b/app/util/log.js
index 798d8a1..2b00407 100644
--- a/app/util/log.js
+++ b/app/util/log.js
@@ -21,7 +21,7 @@ if (process.env.NODE_ENV === 'production') {
       },
       online: {
         type: 'dateFile',
-        filename: path.join(logdir, 'koa-server-'),
+        filename: path.join(logdir, ''),
         pattern: 'yyyy-MM-dd.log',
         compress: true,
         alwaysIncludePattern: true,
```

