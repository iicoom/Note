## SQL DataTypes
> MySQL中定义数据字段的类型对你数据库的优化是非常重要的。

MySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。
http://www.runoob.com/mysql/mysql-data-types.html

```sql
CREATE TABLE `model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` smallint(2) DEFAULT NULL COMMENT '类型 1:qq 2:ww 3:ee 4:rr 5:tt',
  `target_id` int(11) NOT NULL DEFAULT '0' COMMENT '目标id',
  `questions` json DEFAULT NULL COMMENT '问题, ["1","2","3"] 或者  [{},{},{}]',   
  `name` VARCHAR(20) DEFAULT NULL COMMENT '小组名称',
  `plan_date` date DEFAULT NULL COMMENT '计划学习时间',
  `power_score` int(11) NOT NULL DEFAULT '0' COMMENT '积分值',
  `extend` json DEFAULT NULL COMMENT '{ "pic_url": "图片地址", "activity_name":"活动名称" }',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 日期类型
* date:你直接就可以理解为2017-3-21 不带时分秒的

* datetime:相反，则是带时分秒的 

* timestamp:时间戳 很好理解（1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数。）

时间范围
date -- > '1000-01-01' to '9999-12-31'.

datetime --> '1000-01-01 00:00:00' to '9999-12-31 23:59:59'.

timestamp -- > '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC


常用日期函数以及转换
1、获取当前日期：
 CURRENT_DATE()或者CURDATE()

2、获取当前时间:
CURRENT_TIME()或者CURTIME()

3、获取当前日期和时间
NOW()或者CURRENT_TIMESTAMP()

4、linux/unix时间戳和mysql时间日期类型之间的转换：
UNIX_TIMESTAMP(NOW())                //将mysql的datetime转换成linux/unix的时间戳；日期时间
UNIX_TIMESTAMP(DATE(NOW()))          //将mysql的date转换成linux/unix的日期。
UNIX_TIMESTAMP(TIME(NOW()))          //将mysql的time转换成linux/unix的时间。(用问题)
FROM_UNIXTIME(time_t)                //将unix的时间戳转换成mysql的datetime；日期时间
DATE(FROM_UNIXTIME(time_t))          //日期
TIME(FROM_UNIXTIME(time_t))          //时间

### String Data Types
CHAR and VARCHAR Types,BLOB and TEXT Types

https://dev.mysql.com/doc/refman/8.0/en/string-types.html
