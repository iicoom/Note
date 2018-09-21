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


## asynchronous 
https://www.pluralsight.com/guides/introduction-to-asynchronous-javascript

```
// Say "Hello."
console.log("Hello.");

// Say "Goodbye" two seconds from now.
setTimeout(function() {
  console.log("Goodbye!");
}, 2000);

// Say "Hello again!"
console.log("Hello again!");
```
If you are only familiar with synchronous code, you might expect the code above to behave in the following way:

* Say "Hello".
* Do nothing for two seconds.
* Say "Goodbye!"
* Say "Hello again!"

But setTimeout does not pause the execution of the code. It only schedules something to happen in the future, and then immediately continues to the next line.

* Say "Hello."
* Say "Hello again!"
* Do nothing for two seconds.
* Say "Goodbye!"

Getting data from AJAX requests
```
function getData() {
  var data;
  $.get("example.php", function(response) {
    data = response;
  });
  return data;
}

var data = getData();
console.log("The data is: " + data);
```
Similar to setTimeout in the example above, $.get does not pause the execution of the code, it just schedules some code to run once the server responds. 

That means the return data; line will run before data = response, so the code above will always print "The data is: undefined".

**Asynchronous code needs to be structured in a different way than synchronous code, and the most basic way to do that is with callback functions.**

Callback functions
we will pass in a callback function to getData:
```
var data = getData();
console.log("The data is: " + data);
改成=>
getData(function(data) {
  console.log("The data is: " + data);
});
```
Of course, how does getData know that we're passing in a function? How does it get called, and how is the data parameter populated? Right now, none of this is happening; we need to change the getData function as well, so it will know that a callback function is its parameter.

```
function getData(callback) {
  $.get("example.php", function(response) {
    callback(response);
  });
}

也可以直接传
function getData(callback) {
  $.get("example.php", callback);
}
```

### Common Problem: Scope issues with callbacks inside loops
```
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i + " second(s) elapsed");
  }, i * 1000);
}
```
4 second(s) elapsed.
4 second(s) elapsed.
4 second(s) elapsed.

If you are using ECMAScript6 or later, then a more elegant solution is to use let instead of var, since let creates a new scope for i in each iteration:
```
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i + " second(s) elapsed");
  }, i * 1000);
}
```
1 second(s) elapsed
2 second(s) elapsed
3 second(s) elapsed

### Common Problem: Callback hell
Sometimes you have a series of tasks where each step depends on the results of the previous step. This is a very straightforward thing to deal with in synchronous code:
```
var text = readFile(fileName),
  tokens = tokenize(text),
  parseTree = parse(tokens),
  optimizedTree = optimize(parseTree),
  output = evaluate(optimizedTree);
console.log(output);
```

When you try to do this in asynchronous code, it's easy to run into callback hell, a common problem where you have callback functions deeply nested inside of each other. Node.js code and front-end applications with lots of AJAX calls are particularly susceptible to ending up looking something like this:
```
readFile(fileName, function(text) {
  tokenize(text, function(tokens) {
    parse(tokens, function(parseTree) {
      optimize(parseTree, function(optimizedTree) {
        evaluate(optimizedTree, function(output) {
          console.log(output);
        });
      });
    });
  });
});
```

This kind of code is difficult to read and can be a real pain to try to reorganize whenever you need to make changes to it. If you have deeply nested callbacks like this, it is usually a good idea to arrange the code differently. There are several different strategies for refactoring deeply nested callbacks.

### Tools for dealing with asynchronous code
* Async libraries
* Promises [provided natively in ECMAScript 6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

For example, suppose we start with a getData function that makes an AJAX request and uses a callback in the usual way:
```
function getData(options, callback) {
  $.get("example.php", options, function(response) {
    callback(null, JSON.parse(response));
  }, function() {
    callback(new Error("AJAX request failed!"));
  });
}

// usage
getData({name: "John"}, function(err, data) {
  if(err) {
    console.log("Error! " + err.toString())
  } else {
    console.log(data);
  }
});
```

We can change the getData function so that it returns a promise.
We can create a promise with new Promise(callback), where callback is a function with two arguments: resolve and reject. We will call resolve if we successfully obtain the data. If something goes wrong, we will call reject.
```
function getData(options) {
  return new Promise(function(resolve, reject) {                    //create a new promise
    $.get("example.php", options, function(response) {
      resolve(JSON.parse(response));                                //in case everything goes as planned
    }, function() {
      reject(new Error("AJAX request failed!"));                    //in case something goes wrong
    });
  });
}

// usage
getData({name: "John"}).then(function(data) {
  console.log(data)
}, function(err) {
  console.log("Error! " + err);
});
```

The advantage is clearer when we rewrite our callback hell example using promises:
```
readFile("fileName")
  .then(function(text) {
    return tokenize(text);
  })
  .then(function(tokens) {
    return parse(tokens);
  })
  .then(function(parseTree) {
    return optimize(parseTree);
  })
  .then(function(optimizedTree) {
    return evaluate(optimizedTree);
  })
  .then(function(output) {
    console.log(output);
  });
```













