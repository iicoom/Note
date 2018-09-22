//The slice() method returns a shallow copy of a portion of an array into a new array object 
//selected from begin to end (end not included). The original array will not be modified.

// string的slice最灵活可以有负参数，split，substring，substr
var string2 = 'abcdefg';
var ctx3 = string2.slice(2,-2);
console.log(ctx3);

var str1 = 'The morning is upon us.';
var str2 = str1.slice(4, -2);

console.log(str2); // OUTPUT: morning is upon u

str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'