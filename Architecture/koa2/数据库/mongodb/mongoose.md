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