## Elas for Mac
### brew install elasticsearch

elasticsearch: Java 1.8 is required to install this formula.
JavaRequirement unsatisfied!
You can install with Homebrew Cask:
  brew cask install homebrew/cask-versions/java8
You can download from:
  https://www.oracle.com/technetwork/java/javase/downloads/index.html
Error: An unsatisfied requirement failed this build.

### 需要先安装Java8
也可以到官网下载Mac的压缩包解压，bin下执行启动服务

## for CentOS
[官网下载地址](https://www.elastic.co/downloads/elasticsearch)

[下载、解压、运行](https://cloud.tencent.com/developer/article/1358601)

### 异常
Caused by: java.lang.RuntimeException: can not run elasticsearch as root

创建新用户
```
adduser es

passwd es

chown -R es:es elasticsearch-6.3.2/

chmod 770 elasticsearch-6.3.2/

切换用户
su es

启动es
bin/elasticsearch

还必须是su登录的窗口一直打开
```

在浏览器访问http://118.24.242.170:9200/拒绝访问（118.24.242.170为服务器ip）

使用root用户，打开elasticsearch.yml文件，如下：

vi /usr/local/tool/elasticsearch/elasticsearch-5.4.2/config/elasticsearch.yml

要正常保存数据同样需要允许跨域
```
http.cors.enabled: true

http.cors.allow-origin: "*"
```

### Linux启动elastic进程
https://www.elastic.co/guide/en/elasticsearch/reference/current/starting-elasticsearch.html

To run Elasticsearch as a daemon, specify -d on the command line, and record the process ID in a file using the -p option:
```
./bin/elasticsearch -d -p pid
```

To shut down Elasticsearch, kill the process ID recorded in the pid file:
```
pkill -F pid
```


## 运行
https://www.elastic.co/guide/en/elasticsearch/reference/current/targz.html

```
./bin/elasticsearch
```

You can test that your Elasticsearch node is running by sending an HTTP request to port 9200 on localhost:
```
{
	name: "guitardeMBP.lan",
	cluster_name: "elasticsearch",
	cluster_uuid: "9XwKzPAERxeMya83hmX-SQ",
	version: {
		number: "7.0.0",
		build_flavor: "default",
		build_type: "tar",
		build_hash: "b7e28a7",
		build_date: "2019-04-05T22:55:32.697037Z",
		build_snapshot: false,
		lucene_version: "8.0.0",
		minimum_wire_compatibility_version: "6.7.0",
		minimum_index_compatibility_version: "6.0.0-beta1"
	},
	tagline: "You Know, for Search"
}
```

## elasticsearch-head的使用
https://github.com/mobz/elasticsearch-head

https://www.cnblogs.com/xuwenjin/p/8792919.html

### 未连接
elasticsearch-head中cluster health: not connected
https://stackoverflow.com/questions/47150493/elasticsearch-head-cluster-health-not-connected

修改elasticsearch安装目录中 config/elasticsearch.yml
```
http.cors.enabled: true

http.cors.allow-origin: "*"
```










