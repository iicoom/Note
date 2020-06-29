## 创建数据库

```
CREATE DATABASE database_name

mysql> CREATE DATABASE Example;
Query OK, 1 row affected (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| Example            |
| Java               |
| Nodejs             |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
7 rows in set (0.00 sec)

```

## 使用数据库
```
mysql> use Example;
Database changed

mysql> show tables;
Empty set (0.00 sec)
```

## 更加地道安全的写法
```sql
CREATE DATABASE IF NOT EXISTS next_joy DEFAULT CHARACTER SET utf8mb4;
```

### 数据库命名规范
看一下数据库自带的命名方式都是小写字母，词组之间用下划线分割

### 数据库CHARACTER
- utf8
- utf8mb4

我们新建mysql数据库的时候，需要指定数据库的字符集。MySQL在5.5.3之后增加了这个utf8mb4的编码，mb4就是most bytes 4的意思，专门用来兼容四字节的unicode。好在utf8mb4是utf8的超集，除了将编码改为utf8mb4外不需要做其他转换。当然，为了节省空间，一般情况下使用utf8也就够了。
可以简单的理解 utf8mb4 是目前最大的一个字符编码,支持任意文字。

为什么要使用utf8mb4字符集？
既然utf8应付日常使用完全没有问题，那为什么还要使用utf8mb4呢? 低版本的MySQL支持的utf8编码，最大字符长度为 3 字节，如果遇到 4 字节的字符就会出现错误了。
那么utf8mb4比utf8多了什么的呢?多了emoji编码支持.

如果实际用途上来看,可以给要用到emoji的库或者说表,设置utf8mb4.
比如评论要支持emoji可以用到。

