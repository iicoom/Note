
const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);

// 全局变量 __dirname
console.log('=============', __dirname)
// ============= /Users/guitar/Work/yasuo/models

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


// The path.join() method joins all given path segments together using the platform specific separator 
// as a delimiter, then normalizes the resulting path.
console.log("path.join(__dirname,'index.html')",path.join(__dirname,'index.html'))
console.log("path.resolve(__dirname,'index.html')",path.resolve(__dirname,'index.html'))


console.log(path.parse('/home/user/dir/file.txt'));
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

/*
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
"  /    home/user/dir / file  .txt "
└──────┴──────────────┴──────┴─────┘
(all spaces in the "" line should be ignored -- they are purely for formatting)
*/


// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

console.log("path.resolve(__dirname, '..'):",path.resolve(__dirname, '..'))
console.log("path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'):",
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))




