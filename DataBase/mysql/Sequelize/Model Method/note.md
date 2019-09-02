## findAll

> To select only some attributes, you can use the attributes option. Most often, you pass an array:

```
Model.findAll({
  attributes: ['foo', 'bar']
});
```
SELECT foo, bar ...


## findAndCountAll

> Search for multiple elements in the database, returns both data and total count

This is a convenience method that combinesfindAll and count (see below) this is useful when dealing with queries related to pagination where you want to retrieve data with a limit and offset but also need to know the total number of records that match the query
