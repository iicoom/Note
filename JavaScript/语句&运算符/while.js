/**
 * while 
 */
var i = 0;
while (i<5)
{
    console.log("The number is " + i);
    i++;
}
console.log("final i:", i)

// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// final i: 5

/**
 * do while
 */
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i > 0 && i < 5);
console.log("i:", i)
console.log("result:", result)
// i: 5
// result: 1 2 3 4 5 