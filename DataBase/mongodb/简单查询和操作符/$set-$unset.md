```js
db.products.update(
   { sku: "unknown" },
   { $unset: { quantity: "", instock: "" } }
)
```
