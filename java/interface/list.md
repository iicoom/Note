# List

[https://docs.oracle.com/javase/8/docs/api/java/util/List.html](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)

Interface List

Type Parameters: E - the type of elements in this list

public interface List extends Collection

An ordered collection \(also known as a sequence\). The user of this interface has precise control over where in the list each element is inserted. The user can access elements by their integer index \(position in the list\), and search for elements in the list. Unlike sets, lists typically allow duplicate elements. More formally, lists typically allow pairs of elements e1 and e2 such that e1.equals\(e2\), and they typically allow multiple null elements if they allow null elements at all. It is not inconceivable that someone might wish to implement a list that prohibits duplicates, by throwing runtime exceptions when the user attempts to insert them, but we expect this usage to be rare.

boolean addAll\(int index, Collection&lt;? extends E&gt; c\)

Parameters: index - index at which to insert the first element from the specified collection c - collection containing elements to be added to this list

boolean removeAll\(Collection&lt;?&gt; c\) Removes from this list all of its elements that are contained in the specified collection \(optional operation\).

Parameters: c - collection containing elements to be removed from this list

