## TEST :thumbsup:
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

- [项目重构数据迁移带来的思考：](DataBase\MySQL和Mongodb的差异.md)
- Sign in with Single Sign-On (SSO)
- index 分析
- 给数量很大的order加platform
- TypeScript相关资料-JavaScript/TypeScript/实例
- ✅Java for https://www.runoob.com/java/java-loop.html
- ✅Gitlab 的tag
- ✅moment 时间格式化工具
- ✅钉钉接入gitlab jira机器人
- [✅网页消息推送通知机制](https://juejin.im/post/6844903614800986120)

### 日志管理
1. log4js: 日志按天滚动压缩前一天，如何集中管理多台服务器的日志
2. 日志处理工具logstash
3. 日志处理架构[ELK](https://www.elastic.co/cn/what-is/elk-stack)

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
