/*
The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. 
If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. 
Node.js will not terminate until all the 'exit' event listeners are called.

code <integer> The exit code. Defaults to 0.
*/

// To exit with a 'failure' code:

process.exit(1);

/*
Calling process.exit() will force the process to exit as quickly as possible even if there are still 
asynchronous operations pending that have not yet completed fully, including I/O operations to 
process.stdout and process.stderr.

In most situations, it is not actually necessary to call process.exit() explicitly. 
The Node.js process will exit on its own if there is no additional work pending in the event loop. 
The process.exitCode property can be set to tell the process which exit code to use when the 
process exits gracefully.
*/