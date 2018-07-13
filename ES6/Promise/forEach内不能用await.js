ProdIDs.forEach(async (item) => {
          const product = await ProductService.findById(item);
          if (!product) {
            throw new ServerError(`ID为：${item}的产品不存在！`);
          }
        })

// 需要写成async