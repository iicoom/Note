## 修改表结构

把字段 c 的类型从 CHAR(1) 改为 CHAR(10)，可以执行以下命令:

mysql> ALTER TABLE testalter_tbl MODIFY c CHAR(10);

### 修改表注释
```
ALTER TABLE job COMMENT '爬取的招聘信息';
```

### 修改表名
```
ALTER TABLE testalter_tbl RENAME TO alter_tbl;
```

### 修改字段注释

alter table test1 modify column field_name int comment '修改后的字段注释';

```
CREATE TABLE `job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `source` smallint(1) NOT NULL DEFAULT '0' COMMENT '来源 1:刺猬实习 2:大街网',
  `jobid` varchar(100) NOT NULL DEFAULT '',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '职位名称',
  `salay` varchar(100) NOT NULL DEFAULT '' COMMENT '薪水',
  `addtime` date DEFAULT NULL COMMENT '添加时间',
  `endtime` date DEFAULT NULL COMMENT '截止时间',
  `fulltime` varchar(100) NOT NULL DEFAULT '' COMMENT '每周工作时间',
  `education` varchar(100) NOT NULL DEFAULT '' COMMENT '学历要求',
  `company_name` varchar(200) NOT NULL DEFAULT '' COMMENT '公司名称',
  `category` varchar(200) NOT NULL DEFAULT '' COMMENT '分类名称',
  `url` varchar(200) NOT NULL DEFAULT '',
  `area` varchar(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4406 DEFAULT CHARSET=utf8mb4;
```

ALTER TABLE job MODIFY COLUMN source INT COMMENT '来源 1:刺猬实习 2:大街网 3:Boss直聘';


### 添加删除字段

（ alter add 命令用来增加表的字段。）

alter add 命令格式：

alter table 表名 add字段 类型 其他;

```
例如，在表 job 中添加了一个字段 contact 类型为 varchar(20) 默认值为'' 注释为 联系人：

mysql> ALTER TABLE job ADD contact VARCHAR(20) DEFAULT '' COMMENT '招聘联系人';

====================
默认插入位置是到最后一列:
====================

`area` varchar(200) NOT NULL DEFAULT '',
`contact` varchar(20) DEFAULT '' COMMENT '招聘联系人',

========================================
现在想把它插入到 category 列之后，先将其删除:
========================================

ALTER TABLE job DROP COLUMN contact; 

====================
重新添加:
====================

ALTER TABLE job ADD COLUMN contact VARCHAR(20) NOT NULL DEFAULT '' COMMENT '招聘联系人' AFTER category;

结果如下:
`category` varchar(200) NOT NULL DEFAULT '' COMMENT '分类名称',
`contact` varchar(20) NOT NULL DEFAULT '' COMMENT '招聘联系人',

============================================================
如果要插入到第一列 就用 FIRST 关键字。如 插入新列 company_id 到第一列
============================================================

ALTER TABLE job ADD COLUMN company_id VARCHAR(20) COMMENT '企业ID' FIRST;

结果如下:
`company_id` varchar(20) DEFAULT NULL COMMENT '企业ID',
`id` int(11) NOT NULL AUTO_INCREMENT,

====================
添加多列:
====================
The syntax to add multiple columns to an existing table in SQL Server (Transact-SQL) is:
ALTER TABLE manager 

ADD COLUMN `last_name` VARCHAR(50) NOT NULL AFTER `nickname`, 
ADD COLUMN `first_name` VARCHAR(40) NOT NULL;
```

