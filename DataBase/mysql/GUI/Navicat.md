## mysql8 新的密码校验插件
Client does not support authentication protocol requested by server
会导致一些客户端无法正常连接到数据库

解决方法 创建新的用户并使用原生的密码校验方式

## MySQL角色管理
https://www.yiibai.com/mysql/roles.html

## 创建DB 和 Table
1. 链接上menu New Database
2. 创建表2种方法：DB上 menu - New query，还可以 DB上点击添加表图标

## 右侧可以查看general 和DDL（表SQL）两种视图

## 导出表数据
在表上右击，导出向导，可以选择导出的文件类型，Text json file

## 导出表结构和数据
表上右击 Dump SQL
```

/*
 Navicat MySQL Data Transfer

 Source Server         : fnxy-dev
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : 47.xx.91.xxx:3306
 Source Schema         : tee

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 18/03/2019 17:52:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nickname` varchar(200) NOT NULL DEFAULT '',
  `avatar` varchar(300) NOT NULL DEFAULT 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  `email` varchar(200) NOT NULL DEFAULT '',
  `password` varchar(100) NOT NULL DEFAULT '',
  `roles` json NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='管理员用户表';

SET FOREIGN_KEY_CHECKS = 1;

```

MySQL的中AUTO_INCREMENT类型的属性用于为一个表中记录自动生成ID功能.

可在一定程度上代替Oracle，PostgreSQL等数据库中的sequence。

在数据库应用，我们经常要用到唯一编号，以标识记录。在MySQL中可通过数据列的AUTO_INCREMENT属性来自动生成。

可在建表时可用“AUTO_INCREMENT=n”选项来指定一个自增的初始值。

可用alter table table_name AUTO_INCREMENT=n命令来重设自增的起始值。
