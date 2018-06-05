## 结构划分
* routes 页面组件 处理一些逻辑
* components 纯组件
* models Redux的相关流程 调用相关的service完成API的请求 以及reducer 对返回结果的处理 更新到store中
* services 域名API 请求方式及参数的相关配置
* utils  对request 做了封装 用了Promise 化的 fetch

* .roadhogrc.mock 提供了localhost:8000上的接口

### Request 剖析
```
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}
```
checkStatus对response返回结果做了分类处理

## 页面流程
1. login
2. basiclayout
3. 