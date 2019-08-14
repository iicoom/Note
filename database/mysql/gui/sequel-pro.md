# Sequel Pro

## 本地连接阿里云内网mysql

[https://www.cnblogs.com/SeaWxx/p/9969007.html](https://www.cnblogs.com/SeaWxx/p/9969007.html) 1. 先ssh登录到阿里云内网（秘钥） 2. 然后输入mysql相关信息 host username password port

## 用法

* 新建表：可以直接执行sql语句，切换到query选项卡下：

  ```text
  create table `order_master` (
    `order_id` varchar(32) not null,
    `buyer_name` varchar(32) not null comment '买家名字',
    `buyer_phone` varchar(32) not null comment '买家电话',
    `buyer_address` varchar(128) not null comment '买家地址',
    `buyer_openid` varchar(64) not null comment '买家微信openid',
    `order_amount` decimal(8,2) not null comment '订单总金额',
    `order_status` tinyint(3) not null default '0' comment '订单状态，默认0新下单',
    `pay_status` tinyint(3) not null default '0' comment '支付状态，默认0未支付',
    `create_time` timestamp not null default current_timestamp comment '创建时间',
    `update_time` timestamp not null default current_timestamp on update current_timestamp comment '更新时间',
    primary key (`order_id`),
    key `idx_buyer_openid` (`buyer_openid`)
  ) comment '订单表';
  ```

  Command + R 执行语句

* 新增数据：切换到content选项卡下，添加单条数据 Tab的使用，输入完成enter

## 使用Mac下的sequel Pro链接数据库时提示错误（已解决）

[https://www.2cto.com/database/201805/743754.html](https://www.2cto.com/database/201805/743754.html) 使用Mac下的sequel Pro链接数据库时，出现如下问题： 问题描述：就是在链接数据库时不能加载‘caching\_sha2\_password'这个插件，也就是不能对身份验证。

解决方案：

打开系统偏好设置，找到mysql，点击Initialize Database。

输入你的新密码，记住这个密码，用于后期链接数据库的登陆使用。

选择‘Use legacy password‘。

重启mysql服务。

使用sequel Pro链接。

