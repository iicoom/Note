// A fs.Stats object provides information about a file.
const fs = require('fs');
const path = require('path');

let currentDir = __dirname
// path E:\Joy\Note\Nodejs\Fs
// console.log('path', currentDir)
// fs.stat(currentDir, function (err, stats) {
//     console.log('isFile', stats.isFile())
//     console.log('isDirectory', stats.isDirectory())
//   if (stats.isFile()) {
//         console.log(stats)
//   }
// });


let files = fs.readdirSync(currentDir);
console.log('files', files)
// files [
//   'config',
//   'fs.open.js',
//   'fs.rmdir.js',
//   'fs.stat.js',
//   'fs.unlink.js',
//   'readdirSync.js',
//   'readFile.js'
// ]
files.forEach(file => {
  console.log(path.join(currentDir, file))
  fs.stat(path.join(currentDir, file), function(err, stats) {
    console.log('isFile', stats.isFile())
  })
})
// E:\Joy\Note\Nodejs\Fs\config
// E:\Joy\Note\Nodejs\Fs\fs.open.js
// E:\Joy\Note\Nodejs\Fs\fs.rmdir.js
// E:\Joy\Note\Nodejs\Fs\fs.stat.js
// E:\Joy\Note\Nodejs\Fs\fs.unlink.js
// E:\Joy\Note\Nodejs\Fs\readdirSync.js
// E:\Joy\Note\Nodejs\Fs\readFile.js
// isFile false
// isFile true
// isFile true
// isFile true
// isFile true
// isFile true
// isFile true
