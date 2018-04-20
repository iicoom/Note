var _ = require('lodash');

var users = [
  { 'user': 'barney','age':25, 'tel':15523456789},
  { 'user': 'fred','age':25, 'tel':15523456789}
];

var ownerArr = [{  
    "owner": "Colin",  
    "pets": [{"name":"dog1"}, {"name": "dog2"}]  
}, {  
    "owner": "John",  
    "pets": [{"name":"dog3"}, {"name": "dog4"}]  
}];  

/*var result = _.map(users,(item,index) => {
	item.indexTag = index;
	return
});*/
getDataSource = () => {

	return _.map(users,(item,index) => {
		item.indexTag = index;
	});
};

getDataSource();

//var result = _.map(users, 'user'); // [ 'barney', 'fred' ]


var result = _.map(ownerArr, 'pets[0].name'); //[ 'dog1', 'dog3' ]


/*88888888888888888888888888888888888888*/
function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']

//buchershop-api例子
/*
order_goods=[
  {'favour_uid':'123'},
  {'favour_uid':'456'}
]
*/
/*
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
*/
/*
_.uniq([2, 1, 2]);
// => [2, 1]
*/
var favour_uid = _.uniq(_.compact(_.map(order_goods, 'favour_uid')))


/*********************************************************
 取出数组中的对象的指定字段
 ***************************************/
const goods = [
{
    "goods_image_id": 968,
    "goods_commonid": 137,
    "store_id": 1,
    "color_id": 0,
    "goods_image": "https://upload.yunfarm.net/18b34639-6d80-479b-82ce-ec63a811c7b0?Expires=1523586887&OSSAccessKeyId=ZXgB8xqyZn0eaNPD&Signature=FoxqQ3bD6tUYGIpvZ9vQmkfXwWA%3D",
    "goods_image_sort": 1,
    "is_default": 0,
    "create_time": 1523528884000,
    "update_time": 1523528884000,
    "cutting": "https://image.shop.yunfarm.cn/18b34639-6d80-479b-82ce-ec63a811c7b0@300w_300h_99q",
    "key": "18b34639-6d80-479b-82ce-ec63a811c7b0"
},
{
    "goods_image_id": 969,
    "goods_commonid": 137,
    "store_id": 1,
    "color_id": 0,
    "goods_image": "https://upload.yunfarm.net/5c1d504f-b9f2-456c-8d88-c4f49dd60b57?Expires=1523586887&OSSAccessKeyId=ZXgB8xqyZn0eaNPD&Signature=BYC6BIzPA8DIg%2BblKYDO2dgEMIw%3D",
    "goods_image_sort": 1,
    "is_default": 0,
    "create_time": 1523528884000,
    "update_time": 1523528884000,
    "cutting": "https://image.shop.yunfarm.cn/5c1d504f-b9f2-456c-8d88-c4f49dd60b57@300w_300h_99q",
    "key": "5c1d504f-b9f2-456c-8d88-c4f49dd60b57"
},
{
    "goods_image_id": 970,
    "goods_commonid": 137,
    "store_id": 1,
    "color_id": 0,
    "goods_image": "https://upload.yunfarm.net/f5cf458b-46f5-4bb8-930a-195bcb8581ff?Expires=1523586887&OSSAccessKeyId=ZXgB8xqyZn0eaNPD&Signature=EVzU517wOH2UEYQpe5HMvqNShC4%3D",
    "goods_image_sort": 1,
    "is_default": 0,
    "create_time": 1523528884000,
    "update_time": 1523528884000,
    "cutting": "https://image.shop.yunfarm.cn/f5cf458b-46f5-4bb8-930a-195bcb8581ff@300w_300h_99q",
    "key": "f5cf458b-46f5-4bb8-930a-195bcb8581ff"
}
  ];
_.map(goods,'goods_image')

// =>
[
  "goods_image": "https://upload.yunfarm.net/18b34639-6d80-479b-82ce-ec63a811c7b0?Expires=1523586887&OSSAccessKeyId=ZXgB8xqyZn0eaNPD&Signature=FoxqQ3bD6tUYGIpvZ9vQmkfXwWA%3D",
  "goods_image": "https://upload.yunfarm.net/5c1d504f-b9f2-456c-8d88-c4f49dd60b57?Expires=1523586887&OSSAccessKeyId=ZXgB8xqyZn0eaNPD&Signature=BYC6BIzPA8DIg%2BblKYDO2dgEMIw%3D",
  "goods_image": "https://upload.yunfarm.net/f5cf458b-46f5-4bb8-930a-195bcb8581ff?Expires=1523586887&OSSAccessKeyId=ZXgB8xqyZn0eaNPD&Signature=EVzU517wOH2UEYQpe5HMvqNShC4%3D"
]


