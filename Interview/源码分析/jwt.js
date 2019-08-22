'use strict';

const jwt  = require('jsonwebtoken');
const auth = require('../config').auth;

module.exports = {
    sign  : (data) => jwt.sign(data, auth.secret),
    decode: jwt.decode,
    verify: jwt.verify
};

// sign
module.exports = function(payload, secretOrPrivateKey, options, callback) {
    // 1. 一些options 上的参数处理 
    var header = Object.assign({
        alg: options.algorithm || 'HS256',
        typ: isObjectPayload ? 'JWT' : undefined,
        kid: options.keyid
      }, options.header);

    // 2. return 
    return jwt.sign({ header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding })
}

// verify
module.exports = function(jwtString, secretOrPrivateKey, options, callback) {
    var done;

    if (callback) {
        done = callback;
      } else {
        done = function(err, data) {
          if (err) throw err;
          return data;
        };
      }
    
    // 1. 检测传入的token数据类型是否正确
    if (!jwtString) {
        return done(new JsonWebTokenError('jwt must be provided'));
    }

    if (typeof jwtString !== 'string') {
        return done(new JsonWebTokenError('jwt must be a string'));
    }

    var parts = jwtString.split('.');

    if (parts.length !== 3) {
        return done(new JsonWebTokenError('jwt malformed'));
    }

    // 2. 解码token
    var decodeToken;

    try {
        decodeToken = decode(jwtString, { complete: true })
    } catch(err) {
        return done(err);
    }

    if (!decodedToken) {
        return done(new JsonWebTokenError('invalid token'));
    }

    // 3. 验证secret
    var header = decodedToken.header; // 上一步解码出的 token header
    var getSecret;
    // ...
    var payload = decodedToken.payload;
    return done(null, payload);
}