# note

> Standard JavaScript errors such as , , , , , and .

[https://nodejs.org/dist/latest-v10.x/docs/api/errors.html](https://nodejs.org/dist/latest-v10.x/docs/api/errors.html)

## Error

The Error constructor creates an error object.

Syntax

```text
new Error([message[, fileName[, lineNumber]]])
```

### Throwing a generic error

```text
try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}
```

Error: Whoops!

### ES6 Custom Error Class

```text
class CustomError extends Error {

  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) 
    // to parent constructor
    super(...params);

    // Maintains proper stack trace for where 
    // our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'CustomError';

    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch(e){
  console.log(e.name);    //CustomError
  console.log(e.foo);     //baz
  console.log(e.message); //bazMessage
  console.log(e.stack);   //stacktrace
}
```

## Exceptions vs. Errors

all exceptions thrown by Node.js or the JavaScript runtime will be instances of Error

