const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname + '/config/custom.js')
fs.open(filePath, 'r', (err, fd) => {
  if (err) throw err;
  console.log('fd:', fd)
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
// fd: 20