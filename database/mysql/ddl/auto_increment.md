# AUTO\_INCREMENT

如果设置了自增主键，则从1开始，步长为1。但是有时候，比如我们创建员工编号或者学生证号的时候，希望能够从某个起始值开始自增。

建表时设置自增起始值

```text
CREATE TABLE student_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sex TINYINT NOT NULL,
    name VARCHAR(10) NOT NULL
    )ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=20110000;
```

建表后设置自增起始值

```text
CREATE TABLE student_info(
    id INT PRIMARY KEY AUTO_INCREMENT,
    sex TINYINT NOT NULL,
    name VARCHAR(10) NOT NULL
    )ENGINE=MyISAM DEFAULT CHARSET=utf8; 

ALTER TABLE student_info SET AUTO_INCREMENT=20110000;
```

