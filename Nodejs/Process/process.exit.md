## Event: 'exit'
The 'exit' event is emitted when the Node.js process is about to exit as a result of either:

The process.exit() method being called explicitly;
The Node.js event loop no longer having any additional work to perform.
```
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
```

To exit with a 'failure' code:
```
process.exit(1);
```
The shell that executed Node.js should see the exit code as 1.

In most situations, it is not actually necessary to call process.exit() explicitly. The Node.js process will exit on its own if there is no additional work pending in the event loop. The process.exitCode property can be set to tell the process which exit code to use when the process exits gracefully.

## Exit Codes
Node.js will normally exit with a 0 status code when no more async operations are pending. The following status codes are used in other cases:
1 Uncaught Fatal Exception - There was an uncaught exception, and it was not handled by a domain or an 'uncaughtException' event handler.
2 - Unused (reserved by Bash for builtin misuse)
3 Internal JavaScript Parse Error - The JavaScript source code internal in Node.js's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during development of Node.js itself.
4 Internal JavaScript Evaluation Failure - The JavaScript source code internal in Node.js's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during development of Node.js itself.
5 Fatal Error - There was a fatal unrecoverable error in V8. Typically a message will be printed to stderr with the prefix FATAL ERROR.