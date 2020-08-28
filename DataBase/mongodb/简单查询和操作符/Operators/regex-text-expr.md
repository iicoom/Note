## Evaluation Query Operators 评估操作符
Name	Description
$expr	Allows use of aggregation expressions within the query language.
$jsonSchema	Validate documents against the given JSON Schema.
$mod	Performs a modulo operation on the value of a field and selects documents with a specified result.
$regex	Selects documents where values match a specified regular expression.
$text	Performs text search.
$where	Matches documents that satisfy a JavaScript expression.

### $regex 模糊匹配的时候用到
```js
if (name) {
    query.name =  { $regex: `${name}`, $options: 'i' }
}

console.log('query', query)
// query {
//   name: { '$regex': '閿€', '$options': 'i' }
// }
const list = await col.find(query).sort({_id:1}).skip(skip).limit(limit).toArray();
```