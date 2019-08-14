# 查看数据库;

```text
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| cmfz               |
| codepush           |
| demo               |
| experience         |
| member             |
| mysql              |
| performance_schema |
| ranch-member       |
| shopnc             |
| spring-boot-dev    |
| task-scheduler     |
| test               |
| testDB             |
| user               |
+--------------------+
15 rows in set (0.00 sec)
```

## 切换数据库

```text
mysql> use member;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
```

## 创建表

```text
mysql> create table user(
    -> id INT PRIMARY KEY AUTO_INCREMENT,
    -> name VARCHAR(16) NOT NULL,
    -> create_date TIMESTAMP NULL DEFAULT now()
    -> )ENGINE=InnoDB DEFAULT CHARSET=utf8;
Query OK, 0 rows affected (0.02 sec)
```

## 查看表结构：

```text
mysql> desc user;
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| id    | int(11)      | NO   | PRI | NULL    |       |
| email | varchar(255) | YES  |     | NULL    |       |
| name  | varchar(255) | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
```

## DROP table

```text
DROP TABLE user;
```

