## 修改表结构

把字段 c 的类型从 CHAR(1) 改为 CHAR(10)，可以执行以下命令:

mysql> ALTER TABLE testalter_tbl MODIFY c CHAR(10);


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