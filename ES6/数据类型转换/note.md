```
// 控制台输出
console.log(`Message has been delivered: ${response}`);
=>
Message has been delivered: [object Object]

console.log(`Message has been delivered: ${JSON.stringify(response)}`);
=>
Message has been delivered: {"accepted":["maoxiaojie@yunfarm.cn"],"rejected":[],"envelopeTime":223,"messageTime":932,"messageSize":21177,"response":"250 Ok: queued as ","envelope":{"from":"asdfpeng@qq.com","to":["maoxiaojie@yunfarm.cn"]},"messageId":"<c66a98e4-731b-0e1e-b71d-30c3acfa38e6@qq.com>"}
```

## 控制台console.log()
```
console.log('这是一个对象：', {})
就会出现以上[object Object]情况

加入换行符看起来更清晰
console.log('这是一个对象：\n', {})
```

## 数据类型的判断
if([]){console.log('dd')}
=>dd

if([]&& [].length !==0){console.log('dd')}
=> nothing

## 比较大小
### 字符串类型的比较
'120' <= '20'
true

'120' < '20'
true

'120' == '20'
false

'120' < '20' && '120' == '20'
false

### number类型比较
120 < 20
false
120 <= 20
false

### string number混合
120 <= '20'
false


## toString() 与 String()
var num = 15;
var n = num.toString();
console.log(n)
15


String(1234)
"1234"

Number("1234")
1234

## && 的取值
5.12 && 5.12.toFixed(1)
"5.1"





