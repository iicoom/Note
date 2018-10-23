## 使用配置文件启动
```
./bin/mongod --config ./conf/mongodb.conf(或./bin/mongod -f ./conf/mongodb.conf)

// mongodb.conf
bind_ip = 192.168.56.3  
port = 28003
logpath = /usr/local/mongodb/log/28003.log
dbpath = /data/db/28003
replSet = imooc
fork = true
```

配置（mongod.conf）参数说明如下。
```
#verbose：日志信息冗余。默认false。提高内部报告标准输出或记录到logpath配置的日志文件中。要启用verbose或启用verbosity 用vvvv参数
verbose = true
#启动verbose冗长信息，它的级别有 vv~vvvvv，v越多级别越高，在日志文件中记录的信息越详细。
vvvv = true
 
#port：端口。默认27017，MongoDB的默认服务TCP端口，监听客户端连接。要是端口设置小于1024，比如1021，则需要root权限启动，不能用mongodb帐号启动
port = 27017
 
#bind_ip：绑定地址。默认127.0.0.1，只能通过本地连接。进程绑定和监听来自这个地址上的应用连接。要是需要给其他服务器连接，则需要注释掉这个或则把IP改成本机地址，可以用一个逗号分隔的列表绑定多个IP地址。
bind_ip = 127.0.0.1
 
#maxConns：最大连接数。默认值：取决于系统（即的ulimit和文件描述符）限制。MongoDB中不会限制其自身的连接。当设置大于系统的限制，则无效，以系统限制为准。这对于客户端创建很多“表”，允许连接超时而不关闭“表”的时候很有用。设置该值的高于连接池和总连接数的大小，以防止尖峰时候的连接。注意：不能设置该值大于20000。
maxConns = 1000
 
#objcheck:强制验证客户端请求。2.4的默认设置为objcheck成为true，在早期版本objcheck默认为false。因为它强制验证客户端请求，确保客户端绝不插入无效文件到数据库中。对于嵌套文档的对象，会有一点性能影响。设置noobjcheck 关闭。
objcheck = true
#noobjcheck = false
 
#logpath：指定日志文件，该文件将保存所有的日志记录、诊断信息。除非另有指定，mongod将所有的日志信息输出到标准输出。如果没有指定logappend，重启则日志会进行覆盖操作。
logpath= /home/mongo/mongodb-2.6.8/logs/mongodb.log
#logappend：写日志的模式：设置为true为追加。默认是覆盖。如果未指定此设置，启动时MongoDB的将覆盖现有的日志文件。
logappend=true
 
#syslog：日志输出都发送到主机的syslog系统，而不是标准输出到logpath指定日志文件。syslog和logpath不能一起用，会报错：
syslog  = true
 
#pidfilepath：进程ID，没有指定则启动时候就没有PID文件。默认缺省。
pidfilepath = /home/mongo/mongodb-2.6.8/data/mongo.pid
 
#keyFile：指定存储身份验证信息的密钥文件的路径。默认缺省。
keyFile = /home/mongo/mongodb-2.6.8/data/keyfile
 
#nounixsocket：套接字文件，默认为false，有生成socket文件。当设置为true时，不会生成socket文件。
nounixsocket = false
 
#unixSocketPrefix：套接字文件路径，默认/tmp
unixSocketPrefix = /home/mongo/mongodb-2.6.8/tmp
 
#fork：是否后台运行，设置为true 启动 进程在后台运行的守护进程模式。默认false。
fork = true
 
#auth：用户认证，默认false。不需要认证。当设置为true时候，进入数据库需要auth验证，当数据库里没有用户，则不需要验证也可以操作。直到创建了第一个用户，之后操作都需要验证。比如：通过db.addUser('sa','sa')在admin库下面创建一个超级用户，只能在在admin库下面先认证完毕了：ab.auth('sa','sa')，才能去别的库操作，不能在其他库验证。这样连接数据库也需要指定库：
#mongo -usa -psa admin     #sa 帐号连接admin
#mongo -uaa -paa test      #aa 帐号连接test
auth = true
 
#noauth：禁止用户认证，默认true
noauth = true
 
#cpu：设置为true会强制mongodb每4s报告cpu利用率和io等待，把日志信息写到标准输出或日志文件。默认为false。
cpu = true
 
#dbpath：数据存放目录。默认：/data/db/
dbpath= /home/mongo/mongodb-2.6.8/data/
 
#diaglog：创建一个非常详细的故障排除和各种错误的诊断日志记录。默认0。设置为1，为在dbpath目录里生成一个diaglog.开头的日志文件，设置不等于0，日志会每分钟flush一次。产生的日志可以用mongosniff来查看，当重新设置成0，会停止写入文件，但mongod还是继续保持打开该文件，即使它不再写入数据文件。如果你想重命名，移动或删除诊断日志，你必须完全关闭mongod实例。
0    off. No logging.       #关闭。没有记录。
#1    Log write operations.  #写操作
#2    Log read operations.   #读操作
#3    Log both read and write operations. #读写操作
#7    Log write and some read operations. #写和一些读操作
 
#directoryperdb：设置为true，修改数据目录存储模式，每个数据库的文件存储在DBPATH指定目录的不同的文件夹中。使用此选项，可以配置的MongoDB将数据存储在不同的磁盘设备上，以提高写入吞吐量或磁盘容量。默认为false。要是在运行一段时间的数据库中，开启该参数，会导致原始的数据都会消失（注释参数则会回来）。因为数据目录都不同了，除非迁移现有的数据文件到directoryperdb产生的数据库目录中，所以需要在规划好之后确定是否要开启。
directoryperdb = ture
 
#journal：日志，（redo log，更多的介绍请看这里和这里）。默认值：（在64位系统）true。默认值：（32位系统）false。
#设置为true，启用操作日志，以确保写入持久性和数据的一致性，会在dbpath目录下创建journal目录。
#设置为false，以防止日志持久性的情况下，并不需要开销。为了减少磁盘上使用的日志的影响，您可以启用nojournal，并设置为true。
#注意：在64位系统上禁用日志必须使用带有nojournal的。
journal = false
 
#nojournal:禁止日志，默认值：（在64位系统）false。默认值：（32位系统）true。
#设置nojournal为true关闭日志，64位，2.0版本后的mongodb默认是启用 journal日志。
nojournal = true
 
#journalCommitInterval：刷写提交机制，默认是30ms或则100ms。较低的值，会更消耗磁盘的性能。此选项接受2和300毫秒之间的值：
#如果单块设备提供日志和数据文件，默认的日记提交时间间隔为100毫秒。
#如果不同的块设备提供的日志和数据文件，默认的日记提交的时间间隔为30毫秒。
journalCommitInterval = 100
 
#ipv6：是否支持ipv6，默认false。
ipv6 = true
 
#jsonp：是否允许JSONP访问通过一个HTTP接口，默认false。
jsonp = true
 
#nohttpinterface：是否禁止http接口，即28017 端口开启的服务。默认false，支持。
nohttpinterface = false
 
#noprealloc：预分配方式。默认false：使用预分配方式来保证写入性能的稳定，预分配在后台进行，并且每个预分配的文件都用0进行填充。这会让MongoDB始终保持额外的空间和空余的数据文件，从而避免了数据增长过快而带来的分配磁盘空间引起的阻塞。设置noprealloc= true来禁用预分配的数据文件，会缩短启动时间，但在正常操作过程中，可能会导致性能显著下降。
noprealloc = false
 
#noscripting：是否禁止脚本引擎。默认是false：不禁止。ture：禁止,要是设置成true：运行一些脚本的时候会出现："server-side JavaScript execution is disabled" 
noscripting = true 
 
#notablescan：是否禁止表扫描操作。默认false：不禁止，ture：禁止,禁止要是执行表扫描会出现："table scans not allowed"
notablescan = true
 
#nssize:命名空间的文件（即NS）的默认大小，默认16M，最大2G。所有新创建的默认大小命名空间的文件（即NS）。此选项不会影响现有的命名空间的文件的大小。默认值是16M字节，最大大小为2 GB。让小数据库不让浪费太多的磁盘空间，同时让大数据在磁盘上有连续的空间。
nssize  = 16
 
#profile：数据库分析等级设置。记录一些操作性能到标准输出或则指定的logpath的日志文件中，默认0:关闭。
#0 关。无分析。
#1 开。仅包括慢操作。
#2 开。包括所有操作。
#控制 Profiling  的开关和级别：2种,第一种是直接在启动参数里直接进行设置或则启动MongoDB时加上–profile=级别，其信息保存在 生成的system.profile 中。第二种是在客户端用db.setProfilingLevel(级别)命令来实时配置，其信息保存在 生成的system.profile 中。默认情况下，mongod的禁用分析。数据库分析可以影响数据库的性能，因为分析器必须记录和处理所有的数据库操作。所以在需要的时候用动态修改就可以了。
profile = 2
 
#slowms：记录profile分析的慢查询的时间，默认是100毫秒。具体同上。
slowms  = 200
 
#quota：配额，默认false。是否开启配置每个数据库的最多文件数的限制。当为true则用quotaFiles来配置最多文件的数量。
quota = true
#quotaFiles：配额数量。每个数据库的数据文件数量的限制。此选项需要quota为true。默认为8。
quotaFiles = 8
 
#rest： 默认false，设置为true，使一个简单的 REST API。设置为true，开启后，在MongoDB默认会开启一个HTTP协议的端口提供REST的服务（nohttpinterface=false），这个端口是你Server端口加上1000，即28017，默认的HTTP端口是数据库状态页面，（开启后，web页面的Commands行中的命令都可以点进去）。mongodb自带的REST，不支持增、删、改，同时也不支持 权限认证。
rest = true
 
#repair：修复数据库操作，默认是false。设置为true时，启动后修复所有数据库，设置这个选项最好在命令行上，而不是在配置文件或控制脚本。启动时修复，需要关闭journal.并且启动时,用控制文件指定参数和配置文件里指定参数的方式进行修复之后，（修复信息见log），需要再禁用repair参数才能启用mongodb。注意：mongod修复时，需要重写所有的数据库文件。如果在同一个帐号下不能运行修复，则需要运行chown修改数据库文件的权限。
repair = true
 
#repairpath：修复路径，默认是在dbpath路径下的_tmp 目录。
repairpath = _tmp
 
#smallfiles：是否使用较小的默认文件。默认为false，不使用。设置为true，使用较小的默认数据文件大小。smallfiles减少数据文件的初始大小，并限制他们到512M，也减少了日志文件的大小，并限制他们到128M。如果数据库很大，各持有少量的数据，会导致mongodb创建很多文件，会影响性能。
smallfiles = true
 
#syncdelay：刷写数据到日志的频率，通过fsync操作数据。默认60秒。默认就可以，不需要设置。不会对日志文件（journal files）有影响。警告：如果设置为0，SYNCDELAY 不会同步到磁盘的内存映射文件。在生产系统上，不要设置这个值。
syncdelay = 60
 
#sysinfo：系统信息，默认false。设置为true，mongod会诊断系统有关的页面大小，数量的物理页面，可用物理??页面的数量输出到标准输出。当开启sysinfo参数的时候，只会打印上面的信息，不会启动mongodb的程序。所以要关闭该参数，才能开启mongodb。
sysinfo = false
 
#upgrade:升级。默认为false。当设置为true，指定DBPATH，升级磁盘上的数据格式的文件到最新版本。会影响数据库操作，更新元数据。大部分情况下，不需要设置该值。
upgrade = false
 
#traceExceptions：是否使用内部诊断。默认false。
traceExceptions = false
 
#quiet：安静模式。
quiet = true
 
#setParameter：2.4的新参数，指定启动选项配置。想设置多个选项则用一个setParameter选项指定.格式：setParameter = <parameter>=<value>,如配置文件里设置syncdelay：
setParameter = syncdelay= 55,notablescan = true,journalCommitInterval = 50,traceExceptions = true
 
```

## centos 服务器mongodb远程连接被拒绝
各种百度，远程连接mongodb失败，网上资料显示原因有两个：

1、mongodb的配置文件中的bind_ip 默认为127.0.0.1，默认只有本机可以连接。  此时，需要将bind_ip配置为0.0.0.0，表示接受任何IP的连接。

2、防火墙阻止了27017端口。

于是，先修改mongodb配置文件，并重启mongod服务。

* Start MongoDB
```
sudo service mongod start
```

* Stop MongoDB
```
sudo service mongod stop
```

* Restart MongoDB
```
sudo service mongod restart
```

* Begin using MongoDB.
Start a mongo shell on the same host machine as the mongod. Use the --host command line option to specify the localhost address (in this case 127.0.0.1) and port that the mongod listens on:
```
mongo --host 127.0.0.1:27017
```


