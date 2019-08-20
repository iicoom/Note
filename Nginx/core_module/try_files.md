Syntax:	try_files file ... uri;
try_files file ... =code;
Default:	—
Context:	server, location

```
location / {
    try_files $uri $uri/index.html $uri.html =404;
}
```