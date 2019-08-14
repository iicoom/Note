https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115

## 步骤一：绑定域名
在右上角个人中心-账号详情-功能设置-里填写“JS接口安全域名”。

下载文件-放到请求域名可以获取到文件内容的路径

## 步骤二：引入JS文件

## 步骤三：通过config接口注入权限验证配置
```
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名
    jsApiList: [] // 必填，需要使用的JS接口列表
});
```
这里signature的获取是一个关键点

附录1-JS-SDK使用权限签名算法

生成签名之前必须先了解一下jsapi_ticket，jsapi_ticket是公众号用于调用微信JS接口的临时票据。

1. 首先需要拿到access_token
https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9999000&secret=xxxxx

需要在 开发-基本配置-IP白名单-从指定的ip获取

解决客户端ip变化问题
https://blog.csdn.net/xiyang1011/article/details/78692570

我说的这个方案，也算其中一种吧，就是通过WebAPI方式，把某一台机器的公网IP固定，
然后访问公众号的程序部署在这上面，最后这些程序再通过WebAPI方式被其他客户端调用

2. 用access_token换取ticket
https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=21_xxxxxx&type=jsapi

3. 生成签名
借助sdk就可以，只需要传入动态url。

## 步骤四：通过ready接口处理成功验证








