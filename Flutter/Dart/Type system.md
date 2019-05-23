> You can fix most static analysis errors by adding type annotations to generic classes. 
The most common generic classes are the collection types List<T> and Map<K,V>.

https://dart.dev/guides/language/sound-dart

A sound type system means you can never get into a state where an expression evaluates to a value that doesn’t match the expression’s static type

## The benefits of soundness
1. Revealing type-related bugs at compile time.

2. More readable code.

3. More maintainable code.

4. Better ahead of time (AOT) compilation.


### Type inference

 In this example, a variable named arguments holds a map that pairs string keys with values of various types.

 If you explicitly type the variable, you might write this:
 ```
 Map<String, dynamic> arguments = {'argA': 'hello', 'argB': 42}
 ```

 Alternatively, you can use var and let Dart infer the type:
 ```
 var arguments = {'argA': 'hello', 'argB': 42}; // Map<String, Object>
 ```

