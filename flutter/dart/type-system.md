# Type system

> You can fix most static analysis errors by adding type annotations to generic classes. The most common generic classes are the collection types List and Map.

[https://dart.dev/guides/language/sound-dart](https://dart.dev/guides/language/sound-dart)

A sound type system means you can never get into a state where an expression evaluates to a value that doesn’t match the expression’s static type

## The benefits of soundness

1. Revealing type-related bugs at compile time.
2. More readable code.
3. More maintainable code.
4. Better ahead of time \(AOT\) compilation.

### Type inference 类型推理

In this example, a variable named arguments holds a map that pairs string keys with values of various types.

When the analyzer doesn’t have enough information to infer a specific type, it uses the dynamic type.

If you explicitly type the variable, you might write this:

```text
 Map<String, dynamic> arguments = {'argA': 'hello', 'argB': 42}
```

Alternatively, you can use var and let Dart infer the type:

```text
 var arguments = {'argA': 'hello', 'argB': 42}; // Map<String, Object>
```

