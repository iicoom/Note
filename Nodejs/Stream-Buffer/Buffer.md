> Prior to the introduction of TypedArray, the JavaScript language had no mechanism for reading or manipulating streams of binary data. The Buffer class was introduced as part of the Node.js API to enable interaction with octet streams in TCP streams, file system operations, and other contexts.

JS没有读取和操纵二进制流的机制，Buffer就是为了解决这个问题引入的Node.js API,使得可以用8进制流来处理TCP流，文件系统操作。

https://nodejs.org/dist/latest-v12.x/docs/api/buffer.html

## Buffers and Character Encodings
When string data is stored in or extracted out of a Buffer instance, a character encoding may be specified.

Buffer的操作可能会指定编码方式
```JavaScript
const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=

console.log(Buffer.from('fhqwhgads', 'ascii'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>
console.log(Buffer.from('fhqwhgads', 'utf16le'));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>
```

The character encodings currently supported by Node.js include:
- 'ascii': For 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.

- 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.

- 'utf16le': 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.

- 'ucs2': Alias of 'utf16le'.

- 'base64': Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC 4648, Section 5.

- 'latin1': A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC 1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).

- 'binary': Alias for 'latin1'.

- 'hex': Encode each byte as two hexadecimal characters.
