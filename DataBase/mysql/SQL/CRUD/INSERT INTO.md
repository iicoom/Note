```sql
CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户名',
  `age` int(20) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '性别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## insert 单行数据插入
INSERT INTO `user` VALUES (1, 'Jack', 18, 'man');

## insert 多行
1. 创建表
```sql
create table student(
    s_id varchar(10),
    s_name varchar(20),
    s_age date,
    s_sex varchar(10)
);
这种简单的创建会导致插入中文时报错：
mysql> insert into student (s_id, s_name, s_age, s_sex)
    -> values  ('01' , '赵雷' , '1990-01-01' , '男');
ERROR 1366 (HY000): Incorrect string value: '\xE8\xB5\xB5\xE9\x9B\xB7' for column 's_name' at row 1

create table student(
    s_id varchar(10),
    s_name varchar(20),
    s_age date,
    s_sex varchar(10)
) CHARSET=utf8 COMMENT='学生表';
把整张表的字符集设置为 CHARSET=utf8，下面插入数据就不会报错：

insert into student (s_id, s_name, s_age, s_sex)
values  ('01' , '赵雷' , '1990-01-01' , '男'),
        ('02' , '钱电' , '1990-12-21' , '男'),
        ('03' , '孙风' , '1990-05-20' , '男'),
        ('04' , '李云' , '1990-08-06' , '男'),
        ('05' , '周梅' , '1991-12-01' , '女'),
        ('06' , '吴兰' , '1992-03-01' , '女'),
        ('07' , '郑竹' , '1989-07-01' , '女'),
        ('08' , '王菊' , '1990-01-20' , '女');

这样创建的表结构仍有问题：
1. There is no primary key here. Update will only use exact matching of the old values of the columns here. Thus, it may update more than one record.

没有主键，更新时可能会更新多条记录

```

## node.js
```js
let insertSql = 'INSERT INTO gm_cdkey_rule SET prefix=?, title=?, content=?, reward_list=?, start_time=?, end_time=?, channel_id=?, type=?, `create_time`=?, `is_delete`=0;';
let parameters = [prefix, title, content, rewardList, startTime, endTime, null, type, moment().format('YYYY-MM-DD HH:mm:ss')];

let result = await sqlStringQuery(insertSql, parameters);
```