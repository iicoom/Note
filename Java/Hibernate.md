> Hibernate 是一个高性能的对象关系型持久化存储和查询的服务，其遵循开源的 GNU Lesser General Public License (LGPL) 而且可以免费下载。Hibernate 不仅关注于从 Java 类到数据库表的映射，也有 Java 数据类型到 SQL 数据类型的映射，另外也提供了数据查询和检索服务。

[Hibernate 教程](https://www.w3cschool.cn/hibernate/1yok1ie1.html)

### Hibernate ORM
什么是 JDBC？
JDBC 代表 Java Database Connectivity ，它是提供了一组 Java API 来访问关系数据库的 Java 程序。这些 Java APIs 可以使 Java 应用程序执行 SQL 语句，能够与任何符合 SQL 规范的数据库进行交互。


JDBC 的优点			JDBC 的缺点
干净整洁的 SQL 处理	大项目中使用很复杂
大数据下有良好的性能	很大的编程成本
对于小应用非常好		没有封装
易学的简易语法			难以实现 MVC 的概念
 					查询需要指定 DBMS

### 为什么是对象关系映射（ORM）？
当我们工作在一个面向对象的系统中时，存在一个对象模型和关系数据库不匹配的问题。RDBMSs 用表格的形式存储数据，然而像 Java 或者 C# 这样的面向对象的语言它表示一个对象关联图。考虑下面的带有构造方法和公有方法的 Java 类：

RDBMS即关系数据库管理系统(Relational Database Management System)，是将数据组织为相关的行和列的系统，而管理关系数据库的计算机软件就是关系数据库管理系统，常用的数据库软件有Oracle、SQL Server等。

```
public class Employee {
   private int id;
   private String first_name; 
   private String last_name;   
   private int salary;  

   public Employee() {}
   public Employee(String fname, String lname, int salary) {
      this.first_name = fname;
      this.last_name = lname;
      this.salary = salary;
   }
   public int getId() {
      return id;
   }
   public String getFirstName() {
      return first_name;
   }
   public String getLastName() {
      return last_name;
   }
   public int getSalary() {
      return salary;
   }
}
```
现考虑以上的对象需要被存储和索引进下面的 RDBMS 表格中：
```
create table EMPLOYEE (
   id INT NOT NULL auto_increment,
   first_name VARCHAR(20) default NULL,
   last_name  VARCHAR(20) default NULL,
   salary     INT  default NULL,
   PRIMARY KEY (id)
);
```

Object-Relational Mapping (ORM) 是解决以上所有不匹配问题的方案。


