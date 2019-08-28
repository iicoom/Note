
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);

// 全局变量 __dirname 文件的绝对路径
console.log('=============', __dirname)
// ============= /Users/guitar/Work/yasuo/models

// 取当前目录的上级目录
console.log(path.join(__dirname, '../'))
// ============= /Users/guitar/Work/yasuo/

console.log('=============', fs.readdirSync(__dirname))
// ============= index.js

console.log('=============', fs.readdirSync(__dirname))
/*
============= [ 'celebration.js',
  'challenge.js',
  'challengeMap.js',
  'class.js',
  'classGroup.js',
  'classNews.js',
  'company.js',
  'dayTips.js']
*/


/* ===================================================================================================== */
const path = require('path');

console.log(path.dirname('/foo/bar/baz/asdf/quux.html'));
// => /foo/bar/baz/asdf

console.log(path.extname('index.html'));
// Returns: '.html'

console.log(path.extname('index.coffee.md'));
// Returns: '.md'

console.log(path.parse('/home/user/dir/file.txt'));
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

