> How the single threaded non blocking IO model works in Node.js

> Node.js is built upon libuv, a cross-platform library that abstracts apis/syscalls for asynchronous (non-blocking) input/output provided by the supported OSes (Unix, OS X and Windows at least).



```
// Example 1 - Synchronous (blocks)
var result = database.query("SELECT * FROM hugetable");
console.log("Query finished");
console.log("Next line");


// Example 2 - Asynchronous (doesn't block) 
database.query("SELECT * FROM hugetable", function(result) {
    console.log("Query finished");
});
console.log("Next line");
```
Would be:

1. Query finished
   Next line

2. Next line
   Query finished