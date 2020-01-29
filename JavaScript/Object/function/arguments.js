
// arguments is an Array-like object accessible inside functions that contains 
// the values of the arguments passed to that function.

// 例1
function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3

    console.log('arguments', arguments)

    console.log('arguments.length', arguments.length)
  }
  
  func1(1, 2, 3);

/*
1
2
3
arguments [Arguments] { '0': 1, '1': 2, '2': 3 }
arguments.length 3
*/

// 例2
function trigger(...args) {
    console.log(args)
    console.log(args.shift())
}

trigger("start")
// ["start"]
// start
