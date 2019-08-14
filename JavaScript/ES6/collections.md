https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/

ES6 introduces four new data structures that will add power and expressiveness to the language: 
Map, Set, WeakSet, and WeakMap.

## Searching for the JavaScript HashMap

HashMaps, dictionaries, and hashes are several ways that various programming languages store key/value pairs, and these data structures are optimized for fast retrieval.

In ES5, JavaScript objects — which are just arbitrary collections of properties with keys and values — can simulate hashes, but there are several downsides to using objects as hashes.

## Using ES6 Map Collections

Creating a map and using common methods
```
const map = new Map(); // Create a new Map
map.set('hobby', 'cycling'); // Sets a key value pair

const foods = { dinner: 'Curry', lunch: 'Sandwich', breakfast: 'Eggs' }; // New Object
const normalfoods = {}; // New Object

map.set(normalfoods, foods); // Sets two objects as key value pair

for (const [key, value] of map) {
  console.log(`${key} = ${value}`); // hobby = cycling  [object Object] = [object Object]
}

map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
}, map); // hobby = cycling  [object Object] = [object Object]

map.clear(); // Clears key value pairs
console.log(map.size === 0); // True
```

## Using the Set Collection

One difference between ES6 Sets and those in other languages is that the order matters in ES6 (not so in many other languages). Here are the crucial Set methods:
```
const planetsOrderFromSun = new Set();
planetsOrderFromSun.add('Mercury');
planetsOrderFromSun.add('Venus').add('Earth').add('Mars'); // Chainable Method
console.log(planetsOrderFromSun.has('Earth')); // True

planetsOrderFromSun.delete('Mars');
console.log(planetsOrderFromSun.has('Mars')); // False

for (const x of planetsOrderFromSun) {
  console.log(x); // Same order in as out - Mercury Venus Earth
}
console.log(planetsOrderFromSun.size); // 3

planetsOrderFromSun.add('Venus'); // Trying to add a duplicate
console.log(planetsOrderFromSun.size); // Still 3, Did not add the duplicate

planetsOrderFromSun.clear();
console.log(planetsOrderFromSun.size); // 0
```

## Map/Set集合 (ES6的Set对象和Map对象)
Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

Map方法:
```
var myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

myMap.size;       // 2
myMap.has("bar"); // true

myMap.clear();

myMap.size;       // 0
myMap.has("bar")  // false


// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"
```

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

Set 对象方法:
```
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size;       // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size;       // 0
mySet.has("bar")  // false
```

应用一：Set对象数组去重
```
var arr=[3, 62, 3, 38, 20, 42, 14, 5, 38, 29, 42];
console.log(new Set(arr))
```


## Weak Collections, Memory, and Garbage Collections
To remedy this, ES6 also introduces two new weak collections called WeakMap and WeakSet. These ES6 collections are ‘weak’ because they allow for objects which are no longer needed to be cleared from memory.

