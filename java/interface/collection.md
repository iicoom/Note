# Collection

[https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html)

## Interface Collection

Type Parameters: E - the type of elements in this collection

public interface Collection extends Iterable

Modifier and Type Method and Description boolean add\(E e\) Ensures that this collection contains the specified element \(optional operation\).

int size\(\) Returns the number of elements in this collection.

boolean addAll\(Collection&lt;? extends E&gt; c\)

Adds all of the elements in the specified collection to this collection \(optional operation\). The behavior of this operation is undefined if the specified collection is modified while the operation is in progress. \(This implies that the behavior of this call is undefined if the specified collection is this collection, and this collection is nonempty.\)

Parameters: c - collection containing elements to be added to this collection

Returns: true if this collection changed as a result of the call

