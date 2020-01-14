## iterator
```js
const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
console.log(iterator.next().value)
[0, "a"]

console.log(iterator.next().value)
[1, "b"]

console.log(iterator.next().value)
[2, "c"]

console.log(iterator.next().value)
undefined
```

## Iterating with index and element
```js
const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
	console.log(index, element);

// 0 'a' 
// 1 'b' 
// 2 'c'
```

## Using a for…of loop
```
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```
