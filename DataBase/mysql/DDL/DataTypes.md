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
  `name` varchar(20) DEFAULT NULL COMMENT '小组名称',
  `plan_date` date DEFAULT NULL COMMENT '计划学习时间',
  `power_score` int(11) NOT NULL DEFAULT '0' COMMENT '积分值',
  `extend` json DEFAULT NULL COMMENT '{ "pic_url": "图片地址", "activity_name":"活动名称" }',
  `price` decimal(10,2) DEFAULT '0.00' COMMENT '秒杀价格',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### int(3)与int(11)的区别
以前总是会误以为int(3)只能存储3个长度的数字，int(11)就会存储11个长度的数字，这是大错特错的。

其实当我们在选择使用int的类型的时候，不论是int(3)还是int(11)，它在数据库里面存储的都是4个字节的长度，在使用int(3)的时候如果你输入的是10，会默认给你存储位010,也就是说这个3代表的是默认的一个长度，当你不足3位时，会帮你补全，当你超过3位时，就没有任何的影响。
![oo](https://s2.ax1x.com/2019/03/19/An8X3n.png)

INT(5) or INT(11) 能够存储的最大值是相同的，如果你的列设置INT(20)也不意味着你可以存储20位，这个列仍然只能存储INT的最大值。

An INT will always be 4 bytes no matter what length is specified.
- TINYINT = 1 byte (8 bit)
- SMALLINT = 2 bytes (16 bit)
- MEDIUMINT = 3 bytes (24 bit)
- INT = 4 bytes (32 bit)
- BIGINT = 8 bytes (64 bit).

指定的长度仅仅影响查询数据时的填充，12345 stored as int(3) will still show as 12345，but if it was stored as int(10) it would still display as 12345, but you would have the option to pad the first five digits. For example, if you added ZEROFILL it would display as 0000012345.


### char与varchar与text
比如char(255)和varchar(255)，在存储字符串"hello world"时，char会用一块255个字节的空间放那个11个字符；而varchar就不会用255个，它先计算字符串长度为11，然后再加上一个记录字符串长度的字节，一共用12个字节存储，这样varchar在存储不确定长度的字符串时会大大减少存储空间。

[The CHAR and VARCHAR Types](https://dev.mysql.com/doc/refman/8.0/en/char.html)
如果可以预知存储的column很小或者很可能为空，那么使用varchar要更省空间

选择VARCHAR还是TEXT？
MySQL version 5.0.3 版本的一个改进就是VARCHAR类型的列可以存储的字符从255变成65,535。

TEXT：
- fixed max size of 65535 characters (you cannot limit the max size)
- takes 2 + c bytes of disk space, where c is the length of the stored string.
- cannot be (fully) part of an index. One would need to specify a prefix length.

VARCHAR(M)：
- variable max size of M characters
- M needs to be between 1 and 65535
- takes 1 + c bytes (for M ≤ 255) or 2 + c (for 256 ≤ M ≤ 65535) bytes of disk space where c is the length of the stored string
- can be part of an index

key differences：
TEXT has a fixed max size of 2¹⁶-1 = 65535 characters. 
VARCHAR has a variable max size M up to M = 2¹⁶-1.
选择TEXT就选择了固定大小，选择VARCHAR是可变大小，我们从中可以得出的结论是，对于255到65k之间的列，应该使用VARCHAR字段而不是文本(如果可能的话)。这可能会导致更少的磁盘读和写。

如果希望在列上有索引，就必须使用VARCHAR。但是请注意，索引的长度也是有限的，因此如果VARCHAR列太长，则必须在索引中只使用VARCHAR列的前几个字符(请参阅创建索引的文档)。
[source](https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql)


### decimal
MySQL DECIMAL数据类型用于在数据库中存储精确的数值。我们经常将DECIMAL数据类型用于保留准确精确度的列，例如会计系统中的货币数据。

要定义数据类型为DECIMAL的列，请使用以下语法：
```
column_name  DECIMAL(P,D);

amount DECIMAL(6,2);
```
- P是表示有效数字数的精度。 P范围为1〜65。
- D是表示小数点后的位数。 D的范围是0~30。MySQL要求D小于或等于(<=)P。

在此示例中，amount列最多可以存储6位数字，小数位数为2位; 因此，amount列的范围是从-9999.99到9999.99。


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