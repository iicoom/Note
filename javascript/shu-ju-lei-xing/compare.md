# compare

## 数据类型的判断

if\(\[\]\){console.log\('dd'\)} =&gt;dd

if\(\[\]&& \[\].length !==0\){console.log\('dd'\)} =&gt; nothing

## 比较大小

### 字符串类型的比较

'120' &lt;= '20' true

'120' &lt; '20' true

'120' == '20' false

'120' &lt; '20' && '120' == '20' false

### number类型比较

120 &lt; 20 false 120 &lt;= 20 false

### string number混合

120 &lt;= '20' false

## toString\(\) 与 String\(\)

var num = 15; var n = num.toString\(\); console.log\(n\) 15

String\(1234\) "1234"

Number\("1234"\) 1234

## && 的取值

5.12 && 5.12.toFixed\(1\) "5.1"

