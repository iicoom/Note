crypto.randomBytes(size[, callback])

Generates cryptographically strong pseudo-random data. The size argument is a number indicating the number of bytes to generate.

```js
const aesKey = crypto.randomBytes(128 / 8).toString('base64');
console.log('---', crypto.randomBytes(128 / 8))
console.log('aesKey', aesKey)
```
--- <Buffer ca 55 8f d7 2b af 9d af 19 9b 94 90 11 ed d4 1e>  
aesKey XW/W+vlrTd0e2eUPQROWSQ==
