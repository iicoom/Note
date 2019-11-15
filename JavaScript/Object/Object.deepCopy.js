/**
 * Deep copy vs Shallow copy
 * https://flaviocopes.com/how-to-clone-javascript-object/
 * 
 * A shallow copy successfully copies primitive types like numbers and strings, 
 * but any object reference will not be recursively copied, 
 * but instead the new, copied object will reference the same object.
 * 浅拷贝只能拷贝对象的原始数据类型，嵌套的对象属性不会被真正拷贝，新拷贝的对象依然会使用被拷贝对象的索引。
 * 
 * When performing a deep copy, those external objects are copied as well, 
 * so the new, cloned object is completely independent from the old one.
 * 深拷贝的对象相对于原对象是 完全独立的
 */
// 1. Easiest option: use Lodash
// Lodash offers the very convenient clone and deepclone functions to perform shallow and deep cloning.
const clone = require('lodash.clone')
const clonedeep = require('lodash.clonedeep')

const externalObject = {
  color: 'red'
}

const original = {
  a: new Date(),
  b: NaN,
  c: new Function(),
  d: undefined,
  e: function(){},
  f: Number,
  g: false,
  h: Infinity,
  i: externalObject,
}

const cloned = clone(original)

externalObject.color = 'blue'


console.info('⬇️ shallow cloning 🌈')
console.info('✏️ Notice the i.color property we changed on original is also changed in the shallow copy')
console.log(original)
console.log(cloned)

const deepcloned = clonedeep(original)

externalObject.color = 'yellow'
console.log('')
console.info('⬇️ deep cloning 🌈')
console.info('✏️ Notice the i.color property does not propagate any more')
console.log(original)
console.log(deepcloned)
/*
⬇ shallow cloning 🌈
✏ Notice the i.color property we changed on original is also changed in the shal
low copy
{ a: 2019-11-15T01:47:13.540Z,
  b: NaN,
  c: [Function: anonymous],
  d: undefined,
  e: [Function: e],
  f: [Function: Number],
  g: false,
  h: Infinity,
  i: { color: 'blue' } }
{ a: 2019-11-15T01:47:13.540Z,
  b: NaN,
  c: [Function: anonymous],
  d: undefined,
  e: [Function: e],
  f: [Function: Number],
  g: false,
  h: Infinity,
  i: { color: 'blue' } }

⬇ deep cloning 🌈
✏ Notice the i.color property does not propagate any more
{ a: 2019-11-15T01:47:13.540Z,
  b: NaN,
  c: [Function: anonymous],
  d: undefined,
  e: [Function: e],
  f: [Function: Number],
  g: false,
  h: Infinity,
  i: { color: 'yellow' } }
{ a: 2019-11-15T01:47:13.540Z,
  b: NaN,
  c: [Function: anonymous],
  d: undefined,
  e: [Function: e],
  f: [Function: Number],
  g: false,
  h: Infinity,
  i: { color: 'blue' } }
*/

// 2. Object.assign() performs a shallow copy of an object, not a deep clone.
const original = {
    name: 'Fiesta',
    car: {
      color: 'blue'
    }
}
const copied = Object.assign({}, original)

original.name = 'Focus'
original.car.color = 'yellow'

copied.name //Fiesta
copied.car.color //yellow


// 3. Using the Object Spread operator
// The spread operator is a ES6/ES2015 feature that provides a very convenient way to 
// perform a shallow clone, equivalent to what Object.assign() does.
const copied = { ...original }

/**
 * Wrong solutions
 */
// 1. Using Object.create()
const original = {
    name: 'Fiesta'
}
const copied = Object.create(original)
copied.name //Fiesta

original.hasOwnProperty('name') //true
copied.hasOwnProperty('name')   //false

// 2. Some recommend transforming to JSON:
// const cloned = JSON.parse(JSON.stringify(original))
// By doing this you will lose any Javascript property that has no equivalent type in JSON, 
// like Function or Infinity. Any property that’s assigned to undefined will be ignored by JSON.stringify, 
// causing them to be missed on the cloned object.
JSON.parse(
    JSON.stringify({
      a: new Date(),
      b: NaN,
      c: new Function(),
      d: undefined,
      e: function() {},
      f: Number,
      g: false,
      h: Infinity
    })
  )

// {
//   a: "2019-11-15T02:17:15.639Z"
//   b: null
//   g: false
//   h: null
// }

// lodash 如何实现clonedeep？
// _.cloneDeep 的源码实现
// 它的源码内容很少，因为主要还是靠 baseClone 去实现。
/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1
const CLONE_SYMBOLS_FLAG = 4

function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG)
}
  
// https://segmentfault.com/a/1190000019106551