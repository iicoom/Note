> [有了 MySQL 存储过程，业务逻辑可以封装存储过程中，这样不仅容易维护，而且执行效率也高](https://www.cnblogs.com/you-zi/p/5519006.html)

## 概念介绍
https://www.runoob.com/w3cnote/mysql-stored-procedure.html

## 查询当前数据库有哪些存储过程
```sql
show procedure status where Db='user';
```

## 创建一个带参数的存储过程
```sql
DROP PROCEDURE
IF EXISTS check_key_rule;
DELIMITER //
CREATE PROCEDURE check_key_rule (IN code VARCHAR(20))
BEGIN
	SELECT
		# 渠道
		channel.`name` AS 'channelName',
		channel.is_delete AS 'channelIsDelete',
    channel.symbol,
		# key
		key.`status`,
		key.id AS 'keyId',
    key.keyword,
		key.type AS 'keyType',
		# 规则
		rule.id AS 'ruleId',
		rule.prefix,
		rule.channel_id AS 'channelId',
		rule.start_time AS 'startTime',
		rule.end_time AS 'endTime',
		rule.is_delete AS 'ruleIsDelete',
		rule.reward_list AS 'rewardList',
		rule.type
	FROM
		gm_key_detail AS key
	JOIN gm_key_rule AS rule ON rule.id = key.rule_id
	LEFT JOIN gm_channels AS channel ON channel.id = rule.channel_id
	WHERE
		key.keyword = code ;
	END//
DELIMITER ;
```
可见BEGIN和END 之间就是常规sql 语句


## 看怎么调用它
用call和你过程名以及一个括号，括号里面根据需要，加入参数，参数包括输入参数、输出参数、输入输出参数。具体的调用方法可以参看上面的例子。
```sql
mysql> call check_cdkey_rule();
ERROR 1318 (42000): Incorrect number of arguments for PROCEDURE db_dk_user.check_cdkey_rule; expected 1, got 0

可以直接将参数传入
mysql> call check_cdkey_rule("UFZ0IG2");
```

有一个需要传入的参数
```js
let checkCdkeySql = 'CALL check_cdkey_rule(?);';
let result = await sqlStringQuery(checkCdkeySql, [cdkey]).catch(err => {
    return reject({ isAllow: false, code: MF.Constant.RESPONSE_STATE.InvalidRequest_CdKeyInvalid, message: 'cdkey not exist' });
  });
```
