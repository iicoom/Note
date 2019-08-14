# attributes

[http://docs.sequelizejs.com/manual/querying.html](http://docs.sequelizejs.com/manual/querying.html)

To select only some attributes, you can use the attributes option. Most often, you pass an array:

```text
Model.findAll({
  attributes: ['foo', 'bar']
});
```

Attributes can be renamed using a nested array:

```text
Model.findAll({
  attributes: ['foo', ['bar', 'baz']]
});
```

SELECT foo, bar AS baz ...

You can use sequelize.fn to do aggregations:

```text
Model.findAll({
  attributes: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
});
```

SELECT COUNT\(hats\) AS no\_hats ...

