// The codePointAt() method returns a non-negative integer that is the Unicode code point value.
// str.codePointAt(pos)
// pos
// Position of an element in the String to return the code point value from.
'ABC'.codePointAt(1);          // 66   B对应的ASCII码是66

var icons = '☃★♲';

console.log(icons.codePointAt(1));
// expected output: "9733"

