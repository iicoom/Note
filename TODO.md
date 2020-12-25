## TEST :thumbsup:
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

- Git查看远程提交状态的方法
- moment 时间格式化工具
- 钉钉接入gitlab jira机器人
- index 分析
- 给数量很大的order加platform
- Gitlab 的tag
- [Web push](https://juejin.im/post/6844903614800986120)

## tools
1. [OmniPlan](https://www.macxin.com/archives/10616.html)
2. [you-get](https://github.com/soimort/you-get) 
    <details>
      <summary>
      ps:目前You-Get可以下载的网站有很多，比如国外的Youtube、Vimeo、Tumblr、Instagram等，国内的爱奇艺、优酷、乐视、哔哩哔哩等。
      </summary>

      ```
      ➜ ~ you-get -o /Users/mxj/Downloads -O 大横按.mp4 'https://v.youku.com/v_show/id_XMTczNDY2NjAzMg\=\=.html'
      ```
    </details>
3. [jsdelivr-A free, fast, and reliable Open Source CDN for npm and GitHub](https://cdn.jsdelivr.net/gh/iicoom/Note@1.0.5/RegExp/image/mobile.png)
4. [百度在线脑图](https://naotu.baidu.com/home)
5. [Conflunce](https://github.com/cptactionhank/docker-atlassian-confluence)

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
