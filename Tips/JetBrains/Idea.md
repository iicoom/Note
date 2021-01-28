## Database 连接
### Host 
jdbc:mysql://rm-8vbk5o.mysql.zhangbei.rds.aliyuncs.com/dev_db?useSSL=true&useUnicode=true&charac

截取：rm-8vbk5o.mysql.zhangbei.rds.aliyuncs.com

### User

### Password

### Database
dev_db

## 指定jdk版本
file - project structure - project - Project SDK
这是在项目结构中-External Libraries中看到JDK已经变为11

## 设置maven settings.xml
file - setting - Build Tools - Maven - 找到下面的文件替换（没有就新建）

- C:\Users\Zhong\.m2\settings.xml
```
<?xml version="1.0" encoding="utf-8"?>  

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"  

    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  

    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">  

    <mirrors>  

        <!-- mirror | Specifies a repository mirror site to use instead of a given   

            repository. The repository that | this mirror serves has an ID that matches   

            the mirrorOf element of this mirror. IDs are used | for inheritance and direct   

            lookup purposes, and must be unique across the set of mirrors. | -->  

        <mirror>  

            <id>nexus-aliyun</id>  

            <mirrorOf>central</mirrorOf>  

            <name>Nexus aliyun</name>  

            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>  

        </mirror>  

        <mirror>  

            <id>net-cn</id>  

            <mirrorOf>central</mirrorOf>  

            <name>Nexus net</name>  

            <url>http://maven.net.cn/content/groups/public/</url>  

        </mirror>  

    </mirrors>  

  

    <profiles>  

        <profile>  

            <repositories>  

                <repository>  

                    <id>nexus</id>  

                    <name>local private nexus</name>  

                    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>  

                    <releases>  

                        <enabled>true</enabled>  

                    </releases>  

                    <snapshots>  

                        <enabled>false</enabled>  

                    </snapshots>  

                </repository>  

            </repositories>  

            <pluginRepositories>  

                <pluginRepository>  

                    <id>nexus</id>  

                    <name>local private nexus</name>  

                    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>  

                    <releases>  

                        <enabled>true</enabled>  

                    </releases>  

                    <snapshots>  

                        <enabled>false</enabled>  

                    </snapshots>  

                </pluginRepository>  

            </pluginRepositories>  

        </profile>  

    </profiles>  

    <!-- -->  

    <activeProfiles>  

        <activeProfile>nexus</activeProfile>  

    </activeProfiles>  

</settings>
```