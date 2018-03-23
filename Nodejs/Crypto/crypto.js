// The crypto module provides cryptographic functionality that includes a set of wrappers for 
//OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e


const cert1 = new crypto.Certificate();
const cert2 = crypto.Certificate();
console.log('cert1:',cert1)
console.log('cert2:',cert2)

/*
cert1: Certificate {}
cert2: Certificate {}
*/