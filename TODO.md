## TEST :thumbsup:
https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

- Git查看远程提交状态的方法
- moment

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
