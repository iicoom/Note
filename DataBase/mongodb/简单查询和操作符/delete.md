## delete
The following example deletes from the orders collection one document that has the status equal to D by specifying the limit of 1:
```
db.runCommand(
   {
      delete: "orders",
      deletes: [ { q: { status: "D" }, limit: 1 } ]
   }
)
```
// => { "ok" : 1, "n" : 1 }

## db.collection.deleteOne()
```
db.collection.deleteOne(
   <filter>,
   {
      writeConcern: <document>,
      collation: <document>
   }
)

try {
   db.orders.deleteOne(
       { "_id" : ObjectId("563237a41a4d68582c2509da") },
       { w : "majority", wtimeout : 100 }
   );
} catch (e) {
   print (e);
}
```

## db.collection.deleteMany()
```
try {
   db.orders.deleteMany(
       { "client" : "Crude Traders Inc." },
       { w : "majority", wtimeout : 100 }
   );
} catch (e) {
   print (e);
}
```

## db.collection.findOneAndDelete()
```
{ _id: 6305, name : "A. MacDyver", "assignment" : 5, "points" : 24 },
{ _id: 6308, name : "B. Batlock", "assignment" : 3, "points" : 22 },
{ _id: 6312, name : "M. Tagnum", "assignment" : 5, "points" : 30 },
{ _id: 6319, name : "R. Stiles", "assignment" : 2, "points" : 12 },
{ _id: 6322, name : "A. MacDyver", "assignment" : 2, "points" : 14 },
{ _id: 6234, name : "R. Stiles", "assignment" : 1, "points" : 10 }

db.scores.findOneAndDelete(
   { "name" : "A. MacDyver" },
   { sort : { "points" : 1 } }
)
```
// => { _id: 6322, name: "A. MacDyver", "assignment" : 2, "points" : 14 }