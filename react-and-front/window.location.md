# window.location

> 在WEB开发中，时常会用到javascript来获取当前页面的url网址信息，在这里是我的一些获取url信息的小总结。

下面我们举例一个URL，然后获得它的各个组成部分：[http://i.cnblogs.com/EditPosts.aspx?opt=1](http://i.cnblogs.com/EditPosts.aspx?opt=1)

1. window.location.href\(设置或获取整个 URL 为字符串\) 返回：[http://i.cnblogs.com/EditPosts.aspx?opt=1](http://i.cnblogs.com/EditPosts.aspx?opt=1)
2. window.location.protocol\(设置或获取 URL 的协议部分\) 返回：http:
3. window.location.host\(设置或获取 URL 的主机部分\) 返回：i.cnblogs.com
4. window.location.port\(设置或获取与 URL 关联的端口号码\) 返回：空字符\(如果采用默认的80端口\(update:即使添加了:80\)，那么返回值并不是默认的80而是空字符\)
5. window.location.pathname\(设置或获取与 URL 的路径部分（就是文件地址）\) 返回：/EditPosts.aspx
6. window.location.search\(设置或获取 href 属性中跟在问号后面的部分\) 返回：?opt=1
7. window.location.hash\(设置或获取 href 属性中在井号“\#”后面的分段\)

