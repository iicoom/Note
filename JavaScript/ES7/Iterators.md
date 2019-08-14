> By definition, an iterator is an object that knows how to access each element at the time.

For that, an iterator provides a method called next(). 
When called, next() returns the next element in the collection. 
Mainly, the tuple { value, done }, where:

value is the next value in the collection
done is a boolean that indicates if the iteration has finished
```
function myIterator() {
  var array = [1, 2];
  return {
    next: function() {
      if (array.length) {
        return {
          value: array.shift(),
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
}

var iterator = myIterator();
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { done: true }
```