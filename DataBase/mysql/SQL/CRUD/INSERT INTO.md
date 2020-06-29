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

## INSERT的不同方式对比
### 方式一：所有字段插入
CREATE TABLE `users` (
  `id` varchar(100) NOT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '用户名',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(20) NOT NULL COMMENT '密码',
  `avatar_url` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '' COMMENT '头像',
  `reg_platform` tinyint(4) NOT NULL DEFAULT '0' COMMENT '注册平台1安卓/2IOS',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

```sql
-- 一个字段都不能少，而且必须和表结构一一对应 否则 > 1136 - Column count doesn't match value count at row 1
INSERT INTO `users` VALUES ('1', '张三', '18231088177', '123456', 'http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg', '1', '2017-01-16 22:42:35', '2017-01-16 22:42:35');
```

### 方式二：插入指定字段(有默认值的可以忽略)
```sql
INSERT INTO users (name, phone, password, avatar_url)  VALUES ('Tom', '18231088177', '123456', 'http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg')
-- > 1364 - Field 'id' doesn't have a default value

-- 可见这种方式省略掉的字段必须有默认值 DEFAULT，否则报上面的错误，尝试将id 改为自增，而且类型为int(50)比较合理
CREATE TABLE `users` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '用户名',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(20) NOT NULL COMMENT '密码',
  `avatar_url` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '' COMMENT '头像',
  `reg_platform` tinyint(4) NOT NULL DEFAULT '0' COMMENT '注册平台1安卓/2IOS',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 然后再次执行记得phone是唯一的需要修改一下
INSERT INTO users (name, phone, password, avatar_url)  VALUES ('Tom', '18231088176', '123456', 'http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg')
-- > Affected rows: 1
-- > 时间: 0.298s
-- 1	张三	18231088177	123456	http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg	1	2017-01-16 22:42:35	2017-01-16 22:42:35
-- 3	Tom	   18231088176	123456	http://img0.imgtn.bdimg.com/it/u=2084118128,2518711034&fm=26&gp=0.jpg	0	2020-06-28 08:22:53	NUll
```
其他字段自动生成，只是create_time好像和本地时间对不上,这种情况可能是因为服务器在海外，如果是那么下面的解决方法可能仍然不生效,因为那可能就是他们本地的系统的时间，因为可以在本地数据库测试
同样本地也是| log_timestamps | UTC  ，但是插入的数据时间是正常的。可见这个选项并不是正确的方向

在MySQL 5.7.2 新增了 log_timestamps 这个参数，该参数主要是控制 error log、genera log，等等记录日志的显示时间参数。
在 5.7.2 之后改参数为默认 UTC 这样会导致日志中记录的时间比中国这边的慢，导致查看日志不方便。修改为 SYSTEM 就能解决问题

```sql
SHOW GLOBAL VARIABLES LIKE 'log_timestamps';
+----------------+--------+
| Variable_name  | Value  |
+----------------+--------+
| log_timestamps | UTC    |
+----------------+--------+
 
SET GLOBAL log_timestamps = SYSTEM;
Query OK, 0 rows affected (0.00 sec)
 
SHOW GLOBAL VARIABLES LIKE 'log_timestamps';
+----------------+--------+
| Variable_name  | Value  |
+----------------+--------+
| log_timestamps | SYSTEM |
+----------------+--------+
```
[世界协调时间 (UTC)](https://time.is/UTC)
[格林威治时间](http://www.beijing-time.org/time15.asp)  
设置了一个cookie 过期时间为 Mon, 29 Jun 2020 07:34:05 GMT

Coordinated Universal Time (or UTC) is the primary time standard by which the world regulates clocks and time. It is within about 1 second of mean solar time at 0° longitude, and is not adjusted for daylight saving time. It is effectively a successor to Greenwich Mean Time (GMT).
协调世界时(UTC)是世界调节时钟和时间的主要时间标准。在经度0度时，它与平均太阳时间相差1秒左右，并且没有根据夏令时进行调整。它实际上是格林威治标准时间(GMT)的继承者。
G.M.T.(Greenwich Mean Time)

本初子午线，是指在地球上，连接南北两极的经线。本初子午线，地球上的零度经线，经线指示南北方向，所有的经线长度相等，经线标注的度数就是经度。
国际上将通过英国伦敦格林尼治天文台原址的那条经线称为0°经线，也叫本初子午线。 [1]

查看位于阿姆斯特丹的服务器时间
```
[root@vultr ~]# date
Sun Jun 28 09:03:54 UTC 2020
```
本机局域网服务器
```
[maoxiaojie@jumpserver ~]$ date
Sun Jun 28 17:05:40 CST 2020
```
CST可以为如下4个不同的时区的缩写：
美国中部时间：Central Standard Time (USA) UT-6:00
澳大利亚中部时间：Central Standard Time (Australia) UT+9:30
中国标准时间：China Standard Time UT+8:00
古巴标准时间：Cuba Standard Time UT-4:00

问题应该是时区的问题：
```sql
SHOW GLOBAL VARIABLES LIKE '%time_zone%';
-- system_time_zone	UTC
-- time_zone	SYSTEM

set time_zone = '+8:00'
-- 这种方法好像并不生效，直接修改MySQL配置文件并重启服务
```
直接修改/etc/my.cnf [参考](../../A%20install/my.cnf.md)