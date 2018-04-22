[Promise/A+](https://promisesaplus.com/)

> A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its then method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.

### then
A promise must provide a then method to access its current or eventual value or reason.
A promise’s then method accepts two arguments:

```
promise.then(onFulfilled, onRejected)
```