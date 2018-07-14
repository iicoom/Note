const ProdPrice = [ 
	[ { product_id: '5b1e4329b12ff5157004f48a',
      product_name: '辣椒2号',
      date: 1527984000000,
      price: '1.10' },
    { product_id: '5b1e4329b12ff5157004f48a',
      product_name: '辣椒2号',
      date: 1528070400000,
      price: '1.10' },
    { product_id: '5b1e4329b12ff5157004f48a',
      product_name: '辣椒2号',
      date: 1528156800000,
      price: '1.10' },
    { product_id: '5b1e4329b12ff5157004f48a',
      product_name: '辣椒2号',
      date: 1528243200000,
      price: '1.10' },
    { product_id: '5b1e4329b12ff5157004f48a',
      product_name: '辣椒2号',
      date: 1528329600000,
      price: '1.10' } ],
  [ { product_id: '5b1f5cc9d47f0d5b182efbea',
      product_name: '辣椒3号',
      date: 1528156800000,
      price: '2.10' },
    { product_id: '5b1f5cc9d47f0d5b182efbea',
      product_name: '辣椒3号',
      date: 1528243200000,
      price: '3.10' },
    { product_id: '5b1f5cc9d47f0d5b182efbea',
      product_name: '辣椒3号',
      date: 1528329600000,
      price: '4.10' },
    { product_id: '5b1f5cc9d47f0d5b182efbea',
      product_name: '辣椒3号',
      date: 1528502400000,
      price: '5.10' },
    { product_id: '5b1f5cc9d47f0d5b182efbea',
      product_name: '辣椒3号',
      date: 1528588800000,
      price: '5.11' } ] 
]

ProdPrice.map((item, index) => {
          const dates = [];
          console.log(dates)
          item.forEach((i) => {
            dates.push(i.date);
          })
          console.log(dates)
        })

// =>
[]
[ 1527984000000,
  1528070400000,
  1528156800000,
  1528243200000,
  1528329600000 ]
[]
[ 1528156800000,
  1528243200000,
  1528329600000,
  1528502400000,
  1528588800000 ]