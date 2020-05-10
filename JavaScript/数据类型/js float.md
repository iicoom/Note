## JavaScript float 精度问题
console.log(0.1+0.2)
0.3
console.log(0.1+0.2 == 0.3)
false

console.log(0.1 + 0.2)=0.30000000000000004 & console.log(0.1 + 0.2 == 0.3)=false


https://stackoverflow.com/questions/25925284/javascript-floating-point-number-confusion

var a = 0.1;
var b = 0.2;
var c = 0.3;

console.log(a); // 0.1
console.log(b); // 0.2
console.log(c); // 0.3

But
consolo.log(a+b+c) // 0.6000000000000001.

While
console.log(a+(b+c)) // 0.6


Well, in the first case you are doing (0.1 + 0.2) + 0.3 = 0.3 + 0.3 and in the second case you do 0.1 + (0.2 + 0.3) = 0.1 + 0.5. I guess the rounding error in the first case larger than in the second case.

Lets have a closer look at the actual values in this computation:

var a = 0.1;
var b = 0.2;
var c = 0.3;

console.log('          a:', a.toPrecision(21));
console.log('          b:', b.toPrecision(21));
console.log('          c:', c.toPrecision(21));

console.log('      a + b:', (a + b).toPrecision(21));
console.log('      b + c:', (b + c).toPrecision(21));

console.log('  a + b + c:', (a + b + c).toPrecision(21));
console.log('a + (b + c):', (a + (b + c)).toPrecision(21));

The output is

a: 0.100000000000000005551
b: 0.200000000000000011102
c: 0.299999999999999988898

a + b: 0.300000000000000044409
b + c: 0.500000000000000000000

a + b + c: 0.600000000000000088818
a + (b + c): 0.599999999999999977796 

So, it's clear that both computations have rounding errors, but the errors are different because you are performing the additions in a different order. It just happens that a + b + c produces a larger error.