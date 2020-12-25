## $size 只能用在 $project
如果直接使用,如果存在没有lessonIds字段的文档就会报错，$size 需要对数组类型操作
```js
db.mycourse.aggregate([
	{$match:{ courseId: '5fe0895b88dc2f4a8114a4dc', deleted: false }},
	{
		$project: {
			userId: 1, count: { $size: "$lessonIds" }
		}
	}
])

// 加入判断
db.mycourse.aggregate([
	{$match:{ courseId: '5fe0895b88dc2f4a8114a4dc', deleted: false }},
	{
		$project: {
			userId: 1, count: { $cond: { if: { $isArray: "$lessonIds" }, then: { $size: "$lessonIds" }, else: 0} }
		}
	}
])
```
