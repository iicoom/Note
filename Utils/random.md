## moment&lodash
```js
function generateTradeNo () {
    return `BM${moment().format('YYYYMMDDHHmmSS')}${_.random(10000, 99999)}`;
}
```