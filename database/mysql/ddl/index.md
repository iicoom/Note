# INDEX

1\) 加索引 mysql&gt; alter table 表名 add index 索引名 \(字段名1\[，字段名2 …\]\);

例子： mysql&gt; alter table employee add index emp\_name \(name\);

2\) 加主关键字的索引 mysql&gt; alter table 表名 add primary key \(字段名\);

例子： mysql&gt; alter table employee add primary key\(id\);

3\) 加唯一限制条件的索引 mysql&gt; alter table 表名 add unique 索引名 \(字段名\);

例子： mysql&gt; alter table employee add unique emp\_name2\(cardnumber\);

4\) 删除某个索引 mysql&gt; alter table 表名 drop index 索引名;

例子： mysql&gt;alter table employee drop index emp\_name;

5\) 增加字段 mysql&gt; ALTER TABLE table\_name ADD field\_name field\_type;

```text
ALTER TABLE `announcement_goods` ADD COLUMN `auc_id` varchar(255) NULL DEFAULT NULL AFTER `announcement_id`;
```

6\) 修改原字段名称及类型 mysql&gt; ALTER TABLE table\_name CHANGE old\_field\_name new\_field\_name field\_type;

7\) 删除字段 MySQL ALTER TABLE table\_name DROP field\_name;

原文：[https://blog.csdn.net/u013063153/article/details/53304325](https://blog.csdn.net/u013063153/article/details/53304325)

[各种修改表结构的情况](http://www.cnblogs.com/mr-wuxiansheng/p/6134513.html)

