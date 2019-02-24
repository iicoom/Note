const fs = require('fs');

fs.stat(path, function (err, stats) {
    console.log('isFile', stats.isFile())
    console.log('isDirectory', stats.isDirectory())
  if (stats.isFile()) {
        console.log(stats)
  }
});