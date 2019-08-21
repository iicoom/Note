 // The identity function is a function that will return back whatever is passed in. 
 // You can think of this in a similar way to the echo command.
 
 function identity<T>(arg: T): T {
 	return arg;
 }


// <T>
// We’ve now added a type variable T to the identity function.

// This T allows us to capture the type the user provides (e.g. number),
// so that we can use that information later.
// 
// Here, we use T again as the return type. 

// We say that this version of the identity function is generic


// Once we’ve written the generic identity function, we can call it in one of two ways. 
// The first way is to pass all of the arguments, including the type argument, to the function:

let output = identity<string>("myString");  // type of output will be 'string'


// The second way is also perhaps the most common. 
// Here we use type argument inference – that is, 
// we want the compiler to set the value of T for us automatically based on 
// the type of the argument we pass in:

let output1 = identity("myString");

// Notice that we didn’t have to explicitly pass the type in the angle brackets (<>); 
// the compiler just looked at the value "myString", and set T to its type.

let output2 = identity(12345);
let output3 = identity({ key: "12345"});
let output4 = identity([1, 2, 3]);



function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}


function loggingIdentity1<T>(arg: Array<T>): Array<T> {
	console.log(arg.length);
	return arg;
}








