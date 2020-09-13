## TEST :thumbsup:
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

- Git查看远程提交状态的方法
- moment 时间格式化工具
- 钉钉接入gitlab jira机器人
- index 分析
- 给数量很大的order加platform
- Gitlab 的tag

## tools
1. [OmniPlan](https://www.macxin.com/archives/10616.html)
2. [you-get](https://github.com/soimort/you-get) 
<details>
  ps:目前You-Get可以下载的网站有很多，比如国外的Youtube、Vimeo、Tumblr、Instagram等，国内的爱奇艺、优酷、乐视、哔哩哔哩等。
  ```
    ➜  ~ you-get 'https://v.youku.com/v_show/id_XMTczNDY2NjAzMg\=\=.html'
      site:                优酷 (Youku)
      title:               【梦想音乐屋】 吉他教学 大横按3 连接技巧
      stream:
          - format:        mp4hd2
            container:     mp4
            video-profile: 超清
            size:          159.6 MiB (167390740 bytes)
            m3u8_url:      http://pl-ali.youku.com/playlist/m3u8?vid=XMTczNDY2NjAzMg&type=hd2&ups_client_netip=7321a0e0&utid=E7DkF6yQPkgCAXMhoOA50dtH&ccode=0519&psid=3fae2356ee7ddcb7bfeb16375394b0814109c&duration=817&expire=18000&drm_type=1&drm_device=7&dyt=1&btf=&rid=200000005544F3F31E72E5AF4D7B7982FD607B8002000000&ups_ts=1599980055&onOff=0&encr=0&ups_key=714e429a44c4db2424c709a3f3615b0b
          # download-with: you-get --format=mp4hd2 [URL]
  ```
</details>

## Go
- leafserver
- 理解 pvp 接口交互
- 了解 [GO实现千万级WebSocket消息推送服务](https://www.imooc.com/learn/1025)


<details>
<summary>✏ <b>代码示例</b></summary>
describe("Customer classifier", () => {
  test("When customer spent more than 500$, should be classified as premium", () => {
    //Arrange
    const customerToClassify = { spent: 505, joined: new Date(), id: 1 };
    const DBStub = sinon.stub(dataAccess, "getCustomer").reply({ id: 1, classification: "regular" });

    //Act
    const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

    //Assert
    expect(receivedClassification).toMatch("premium");
  });
});
</details>
