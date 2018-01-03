// Why Lodash?

// Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
// Load the full build.
var _ = require('lodash');

/*_.forEach([1, 2], function(value) {
  console.log(value);
});*/
// => Logs `1` then `2`.


const originalData = [
  { name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }, 
  { name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }, 
  { name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }
];

_.forEach(originalData,function(value) {
	console.log(value)
})


/*{ name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' }
{ name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }
{ name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }
{ name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }*/