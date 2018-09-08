const constant = require('./const');
const freeze = require('./freeze');

console.log('global.MY_CONST:', global.MY_CONST);
global.MY_CONST = 'changed global const';
console.log('changed global.MY_CONST:', global.MY_CONST);


console.log('constant:\n', constant);
console.log('constant.PI:\n', constant.PI);
constant.PI = 3.15;
console.log('constant.PI==:\n', constant.PI);

console.log('constant-object:\n', constant.CaptchaType.SMS);

console.log('freeze:\n', freeze.MY_CONSTANT);

freeze.MY_CONSTANT = 'value changed';
console.log('freeze-changed:\n', freeze.MY_CONSTANT);

/*
➜  express git:(master) ✗ node main
global.MY_CONST: global const
changed global.MY_CONST: changed global const
constant:
 { PI: 3.14,
  CaptchaType: { SMS: 'SMS', VoiceCode: 'VoiceCode' } }
constant.PI:
 3.14
constant.PI==:
 3.14
constant-object:
 SMS
freeze:
 some value
freeze-changed:
 some value
*/


