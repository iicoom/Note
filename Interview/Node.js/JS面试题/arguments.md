> arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

Note: “Array-like” means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like 
forEach() and map(). See §Description for details.

```
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3

  console.log(Array.from(arguments))
}

func1(1, 2, 3);
```
输出
1
2
3
Array [1, 2, 3]

