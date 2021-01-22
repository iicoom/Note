> 考虑以下表结构

```sql
/*
A预约待联系表 有3条数据
*/
CREATE TABLE `crm_contact_pending` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mongodb_id` varchar(32) NOT NULL DEFAULT '',
  `student_id` int(11) unsigned NOT NULL COMMENT '学员ID',
  `created_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `follower_no` int(11) NOT NULL DEFAULT '0' COMMENT '跟进人 no',
  `last_follow_id` int(11) NOT NULL DEFAULT '0' COMMENT '最后跟进ID,关联crm_follow的id',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `inx_student_id` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='预约待联系表';


/**
B跟进表 有12条数据
*/
CREATE TABLE `crm_follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mongodb_id` varchar(32) NOT NULL DEFAULT '',
  `student_id` varchar(32) NOT NULL DEFAULT '',
  `content` varchar(40) NOT NULL DEFAULT '' COMMENT '联系内容',
  `next_contact_time` datetime DEFAULT NULL COMMENT '预计下次联系时间',
  `created_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '修改日期',
  PRIMARY KEY (`id`),
  KEY `idx_student_id` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COMMENT='跟进表';
```

目标查询结果：A与B关联查, 要求B中的next_contact_time大于某时间，A中需要B的next_contact_time字段。

## 先看一下 LEFT JOIN
```sql
SELECT 
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.`name`, 
`crm_follow`.id AS follow_id,`crm_follow`.next_contact_time
FROM `crm_contact_pending` 
LEFT JOIN `crm_follow`
ON `crm_contact_pending`.last_follow_id = `crm_follow`.id;
```
查询结果：
```
id  user_id name        follow_id   next_contact_time
1	22	    stdent01	9	
2	22	    stdent01	9	
3	22	    stdent01	10	        2021-01-21 21:56:28
```

## 加入 WHERE
```sql
SELECT 
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.`name`, 
`crm_follow`.id AS follow_id,`crm_follow`.next_contact_time
FROM `crm_contact_pending` 
LEFT JOIN `crm_follow`
ON `crm_contact_pending`.last_follow_id = `crm_follow`.id;
WHERE `crm_follow`.next_contact_time >= '2021-01-21 21:56:28';
```
查询结果同上：
```
id  user_id name        follow_id   next_contact_time
1	22	    stdent01	9	
2	22	    stdent01	9	
3	22	    stdent01	10	        2021-01-21 21:56:28
```

即使where条件是坐标字段,结果也是一样：
```sql
SELECT 
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.name, 
`crm_follow`.id AS follow_id,`crm_follow`.next_contact_time
FROM `crm_contact_pending` 
LEFT JOIN `crm_follow`
ON `crm_contact_pending`.last_follow_id = `crm_follow`.id;
WHERE `crm_contact_pending`.id >= 3;
```
可见这样的where不起作用

### 使用子查询解决问题
```sql
SELECT
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.name
FROM `crm_contact_pending` 
WHERE last_follow_id IN 
(SELECT id FROM `crm_follow` WHERE `crm_follow`.next_contact_time >= '2021-01-21 21:56:28');
```
查询结果, 达到目的,但是缺少了右表字段：
```
id  user_id name
3	22	    stdent01
```
### 先连接后子查询无法解决问题
```sql
SELECT 
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.name, 
`crm_follow`.id AS follow_id,`crm_follow`.next_contact_time
FROM `crm_contact_pending` 
LEFT JOIN `crm_follow`
ON `crm_contact_pending`.last_follow_id = `crm_follow`.id;
WHERE follow_id IN
(SELECT id FROM `crm_follow` WHERE `crm_follow`.next_contact_time >= '2021-01-21 21:56:28');
```
返回结果仍是左表全部数据

### AND 无法解决问题
```sql
SELECT
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.name,
`crm_follow`.id AS follow_id,`crm_follow`.next_contact_time
FROM `crm_contact_pending` 
LEFT JOIN `crm_follow`
ON `crm_contact_pending`.last_follow_id = `crm_follow`.id
AND `crm_follow`.next_contact_time >= '2021-01-21 21:56:28'
```

### 使用 INNER JOIN 解决问题
```sql
SELECT
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.name,
`crm_follow`.id AS follow_id,`crm_follow`.next_contact_time
FROM `crm_contact_pending` 
INNER JOIN `crm_follow`
ON `crm_contact_pending`.last_follow_id = `crm_follow`.id
AND `crm_follow`.next_contact_time >= '2021-01-21 21:56:28'
```
查询结果：
```
id  user_id name        follow_id   next_contact_time
3	22	    stdent01	10	        2021-01-21 21:56:28
```

此时使用WHERE也可以得到相同的结果，可见是INNER JOIN才是这一需求正确的查询方式

## RIGHT JOIN
```sql
SELECT 
`crm_contact_pending`.id, `crm_contact_pending`.user_id, `crm_contact_pending`.`name`, 
`crm_follow`.id AS follow_id,`crm_follow`.next_contact_time
FROM `crm_contact_pending` 
RIGHT JOIN `crm_follow`
ON `crm_contact_pending`.last_follow_id = `crm_follow`.id;
WHERE `crm_follow`.next_contact_time > '2021-01-21 21:56:28';
```

查询结果：
```
id  user_id name        follow_id   next_contact_time
1	22	    stdent01	9	
2	22	    stdent01	9	
3	22	    stdent01	10	        2021-01-21 21:56:28
			            1	
			            2	
			            3	
			            4	
			            5	
			            6	
			            7	
			            8	
			            11	        2021-01-21 21:56:28
```
可见日期筛选根本没有起作用，和 LEFT JOIN，RIGHT JOIN 方式无关，LEFT JOIN，RIGHT JOIN 只影响查询结果的条数


