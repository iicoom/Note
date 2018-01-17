// substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。

// stringObject.substr(start,length)

var str="Hello world!"
console.log(str.substr(3))
console.log(str.substr(3,7))
console.log(str.substr(-3))

/*
=>
lo world!
lo worl
ld!
*/