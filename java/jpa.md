# JPA

> JPA是Java Persistence API的简称，中文名Java持久层API，是JDK 5.0注解或XML描述对象－关系表的映射关系，并将运行期的实体对象持久化到数据库中。

## 相关配置

jpa: hibernate: ddl-auto: create show-sql: true

会执行以下命令： Hibernate: drop table if exists girl Hibernate: drop table if exists hibernate\_sequence Hibernate: create table girl \(id integer not null, age integer, cup\_size varchar\(255\), primary key \(id\)\) engine=MyISAM Hibernate: create table hibernate\_sequence \(next\_val bigint\) engine=MyISAM Hibernate: insert into hibernate\_sequence values \( 1 \)

jpa: hibernate: ddl-auto: update show-sql: true

应用启动时不会删除之前的数据

