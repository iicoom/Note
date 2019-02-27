> 手把手教你vps搭建属于自己的ss教程，开始科学上网吧（利用vultr，Google, 看youtube1080p无压力）

### 一、挑选适合自己的vps

简单介绍：Vultr作为全球最大的游戏主机提供商背景之一，上线之后以高质的性价比、遍布全球16个数据中心，以及新注册用户不定期有美金赠送，吸引广大的用户。而且操作简单方便，一键部署，性能目前测试非常不错。

支付是采用充值的方式，支持国内支付宝支付，微信扫码支付。按照VPS开通使用情况每小时扣款，不象很多其他VPS要求一次买2年或者1年的，非常人性化。

### 二、注册账号

- **创建自己的Vultr账户**
    优惠注册地址（点击链接注册会获得**50美金**账户余额-**官方最新活动**-进行中）
    [Get started in the Vultr SSD Cloud!](https://www.vultr.com/?ref=7771051-4F)
    进入网站之后填写注册邮箱、密码 （最少10位，要同时有数字和大小写字母） ，点击create account。
    ![Alt text](https://wx3.sinaimg.cn/large/0070CCh6gy1fm7j4fhxajj30qf0cvwh7.jpg)
    
    登陆注册邮箱会收到验证邮件，
    ![Alt text](https://wx3.sinaimg.cn/wap720/7a31c80fgy1fm2r5hd821j20hf05dglv.jpg)
    点击验证邮件里的 蓝色方框内的　Verify Your E-mail 验证 。
       
- **充值与配置**

    回到Vulrt，在Billing界面按照下图选择，直接点击 蓝色方框内的Pay with Alipay 进行激活就可以了。
    ![](https://wx1.sinaimg.cn/large/0070CCh6gy1fm7j6mj2o0j311d0duwfa.jpg)
    这时就可以用alipay（支付宝），相信大家轻松搞定。
    
    
### 三、搭建服务  

点击左边的server选项，点击加好按钮选择服务器节点位置以及相关配置，按下图依次选择配置：
![](https://wx2.sinaimg.cn/wap720/7a31c80fgy1fm2rakw80bj21dk08qmyo.jpg)
![](http://imgsrc.baidu.com/forum/pic/item/79310a55b319ebc42d3d15d68f26cffc1e171633.jpg)

​**然后选择操作系统=>**

![](http://imgsrc.baidu.com/forum/pic/item/ebc4b74543a98226528448688782b9014a90eb3c.jpg)

**然后会自动跳转到Servers界面=>**
![](http://imgsrc.baidu.com/forum/pic/item/b319ebc4b74543a91e5e998313178a82b9011433.jpg)

**记录服务器相关信息=>**
![](http://imgsrc.baidu.com/forum/pic/item/0a55b319ebc4b745d8d1d459c2fc1e178a821533.jpg)

### 四、使用ssh 终端连接到服务器、生成ss账号

1. 下载putty：http://pan.baidu.com/s/1jI0T5Fw 解压运行putty.exe，
    ![](https://wx3.sinaimg.cn/wap720/7a31c80fgy1fm2reiuri6j20gq0e2my8.jpg)
    
2. ​填入刚建好的主机地址，主机地址在哪里查看？回到前面，第三步 搭建服务 最后一张图查看。其他不用动，点击打开
    ![](https://wx4.sinaimg.cn/wap720/7a31c80fgy1fm2rewjbckj20gm08kwf2.jpg)
    ​如果这里有对话框弹出，选择是，然后在全黑的屏幕上输入 root ，回车。等五秒，按提示输入vps的密码，(注意：这里强烈建议你直接复制粘贴密码, 不建议手动输入密码,容易出错：
    
    ![](https://wx4.sinaimg.cn/wap720/7a31c80fgy1fm2rfbi1hgj20mx0eh3zt.jpg)

3. 安装shadowsocks
**第一条命令：**
```
wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh
```
等待下载完成

**第二条命令：**
```
chmod +x shadowsocks.sh
```
继续等待，

**第三条命令：**
```
./shadowsocks.sh 2>&1 | tee shadowsocks.log
```

​中间会提示你输入你的SS SERVER的账号，和端口。不输入就是默认。跑完命令后会出来你的SS客户端的信息。

​特别注意，由于iphone端的目前只支持到cfb，所以我们选择aes-256-cfb，即7，这一步按回车继续

然后需要几分钟的安装过程，请耐心等待出现下面的画面！

![](https://wx1.sinaimg.cn/wap720/7a31c80fgy1fm2rntc5dtj20mx0ehjrn.jpg)
请立即copy下来加以保存。记录保存好你的上述信息：Server IP、Server Port、Password、Encryption Method。这时你的专属ss已经搭好了，开始使用吧。

### 五、客户端设置
1、提供一个集成了以上客户端的下载地址
[Shadowsockets client](https://shadowsocks.org/en/download/clients.html)

考虑到这个网站需要翻墙才能访问，提供几个百度云备用下载地址如下：
[Mac客户端](https://pan.baidu.com/s/1X1rjcHP3SB6EW6pcb2fqPQ)
[Windows](https://pan.baidu.com/s/1TQ8mAO_txAzOZJKBHynbVA)
[安卓](https://pan.baidu.com/s/1HTmOUuNYW3TLD8qUoGN9nw)
[IOS](https://itunes.apple.com/app/outline-app/id1356177741)

这样就翻墙成功了，可以Google和YouTube啦
![](http://imgsrc.baidu.com/forum/pic/item/82025aafa40f4bfb7656f21e0e4f78f0f63618f1.jpg)

如果这篇文章帮到了你，那就请为我点个赞吧(∩_∩)

https://segmentfault.com/a/1190000015067117




    