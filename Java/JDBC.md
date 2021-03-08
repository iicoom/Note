> JDBC（Java DataBase Connectivity,java数据库连接）是一种用于执行SQL语句的Java API，可以为多种关系数据库提供统一访问，它由一组用Java语言编写的类和接口组成

## 常见问题
### 驱动版本问题
Error attempting to get column 'xxx' from result set. Cause: java.sql.SQLException: 无法转换为内部表示

具体如下：
[>>> [错误异常] Error attempting to get column 'base_info_change' from result set.  Cause: java.sql.SQLException: Error

因为数据库中存的base_info_change为null导致查出来的数据类型不匹配

升级<mysql.version>6.0.6</mysql.version>
```
<properties>
    <java.version>1.8</java.version>
    <mysql.version>8.0.11</mysql.version>
    <druid.version>1.1.10</druid.version>
    <mybatis.version>1.3.0</mybatis.version>
    <fastjson.version>1.2.39</fastjson.version>
    <pagehelper.version>1.3.0</pagehelper.version>
    <jwt.version>3.12.0</jwt.version>
</properties>
```

### 数据库日期
```sql
`created_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
```

在查询时遇到不能为0的问题在url中添加：&zeroDateTimeBehavior=CONVERT_TO_NULL
url: jdbc:mysql://rm-8vbkg36l468717t4z5o.mysql.characterEncoding=UTF-8&useServerPrepStmts=true&serverTimezone=Asia/Shanghai&zeroDateTimeBehavior=CONVERT_TO_NULL