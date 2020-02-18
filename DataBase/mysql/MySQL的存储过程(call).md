> [有了 MySQL 存储过程，业务逻辑可以封装存储过程中，这样不仅容易维护，而且执行效率也高](https://www.cnblogs.com/you-zi/p/5519006.html)

## 查询当前数据库有哪些存储过程
```sql
show procedure status where Db='db_dk_user';
```

## 创建一个带参数的存储过程
https://www.runoob.com/w3cnote/mysql-stored-procedure.html

## 看怎么调用它
```js
let checkCdkeySql = 'CALL check_cdkey_rule(?);';
let result = await sqlStringQuery(checkCdkeySql, [cdkey]).catch(err => {
    return reject({ isAllow: false, code: MF.Constant.RESPONSE_STATE.InvalidRequest_CdKeyInvalid, message: 'cdkey not exist' });
  });
```
