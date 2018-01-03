var _ = require('lodash');

const originalData = [
  { name: 'bo', age: 30, score: 90, gender: 1, lesson: 'math' },
  { name: 'hou', age: 31, score: 80, gender: 1, lesson: 'math' }, 
  { name: 'jian', age: 27, score: 70, gender: 0, lesson: 'math' }, 
  { name: 'bo', age: 30, score: 80, gender: 1, lesson: 'english' }
];

_.groupBy(originalData,lesson)