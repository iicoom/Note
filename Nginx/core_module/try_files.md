实例分析
try_files 将尝试你列出的文件并设置内部文件指向。


Syntax:	try_files file ... uri;
try_files file ... =code;
Default:	—
Context:	server, location

```
location / {
    try_files $uri $uri/index.html $uri.html =404;
}
```