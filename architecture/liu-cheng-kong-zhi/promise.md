# promise

[Promise/A+](https://promisesaplus.com/)

> A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its then method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.

## Promise States

A promise must be in one of three states: pending, fulfilled, or rejected.

* When pending, a promise: may transition to either the fulfilled or rejected state.
* When fulfilled, a promise: must not transition to any other state. must have a value, which must not change.
* When rejected, a promise: must not transition to any other state. must have a reason, which must not change

### then

A promise must provide a then method to access its current or eventual value or reason. A promise’s then method accepts two arguments:

```text
promise.then(onFulfilled, onRejected)
```

