// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Return a portion of an existing array
// arr.slice([begin[, end]])
/*
begin Optional
Zero-based index at which to begin extraction.
A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
If begin is undefined, slice begins from index 0.
*/

/*
end Optional
Zero-based index before which to end extraction. slice extracts up to but not including end.
*/

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var aa = fruits.slice();
// (5) ["Banana", "Orange", "Lemon", "Apple", "Mango"]

var citrus = fruits.slice(1, 3);
var yy = fruits.slice(2);
var xx = fruits.slice(-2);
var zz = fruits.slice(-2,-1);

console.log(fruits)
console.log(citrus)
console.log(yy)
console.log(xx)
console.log(zz)

/* =>
[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
[ 'Orange', 'Lemon' ]
[ 'Lemon', 'Apple', 'Mango' ]
[ 'Apple', 'Mango' ]
[ 'Apple' ]
*/