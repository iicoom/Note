// The crypto module provides cryptographic functionality that includes a set of wrappers for 
//OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

/**
 * The Hmac class is a utility for creating cryptographic HMAC digests.
 */
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

