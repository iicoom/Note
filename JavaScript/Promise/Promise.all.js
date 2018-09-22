// 并行校验 不需要resolve（）并且不会提示unhandle rejection
// forEach 会报
/*
TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined
    at Function.all (<anonymous>)
    at _callee11$ (/Users/mxj/Work/cloud-ranch-v2/server/api/routes/product.js:481:23)
    at tryCatch (/Users/mxj/Work/cloud-ranch-v2/node_modules/regenerator-runtime/runtime.js:65:40)
    at Generator.invoke [as _invoke] (/Users/mxj/Work/cloud-ranch-v2/node_modules/regenerator-runtime/runtime.js:303:22)
    at Generator.prototype.(anonymous function) [as next] (/Users/mxj/Work/cloud-ranch-v2/node_modules/regenerator-runtime/runtime.js:117:21)
    at step (/Users/mxj/Work/cloud-ranch-v2/server/api/routes/product.js:67:191)
    at /Users/mxj/Work/cloud-ranch-v2/server/api/routes/product.js:67:361
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:228:7)

*/
await Promise.all(ProdPrice.forEach(async (item) => {
          const uniqu = _.uniqBy(item, 'date');
          if (uniqu.length < item.length) {
            throw new ClientError('不能有重复的日期！');
          }
          const { name, id } = await ProductService.findById(item[0].product_id);
          console.log('name:', name + id)
          const errorname = _.filter(item, (o) => { return o.product_name !== name; });
          const errortime = _.filter(item, (o) => { return  isNaN(o.date) || String(o.date).length === 5; });
          console.log('errorname:', errorname)
          console.log('errortime:', errortime)
          if (errorname.length !== 0) {
            throw new ClientError(`产品ID为：${id} 的产品 名称必须为 ${name}`);
          } else if (errortime.length !== 0) {
            throw new ClientError('市价日期不能为空,或者格式错误（格式：2018-06-03）！');
          }
        }));
// map 运行正常
await Promise.all(ProdPrice.map(async (item) => {
          const uniqu = _.uniqBy(item, 'date');
          if (uniqu.length < item.length) {
            throw new ClientError('不能有重复的日期！');
          }
          const { name, id } = await ProductService.findById(item[0].product_id);
          console.log('name:', name + id)
          const errorname = _.filter(item, (o) => { return o.product_name !== name; });
          const errortime = _.filter(item, (o) => { return  isNaN(o.date) || String(o.date).length === 5; });
          console.log('errorname:', errorname)
          console.log('errortime:', errortime)
          if (errorname.length !== 0) {
            throw new ClientError(`产品ID为：${id} 的产品 名称必须为 ${name}`);
          } else if (errortime.length !== 0) {
            throw new ClientError('市价日期不能为空,或者格式错误（格式：2018-06-03）！');
          }
        }));
