// ECMAScript 2015 (6th Edition, ECMA-262)

// The Set object lets you store unique values of any type, whether primitive values or object references.

// Set objects are collections of values. You can iterate through the elements of a set in insertion order.
//  A value in the Set may only occur once; it is unique in the Set's collection.

// Syntax
// new Set([iterable]);

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1)
// Set(5) {1, 2, 3, 4, 5}

typeof set1
"object"

const set2 = new Set([1,2,2,3,4])
console.log(set2)
// Set(4) {1, 2, 3, 4}

// Properties
set1.size
5

// Methods
set1.add(6)
// Set(6) {1, 2, 3, 4, 5, …}

set1.delete(1)
// Set(5) {2, 3, 4, 5, 6}

set1.entries()
// SetIterator {2 => 2, 3 => 3, 4 => 4, 5 => 5, 6 => 6}

set2.entries()
// SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4}

set1.has(2)
// true

set1.keys()
// SetIterator {2, 3, 4, 5, 6}

set1.clear()

set1.size
0

// ## Array.from
Array.from(set2)
[1, 2, 3, 4]


// ES6 — Set vs Array — What and when?
// https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a

// Well, in general, Array is type of structure representing block of data 
// (numbers, objects, etc…) allocated in consecutive memory.
Example: [1,2,3,2]


// Set, more familiar as a Math concept, is an abstract data type which contains only 
// distinct elements/objects without the need of being allocated orderly by index.
Example: {1,2,3}


var set = new Set([1,2,3]); // {1,2,3}
var arr = Array.from(set);  // [1,2,3]

console.log(set.has(0));     // boolean - false
console.log(arr.indexOf(0)); // -1
console.log(set.has(1));     //true
console.log(arr.indexOf(1)); //0


// Note: ES6 does provide Array.prototype.includes() which behaves similarly to has(), however, 
// it is not supported widely — aka not in IE yet (surprise :)!).

// ****** Insert element ***** //
arr.push(4); //[1,2,3,4]

// Or it can also be done in O(n) by using Array.prototype.unshift() — 
// add element to the beginning of array — with n is the length of current array.
arr.unshift(3);     //[3,1,2,3]
arr.unshift(5, 6);  //[5,6,3,1,2,3]

set.add(3); //{1,2,3} 
set.add(4); //{1,2,3,4}

// ******* Remove element ******* //
// Pop() — removes and returns the last element. This takes O(1).
// Shift() — removes and return first element. This takes O(n).

// Splice(index, deleteCount) — remove a number deleteCount of element (s) starting from index. This can take up to O(n).


// Delete(element) — remove a specific given element from Set.


