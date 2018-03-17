var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

var privateKey = fs.readFileSync(path.join(__dirname, '../../../certs/weibopay/rsa_sign_private.pem'), 'ascii');
var publicKey = fs.readFileSync(path.join(__dirname, '../../../certs/weibopay/rsa_sign_public.pem'), 'ascii');

var sign = crypto.createSign('sha1WithRSAEncryption');
var verify = crypto.createVerify('sha1WithRSAEncryption');

var str = 'hello, world.你好，中国。';

sign.update(str);
var x = sign.sign({
    key: privateKey,
    passphrase: 'farm2015'
}, 'base64');
console.log(x);


verify.update(str);
var f = verify.verify(publicKey, x, 'base64');
console.log(f);