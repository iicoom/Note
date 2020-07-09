## 创建测试表和数据
```sql
DROP TABLE IF EXISTS `sales`;
CREATE TABLE `sales` (
  `id` INT(11) NOT NULL,
  `item` VARCHAR(20) NOT NULL COMMENT '商品名称',
  `price` INT(11) NOT NULL COMMENT '商品价格',
  `quantity` INT(11) NOT NULL COMMENT '商品数量',
	`create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品销售记录';

BEGIN;
INSERT INTO `sales` VALUES (1, "abc", 10,  2, '2017-01-16 22:42:35');
INSERT INTO `sales` VALUES (2, "jkl", 20,  1, '2017-01-16 22:42:35');
INSERT INTO `sales` VALUES (3, "xyz", 100, 10, '2017-01-16 22:42:35');
INSERT INTO `sales` VALUES (4, "xyz", 30,  20, '2017-01-16 22:42:35');
INSERT INTO `sales` VALUES (5, "abc", 50,  10, '2017-01-16 22:42:35');
INSERT INTO `sales` VALUES (6, "def", 101, 5, '2017-01-16 22:42:35');
INSERT INTO `sales` VALUES (7, "def", 104, 10, '2017-01-16 22:42:35');
INSERT INTO `sales` VALUES (8, "abc", 151, 5, '2017-01-16 22:42:35');
COMMIT;

-- 操作一  如果缺少 GROUP  BY item; Sum会报错，可见执行顺序是先分组
SELECT item,
   Sum(( price * quantity )) AS totalSaleAmount
FROM   sales
GROUP  BY item;

+------+-----------------+
| item | totalSaleAmount |
+------+-----------------+
| abc  |            1275 |
| jkl  |              20 |
| xyz  |            1600 |
| def  |            1545 |
+------+-----------------+
4 rows in set (0.00 sec)

-- 操作二 HAVING
SELECT item,
   Sum(( price * quantity )) AS totalSaleAmount
FROM   sales
GROUP  BY item
HAVING totalSaleAmount >= 100;

+------+-----------------+
| item | totalSaleAmount |
+------+-----------------+
| abc  |            1275 |
| xyz  |            1600 |
| def  |            1545 |
+------+-----------------+
3 rows in set (0.00 sec)

-- 操作三 ORDER  BY
SELECT item,
   Sum(( price * quantity )) AS totalSaleAmount
FROM   sales
GROUP  BY item
HAVING totalSaleAmount >= 100
ORDER  BY totalSaleAmount DESC;

+------+-----------------+
| item | totalSaleAmount |
+------+-----------------+
| xyz  |            1600 |
| def  |            1545 |
| abc  |            1275 |
+------+-----------------+
3 rows in set (0.00 sec)
```
