## Operators
### Comparison Query Operators

Name	Description
$eq	Matches values that are equal to a specified value.
$gt	Matches values that are greater than a specified value.
$gte	Matches values that are greater than or equal to a specified value.
$in	Matches any of the values specified in an array.
$lt	Matches values that are less than a specified value.
$lte	Matches values that are less than or equal to a specified value.
$ne	Matches all values that are not equal to a specified value.
$nin	Matches none of the values specified in an array.

#### $in
```
// 6种
const userids = [ 
  '54af3b6a48e6cd1c1be333e8',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '5a1667a32acb47cb135d5b0a',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '54df318e1c701cc40b708d89',
  '54af3b6a48e6cd1c1be333e8',
  '54af3b6a48e6cd1c1be333e8',
  '54df318e1c701cc40b708d89',
  '5a28d8877d72587761cae36a',
  '54af3b6a48e6cd1c1be333e8',
  '54af3b6a48e6cd1c1be333e8',
  '5a1667a32acb47cb135d5b0a',
  '58b91199386bef4f3b7f3ad3',
  '58b91199386bef4f3b7f3ad3',
  '551e45eb6c5ac465b3cf5f0c',
  '5a1667a32acb47cb135d5b0a',
]

qFindUsers({ _id: { $in: userids } });

// 5种 因为数据库中 并没有 58b91199386bef4f3b7f3ad3的用户信息
[ { _id: 54af3b6a48e6cd1c1be333e8,
    nickname: '6112',
    mobile: '13930196112',
    role_type: 3,
    __v: 2,
    is_bindwx: true,
    companies: [] },
  { _id: 54df318e1c701cc40b708d89,
    mobile: '13522689508',
    role_type: 3,
    is_activate: true,
    need_upgrade: true,
    create_time: 1423913358000 },
  { _id: 551e45eb6c5ac465b3cf5f0c,
    username: '云联牧场',
    role_type: 3,
    create_time: 1429789134092,
    companies: [] },
  { _id: 5a1667a32acb47cb135d5b0a,
    mobile: '13717579101',
    role_type: 3,
    __v: 0,
    is_set_pay_password: true,
    is_binding_verify: true,
    is_real_name: true,
    is_activate: true,
    need_upgrade: false,
    create_time: 1511417763916,
    companies: [] },
  { _id: 5a28d8877d72587761cae36a,
    mobile: '18231088178',
    role_type: 3,
    __v: 0,
    is_activate: true,
    need_upgrade: false,
    create_time: 1512626311900,
    companies: [] } ]

```

## 查
### aggregation 集合体
Aggregate constructor used for building aggregation pipelines. Do not instantiate this class directly, use Model.aggregate() instead.

```
q.nfcall(sheepService.aggregate,
	[
		{
			$match:{ batch_id:batchId, user_id:{ $ne:config.yunfarm_uid} }
		},
		{
			$group:{ _id:"$user_id", sheepIds:{ $addToSet:"$_id" } }
		}
	]
)
```