var _ = require('lodash');

var resPlatFormProp = { camera: [1], message: [1, 2] };


_.map(resPlatFormProp, ( value, key)=>{
        console.log(key)
        console.log(value)
        const roleArr = _.intersection([1,2,3], value);
        console.log(roleArr)
    });

// =>
// camera
// [ 1 ]
// [ 1 ]
// message
// [ 1, 2 ]
// [ 1, 2 ]
var obj = {"nima":"hello"};
if (Object.keys(obj).length == 0) {
  console.log('empty fuck')
}
console.log(Object.keys(obj).length)