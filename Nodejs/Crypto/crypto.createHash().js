const crypto = require('crypto');

const hash = crypto.createHash('sha256');

// The Hash class is a utility for creating hash digests of data. It can be used in one of two ways:

// As a stream that is both readable and writable, where data is written to produce a computed hash digest on the readable side, or
// Using the hash.update() and hash.digest() methods to produce the computed hash.

hash.update('some data to hash');
console.log(hash.digest('hex'));
// Prints:
//   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50