# lock

> 在学习多线程时，我们也经常会遇到锁这个东西，那个时候谈的比较多的是乐观锁和悲观锁，那这两种锁和DB中常说的共享锁和独占锁有什么区别呢？先给出我们已知的乐观锁和悲观锁定义

乐观锁：多线程中的CAS就是一种乐观锁，实际上不加锁，先尝试去执行，如果失败则重试（或者根据失败策略进行处理） 悲观锁：上锁，一次只能有一个线程访问，其他的都只能等待

作者：一灰灰 链接：[https://juejin.im/post/5ab5e44a6fb9a028c97a013d](https://juejin.im/post/5ab5e44a6fb9a028c97a013d) 来源：掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 共享锁和排它锁

a. 共享锁 突出在共享这个关键词上，顾名思义，表示这个锁可以多人共享，一般又可以称为读锁\(S锁\) 在DB中，读锁表示所有的读取数据的小伙伴都不会被锁阻塞，可以放心大胆的获取数据，专业一点的说法就是同一时刻，允许多个连接并发的读取同一资源 b. 排它锁 排它，表示当某个人持有这个锁之后，其他的人再来竞争锁就会失败，只能等待锁释放， 又称为写锁\(X锁\) 在DB中，写锁表示同一时刻，只能有一个小伙伴操作，其他的不管是读还是写，都得排队，专业说法是写锁会阻塞其他的读锁或写锁请求，确保同一时刻只能有一个连接可以写入资源，并防止其他连接读取或者写资源

c. gapLock 和 next key lock

next key lock 主要是范围匹配的场景下，会锁某一个范围区间 gapLock 主要用来锁边界

如下面的case（说明，columnA是非唯一索引，RR隔离级别）

where columnA between 10 and 30, next key lock 确保不会在10, 30 之内插入新的数据行 where columnA = 10, gap lock 确保不会再次插入一个columnA=10的行

## 表锁和行锁

对于DB的操作，通常会出现两种情况，一个是锁表，一个锁行

表锁：表示整个表被某一个连接占用了写锁，导致其他连接的读锁或者写锁都会阻塞；影响整个表的读写 行锁：表示表中某些行被某个连接占用了写锁，但是其他行，依然可以被其他的连接请求读锁、写锁；仅影响被锁的那些行数据

那么一个问题就来了，什么sql会导致行锁，什么会导致表锁？甚至我们如何判断一个sql是否会请求锁，请求的是读锁还是写锁呢？

## 如何使用锁

上面一节抛出了问题，那么现在就是来看下如何使用和分析锁了，首先我们是我们最常见的几个sql

select update delete insert

其中很容易得出的结论是 update, delete, insert 三个涉及到写锁；而且这种操作绝大部分的场景是操作具体的某些行（想想为什么?），所以更常见的是行锁

## II. 事务

事务可谓是db中非常重要的一个知识点了，接下来我们的目标就是弄懂什么是事务，怎么使用事务，以及事务与锁之间的关联是怎样的

说明：本文的分析主要是以mysql的innordb存储引擎为标准

1. 定义

   事务就是一组原子性的sql，或者说一个独立的工作单元。

事务就是说，要么mysql引擎会全部执行这一组sql语句，要么全部都不执行（比如其中一条语句失败的话）。

1. ACID特性 a. A:atomiciy 原子性 一个事务必须保证其中的操作要么全部执行，要么全部回滚，不可能存在只执行了一部分这种情况出现。 b. C:consistency一致性 数据必须保证从一种一致性的状态转换为另一种一致性状态。 c. I:isolation 隔离性 在一个事务未执行完毕时，通常会保证其他Session 无法看到这个事务的执行结果 d. D:durability 持久性 事务一旦commit，则数据就会保存下来，即使提交完之后系统崩溃，数据也不会丢失
2. 隔离级别 前面在分析锁的sql时，就提到了隔离级别，通常有四种： RU, RC, RR, Serializable

在说明这个之前，先了解几个概念

```text
-- 设置会话隔离级别
set session transaction ioslation read commited;

-- 查看当前会话隔离级别
select @@tx_isolation;

-- 会话1的操作
start transaction;
select * from newuser where userId=1;


-- 会话2开始操作
start transaction;
select * from newuser where userId=1;
update newuser set updated=1521786092 where userId=1;
select * from newuser where userId=1;
commit;


-- 再次进入会话1，同样执行上次的sql，对比两次输出结果
select * from newuser where userId=1;

-- 注意观察，会话1，前后两次这个sql的输出结果，特别是updated字段
-- 正常情况会如上面的demo图，会发生改变


-- 关闭会话
commit;

-- 再次查询
select * from newuser where userId=1;
```

1. 使用姿势

   前面演示事务隔离级别的时候，给出的实例就演示了事务的使用姿势，一般作为三步骤：

开始事务 start transaction; 执行你的业务sql 提交事务 commit; 我们现在演示以下一个事务中，读锁、写锁对另一个事务的影响

a. 读锁的影响 我们采用mysql默认的RR级别进行测试，userId为主键

```text
-- 会话1
start transaction;
select * from newuser where userId=1 lock in share mode;

-- 转入会话2
start transaction;
select * from newuser where userId=1; -- 会输出
select * from newuser where userId=1 lock in share mode; -- 会输出
update newuser set updated=1521787137 where userId=1; -- 会挂起


-- 转入会话1
-- 提交, 此时观察会话2的写是否完成
commit;

-- 转入会话2
commit;
```

b. 写锁的影响

```text
-- 会话1
start transaction;
select * from newuser where userId=1 for update;

-- 转入会话2
start transaction;
select * from newuser where userId=1; -- 会输出
select * from newuser where userId=1 lock in share mode; -- 会挂住

-- update newuser set updated=1521787137 where userId=1; -- 会挂住

-- 转入会话1
-- 提交, 此时观察会话2的写是否完成
commit;

-- 转入会话2
commit;
```

c. 小结 读锁，会阻塞其他请求写锁的sql执行 写锁，会阻塞其他读锁和写锁的sql执行 事务只有在提交之后，才会释放锁 额外注意，上面事务在提交之后才会释放锁，因此如果两个事务循环依赖锁时，可能发生死锁

III. 小结 锁和事务可谓是db中非常重要的知识点了，在我们实际的编码过程中（一般针对mysql, innordb存储引擎，rr隔离级别），做出下面的一些总结 1. sql分析

select  _from table where xxx; （读快照，一般不加锁） select_  from table where xxx lock in share mode; \(读锁，会阻塞其他的写锁请求，但其他的读锁请求没有影响） select \* from table where xxx for update; \(写锁，会阻塞其他的读写请求） update tableName set xxx \(写锁） insert （写锁） delete （写锁）

