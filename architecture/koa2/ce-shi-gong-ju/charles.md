# Charles

[Charles](http://blog.csdn.net/qianhong_/article/details/52511223)

## Charles工作原理

Charles本质是就是一个http抓包分析工具，在工作的时候需要先把charles设置成代理服务器，这样所有的网络请求都会经过charles了。

## 对移动端进行抓包分析

我们在进行APP开发或测试时，经常需要知道APP的每一步操作调用的是哪个接口，请求参数是什么，返回值是什么，作为服务端，有时还需要对APP的某一个操作进行debug。通过简单配置，**我们就可以将我们手机APP上所有请求发送到PC端Charles代理中**，Charles会自动抓取http网络包分析请求和返回值，当然这些只是Charles最基本的功能。

下面就介绍如何配置Charles： 手下手机和电脑必须在一个局域网内，不一定非要是一个ip段，只要是同一个路由器下就可以了 在PC端安装Charles，关掉防火墙，打开Charles，进入Proxy-&gt;Proxy Setting，设置http proxy代理端口：8888（一般默认设置为这个）

在移动端，进入无线网络-&gt;点击当前连接的wifi-&gt;代理设置-&gt;设置服务器地址和端口\(各手机配置不太一样\)，这里的服务器地址就是PC端的IP地址，端口就是上面设置PC端的代理端口8888

经过上面设置，我们手机上的所有请求都会发送到我们PC端指定的端口，而这个端口就是Charles的代理端口。所以，客户端的请求和服务端的响应都会经过Charles，我们通过Charles就可以很方便的看到请求和响应相关的数据啦。

## 视图

Charles提供了两种查看封包的视图，分别是Structure和Sequence。 1. Structure视图将网络请求按访问的域名分类。 2. Sequence视图将网络请求按访问的时间排序。

## 过滤功能

如果不设置过滤，手机上所有APP的网络请求都会被解析，看起来很乱，通常情况下，我们只希望看到客户端对应应用服务器的网络请求，这时就需要对网络请求进行过滤，只监控向指定目录服务器上发送的请求。对于这种需求，我们有2种办法。

1. 在关心的域名上右击，focus，界面显示的请求被分成两组，看起来清晰很多
2. 在主界面的中部的Filter栏中填入需要过滤出来的关键字。例如我们的服务器的地址是：[http://\*.zitech.com，那么只需要在Filter栏中填入zitech.com即可。](http://*.zitech.com，那么只需要在Filter栏中填入zitech.com即可。)
3. 在Charles的菜单栏选择"Proxy"-&gt;"Recording Settings"，然后选择Include栏，选择添加一个项目，然后填入需要监控的协议，主机地址，端口号。这样就可以只截取目标网站的封包了。

