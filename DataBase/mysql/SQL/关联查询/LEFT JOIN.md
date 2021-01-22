> 有2张表,user和user_challenge,关联字段user_id。user左连接user_challenge从操作如下：

mysql> desc user;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(50)     | NO   | PRI | NULL    |       |
| username | varchar(50) | NO   |     |         |       |
| age      | int(20)     | YES  |     | NULL    |       |
| sex      | varchar(20) | NO   |     |         |       |
+----------+-------------+------+-----+---------+-------+
4 rows in set (0.32 sec)

mysql> desc user_challenge;
+--------------+----------+------+-----+---------+-----------------------------+
| Field        | Type     | Null | Key | Default | Extra                       |
+--------------+----------+------+-----+---------+-----------------------------+
| id           | int(20)  | NO   | PRI | NULL    |                             |
| user_id      | int(20)  | NO   |     | NULL    |                             |
| challenge_id | int(20)  | NO   |     | NULL    |                             |
| reply        | text     | NO   |     | NULL    |                             |
| create_time  | datetime | NO   |     | NULL    | on update CURRENT_TIMESTAMP |
| update_tiem  | datetime | YES  |     | NULL    | on update CURRENT_TIMESTAMP |
+--------------+----------+------+-----+---------+-----------------------------+
6 rows in set (0.20 sec)

## LEFT JOIN
mysql> SELECT `user`.*, `user_challenge`.* FROM `user` LEFT JOIN `user_challenge` on `user`.id = `user_challenge`.user_id;
+----+----------+------+-----+------+---------+--------------+------------------------+---------------------+-------------+
| id | username | age  | sex | id   | user_id | challenge_id | reply                  | create_time         | update_tiem |
+----+----------+------+-----+------+---------+--------------+------------------------+---------------------+-------------+
|  1 | Jack     |   18 | man |    1 |       1 |            1 | 这是回应内容😝           | 2019-08-30 14:43:42 | NULL        |
+----+----------+------+-----+------+---------+--------------+------------------------+---------------------+-------------+
1 row in set (0.21 sec)


减少输出字段
mysql> SELECT `user`.*, `user_challenge`.challenge_id FROM `user` LEFT JOIN `user_challenge` on `user`.id = `user_challenge`.user_id;
+----+----------+------+-----+--------------+
| id | username | age  | sex | challenge_id |
+----+----------+------+-----+--------------+
|  1 | Jack     |   18 | man |            1 |
+----+----------+------+-----+--------------+
1 row in set (2.03 sec)

