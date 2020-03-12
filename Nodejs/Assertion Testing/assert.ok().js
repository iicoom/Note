// assert.ok(value[, message])

// Tests if value is truthy. It is equivalent to assert.equal(!!value, true, message).
const assert = require('assert').strict;

assert.ok(true);
// OK
assert.ok(1);
// OK

assert.ok();
// AssertionError: No value argument passed to `assert.ok()`

assert.ok(false, 'it\'s false');
// AssertionError: it's false

// In the repl:
assert.ok(typeof 123 === 'string');
// AssertionError: false == true

assert.ok(false);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(false)

assert.ok(0);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(0)

// Using `assert()` works the same:
assert(0);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert(0)


function regist(key, value, clientKey, squashFunc) {
	assert.ok(key, `regist arguments: ${JSON.stringify(arguments)}`);
	assert.ok(!this.strategy[key], `regist key:${key} already!`);
	if (!clientKey) {
		clientKey = key;
	}
	this.strategy = {key, value, clientKey, squashFunc};
	return this;
}