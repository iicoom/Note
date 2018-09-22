const filtersArg = {name: ["羊", "猪"] ,age: [36,50]};

const pagination = {
	current: 5,
	showQuickJumper: true, 
	defaultPageSize: 5, 
	total: 18, 
	showSizeChanger: true,
	defaultPageSize: 5,
	pageSize: 5,
	pageSizeOptions: ["5", "10", "15", "20"]
};

const sorter = {
	order: "ascend", 
	field: "panic_buying_price", 
	columnKey: "panic_buying_price"
}


const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

const getParams = (pagination, filtersArg, sorter) => {
  const filters = Object.keys(filtersArg).reduce((obj, key) => {
    const newObj = { ...obj };
    const filterKey = filtersArg[key].length > 1 ? `${key}In` : key;
    // console.log(filtersArg[key])
    newObj[filterKey] = getValue(filtersArg[key]);
    return newObj;
  }, {});

  const params = {
    pageNo: pagination.current,
    pageSize: pagination.pageSize,
    ...filters,
  };

  if (sorter.field) {
    params.sorter = `${sorter.field}_${sorter.order}`;
  }
  return params;
};

console.log( getParams(pagination, filtersArg, sorter) );


/*
 console.log(filtersArg[key]) =>
[ '羊', '猪' ]
[ 36, 50 ]

Object.keys(filtersArg) =>  [ 'name', 'age' ]

{ pageNo: 5,
  pageSize: 5,
  nameIn: '羊,猪',
  ageIn: '36,50',
  sorter: 'panic_buying_price_ascend' 
}
*/




