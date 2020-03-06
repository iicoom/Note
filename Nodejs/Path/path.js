
const fs        = require('fs');
const path      = require('path');

console.log(path.parse('/home/user/dir/file.txt'));
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

console.log(fs.readdirSync(__dirname))
/*
[ 'celebration.js',
  'challenge.js',
  'challengeMap.js',
  'class.js',
  'classGroup.js',
  'classNews.js',
  'company.js',
  'dayTips.js'
]
*/


