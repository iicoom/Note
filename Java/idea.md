## 创建新项目
### spring initializr
### project Metadata
#### group
#### type Maven project
#### packaging （jar，var）

## 应用的启动方式
1. 直接在application运行 会自动编译
2. 命令行切到项目目录下 mvn spring-boot run
3. 项目目录下 mvn install， 然后 java -jar target/编译后的文件名.jar

## 创建新文件(new Java Class)
1. Class
2. Interface
3. Enum
4. Annotation

## 常用效率插件
### mybatis
Plugins => free mybatis plugin 安装

- 生成mapper xml文件
- 快速从代码跳转到mapper及从mapper返回代码
- mybatis自动补全及语法错误提示
- 集成mybatis generator gui界面
- 根据数据库注解，生成swagger model注解

打开idea,打开一个项目,在右侧database视图，新建一个数据库连接
在表名上右键，点击mybatis-generator

1. tabe setting
2. project folder

上面两个不用动
3. model setting: file-


### Lombok
- @Getter and @Setter
- @FieldNameConstants
- @ToString
- @EqualsAndHashCode
- @AllArgsConstructor, @RequiredArgsConstructor and - @NoArgsConstructor
- @Log, @Log4j, @Log4j2, @Slf4j, @XSlf4j, - @CommonsLog, @JBossLog, @Flogger, @CustomLog
- @Data
- @Builder
- @SuperBuilder
- @Singular
- @Delegate
- ...
