[Glossary](https://docs.mongodb.com/master/reference/glossary/#term-cursor)

## admin database
A privileged database. Users must have access to the admin database to run certain administrative commands. For a list of administrative commands, see Administration Commands.

## aggregation
Any of a variety of operations that reduces and summarizes large sets of data. MongoDB’s aggregate() and mapReduce() methods are two examples of aggregation operations. For more information, see Aggregation.

## B-tree
A data structure commonly used by database management systems to store indexes. MongoDB uses B-trees for its indexes.

## BSON
A serialization format used to store documents and make remote procedure calls in MongoDB. “BSON” is a portmanteau of the words “binary” and “JSON”. Think of BSON as a binary representation of JSON (JavaScript Object Notation) documents.

## collection
A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. 

## cursor
A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. By default, cursors timeout after 10 minutes of inactivity. See Iterate a Cursor in the mongo Shell.

### [Iterate a Cursor in the mongo Shell](https://docs.mongodb.com/master/tutorial/iterate-a-cursor/#read-operations-cursors)
```
var myCursor = db.users.find( { type: 2 } );

while (myCursor.hasNext()) {
   print(tojson(myCursor.next()));
}
```
