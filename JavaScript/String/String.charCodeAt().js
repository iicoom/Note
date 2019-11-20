// charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
// 方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。
// index	必需。表示字符串中某个位置的数字，即字符在字符串中的下标。


'a'.charCodeAt()
// 97

String.fromCharCode(97)
// "a"

'abcdefghi'.charCodeAt(0)
// 97
'abcdefghi'.charCodeAt(1)
// 98
'abcdefghi'.charCodeAt(2)
// 99

// charCodeAt()方法返回前两个字节和后两个字节的值
var a="𠮷c"
a.charCodeAt(0);// 返回前两个字节的值 55362
a.charCodeAt(1);// 返回后两个字节的值 57271 
a.charCodeAt(2);// 99




