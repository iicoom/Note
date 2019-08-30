CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '用户名',
  `age` int(20) DEFAULT NULL COMMENT '年龄',
  `sex` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '性别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


## insert

INSERT INTO `user` VALUES (1, 'Jack', 18, 'man');