const = marketPrice =
 [ { product_id: '5b1e4329b12ff5157004f48a',
    product_name: '辣椒2号',
    date: 1527984000000,
    price: 1.1 },
  { product_id: '5b1e4329b12ff5157004f48a',
    product_name: '辣椒3号',
    date: 1528070400000,
    price: 1.1 },
  { product_id: '5b1e4329b12ff5157004f48a',
    product_name: '辣椒4号',
    date: 1528156800000,
    price: 1.1 },
  { product_id: '5b1e4329b12ff5157004f48a',
    product_name: '辣椒5号',
    date: 1528243200000,
    price: 1.1 },
  { product_id: '5b1e4329b12ff5157004f48a',
    product_name: '辣椒6号',
    date: 1528329600000,
    price: 1.1 },
  { product_id: '5b1f5cc9d47f0d5b182efbea',
    product_name: '辣椒3号',
    date: 1528156800000,
    price: 2.1 },
  { product_id: '5b1f5cc9d47f0d5b182efbea',
    product_name: '辣椒4号',
    date: 1528243200000,
    price: 3.1 },
  { product_id: '5b1f5cc9d47f0d5b182efbea',
    product_name: '辣椒5号',
    date: 1528329600000,
    price: 4.1 },
  { product_id: '5b1f5cc9d47f0d5b182efbea',
    product_name: '辣椒6号',
    date: 1528416000000,
    price: 5.1 },
  { product_id: '5b1f5cc9d47f0d5b182efbea',
    product_name: '辣椒7号',
    date: 1528502400000,
    price: 0 } ]


const group = _.groupBy(marketPrice, (o) => {
          return o.product_id;
        });

{ '5b1e4329b12ff5157004f48a':
   [ { product_id: '5b1e4329b12ff5157004f48a',
       product_name: '辣椒2号',
       date: 1527984000000,
       price: 1.1 },
     { product_id: '5b1e4329b12ff5157004f48a',
       product_name: '辣椒3号',
       date: 1528070400000,
       price: 1.1 },
     { product_id: '5b1e4329b12ff5157004f48a',
       product_name: '辣椒4号',
       date: 1528156800000,
       price: 1.1 },
     { product_id: '5b1e4329b12ff5157004f48a',
       product_name: '辣椒5号',
       date: 1528243200000,
       price: 1.1 },
     { product_id: '5b1e4329b12ff5157004f48a',
       product_name: '辣椒6号',
       date: 1528329600000,
       price: 1.1 } ],
  '5b1f5cc9d47f0d5b182efbea':
   [ { product_id: '5b1f5cc9d47f0d5b182efbea',
       product_name: '辣椒3号',
       date: 1528156800000,
       price: 2.1 },
     { product_id: '5b1f5cc9d47f0d5b182efbea',
       product_name: '辣椒4号',
       date: 1528243200000,
       price: 3.1 },
     { product_id: '5b1f5cc9d47f0d5b182efbea',
       product_name: '辣椒5号',
       date: 1528329600000,
       price: 4.1 },
     { product_id: '5b1f5cc9d47f0d5b182efbea',
       product_name: '辣椒6号',
       date: 1528416000000,
       price: 5.1 },
     { product_id: '5b1f5cc9d47f0d5b182efbea',
       product_name: '辣椒7号',
       date: 1528502400000,
       price: 0 } ] }

