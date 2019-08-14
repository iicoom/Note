# Array.every\(\)

> The every method executes the provided callback function once for each element present in the array until it finds the one where callback returns a falsy value.

function isBelowThreshold\(currentValue\) { return currentValue &lt; 40; }

var array1 = \[1, 30, 39, 29, 10, 13\];

console.log\(array1.every\(isBelowThreshold\)\); // expected output: true

