/**
 * In Node.js, Buffer objects are used to represent binary data in the form of a sequence of bytes. 
 * Many Node.js APIs, for example streams and file system operations, 
 * support Buffers, as interactions with the operating system or other processes generally always happen in terms of binary data.
 * 在Node.js中，Buffer对象 指的是序列化的二进制数据，许多Node.js aAPI都支持Buffers 比如stream fs,因为他们经常要和操作系统或者其他进程使用二进制数据交互
 */
// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10,
// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10, 1);


// Creates a Buffer containing the bytes [1, 2, 3].
const buf4 = Buffer.from([1, 2, 3]);