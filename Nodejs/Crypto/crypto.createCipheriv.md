```js
crypto.createCipheriv(algorithm, key, iv[, options])
```
Creates and returns a Cipher object, with the given algorithm, key and initialization vector (iv).

The algorithm is dependent on OpenSSL, examples are 'aes192', etc.

```js
function aesEncrypt(key, data) {
  let keyBuffer = Buffer.from(key, 'base64');
  let cipher = crypto.createCipheriv('aes-128-cbc', keyBuffer, AesIV);
  let result = cipher.update(data, 'utf8', 'base64');
  result += cipher.final('base64');
  return result;
}
```
