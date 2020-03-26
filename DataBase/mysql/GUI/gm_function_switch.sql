/*
Navicat MySQL Data Transfer

Source Server         : doraemon-s
Source Server Version : 50551
Source Host           : mxj-s.doraemonkart.com:3306
Source Database       : db_dk_user

Target Server Type    : MYSQL
Target Server Version : 50551
File Encoding         : 65001

Date: 2020-03-23 15:56:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gm_function_switch
-- ----------------------------
DROP TABLE IF EXISTS `gm_function_switch`;
CREATE TABLE `gm_function_switch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serverId` varchar(50) NOT NULL COMMENT 'serverId',
  `godMode` varchar(50) NOT NULL COMMENT '上帝模式',
  `increaseTimes` int(11) DEFAULT NULL COMMENT '增加时间',
  `iosFunctionSwitch` varchar(50) NOT NULL COMMENT 'ios功能开关',
  `whitePlayer` varchar(50) NOT NULL COMMENT '白名单',
  `payment` varchar(50) NOT NULL COMMENT '支付',
  `localPayment` varchar(50) NOT NULL COMMENT '本地支付',
  `voice` varchar(50) NOT NULL COMMENT '游戏音乐',
  `ad` varchar(50) NOT NULL COMMENT '开启广告',
  `antiAddiction` varchar(50) NOT NULL COMMENT '防沉迷',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gm_function_switch
-- ----------------------------
INSERT INTO `gm_function_switch` VALUES ('1', '0', '0', '21', '0', '0', '0', '0', '0', '0', '1');
INSERT INTO `gm_function_switch` VALUES ('12', '1001', '1', '0', '1', '0', '1', '1', '1', '0', '0');
INSERT INTO `gm_function_switch` VALUES ('13', '1002', '0', '7', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `gm_function_switch` VALUES ('19', '1003', '0', '1', '0', '1', '1', '0', '1', '1', '0');
INSERT INTO `gm_function_switch` VALUES ('20', '1005', '1', '-2', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `gm_function_switch` VALUES ('21', 'mxk', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `gm_function_switch` VALUES ('22', '1006', '1', '0', '0', '0', '0', '1', '0', '1', '0');
INSERT INTO `gm_function_switch` VALUES ('23', '1007', '0', '0', '0', '0', '1', '1', '1', '1', '1');
