```
// 控制台输出
console.log(`Message has been delivered: ${response}`);
=>
Message has been delivered: [object Object]

console.log(`Message has been delivered: ${JSON.stringify(response)}`);
=>
Message has been delivered: {"accepted":["maoxiaojie@yunfarm.cn"],"rejected":[],"envelopeTime":223,"messageTime":932,"messageSize":21177,"response":"250 Ok: queued as ","envelope":{"from":"asdfpeng@qq.com","to":["maoxiaojie@yunfarm.cn"]},"messageId":"<c66a98e4-731b-0e1e-b71d-30c3acfa38e6@qq.com>"}
```
