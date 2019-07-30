/*
https://nodejs.org/dist/latest-v10.x/docs/api/modules.html

In the Node.js module system, each file is treated as a separate module. 

For example, consider a file named foo.js:
*/

// foo.js
const circle = require('./circle.js');

console.log(`The area of a circle of redius 4 is ${circle.area(4)}`)

