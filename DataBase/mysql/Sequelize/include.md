https://gist.github.com/zcaceres/83b554ee08726a734088d90d455bc566

## The Basic Query
Here's how you would find all the rows of a particular model without eager loading.

```
Albums.findAll()
.then(albums => console.log(albums))
.catch(console.error)
```

## Include
Here's how you would find all the Artists associated with your albums.
```
Albums.findAll({
  include: [{// Notice `include` takes an ARRAY
    model: Artists
  }]
})
.then(albums => console.log(albums))
.catch(console.error)


Albums.findAll({
  include: [{
    model: Artists,
    as: 'Singer' // specifies how we want to be able to access our joined rows on the returned data
  }]
})
.then(albums => console.log(albums))
.catch(console.error)
```

