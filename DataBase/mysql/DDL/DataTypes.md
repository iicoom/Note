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

### int(3)与int(11)的区别
以前总是会误以为int(3)只能存储3个长度的数字，int(11)就会存储11个长度的数字，这是大错特错的。

其实当我们在选择使用int的类型的时候，不论是int(3)还是int(11)，它在数据库里面存储的都是4个字节的长度，在使用int(3)的时候如果你输入的是10，会默认给你存储位010,也就是说这个3代表的是默认的一个长度，当你不足3位时，会帮你不全，当你超过3位时，就没有任何的影响。
![oo](https://s2.ax1x.com/2019/03/19/An8X3n.png)

### char与varchar
比如char(255)和varchar(255)，在存储字符串"hello world"时，char会用一块255个字节的空间放那个11个字符；而varchar就不会用255个，它先计算字符串长度为11，然后再加上一个记录字符串长度的字节，一共用12个字节存储，这样varchar在存储不确定长度的字符串时会大大减少存储空间。

[The CHAR and VARCHAR Types](https://dev.mysql.com/doc/refman/8.0/en/char.html)
如果可以预知存储的column很小或者很可能为空，那么使用varchar要更省空间

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

## 附录 单位
### byte
The byte is a unit of digital information that most commonly consists of eight bits. 
字节是数字信息的单位，通常由8位组成。
字节是计算机中用于编码单个文本字符的位数，因此它是许多计算机体系结构中最小的可寻址内存单元。

- 1 byte = 8 bits 
- 1KiB= 1,024 bytes 
- 1MiB= 1,048,576 bytes 
- 1GiB= 1,073,741,824 byte 
- 1TiB= 1,099,511,627,776 bytes

### bit
The bit is a basic unit of information in information theory, computing, and digital communications. The name is a portmanteau of binary digit.
比特是信息论、计算和数字通信中的基本信息单位。这个名字是二进制数字的组合binary digit(bit)二进制位,
作为二进制数字，位表示一种逻辑状态，只有两个值中的一个。它可以通过双态器件在物理上实现。这些值通常表示为0或1，但其他表示如真/假、是/否、+/−或开/关也很常见。

### 字符与字节与编码关系
- ASCII码中，一个英文字母（不分大小写）占一个字节的空间，一个中文汉字占两个字节的空间。一个二进制数字序列，在计算机中作为一个数字单元，一般为8位二进制数，换算为十进制。最小值0，最大值255。

- UTF-8编码中，一个英文字符等于一个字节，一个中文（含繁体）等于三个字节。

- Unicode编码中，一个英文等于两个字节，一个中文（含繁体）等于两个字节