## brew install elasticsearch

elasticsearch: Java 1.8 is required to install this formula.
JavaRequirement unsatisfied!
You can install with Homebrew Cask:
  brew cask install homebrew/cask-versions/java8
You can download from:
  https://www.oracle.com/technetwork/java/javase/downloads/index.html
Error: An unsatisfied requirement failed this build.

## 需要先安装Java8

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










