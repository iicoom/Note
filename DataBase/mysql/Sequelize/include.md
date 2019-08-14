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


const test = async () => {
  let include = [{ association: Analyses_model.belongsTo(Roadmap, { foreignKey: 'roadmap_id' }) }];
  const result = await Analyses_service.getDetailById(2, include);
  console.log(result)
}

{ 
  create_time: '1554631048',
  update_time: '1554646875',
  id: 2,
  name: '地图1+updated',
  roadmap_id: 1,
  class_id: 1,
  group_id: 1,
  power_score: 2,
  released: 0,
  roadmap: {
    create_time: '1554676510',
    update_time: '1554676650',
    id: 1,
    image: 'https://static.fnxy.net.cn/852gvw1zxus.jpeg',
    desc: '测试地图描述~',
    title: '测试-不要删1!',
    sections: [ 34, 35, 36, 40 ]
  }
}
```

